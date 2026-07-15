import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lupa Password",
};

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Lupa Password</h1>
      <p className="mt-3 text-sm text-slate-600">
        Halaman lupa password sedang dalam pengembangan.
      </p>
    </div>
  );
}
