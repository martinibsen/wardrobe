import * as React from "react";
import { cn } from "./cn";

type BadgeProps = {
    variant?: "default" | "solid" | "soft";
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
            className={cn("nds-badge", variant !== "default" && `nds-badge--${variant}`, className)}
            {...props}
        >
            {children}
        </span>
    );
}
