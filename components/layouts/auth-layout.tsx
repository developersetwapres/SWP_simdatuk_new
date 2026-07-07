import type { PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function AuthCardLayout({
  children,
  title,
  description,
}: PropsWithChildren<{
  title?: string;
  description?: string;
}>) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-linear-to-tr from-white via-background to-blue-100 p-6 md:p-10">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Link
          href={""}
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="flex h-16 w-16 items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Logo SIMDATUK"
              width={64}
              height={64}
            />
          </div>
        </Link>

        <div className="flex flex-col gap-6">
          <Card className="rounded-xl">
            <CardHeader className="px-10 pt-8 pb-0 text-center">
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="px-10 py-8">{children}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
