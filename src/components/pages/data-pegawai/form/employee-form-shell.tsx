"use client";

import { ReactNode } from "react";

interface EmployeeFormShellProps {
  children: ReactNode;
}

export function EmployeeFormShell({ children }: EmployeeFormShellProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="p-4 lg:p-6">{children}</div>
    </div>
  );
}
