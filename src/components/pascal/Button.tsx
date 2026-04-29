import * as React from "react";
import { cn } from "./cn";

type ButtonProps = {
    variant?: "primary" | "secondary" | "destructive" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn("psc-btn", `psc-btn--${variant}`, size !== "md" && `psc-btn--${size}`, className)}
            {...props}
        >
            {children}
        </button>
    );
}
