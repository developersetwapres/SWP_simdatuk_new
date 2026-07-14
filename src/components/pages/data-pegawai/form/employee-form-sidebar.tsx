"use client";

import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EmployeeFormSection {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: string;
}

interface EmployeeFormSidebarProps {
  sections: EmployeeFormSection[];
  activeSection: number;
  requiredFields?: number;
  onChangeSection: (index: number) => void;
}

export function EmployeeFormSidebar({
  sections,
  activeSection,
  requiredFields = 0,
  onChangeSection,
}: EmployeeFormSidebarProps) {
  return (
    <Card className="rounded-lg bg-muted/30">
      <CardHeader>
        <CardTitle className="text-sm">Navigasi Section</CardTitle>

        <CardDescription>
          {requiredFields} field wajib pada data utama.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <nav className="grid gap-1">
          {sections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              onClick={() => onChangeSection(index)}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-all",
                activeSection === index
                  ? "bg-background shadow-sm text-foreground"
                  : "text-muted-foreground hover:bg-background hover:text-foreground",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1",
                  section.accent,
                )}
              >
                <section.icon className="h-4 w-4" />
              </span>

              <div className="flex-1 truncate">{section.title}</div>

              <span className="text-xs tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}
