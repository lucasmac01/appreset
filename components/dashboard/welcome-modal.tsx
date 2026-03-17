"use client";

import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function WelcomeModal() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bem-vindo ao seu reset mental</DialogTitle>
          <DialogDescription>
            Em cada dia, o sistema interpreta hábitos, restrições e journaling para atualizar seu estado interno de Corpo, Mente e Espírito.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
