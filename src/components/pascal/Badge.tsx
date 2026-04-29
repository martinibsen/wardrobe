import * as React from "react";
import { cn } from "./cn";

type BadgeProps = {
    variant?: "default" | "mint" | "pink" | "ink";
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

export function Badge({
    variant = "default",
    className,
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn("psc-badge", variant !== "default" && `psc-badge--${variant}`, className)}
            {...props}
        >
            {children}
        </span>
    );
}
