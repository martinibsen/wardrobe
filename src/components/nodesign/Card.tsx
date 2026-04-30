import * as React from "react";
import { cn } from "./cn";

type CardProps = {
    variant?: "default" | "ghost" | "solid";
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
            className={cn("nds-card", variant !== "default" && `nds-card--${variant}`, className)}
            {...props}
        >
            {children}
        </div>
    );
}
