"use client";

import { PlusIcon, Trash2Icon } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";

import {
  type EmployeeArrayFieldName,
  type EmployeeFormField,
  type EmployeeFormSection,
} from "@/types/employee-form";
import { EmployeeFormValues } from "@/schemas/employee-form.schema";
import {
  emptyAssessment,
  emptyCompetency,
  emptyEducation,
  emptyFamily,
  emptyLeave,
  emptyNote,
  emptyTalent,
} from "@/hooks/use-employee-form";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { FormDate } from "./components/form-date";
import { FormInput } from "./components/form-input";
import { FormSelect } from "./components/form-select";
import { FormTextarea } from "./components/form-textarea";
import { FormUpload } from "./components/form-upload";

interface EmployeeFormSectionCardProps {
  section: EmployeeFormSection;
  index: number;
}

const emptyRepeatableValue: Record<
  EmployeeArrayFieldName,
  Record<string, unknown>
> = {
  assessments: emptyAssessment,
  competencies: emptyCompetency,
  educations: emptyEducation,
  families: emptyFamily,
  leaves: emptyLeave,
  notes: emptyNote,
  talents: emptyTalent,
};

export function EmployeeFormSectionCard({
  section,
  index,
}: EmployeeFormSectionCardProps) {
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
              <section.icon className="size-5" />
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

      <CardContent className="space-y-6">
        {section.repeatable ? (
          <RepeatableSectionFields section={section} />
        ) : (
          <FieldGrid fields={section.fields} />
        )}
      </CardContent>
    </Card>
  );
}

function RepeatableSectionFields({
  section,
}: {
  section: EmployeeFormSection;
}) {
  const form = useFormContext<EmployeeFormValues>();
  const repeatable = section.repeatable;
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: repeatable?.name ?? "educations",
  });

  if (!repeatable) return null;

  return (
    <div className="space-y-6">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4 rounded-lg border p-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Data {index + 1}</Badge>
            <Separator className="flex-1" />
            {fields.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => remove(index)}
                aria-label={`Hapus data ${section.title} ${index + 1}`}
              >
                <Trash2Icon className="size-4 text-destructive" />
              </Button>
            )}
          </div>

          <FieldGrid
            fields={section.fields}
            namePrefix={`${repeatable.name}.${index}`}
          />
        </div>
      ))}

      <Button
        type="button"
        variant="outline"
        onClick={() => append(emptyRepeatableValue[repeatable.name])}
        className="border-dashed"
      >
        <PlusIcon data-icon="inline-start" />
        {repeatable.addLabel}
      </Button>
    </div>
  );
}

function FieldGrid({
  fields,
  namePrefix,
}: {
  fields: EmployeeFormField[];
  namePrefix?: string;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {fields.map((field) => (
        <FormConfigField
          key={`${namePrefix ?? "root"}.${field.name}`}
          field={field}
          name={namePrefix ? `${namePrefix}.${field.name}` : field.name}
        />
      ))}
    </div>
  );
}

function FormConfigField({
  field,
  name,
}: {
  field: EmployeeFormField;
  name: string;
}) {
  const className = cn(field.wide && "md:col-span-2 xl:col-span-3");

  if (field.type === "select") {
    return (
      <FormSelect
        name={name}
        label={field.label}
        options={field.options ?? []}
        placeholder={field.placeholder}
        required={field.required}
        className={className}
      />
    );
  }

  if (field.type === "textarea") {
    return (
      <FormTextarea
        name={name}
        label={field.label}
        placeholder={field.placeholder}
        required={field.required}
        className={className}
      />
    );
  }

  if (field.type === "file") {
    return (
      <FormUpload
        name={name}
        label={field.label}
        accept={field.accept}
        description={field.description}
        required={field.required}
        className={className}
      />
    );
  }

  if (field.type === "date") {
    return (
      <FormDate
        name={name}
        label={field.label}
        required={field.required}
        className={className}
      />
    );
  }

  return (
    <FormInput
      name={name}
      label={field.label}
      placeholder={field.placeholder}
      type={field.type === "phone" ? "tel" : field.type}
      required={field.required}
      className={className}
    />
  );
}
