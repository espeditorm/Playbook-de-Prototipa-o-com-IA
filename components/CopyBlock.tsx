import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyBlockProps {
    content: string;
    label?: string;
}

export const CopyBlock: React.FC<CopyBlockProps> = ({ content, label = "Prompt" }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="group relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-muted-foreground/20">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                </span>
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                    aria-label="Copiar prompt"
                >
                    {copied ? (
                        <>
                            <Check className="h-3.5 w-3.5" />
                            <span>Copiado!</span>
                        </>
                    ) : (
                        <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copiar</span>
                        </>
                    )}
                </button>
            </div>
            <div className="max-h-[350px] overflow-y-auto bg-card p-5 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-card-foreground/90 selection:bg-primary/20">
                    {content}
                </pre>
            </div>
            {/* Gradient fade at bottom if content is long */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent opacity-80" />
        </div>
    );
};