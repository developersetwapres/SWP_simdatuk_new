import { InboxIcon } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
  colSpan?: number;
}

export function TableEmptyState({
  title = "Belum ada data",
  description = "Data yang Anda cari tidak ditemukan.",
  colSpan = 5,
}: Props) {
  return (
    <tr>
      <td colSpan={colSpan} className="py-16">
        <div className="flex flex-col items-center justify-center gap-3">
          <InboxIcon className="text-muted-foreground h-12 w-12" />

          <div className="space-y-1 text-center">
            <p className="font-medium">{title}</p>

            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </td>
    </tr>
  );
}
