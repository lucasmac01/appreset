import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="rounded-lg bg-primary/12 p-1.5 text-primary">
            <Sparkles className="h-4 w-4" />
          </span>
          Reset 10
        </Link>
        <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-2 py-1.5 text-sm text-muted-foreground transition hover:bg-muted">
          <Avatar>
            <AvatarFallback>LF</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline">Lucas</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
