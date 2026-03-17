import { ReactNode } from "react";

import { AppHeader } from "@/components/header";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
