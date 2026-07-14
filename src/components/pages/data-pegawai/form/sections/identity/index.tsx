"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IdentityFields } from "./fields";

export function IdentitySection() {
  return (
    <Card className="rounded-lg shadow-none">
      <CardHeader className="border-b">
        <CardTitle>Data Pegawai</CardTitle>

        <CardDescription>
          Informasi identitas utama pegawai, data pribadi, alamat, kontak, serta
          informasi dasar kepegawaian.
        </CardDescription>
      </CardHeader>

      <CardContent className="py-6">
        <IdentityFields />
      </CardContent>
    </Card>
  );
}
