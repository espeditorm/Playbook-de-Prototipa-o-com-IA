import React from 'react';
import { Lock } from 'lucide-react';

interface MockOutputProps {
    title: string;
    description: string;
}

export const MockOutput: React.FC<MockOutputProps> = ({ title, description }) => {
    return (
        <div className="group relative w-full overflow-hidden rounded-xl border border-dashed border-border bg-muted/20 opacity-90 select-none transition-opacity hover:opacity-100">
            <div className="flex items-center justify-between border-b border-dashed border-border px-4 py-3 bg-muted/30">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                        {title}
                    </span>
                </div>
                <div className="flex items-center gap-1.5 rounded bg-muted-foreground/10 px-2 py-1 text-[10px] font-medium text-muted-foreground uppercase tracking-wide">
                    <Lock className="h-3 w-3" />
                    <span>Visualização</span>
                </div>
            </div>
            <div className="p-5">
                 <div className="flex flex-col gap-3">
                    <div className="h-2.5 w-3/4 rounded-full bg-foreground/5 dark:bg-foreground/10"></div>
                    <div className="h-2.5 w-full rounded-full bg-foreground/5 dark:bg-foreground/10"></div>
                    <div className="h-2.5 w-5/6 rounded-full bg-foreground/5 dark:bg-foreground/10"></div>
                    <div className="my-3 rounded-md bg-primary/5 p-3 text-xs italic text-muted-foreground">
                        {description}
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-foreground/5 dark:bg-foreground/10"></div>
                    <div className="h-2.5 w-4/5 rounded-full bg-foreground/5 dark:bg-foreground/10"></div>
                </div>
            </div>
             {/* Gradient Overlay for "Locked" feel */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
        </div>
    );
};