import { Bell, Car, UserPlus, Wrench, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

type Notification = {
  id: string;
  icon: LucideIcon;
  title: string;
  body: string;
  time: string;
  unread: boolean;
};

const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    icon: UserPlus,
    title: "New lead assigned",
    body: "A walk-in enquiry was routed to your pipeline.",
    time: "2m",
    unread: true,
  },
  {
    id: "2",
    icon: Car,
    title: "Stock listing updated",
    body: "Vehicle photos and pricing were published.",
    time: "1h",
    unread: true,
  },
  {
    id: "3",
    icon: Wrench,
    title: "Workshop job completed",
    body: "A service job is ready for handover.",
    time: "4h",
    unread: false,
  },
  {
    id: "4",
    icon: Wallet,
    title: "Financing approved",
    body: "A loan application cleared the bank check.",
    time: "Yesterday",
    unread: false,
  },
];

export function NotificationCenter() {
  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="relative flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-destructive" />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-sm font-semibold tracking-tight">Notifications</span>
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {unreadCount} new
          </span>
        </div>
        <ScrollArea className="max-h-80">
          <ul className="divide-y divide-border">
            {NOTIFICATIONS.map((n) => (
              <li
                key={n.id}
                className="flex gap-3 px-4 py-3 transition-colors hover:bg-muted/50"
              >
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/60">
                  <n.icon className="h-3.5 w-3.5 text-foreground/70" />
                </div>
                <div className="min-w-0 flex-1 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-medium text-foreground">{n.title}</p>
                    {n.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/50" />}
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{n.body}</p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{n.time}</span>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <div className="border-t border-border px-4 py-2.5">
          <button className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
            Mark all as read
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
