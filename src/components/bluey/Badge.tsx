import * as React from "react";
import { cn } from "./cn";

type BadgeProps = {
    variant?: "default" | "validated" | "needs-work" | "rejected" | "high" | "med";
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
            className={cn(
                "bly-badge",
                variant !== "default" && `bly-badge--${variant}`,
                className,
            )}
            {...props}
        >
            {children}
        </span>
    );
}
