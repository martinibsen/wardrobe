import * as React from "react";
import { cn } from "./cn";

type CardProps = {
    variant?: "default" | "mint" | "pink" | "ink";
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
            className={cn("psc-card", variant !== "default" && `psc-card--${variant}`, className)}
            {...props}
        >
            {children}
        </div>
    );
}
