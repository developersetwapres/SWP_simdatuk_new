import { LoginForm } from "@/components/pages/auth/login-form";
// import { LoginForm } from "@/components/login-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return <LoginForm />;
}
