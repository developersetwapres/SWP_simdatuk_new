const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function formatPeriod(
  month?: number | null,
  year?: string | number | null,
) {
  if (!month && !year) return "-";

  if (!month) return String(year);

  if (!year) return MONTHS[month - 1] ?? "-";

  return `${MONTHS[month - 1]} ${year}`;
}
