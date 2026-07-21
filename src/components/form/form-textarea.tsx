"use client";

import { Controller, useFormContext } from "react-hook-form";

import { EmployeeFormValues } from "@/schemas/employee-form.schema";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

interface FormTextareaProps {
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
}

export function FormTextarea({
  name,
  label,
  className,
  placeholder,
  rows = 4,
  disabled,
  required,
}: FormTextareaProps) {
  const form = useFormContext<EmployeeFormValues>();

  return (
    <Controller
      control={form.control}
      name={name as never}
      render={({ field, fieldState }) => (
        <Field className={className} data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={name}>
            <span>{label}</span>
            {required && <span className="text-destructive">*</span>}
          </FieldLabel>
          <Textarea
            {...field}
            id={name}
            value={field.value ?? ""}
            placeholder={placeholder}
            rows={rows}
            disabled={disabled}
            className="bg-background/80"
          />
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
