import * as React from "react";
import { cn } from "./cn";

type InputProps = {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "error";
    label?: string;
    hint?: string;
    numericBadge?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export function Input({
    size = "md",
    variant = "default",
    label,
    hint,
    numericBadge,
    className,
    id,
    ...props
}: InputProps) {
    const inputId = id ?? React.useId();
    return (
        <label className="brk-field" htmlFor={inputId}>
            {label && <span className="brk-field__label">{label}</span>}
            {numericBadge && (
                <span
                    className="brk-field__label"
                    style={{ position: "absolute", top: 0, right: 0 }}
                >
                    {numericBadge}
                </span>
            )}
            <input
                id={inputId}
                className={cn(
                    "brk-input",
                    `brk-input--${size}`,
                    variant === "error" && "brk-input--error",
                    className,
                )}
                aria-invalid={variant === "error" || undefined}
                {...props}
            />
            {hint && (
                <span
                    className={cn(
                        "brk-field__hint",
                        variant === "error" && "brk-field__hint--error",
                    )}
                >
                    {hint}
                </span>
            )}
        </label>
    );
}
