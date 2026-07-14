"use client";

import { Control, FieldPath, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;

  options: Option[];

  placeholder?: string;

  disabled?: boolean;

  required?: boolean;
}

export function FormSelect<T extends FieldValues>({
  control,
  name,
  label,
  options,
  placeholder = "Pilih data",
  disabled,
  required,
}: FormSelectProps<T>) {
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

          <Select
            value={field.value?.toString() ?? ""}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value.toString()}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
