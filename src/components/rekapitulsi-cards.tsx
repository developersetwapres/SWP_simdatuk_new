import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Building2, Eye, LucideIcon } from "lucide-react";

interface DataCardProps {
  title: string;
  total: number;
  icon?: LucideIcon;
  onDetail?: () => void;
  className?: string;
}

export function RekapitulasiCard({
  title,
  total,
  icon: Icon = Building2,
  onDetail,
  className,
}: DataCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden rounded-2xl border bg-card transition-all duration-300",
        "hover:-translate-y-1",
        "hover:border-primary/40",
        "hover:shadow-xl",

        className,
      )}
    >
      <CardContent className="space-y-3 p-6 pb-2">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center",
            "rounded-xl",
            "border",
            "bg-muted/50",
            "transition-all",
            "duration-300",
            "group-hover:scale-110",
            "group-hover:bg-primary/10",
          )}
        >
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div className="">
          <h3 className="line-clamp-2 min-h-14 text-base font-semibold leading-7">
            {title}
          </h3>

          <div className="space-y-1">
            <p className="text-4xl font-bold tracking-tight">{total}</p>

            <p className="text-sm text-muted-foreground">Pegawai</p>
          </div>
        </div>
      </CardContent>

      <CardFooter
        className="
                    border-t
                    bg-muted/30
                    p-2
                    transition-colors
                    group-hover:bg-muted/60
                "
      >
        <Button
          variant="ghost"
          className="
                        group/button
                        w-full
                        justify-between
                        rounded-xl
                    "
          onClick={onDetail}
        >
          <span className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Lihat Detail
          </span>

          <ArrowRight
            className="
                            h-4
                            w-4
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-1
                        "
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
