"use client";

import { Controller, useFormContext } from "react-hook-form";

import { EmployeeFormValues } from "@/schemas/employee-form.schema";
import { type EmployeeFormOption } from "@/types/employee-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormSelectProps {
  name: string;
  label: string;
  options: EmployeeFormOption[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export function FormSelect({
  name,
  label,
  options,
  className,
  placeholder,
  disabled,
  required,
}: FormSelectProps) {
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
          <Select
            value={field.value === undefined ? "" : String(field.value)}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <SelectTrigger
              id={name}
              className="h-10 py-4.5 w-full bg-background/80 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
            >
              <SelectValue placeholder={placeholder ?? `Pilih ${label}`} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={String(option.value)}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FieldError errors={[fieldState.error]} />
        </Field>
      )}
    />
  );
}
