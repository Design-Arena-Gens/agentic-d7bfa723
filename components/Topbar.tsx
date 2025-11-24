"use client";

import { Search, Bell, Plus, Command } from "lucide-react";

export function Topbar() {
  return (
    <div className="sticky top-0 z-20 glass">
      <div className="px-5 py-3 flex items-center gap-3">
        <div className="flex-1 max-w-xl relative hidden md:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/40" />
          <input className="search-input pl-9" placeholder="Pesquisar em tudo?" />
          <kbd className="absolute right-2 top-2 text-[10px] text-white/40 hidden sm:inline-flex items-center gap-1">
            <Command className="h-3 w-3" /> K
          </kbd>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="icon-badge w-9 h-9"><Bell size={16} /></button>
          <button className="button-primary"><Plus size={14} /> Criar</button>
        </div>
      </div>
    </div>
  );
}
