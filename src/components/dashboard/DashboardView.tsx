import {
  Car,
  UserPlus,
  Truck,
  CalendarClock,
  TrendingUp,
  Wallet,
  Trophy,
  Activity as ActivityIcon,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  ACTIVITIES,
  APPOINTMENTS,
  DELIVERIES,
  ENQUIRIES,
  LEADERBOARD,
  LOANS,
  REVENUE,
  STATS,
} from "./dashboard-data";

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  sub: string;
  icon: LucideIcon;
}) {
  return (
    <Card className="border-border/60 bg-card/80 shadow-sm backdrop-blur-sm transition-colors hover:border-border">
      <CardContent className="flex items-start justify-between gap-4 p-5">
        <div className="min-w-0 space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
          <p className="truncate text-xs text-muted-foreground">{sub}</p>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60">
          <Icon className="h-4 w-4 text-foreground/80" />
        </div>
      </CardContent>
    </Card>
  );
}

function SectionCard({
  title,
  icon: Icon,
  action,
  children,
  className,
}: {
  title: string;
  icon: LucideIcon;
  action?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={`border-border/60 bg-card/80 shadow-sm backdrop-blur-sm ${className ?? ""}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <Icon className="h-4 w-4 text-muted-foreground" />
          {title}
        </CardTitle>
        {action && (
          <span className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {action}
            <ArrowUpRight className="h-3 w-3" />
          </span>
        )}
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  );
}

const LOAN_VARIANT: Record<string, "default" | "secondary" | "outline" | "destructive"> = {
  Approved: "default",
  "In review": "secondary",
  "Docs required": "outline",
  Rejected: "destructive",
};

export function DashboardView() {
  return (
    <div className="space-y-6 p-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Good morning, Andrew</h1>
        <p className="text-sm text-muted-foreground">
          Here is how your dealership is performing today — Sunday, 30 August.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's appointments" value={STATS.appointments.value} sub={STATS.appointments.sub} icon={CalendarClock} />
        <StatCard label="Vehicles in stock" value={STATS.stock.value} sub={STATS.stock.sub} icon={Car} />
        <StatCard label="New enquiries" value={STATS.enquiries.value} sub={STATS.enquiries.sub} icon={UserPlus} />
        <StatCard label="Pending deliveries" value={STATS.deliveries.value} sub={STATS.deliveries.sub} icon={Truck} />
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <SectionCard title="Revenue" icon={TrendingUp} action="Month to date" className="lg:col-span-2">
          <div className="flex flex-wrap items-end gap-6">
            <div className="space-y-1">
              <p className="text-3xl font-semibold tracking-tight text-foreground">{REVENUE.mtd}</p>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{REVENUE.delta}</span> vs last month
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Gross profit</p>
              <p className="text-lg font-semibold tracking-tight text-foreground">{REVENUE.gross}</p>
            </div>
          </div>
          <div className="mt-5 flex h-24 items-end gap-1.5">
            {REVENUE.bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-foreground/15 transition-colors hover:bg-foreground/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <Separator className="my-4" />
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Monthly target</span>
              <span className="font-mono text-foreground">{REVENUE.target}%</span>
            </div>
            <Progress value={REVENUE.target} className="h-1.5" />
          </div>
        </SectionCard>

        <SectionCard title="Today's appointments" icon={CalendarClock} action="5 today">
          <ul className="divide-y divide-border">
            {APPOINTMENTS.map((a) => (
              <li key={a.id} className="flex items-start gap-3 py-2.5 first:pt-0">
                <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground">{a.time}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{a.customer}</p>
                  <p className="truncate text-xs text-muted-foreground">{a.vehicle}</p>
                </div>
                <Badge variant="outline" className="shrink-0 text-[10px] font-medium">
                  {a.kind}
                </Badge>
              </li>
            ))}
          </ul>
        </SectionCard>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="New enquiries" icon={UserPlus} action="View all">
          <ul className="divide-y divide-border">
            {ENQUIRIES.map((e) => (
              <li key={e.id} className="flex items-center gap-3 py-2.5 first:pt-0">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-medium text-foreground">{e.name}</p>
                    {e.hot && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />}
                  </div>
                  <p className="truncate text-xs text-muted-foreground">{e.vehicle}</p>
                </div>
                <Badge variant="secondary" className="shrink-0 text-[10px]">{e.source}</Badge>
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{e.received}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Pending deliveries" icon={Truck} action="9 open">
          <ul className="space-y-3.5">
            {DELIVERIES.map((d) => (
              <li key={d.id} className="space-y-1.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{d.customer}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {d.vehicle} · {d.stage}
                    </p>
                  </div>
                  <Badge variant="outline" className="shrink-0 text-[10px]">{d.eta}</Badge>
                </div>
                <Progress value={d.progress} className="h-1" />
              </li>
            ))}
          </ul>
        </SectionCard>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <SectionCard title="Loan applications" icon={Wallet} action="This week">
          <ul className="divide-y divide-border">
            {LOANS.map((l) => (
              <li key={l.id} className="flex items-center gap-3 py-2.5 first:pt-0">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{l.customer}</p>
                  <p className="truncate text-xs text-muted-foreground">{l.bank} · {l.amount}</p>
                </div>
                <Badge variant={LOAN_VARIANT[l.status] ?? "secondary"} className="shrink-0 text-[10px]">
                  {l.status}
                </Badge>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Sales leaderboard" icon={Trophy} action="August">
          <ul className="space-y-3.5">
            {LEADERBOARD.map((s, i) => (
              <li key={s.id} className="space-y-1.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-muted/60 font-mono text-[10px] text-foreground/80">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{s.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{s.units} units · {s.revenue}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{s.target}%</span>
                </div>
                <Progress value={s.target} className="h-1" />
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Recent activities" icon={ActivityIcon} action="Live">
          <ScrollArea className="max-h-72 pr-2">
            <ul className="space-y-3.5">
              {ACTIVITIES.map((a) => (
                <li key={a.id} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">{a.actor}</span> {a.action}{" "}
                      <span className="font-medium text-foreground">{a.target}</span>
                    </p>
                    <span className="font-mono text-[10px] text-muted-foreground/70">{a.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </SectionCard>
      </section>
    </div>
  );
}
