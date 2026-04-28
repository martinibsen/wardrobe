import * as React from "react";
import { cn } from "./cn";

type BadgeProps = {
    variant?: "default" | "filled" | "ok" | "proc" | "wait" | "archive";
    children: React.ReactNode;
    className?: string;
};

export function Badge({ variant = "default", children, className }: BadgeProps) {
    return (
        <span
            className={cn(
                "brk-badge",
                variant !== "default" && `brk-badge--${variant}`,
                className,
            )}
        >
            {children}
        </span>
    );
}
