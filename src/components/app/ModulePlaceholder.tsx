import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ModulePlaceholderProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ModulePlaceholder({ title, description, icon: Icon }: ModulePlaceholderProps) {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center p-6">
      <Card className="w-full max-w-lg border-border/60 bg-card/80 shadow-sm backdrop-blur-sm">
        <CardContent className="flex flex-col items-center gap-4 px-8 py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/60">
            <Icon className="h-5 w-5 text-foreground/80" />
          </div>
          <div className="space-y-1.5">
            <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/40" />
            On the DriveOS roadmap
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
