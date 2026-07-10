import { ReactNode } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Building2, LucideIcon, ChevronRight } from "lucide-react";
import { RekapitulasiCard } from "./rekapitulsi-cards";

interface SectionCardProps {
  title: string;
  total: number;
  totalItem: number;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  data?: any[];
}

export function SectionCard({
  title,
  total,
  totalItem,
  description,
  icon: Icon = Building2,
  className,
  data,
}: SectionCardProps) {
  console.log(data);

  return (
    <Card
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg",
        className,
      )}
    >
      <CardHeader className="space-y-6 pb-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-muted/50">
              <Icon className="h-6 w-6 text-primary" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-semibold tracking-tight">{title}</h2>

              <p className="text-sm text-muted-foreground">
                {description ??
                  `Data dikelompokkan berdasarkan ${title.toLowerCase()}`}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              {totalItem} Kategori
            </Badge>

            <div className="flex items-center gap-1">
              <span className="text-3xl font-bold tracking-tight">{total}</span>

              <span className="text-sm text-muted-foreground">Pegawai</span>
            </div>
          </div>
        </div>

        <Separator />
      </CardHeader>

      <CardContent>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pb-7">
          {data?.map((item, index) => (
            <RekapitulasiCard
              key={index}
              title={item.name}
              total={item.total}
              Icon={Building2}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
