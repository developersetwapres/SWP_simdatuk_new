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

interface FormUploadProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;

  label: string;

  accept?: string;

  disabled?: boolean;

  required?: boolean;
}

export function FormUpload<T extends FieldValues>({
  control,
  name,
  label,
  accept,
  disabled,
  required,
}: FormUploadProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { onChange, ref } }) => (
        <FormItem>
          <FormLabel>
            {label}

            {required && <span className="ml-1 text-destructive">*</span>}
          </FormLabel>

          <FormControl>
            <Input
              ref={ref}
              type="file"
              accept={accept}
              disabled={disabled}
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
              }}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
