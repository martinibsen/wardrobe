import * as React from "react";
import { cn } from "./cn";

type CardProps = {
    variant?: "default" | "recessed" | "device";
    modelNumber?: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({
    variant = "default",
    modelNumber,
    className,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "brk-card",
                variant !== "default" && `brk-card--${variant}`,
                className,
            )}
            {...props}
        >
            {modelNumber && (
                <span className="brk-card__model">{modelNumber}</span>
            )}
            {children}
        </div>
    );
}
