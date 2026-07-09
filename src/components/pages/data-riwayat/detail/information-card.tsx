"use client";

import {
  CalendarDays,
  FileText,
  GraduationCap,
  Trophy,
  Users,
  Link2,
  Building2,
  Clock3,
  FileBadge,
} from "lucide-react";

import { HistoryModule } from "@/constants/history";
import { formatPeriod } from "@/lib/date";

interface Props {
  module: HistoryModule;
  history: any;
}

export function HistoryInformationCard({ module, history }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {getInformationItems(module, history).map((item) => (
        <InfoCard
          key={item.label}
          icon={item.icon}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  );
}

interface InfoItem {
  label: string;
  value: React.ReactNode;
  icon: React.ReactNode;
}

function getInformationItems(module: HistoryModule, history: any): InfoItem[] {
  switch (module) {
    case "jabatan":
      return [
        {
          label: "Nama Riwayat Jabatan",
          value: history.name,
          icon: <FileText className="size-5" />,
        },
        {
          label: "Periode Input Riwayat",
          value: formatPeriod(history.period_month, history.period_year),
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "Jumlah Pegawai",
          value: `${history.users.length} Pegawai`,
          icon: <Users className="size-5" />,
        },
      ];

    case "golongan":
      return [
        {
          label: "Nama Riwayat Golongan",
          value: history.name,
          icon: <FileText className="size-5" />,
        },
        {
          label: "Periode Input Riwayat",
          value: formatPeriod(history.period_month, history.period_year),
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "Jumlah Pegawai",
          value: `${history.users.length} Pegawai`,
          icon: <Users className="size-5" />,
        },
      ];

    case "pelatihan-struktural":
    case "pelatihan-fungsional":
    case "pelatihan-teknis":
      return [
        {
          label: "Nama Diklat",
          value: history.name,
          icon: <GraduationCap className="size-5" />,
        },
        {
          label: "Periode Input Riwayat",
          value: formatPeriod(history.period_month, history.period_year),
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "No Surat Perintah",
          value: history.reference_number ?? "-",
          icon: <FileBadge className="size-5" />,
        },
        {
          label: "Jenjang",
          value: history.level_name ?? "-",
          icon: <GraduationCap className="size-5" />,
        },
        {
          label: "Tanggal Pelaksanaan",
          value:
            history.start_date && history.end_date
              ? `${history.start_date} s.d ${history.end_date}`
              : (history.start_date ?? "-"),
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "Penyelenggara",
          value: history.organizer ?? "-",
          icon: <Building2 className="size-5" />,
        },
        {
          label: "Jam Pelajaran",
          value: history.duration ? `${history.duration} JP` : "-",
          icon: <Clock3 className="size-5" />,
        },
        {
          label: "Keterangan",
          value: history.description ?? "-",
          icon: <FileText className="size-5" />,
        },
        {
          label: "Link Materi",
          value: history.link ?? "-",
          icon: <Link2 className="size-5" />,
        },
        {
          label: "Jumlah Pegawai",
          value: `${history.users.length} Pegawai`,
          icon: <Users className="size-5" />,
        },
      ];

    case "penghargaan":
      return [
        {
          label: "Nama Penghargaan",
          value: history.recognition_name,
          icon: <Trophy className="size-5" />,
        },
        {
          label: "Periode Riwayat",
          value: formatPeriod(history.period_month, history.period_year),
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "Keterangan",
          value: history.description ?? "-",
          icon: <FileText className="size-5" />,
        },
        {
          label: "Jenis SK",
          value: history.type_of_decree ?? "-",
          icon: <FileBadge className="size-5" />,
        },
        {
          label: "Tanggal SK",
          value: history.decree_date ?? "-",
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "No SK",
          value: history.decree_number ?? "-",
          icon: <FileBadge className="size-5" />,
        },
        {
          label: "Tahun SK",
          value: history.decree_year ?? "-",
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "Instansi Pemberi",
          value: history.awarding_institution ?? "-",
          icon: <Building2 className="size-5" />,
        },
        {
          label: "Jumlah Pegawai",
          value: `${history.users.length} Pegawai`,
          icon: <Users className="size-5" />,
        },
      ];

    case "ppk":
      return [
        {
          label: "Nama Riwayat PPK",
          value: history.name,
          icon: <FileText className="size-5" />,
        },
        {
          label: "Periode Riwayat",
          value: formatPeriod(history.period_month, history.period_year),
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "Periode PPK",
          value: history.performance_period,
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "Jumlah Pegawai",
          value: `${history.users.length} Pegawai`,
          icon: <Users className="size-5" />,
        },
      ];

    case "hukuman-disiplin":
      return [
        {
          label: "Nama Riwayat Hukuman",
          value: history.name,
          icon: <FileText className="size-5" />,
        },
        {
          label: "Periode Riwayat",
          value: formatPeriod(history.period_month, history.period_year),
          icon: <CalendarDays className="size-5" />,
        },
        {
          label: "Jumlah Pegawai",
          value: `${history.users.length} Pegawai`,
          icon: <Users className="size-5" />,
        },
      ];

    default:
      return [];
  }
}

interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <div className="rounded-xl border bg-card p-5 transition-all hover:shadow-sm">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-sm">{label}</span>
      </div>

      <div className="mt-3 break-words text-base font-semibold">{value}</div>
    </div>
  );
}
