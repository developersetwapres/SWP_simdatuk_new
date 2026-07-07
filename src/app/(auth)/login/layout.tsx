import { AuthCardLayout } from "@/components/layouts/auth-layout";
import type React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthCardLayout
      title="SIMDATUK"
      description="Sistem Informasi Manajemen Data Dukungan Kepegawaian Sekretariat Wakil Presiden Republik Indonesia"
    >
      {children}
    </AuthCardLayout>
  );
}
