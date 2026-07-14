"use client";

import { Controller, useFormContext } from "react-hook-form";

import { EmployeeFormValues } from "@/schemas/employee-form.schema";
import { cn } from "@/lib/utils";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  name: string;
  label: string;
  className?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  disabled?: boolean;
  required?: boolean;
}

export function FormInput({
  name,
  label,
  className,
  placeholder,
  type = "text",
  disabled,
  required,
}: FormInputProps) {
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
          <Input
            {...field}
            id={name}
            value={field.value ?? ""}
            type={type}
            min={type === "number" ? 0 : undefined}
            placeholder={placeholder}
            disabled={disabled}
            className={cn("bg-background/80")}
          />
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
