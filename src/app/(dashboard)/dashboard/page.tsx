"use client";

import { useEffect } from "react";
import { profile } from "@/src/services/auth.service";

export default function DashboardPage() {
  useEffect(() => {
    const loadProfile = async () => {
      const res = await profile();

      console.log(res.data);
    };

    loadProfile();
  }, []);

  return <h1>Dashboard</h1>;
}
