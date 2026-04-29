import * as React from "react";
import { cn } from "./cn";

type CardProps = {
    variant?: "default" | "soft" | "strong" | "solid" | "score";
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({
    variant = "default",
    className,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "bly-card",
                variant !== "default" && `bly-card--${variant}`,
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}
