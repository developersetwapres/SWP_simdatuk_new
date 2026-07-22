"use client";

import { Controller, useFormContext } from "react-hook-form";

import { EmployeeFormValues } from "@/schemas/employee-form.schema";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface FormUploadProps {
  name: string;
  label: string;
  className?: string;
  accept?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
}

export function FormUpload({
  name,
  label,
  className,
  accept,
  description,
  disabled,
  required,
}: FormUploadProps) {
  const form = useFormContext<EmployeeFormValues>();

  return (
    <Controller
      control={form.control}
      name={name as never}
      render={({ field: { onChange, ref }, fieldState }) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>
            <span>{label}</span>
            {required && <span className="text-destructive">*</span>}
          </FieldLabel>
          <Input
            ref={ref}
            id={name}
            type="file"
            accept={accept}
            disabled={disabled}
            onChange={(event) => onChange(event.target.files?.[0])}
            className={cn("h-10 bg-background/80 pt-2")}
          />
          {description && <FieldDescription>{description}</FieldDescription>}
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
