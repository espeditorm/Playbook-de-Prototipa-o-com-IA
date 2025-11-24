import React from 'react';

interface StepIndicatorProps {
    number: number;
    isLast?: boolean;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ number, isLast }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-sm ring-4 ring-background transition-transform duration-500 ease-in-out">
                {number}
            </div>
        </div>
    );
};