"use client";

import { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

interface FormDateProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;

  placeholder?: string;

  disabled?: boolean;

  required?: boolean;

  min?: string;

  max?: string;
}

export function FormDate<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  disabled,
  required,
  min,
  max,
}: FormDateProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}

            {required && <span className="ml-1 text-destructive">*</span>}
          </FormLabel>

          <FormControl>
            <Input
              {...field}
              value={field.value ?? ""}
              type="date"
              placeholder={placeholder}
              disabled={disabled}
              min={min}
              max={max}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
