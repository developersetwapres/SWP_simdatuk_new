import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peta Jabatan",
};

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Peta Jabatan</h1>
      <p className="mt-3 text-sm text-slate-600">
        Halaman peta jabatan belum diimplementasikan.
      </p>
    </div>
  );
}
