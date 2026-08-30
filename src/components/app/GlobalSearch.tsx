import { Search } from "lucide-react";

export function GlobalSearch({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group flex h-9 w-full items-center gap-2 rounded-lg border border-border/70 bg-muted/40 px-3 text-left text-sm text-muted-foreground transition-colors hover:border-border hover:bg-muted/70 md:w-72"
      aria-label="Open global search"
    >
      <Search className="h-4 w-4 shrink-0" />
      <span className="flex-1 truncate">Search DriveOS…</span>
      <kbd className="hidden items-center gap-0.5 rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex">
        ⌘K
      </kbd>
    </button>
  );
}
