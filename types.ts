export interface PromptData {
    id: string;
    title: string;
    description: string;
    content: string;
    tags?: string[];
}

export interface Step {
    id: number;
    title: string;
    description: string;
    type: 'prompt' | 'file' | 'split-prompt';
    content?: string; // For simple prompts
    parts?: { title: string; content: string }[]; // For split prompts
}

export type Theme = 'light' | 'dark';