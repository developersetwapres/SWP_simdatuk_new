"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/nav-user";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  Database,
  Download,
} from "lucide-react";

import { FrameIcon, PieChartIcon, MapIcon } from "lucide-react";
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Rekapitulasi",
      url: "#",
      icon: <LayoutDashboard />,
      isActive: false,
      items: [
        {
          title: "Komposisi Pegawai",
          url: "/dashboard/rekapitulasi/komposisi-pegawai",
        },
        {
          title: "Pegawai ASN",
          url: "/dashboard/rekapitulasi/pegawai-asn",
        },
        {
          title: "Non ASN + Perbantuan",
          url: "/dashboard/rekapitulasi/pegawai-non-asn",
        },
        {
          title: "Pegawai Outsourcing",
          url: "/dashboard/rekapitulasi/pegawai-outsourcing",
        },
        {
          title: "Peta Jabatan",
          url: "/dashboard/rekapitulasi/peta-jabatani",
        },
        {
          title: "Bandingkan Pegawai",
          url: "/dashboard/rekapitulasi/bandingkan-pegawai",
        },
        {
          title: "Promosi Pegawai",
          url: "/dashboard/rekapitulasi/promosi-pegawai",
        },
      ],
    },
    {
      title: "Data Pegawai",
      url: "#",
      icon: <Users />,
      items: [
        {
          title: "ASN",
          url: "/dashboard/data-pegawai/asn",
        },
        {
          title: "Non ASN + Perbantuan",
          url: "/dashboard/data-pegawai/non-asn-perbantuan",
        },
        {
          title: "Outsourcing",
          url: "/dashboard/data-pegawai/outsourcing",
        },
      ],
    },
    {
      title: "Data Riwayat",
      url: "#",
      icon: <BriefcaseBusiness />,
      items: [
        {
          title: "Jabatan",
          url: "/dashboard/data-riwayat/jabatan",
        },
        {
          title: "Golongan",
          url: "/dashboard/data-riwayat/golongan",
        },
        {
          title: "Pelatihan Struktural",
          url: "/dashboard/data-riwayat/pelatihan-struktural",
        },
        {
          title: "Pelatihan Fungsional",
          url: "/dashboard/data-riwayat/pelatihan-fungsional",
        },
        {
          title: "Pelatihan Teknis",
          url: "/dashboard/data-riwayat/pelatihan-teknis",
        },
        {
          title: "Penghargaan",
          url: "/dashboard/data-riwayat/penghargaan",
        },
        {
          title: "SKP",
          url: "/dashboard/data-riwayat/skp",
        },
        {
          title: "Penilaian Prestasi Kerja",
          url: "/dashboard/data-riwayat/ppk",
        },
        {
          title: "Hukuman Disiplin",
          url: "/dashboard/data-riwayat/hukuman-disiplin",
        },
      ],
    },
    {
      title: "Master Data",
      url: "#",
      icon: <Database />,
      items: [
        {
          title: "Data Pengguna",
          url: "/dashboard/master-data/pengguna",
        },
        {
          title: "Data Role Pengguna",
          url: "/dashboard/master-data/role-pengguna",
        },
        {
          title: "Data Jabatan",
          url: "/dashboard/master-data/jabatan",
        },
        {
          title: "Data Golongan",
          url: "/dashboard/master-data/golongan",
        },
        {
          title: "Data Instansi",
          url: "/dashboard/master-data/instansi",
        },
        {
          title: "Data Jenis Pegawai",
          url: "/dashboard/master-data/jenis-pegawai",
        },
      ],
    },
    {
      title: "Export",
      url: "#",
      icon: <Download />,
      items: [
        {
          title: "Export Pegawai",
          url: "#",
        },
        {
          title: "Export DRH",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="data-[slot=sidebar-menu-button]:p-1.5!"
              render={<a href="#" />}
            >
              <Image
                src="/images/logo.png"
                alt="Logo SIMDATUK"
                width={34}
                height={34}
              />
              <span className="text-base font-semibold">
                SIMDATUK SETWAPRES
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
