import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";

export default function Page() {
  return (
    <div className="bg-app min-h-screen">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen">
          <Topbar />
          <section className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Seu trabalho</h3>
                <p className="text-white/70 text-sm">Resumo dos seus projetos, tarefas e progresso.</p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Atividade</h3>
                <ul className="space-y-3 text-sm text-white/80">
                  <li>? Voc? concluiu "Refatorar autentica??o" h? 2h</li>
                  <li>? Nova issue atribu?da: "Bug no upload"</li>
                  <li>? Projeto "Nova UI" ganhou 3 coment?rios</li>
                </ul>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Roadmap</h3>
                <p className="text-white/70 text-sm">Marcos principais e pr?ximos lan?amentos.</p>
              </div>
            </div>
            <div className="mt-6 glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Quadro</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Backlog", "Em andamento", "Conclu?do"].map((col) => (
                  <div key={col} className="rounded-lg border border-white/10 bg-white/5">
                    <div className="px-3 py-2 border-b border-white/10 text-sm text-white/60">{col}</div>
                    <div className="p-3 space-y-3">
                      {[1,2,3].map((i) => (
                        <div key={i} className="rounded-lg bg-white/5 border border-white/10 p-3">
                          <div className="text-sm font-medium">Melhorar performance #{i}</div>
                          <div className="text-xs text-white/60">Frontend ? Alta prioridade</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
