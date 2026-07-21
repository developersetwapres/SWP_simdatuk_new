"use client";

import { FormInput } from "./form-input";

interface FormDateProps {
  name: string;
  label: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

export function FormDate(props: FormDateProps) {
  return <FormInput {...props} type="date" />;
}
