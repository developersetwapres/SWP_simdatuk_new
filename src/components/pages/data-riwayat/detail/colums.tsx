"use client";

import { Badge } from "@/components/ui/badge";

import { HistoryModule } from "@/constants/history";

export interface HistoryColumn {
  key: string;
  title: string;
  render: (user: any, index: number) => React.ReactNode;
}

export function getHistoryColumns(module: HistoryModule): HistoryColumn[] {
  switch (module) {
    case "jabatan":
      return [
        {
          key: "employee",
          title: "Nama Pegawai",
          render: (user) => (
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-muted-foreground text-xs">
                {user.employee_id_number}
              </div>
            </div>
          ),
        },
        {
          key: "position",
          title: "Jabatan",
          render: (user) => user.position ?? "-",
        },
        {
          key: "echelon",
          title: "Jenjang Jabatan",
          render: (user) => (user.echelon ? `Eselon ${user.echelon}` : "-"),
        },
        {
          key: "status",
          title: "Keterangan Jabatan",
          render: (user) => (
            <Badge variant={user.status === 1 ? "default" : "secondary"}>
              {user.status === 1 ? "Aktif" : "Tidak Aktif"}
            </Badge>
          ),
        },
        {
          key: "effective_date",
          title: "TMT Jabatan",
          render: (user) => user.effective_date ?? "-",
        },
        {
          key: "decree_number",
          title: "No SK Jabatan",
          render: (user) => user.decree_number ?? "-",
        },
      ];

    case "golongan":
      return [
        {
          key: "employee",
          title: "Nama Pegawai / NIP",
          render: (user) => (
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-muted-foreground text-xs">
                {user.employee_id_number}
              </div>
            </div>
          ),
        },
        {
          key: "grade",
          title: "Pangkat / Golongan",
          render: (user) =>
            `${user.grade_name ?? "-"} ${user.grade_code ?? ""}`,
        },
        {
          key: "effective_date",
          title: "TMT Golongan",
          render: (user) => user.effective_date ?? "-",
        },
        {
          key: "decree",
          title: "No SK Golongan",
          render: (user) => user.decree_number ?? "-",
        },
        {
          key: "status",
          title: "Status Golongan",
          render: (user) => (
            <Badge variant={user.status === 1 ? "default" : "secondary"}>
              {user.status === 1 ? "Aktif" : "Tidak Aktif"}
            </Badge>
          ),
        },
      ];

    case "pelatihan-struktural":
    case "pelatihan-fungsional":
    case "pelatihan-teknis":
      return [
        {
          key: "employee",
          title: "Nama Pegawai / NIP",
          render: (user) => (
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-muted-foreground text-xs">
                {user.employee_id_number}
              </div>
            </div>
          ),
        },
        {
          key: "certificate",
          title: "Sertifikat",
          render: (user) =>
            user.certificate ? (
              <a
                href={user.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Lihat Sertifikat
              </a>
            ) : (
              "-"
            ),
        },
      ];

    case "penghargaan":
      return [
        {
          key: "employee",
          title: "Nama Pegawai / NIP",
          render: (user) => (
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-muted-foreground text-xs">
                {user.employee_id_number}
              </div>
            </div>
          ),
        },
      ];

    case "ppk":
      return [
        {
          key: "employee",
          title: "Nama Pegawai",
          render: (user) => (
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-muted-foreground text-xs">
                {user.employee_id_number}
              </div>
            </div>
          ),
        },
        {
          key: "score",
          title: "Nilai Prestasi Kerja",
          render: (user) => user.work_performance_score ?? "-",
        },
        {
          key: "description",
          title: "Keterangan",
          render: (user) => user.description ?? "-",
        },
      ];

    case "hukuman-disiplin":
      return [
        {
          key: "employee",
          title: "Nama Pegawai / NIP",
          render: (user) => (
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-muted-foreground text-xs">
                {user.employee_id_number}
              </div>
            </div>
          ),
        },
        {
          key: "grade",
          title: "Pangkat / Golongan",
          render: (user) => user.grade ?? "-",
        },
        {
          key: "position",
          title: "Jabatan",
          render: (user) => user.position ?? "-",
        },
        {
          key: "disciplinary",
          title: "Jenis Hukuman",
          render: (user) => user.disciplinary_type_name ?? "-",
        },
        {
          key: "level",
          title: "Tingkat Hukuman",
          render: (user) => user.disciplinary_type_description ?? "-",
        },
        {
          key: "allowance",
          title: "Potongan Tukin",
          render: (user) =>
            user.performance_allowance_deduction
              ? `${user.performance_allowance_deduction * 100}%`
              : "-",
        },
        {
          key: "duration",
          title: "Durasi",
          render: (user) =>
            user.performance_allowance_duration
              ? `${user.performance_allowance_duration} Bulan`
              : "-",
        },
        {
          key: "decree",
          title: "No SK",
          render: (user) => user.decree_number ?? "-",
        },
        {
          key: "decree_date",
          title: "Tanggal SK",
          render: (user) => user.date_of_decree ?? "-",
        },
        {
          key: "start_date",
          title: "Tanggal Hukuman",
          render: (user) => user.start_date ?? "-",
        },
        {
          key: "officer",
          title: "Pejabat Berwenang",
          render: (user) => user.authorizing_officer ?? "-",
        },
        {
          key: "officer_name",
          title: "Nama Pejabat",
          render: (user) => user.name_of_authorizing_officer ?? "-",
        },
        {
          key: "description",
          title: "Keterangan",
          render: (user) => user.description ?? "-",
        },
      ];

    default:
      return [];
  }
}
