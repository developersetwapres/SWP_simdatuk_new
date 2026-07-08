import { LayoutDashboard } from "@/components/layouts/app-layout";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutDashboard>{children}</LayoutDashboard>;
}
