"use client";

import Link from "next/link";
import {
  AlertCircleIcon,
  ArrowLeftIcon,
  BriefcaseBusinessIcon,
  DownloadIcon,
  Edit3Icon,
  FileIcon,
  HashIcon,
  IdCardIcon,
  Loader2Icon,
  MailIcon,
  PhoneIcon,
  SparklesIcon,
  type LucideIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { EMPLOYEE_MODULES, type EmployeeModule } from "@/constants/employee";
import { getEmployeeFormSections } from "@/constants/employee-form";
import {
  type EmployeeArrayFieldName,
  type EmployeeFormField,
  type EmployeeFormOption,
  type EmployeeFormSection,
} from "@/types/employee-form";
import { useEmployeeLookup } from "@/hooks/use-employee-lookup";
import { detailEmployee } from "@/services/employee.service";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

interface DetailPegawaiProps {
  id: string;
  type: EmployeeModule;
}

type EmployeeDetail = Record<string, unknown>;

const emptyLookups = {
  employmentTypes: [] as EmployeeFormOption[],
  positions: [] as EmployeeFormOption[],
  grades: [] as EmployeeFormOption[],
  institutions: [] as EmployeeFormOption[],
};

const repeatableAliases: Record<EmployeeArrayFieldName, string[]> = {
  assessments: ["assessments", "employee_assessments", "assessment_results"],
  competencies: ["competencies", "employee_competencies", "competency_results"],
  educations: ["educations", "employee_educations", "education_histories"],
  families: ["families", "employee_families", "family_members"],
  leaves: ["leaves", "employee_leaves", "leave_histories"],
  notes: ["notes", "employee_notes"],
  talents: ["talents", "employee_talents", "talent_results"],
};

const fieldAliases: Record<string, string[]> = {
  echelon_id: ["echelon_name", "echelon", "echelon_id"],
  employee_id_number: ["employee_id_number", "nip"],
  employee_registration_number: ["employee_registration_number", "nrp"],
  employment_type_id: [
    "employment_type_name",
    "employment_type",
    "employment_type_id",
  ],
  grade_id: ["grade_name", "grade", "grade_id"],
  institution_id: ["institution_name", "institution", "institution_id"],
  position_id: ["position_name", "position_merged", "position_id"],
  residence_id: ["residence_name", "residence", "residence_id"],
};

export function DetailPegawai({ id, type }: DetailPegawaiProps) {
  const config = EMPLOYEE_MODULES[type];
  const lookup = useEmployeeLookup();

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["employees", id],
    queryFn: () => detailEmployee(id),
  });

  const employee = unwrapEmployeeDetail(data);
  const sections = getEmployeeFormSections(
    type,
    lookup.loading ? emptyLookups : lookup,
  );

  if (isLoading) {
    return <DetailPegawaiSkeleton />;
  }

  if (error || !employee) {
    return (
      <Card className="rounded-lg border-destructive/30 bg-destructive/5 shadow-none">
        <CardHeader className="gap-3">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive ring-1 ring-destructive/20">
              <AlertCircleIcon className="size-5" />
            </div>

            <div className="space-y-1">
              <CardTitle>Detail pegawai tidak dapat dimuat</CardTitle>
              <CardDescription>
                Terjadi kesalahan saat mengambil data pegawai. Silakan coba
                kembali beberapa saat lagi.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    );
  }

  const name = displayText(pickValue(employee, ["name"])) || "Pegawai";
  const status = resolveFieldDisplay(
    employee,
    fieldByName(sections, "employment_status"),
  );
  const position = resolveFieldDisplay(
    employee,
    fieldByName(sections, "position_id"),
  );
  const grade = resolveFieldDisplay(
    employee,
    fieldByName(sections, "grade_id"),
  );
  const employmentType = resolveFieldDisplay(
    employee,
    fieldByName(sections, "employment_type_id"),
  );
  const photoProfile = assetUrl(pickValue(employee, ["photo_profile"]));

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="border-b bg-[linear-gradient(120deg,#f8fafc,#ecfeff,#fff7ed)] p-5 sm:p-6 dark:bg-none">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center">
              <Avatar className="size-20 ring-4 ring-white/80">
                {photoProfile && <AvatarImage src={photoProfile} alt={name} />}
                <AvatarFallback className="text-xl font-semibold">
                  {initials(name)}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0 space-y-3">
                <Badge
                  variant="outline"
                  className="border-teal-200 bg-white/70 text-teal-700"
                >
                  <SparklesIcon className="mr-1 size-4" />
                  Detail Pegawai
                </Badge>

                <div className="space-y-1">
                  <h1 className="truncate text-2xl font-semibold tracking-tight sm:text-3xl">
                    {formatEmployeeName(employee, name)}
                  </h1>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {compactJoin([position, grade, employmentType], " - ") ||
                      `Informasi lengkap pegawai ${config.title}.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {isFetching && (
                <Badge variant="secondary">
                  <Loader2Icon className="mr-1 size-3 animate-spin" />
                  Memuat ulang
                </Badge>
              )}

              {status && (
                <Badge className="bg-teal-600 text-white hover:bg-teal-600">
                  {status}
                </Badge>
              )}

              <Badge variant="secondary">
                <BriefcaseBusinessIcon className="mr-1 size-3" />
                {config.title}
              </Badge>

              <Button
                nativeButton={false}
                variant="outline"
                size="sm"
                render={
                  <Link href={`/dashboard/data-pegawai/${type}`}>
                    <ArrowLeftIcon className="mr-1.5 size-4" />
                    Kembali
                  </Link>
                }
              />

              <Button
                nativeButton={false}
                size="sm"
                render={
                  <Link href={`/dashboard/data-pegawai/edit/${id}`}>
                    <Edit3Icon className="mr-1.5 size-4" />
                    Edit
                  </Link>
                }
              />
            </div>
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-4">
          <QuickFact
            icon={HashIcon}
            label="NIP / NRP"
            value={compactJoin([
              displayText(pickValue(employee, ["employee_id_number", "nip"])),
              displayText(
                pickValue(employee, ["employee_registration_number", "nrp"]),
              ),
            ])}
          />
          <QuickFact icon={IdCardIcon} label="Jabatan" value={position} />
          <QuickFact
            icon={MailIcon}
            label="Email"
            value={displayText(pickValue(employee, ["email", "office_email"]))}
          />
          <QuickFact
            icon={PhoneIcon}
            label="No. HP"
            value={displayText(pickValue(employee, ["mobile_phone", "phone"]))}
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <Card className="h-fit rounded-lg bg-muted/30 shadow-none lg:sticky lg:top-6">
          <CardHeader>
            <CardTitle className="text-sm">Navigasi Section</CardTitle>
            <CardDescription>
              {sections.length} section data {config.title}.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <nav className="grid gap-1">
              {sections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-all hover:bg-background hover:text-foreground hover:shadow-sm"
                >
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-lg ring-1",
                      section.accent,
                    )}
                  >
                    <section.icon className="size-4" />
                  </span>

                  <span className="min-w-0 flex-1 truncate">
                    {section.title}
                  </span>

                  <span className="text-xs tabular-nums text-muted-foreground">
                    {sectionCountLabel(employee, section)}
                  </span>
                </Link>
              ))}
            </nav>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <EmployeeDetailSectionCard
              key={section.id}
              employee={employee}
              section={section}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function EmployeeDetailSectionCard({
  employee,
  section,
  index,
}: {
  employee: EmployeeDetail;
  section: EmployeeFormSection;
  index: number;
}) {
  const Icon = section.icon;
  const items = section.repeatable
    ? getRepeatableItems(employee, section.repeatable.name)
    : [];

  return (
    <Card id={section.id} className="scroll-mt-6 rounded-lg shadow-none">
      <CardHeader className="gap-3 border-b">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-3">
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-lg ring-1",
                section.accent,
              )}
            >
              <Icon className="size-5" />
            </div>

            <div className="min-w-0 space-y-1">
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </div>
          </div>

          <CardAction className="static col-auto row-auto justify-self-auto">
            <Badge variant="outline" className="bg-background">
              {String(index + 1).padStart(2, "0")}
            </Badge>
          </CardAction>
        </div>
      </CardHeader>

      <CardContent className="space-y-5">
        {section.repeatable ? (
          items.length > 0 ? (
            items.map((item, itemIndex) => (
              <div key={itemIndex} className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">Data {itemIndex + 1}</Badge>
                  <Separator className="flex-1" />
                </div>

                <DetailFieldGrid fields={section.fields} record={item} />
              </div>
            ))
          ) : (
            <EmptySectionState title={section.title} />
          )
        ) : (
          <DetailFieldGrid fields={section.fields} record={employee} />
        )}
      </CardContent>
    </Card>
  );
}

function DetailFieldGrid({
  fields,
  record,
}: {
  fields: EmployeeFormField[];
  record: EmployeeDetail;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {fields.map((field) => (
        <DetailField key={field.name} field={field} record={record} />
      ))}
    </div>
  );
}

function DetailField({
  field,
  record,
}: {
  field: EmployeeFormField;
  record: EmployeeDetail;
}) {
  const value = resolveFieldDisplay(record, field);

  return (
    <div
      className={cn(
        "min-w-0 rounded-lg border bg-muted/20 p-3",
        field.wide && "md:col-span-2 xl:col-span-3",
      )}
    >
      <div className="mb-1 flex items-center gap-2">
        <span className="truncate text-xs font-medium uppercase text-muted-foreground">
          {field.label}
        </span>
        {field.required && (
          <span className="size-1.5 rounded-full bg-teal-500" />
        )}
      </div>

      {field.type === "file" ? (
        <FileValue value={pickFileValue(record, field.name)} />
      ) : (
        <p className="break-words text-sm font-medium leading-6">
          {value || "-"}
        </p>
      )}
    </div>
  );
}

function FileValue({ value }: { value: unknown }) {
  const url = assetUrl(value);

  if (!url) {
    return <p className="text-sm font-medium text-muted-foreground">-</p>;
  }

  return (
    <Button
      nativeButton={false}
      variant="outline"
      size="sm"
      render={
        <a href={url} target="_blank" rel="noreferrer">
          <FileIcon className="mr-1.5 size-4" />
          Lihat file
          <DownloadIcon className="ml-1.5 size-3.5" />
        </a>
      }
    />
  );
}

function QuickFact({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value?: string;
}) {
  return (
    <div className="border-b p-4 md:border-r md:border-b-0 md:last:border-r-0">
      <div className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <Icon className="size-4" />
        </div>

        <div className="min-w-0 space-y-1">
          <p className="text-xs font-medium uppercase text-muted-foreground">
            {label}
          </p>
          <p className="truncate text-sm font-semibold">{value || "-"}</p>
        </div>
      </div>
    </div>
  );
}

function EmptySectionState({ title }: { title: string }) {
  return (
    <div className="rounded-lg border border-dashed bg-muted/20 p-6 text-center">
      <p className="text-sm font-medium">
        Belum ada data {title.toLowerCase()}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Data terkait section ini belum tersedia.
      </p>
    </div>
  );
}

function DetailPegawaiSkeleton() {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-xl border bg-card">
        <div className="border-b p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Skeleton className="size-20 rounded-full" />
            <div className="space-y-3">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-8 w-72 max-w-full" />
              <Skeleton className="h-4 w-96 max-w-full" />
            </div>
          </div>
        </div>
        <div className="grid gap-0 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="border-b p-4 md:border-r md:border-b-0">
              <Skeleton className="h-12 w-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <Skeleton className="h-72 rounded-lg" />
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-72 rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

function unwrapEmployeeDetail(value: unknown): EmployeeDetail | null {
  if (!isRecord(value)) return null;

  const data = value.data;
  if (isRecord(data)) return data;

  return value;
}

function getRepeatableItems(
  employee: EmployeeDetail,
  name: EmployeeArrayFieldName,
): EmployeeDetail[] {
  const aliases = repeatableAliases[name] ?? [name];

  for (const alias of aliases) {
    const value = employee[alias];

    if (Array.isArray(value)) {
      return value.filter(isRecord);
    }
  }

  return [];
}

function sectionCountLabel(
  employee: EmployeeDetail,
  section: EmployeeFormSection,
) {
  if (section.repeatable) {
    return String(getRepeatableItems(employee, section.repeatable.name).length);
  }

  const filled = section.fields.filter((field) =>
    hasDisplayValue(
      field.type === "file"
        ? pickFileValue(employee, field.name)
        : resolveRawFieldValue(employee, field.name),
    ),
  ).length;

  return `${filled}/${section.fields.length}`;
}

function resolveFieldDisplay(
  record: EmployeeDetail,
  field?: EmployeeFormField,
) {
  if (!field) return "";

  const raw = resolveRawFieldValue(record, field.name);

  if (field.type === "date") return formatDate(raw);
  if (field.type === "select") return formatSelectValue(raw, field.options);

  return displayText(raw);
}

function resolveRawFieldValue(record: EmployeeDetail, name: string) {
  const aliases = fieldAliases[name];
  return pickValue(record, aliases ?? [name]);
}

function pickFileValue(record: EmployeeDetail, name: string) {
  return pickValue(record, [
    name,
    `${name}_url`,
    `${name}_path`,
    `${name}_file`,
  ]);
}

function pickValue(record: EmployeeDetail, keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (hasDisplayValue(value)) return value;
  }

  return undefined;
}

function fieldByName(sections: EmployeeFormSection[], name: string) {
  for (const section of sections) {
    const field = section.fields.find((item) => item.name === name);
    if (field) return field;
  }

  return undefined;
}

function formatEmployeeName(employee: EmployeeDetail, fallback: string) {
  return compactJoin(
    [
      displayText(employee.title_prefix),
      fallback,
      displayText(employee.title_suffix),
    ],
    " ",
  );
}

function formatSelectValue(value: unknown, options: EmployeeFormOption[] = []) {
  if (!hasDisplayValue(value)) return "";

  if (isRecord(value)) {
    return compactJoin(
      [
        displayText(value.name ?? value.label ?? value.title),
        displayText(value.code),
      ],
      " ",
    );
  }

  const option = options.find((item) => String(item.value) === String(value));
  return option?.label ?? displayText(value);
}

function formatDate(value: unknown) {
  const text = displayText(value);
  if (!text) return "";

  const dayFirstDate = text.match(/^(\d{2})-(\d{2})-(\d{4})$/);
  const date = dayFirstDate
    ? new Date(
        Number(dayFirstDate[3]),
        Number(dayFirstDate[2]) - 1,
        Number(dayFirstDate[1]),
      )
    : new Date(text);

  if (Number.isNaN(date.getTime())) return text;

  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function assetUrl(value: unknown) {
  if (isRecord(value)) {
    return assetUrl(pickValue(value, ["url", "path", "file", "src", "href"]));
  }

  const text = displayText(value);
  if (!text) return "";

  if (/^(https?:)?\/\//.test(text) || text.startsWith("data:")) return text;

  if (text.startsWith("/")) return text;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  return baseUrl ? `${baseUrl}/${text.replace(/^\//, "")}` : text;
}

function displayText(value: unknown): string {
  if (!hasDisplayValue(value)) return "";

  if (value instanceof Date) return formatDate(value.toISOString());

  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (isRecord(value)) {
    return compactJoin(
      [
        displayText(value.name ?? value.label ?? value.title),
        displayText(value.code),
      ],
      " ",
    );
  }

  return "";
}

function compactJoin(values: Array<string | undefined>, separator = " / ") {
  return values.filter(Boolean).join(separator);
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0]?.toUpperCase()).join("") || "PG";
}

function hasDisplayValue(value: unknown) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;

  return true;
}

function isRecord(value: unknown): value is EmployeeDetail {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
