import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

export const FileMock: React.FC = () => {
    return (
        <div className="flex w-full flex-col gap-4 rounded-xl border border-dashed border-border bg-muted/20 p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Resultado esperado do Passo 1</span>
            </div>
            
            <div className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-muted-foreground/30">
                <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <FileText className="h-5 w-5" />
                    </div>
                    <div>
                        <h4 className="font-medium text-foreground">PRD_Gerado.txt</h4>
                        <p className="text-xs text-muted-foreground">Contém: Funcionalidades, Regras e UI Specs</p>
                    </div>
                </div>
            </div>
            
            <p className="text-center text-xs text-muted-foreground opacity-80">
                Copie o texto gerado pelo chat para usar no próximo passo.
            </p>
        </div>
    );
};