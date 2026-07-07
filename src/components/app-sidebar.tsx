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
          url: "#",
        },
        {
          title: "Pegawai ASN",
          url: "#",
        },
        {
          title: "Non ASN + Perbantuan",
          url: "#",
        },
        {
          title: "Pegawai Outsourcing",
          url: "#",
        },
        {
          title: "Peta Jabatan",
          url: "#",
        },
        {
          title: "Bandingkan Pegawai",
          url: "#",
        },
        {
          title: "Promosi Pegawai",
          url: "#",
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
          url: "#",
        },
        {
          title: "Non ASN + Perbantuan",
          url: "#",
        },
        {
          title: "Outsourcing",
          url: "#",
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
          url: "#",
        },
        {
          title: "Golongan",
          url: "#",
        },
        {
          title: "Pelatihan Struktural",
          url: "#",
        },
        {
          title: "Pelatihan Fungsional",
          url: "#",
        },
        {
          title: "Pelatihan Teknis",
          url: "#",
        },
        {
          title: "Penghargaan",
          url: "#",
        },
        {
          title: "SKP",
          url: "#",
        },
        {
          title: "Penilaian Prestasi Kerja",
          url: "#",
        },
        {
          title: "Hukuman Disiplin",
          url: "#",
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
          url: "#",
        },
        {
          title: "Data Role Pengguna",
          url: "#",
        },
        {
          title: "Data Jabatan",
          url: "#",
        },
        {
          title: "Data Golongan",
          url: "#",
        },
        {
          title: "Data Instansi",
          url: "#",
        },
        {
          title: "Data Jenis Pegawai",
          url: "#",
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
