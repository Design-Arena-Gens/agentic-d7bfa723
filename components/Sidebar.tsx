"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { Home, SquareKanban, ListTodo, Boxes, Milestone, Settings, Search, ChevronDown, Plus, Star, Rocket, FolderKanban } from "lucide-react";
import { useState } from "react";

const NavSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <div className="px-3 py-2 text-[11px] uppercase tracking-wider text-white/40">{title}</div>
    <div className="space-y-1">{children}</div>
  </div>
);

const NavItem = ({ href, icon: Icon, label, active = false }: { href: string; icon: any; label: string; active?: boolean }) => (
  <Link href={href} className={clsx("nav-item", active && "bg-white/10 text-white")}> 
    <Icon size={16} className="shrink-0" />
    <span className="truncate">{label}</span>
  </Link>
);

export function Sidebar() {
  const [projectsOpen, setProjectsOpen] = useState(true);

  return (
    <aside className="hidden md:flex flex-col w-[var(--sidebar-width)] min-h-screen border-r border-white/10 bg-white/5">
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="icon-badge w-8 h-8">L</div>
          <div>
            <div className="text-sm font-semibold">Linear-like</div>
            <div className="text-[11px] text-white/50">Workspace</div>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="button-primary w-full">
            <Plus size={14} /> Nova Issue
          </button>
        </div>
      </div>

      <div className="p-3 space-y-4 overflow-y-auto">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/40" />
            <input className="search-input pl-9" placeholder="Buscar (/)" />
          </div>
          <button className="icon-badge w-9 h-9">
            <Star size={16} />
          </button>
        </div>

        <NavSection title="Geral">
          <NavItem href="#" icon={Home} label="Home" active />
          <NavItem href="#" icon={SquareKanban} label="Quadros" />
          <NavItem href="#" icon={ListTodo} label="Minhas tarefas" />
          <NavItem href="#" icon={Boxes} label="Projetos" />
          <NavItem href="#" icon={Milestone} label="Roadmap" />
        </NavSection>

        <div>
          <div className="px-3 py-2 text-[11px] uppercase tracking-wider text-white/40 flex items-center justify-between">
            <span>Projetos</span>
            <button onClick={() => setProjectsOpen((v) => !v)} className="text-white/50 hover:text-white/80 transition">
              <ChevronDown className={clsx("h-4 w-4 transition", !projectsOpen && "-rotate-90")} />
            </button>
          </div>
          {projectsOpen && (
            <div className="space-y-1">
              <NavItem href="#" icon={Rocket} label="Nova UI" />
              <NavItem href="#" icon={FolderKanban} label="Infra & DevEx" />
              <NavItem href="#" icon={FolderKanban} label="Mobile" />
            </div>
          )}
        </div>

        <NavSection title="Admin">
          <NavItem href="#" icon={Settings} label="Configura??es" />
        </NavSection>
      </div>

      <div className="mt-auto p-3 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="icon-badge w-8 h-8">VC</div>
          <div className="text-sm">
            <div className="font-medium">Voc?</div>
            <div className="text-white/50 text-xs">Dispon?vel</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
