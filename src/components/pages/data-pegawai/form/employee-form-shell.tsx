"use client";

import { ReactNode } from "react";

interface EmployeeFormShellProps {
  sidebar: ReactNode;
  children: ReactNode;
}

export function EmployeeFormShell({
  sidebar,
  children,
}: EmployeeFormShellProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="grid gap-6 p-4 lg:grid-cols-[280px_minmax(0,1fr)] lg:p-6">
        <aside className="lg:sticky lg:top-4 lg:self-start">{sidebar}</aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
