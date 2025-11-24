import React, { useState, useEffect } from 'react';
import { Moon, Sun, Terminal, LayoutTemplate, Layers } from 'lucide-react';
import { CopyBlock } from './components/CopyBlock';
import { FileMock } from './components/FileMock';
import { StepIndicator } from './components/StepIndicator';
import { MockOutput } from './components/MockOutput';
import { PROMPT_PRD, PROMPT_META_UNIFIED, PROMPT_META_SPLIT } from './constants';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [promptMode, setPromptMode] = useState<'unified' | 'split'>('unified');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary/20">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="font-bold tracking-tight text-foreground">AI.Playbook</span>
          </div>
          
          <button
            onClick={toggleTheme}
            className="group flex items-center gap-2 rounded-full border border-border/50 bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-border hover:bg-muted hover:text-foreground active:scale-95"
          >
            {theme === 'light' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
            <span>Mudar tema</span>
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            MANUAL DE INSTRUÇÕES V1.0
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Playbook de apoio às aulas de Espedito Roza
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Um guia passo a passo para transformar suas ideias em código funcional utilizando agentes de IA modernos.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative space-y-2">
          
          {/* Connecting Line Layer */}
          <div className="absolute left-[15px] top-4 h-[calc(100%-40px)] w-px bg-border/50 md:left-[19px]"></div>

          {/* Step 1: Generate PRD */}
          <section className="relative flex gap-6 md:gap-8">
            <div className="relative z-10 shrink-0">
               <StepIndicator number={1} />
            </div>
            <div className="w-full pb-16">
              <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">Definição de Requisitos (PRD)</h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                O primeiro passo é estruturar sua ideia. Copie o prompt abaixo e envie para o seu chat de IA favorito (ChatGPT, Gemini, DeepSeek, Claude) para gerar um Product Requirements Document otimizado.
              </p>
              
              <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-amber-600 dark:text-amber-400">
                <span className="font-semibold">⚡ Dica:</span> Substitua as seções de <strong>Objetivo</strong> e <strong>Funcionalidades</strong> no texto abaixo caso queira criar um app diferente do 'TheStarterPay'.
              </div>

              <CopyBlock content={PROMPT_PRD} label="Prompt Inicial: Gerador de PRD" />
            </div>
          </section>

          {/* Step 2: Validation */}
          <section className="relative flex gap-6 md:gap-8">
            <div className="relative z-10 shrink-0">
              <StepIndicator number={2} />
            </div>
            <div className="w-full pb-16">
              <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">Validar e Exportar</h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                Revise o PRD gerado pela IA. Se estiver correto, mantenha o conteúdo pronto (o texto gerado) para ser colado no próximo passo.
              </p>
              <FileMock />
            </div>
          </section>

          {/* Step 3: Generate Dev Prompts */}
          <section className="relative flex gap-6 md:gap-8">
            <div className="relative z-10 shrink-0">
              <StepIndicator number={3} />
            </div>
            <div className="w-full pb-16">
              <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">Gerar Instruções de Código</h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                Utilize o ChatGPT/Claude novamente. Envie o <strong>PRD validado</strong> junto com um dos prompts abaixo para que ele gere os comandos técnicos.
              </p>

              {/* Selection Tabs */}
              <div className="mb-8 grid grid-cols-2 gap-1 rounded-xl border border-border bg-muted/40 p-1">
                  <button
                      onClick={() => setPromptMode('unified')}
                      className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all ${
                          promptMode === 'unified' 
                          ? 'bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/10' 
                          : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                      }`}
                  >
                      <LayoutTemplate className="h-4 w-4" />
                      Prompt Unificado
                  </button>
                  <button
                      onClick={() => setPromptMode('split')}
                      className={`flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-medium transition-all ${
                          promptMode === 'split' 
                          ? 'bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/10' 
                          : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                      }`}
                  >
                      <Layers className="h-4 w-4" />
                      Prompt em 3 Partes
                  </button>
              </div>

              {/* Content */}
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {promptMode === 'unified' ? (
                       <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                             Gera um único bloco de código massivo. Ideal para ferramentas com contexto longo.
                          </p>
                          <CopyBlock content={PROMPT_META_UNIFIED} label="Meta-Prompt Unificado" />
                      </div>
                  ) : (
                      <div className="space-y-4">
                          <div className="mb-4 rounded-lg border border-primary/10 bg-primary/5 p-4 text-sm text-muted-foreground">
                             <strong className="block mb-1 text-foreground">Recomendado para apps complexos:</strong>
                             Solicita à IA que quebre o desenvolvimento em 3 fases lógicas. O ChatGPT irá gerar 3 blocos de texto como resposta.
                          </div>
                          <CopyBlock content={PROMPT_META_SPLIT} label="Meta-Prompt Fracionado" />
                      </div>
                  )}
              </div>
            </div>
          </section>

          {/* Step 4: Execution Mock */}
          <section className="relative flex gap-6 md:gap-8">
            <div className="relative z-10 shrink-0">
              <StepIndicator number={4} isLast />
            </div>
            <div className="w-full">
              <h2 className="mb-2 text-xl font-bold tracking-tight text-foreground">Execução no Agente Criador</h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                Esta é a etapa final. O ChatGPT (Passo 3) gerou prompts específicos como resposta. Agora você deve copiar essa resposta e colar no Lovable, Bolt.new ou V0.
              </p>

              <div className="flex flex-col gap-4">
                   {promptMode === 'unified' ? (
                       <MockOutput 
                          title="Saída Esperada do Chat"
                          description="O agente irá gerar um prompt técnico completo contendo Fundamentos, UI, Funcionalidades e Dados."
                       />
                   ) : (
                       <>
                          <MockOutput 
                              title="Saída 1: Fundamentos + UI"
                              description="Estrutura de pastas, configurações iniciais, cores, tipografia e wireframe navegável."
                          />
                          <MockOutput 
                              title="Saída 2: Funcionalidades e Fluxos"
                              description="Implementação das lógicas, navegação entre telas, estados e interações do usuário."
                          />
                           <MockOutput 
                              title="Saída 3: Refinamento e Dados"
                              description="Mock de dados, tratamento de erros, loading states e polimento final."
                          />
                       </>
                   )}
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <footer className="mt-20 border-t border-border/40 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AI.Playbook. Educacional.
        </p>
      </footer>
    </div>
  );
};

export default App;