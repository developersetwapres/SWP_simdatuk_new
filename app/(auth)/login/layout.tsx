import { AuthCardLayout } from "@/components/layouts/auth-layout";
import { LoginForm } from "@/components/pages/auth/login-form";

export default function LoginPage() {
  return (
    <AuthCardLayout
      title="SIMDATUK"
      description="Sistem Informasi Manajemen Data Dukungan Kepegawaian Sekretariat Wakil Presiden Republik Indonesia"
    >
      <LoginForm />
    </AuthCardLayout>
  );
}
