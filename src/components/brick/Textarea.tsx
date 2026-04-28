import * as React from "react";
import { cn } from "./cn";

type TextareaProps = {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "error";
    label?: string;
    hint?: string;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;

export function Textarea({
    size = "md",
    variant = "default",
    label,
    hint,
    className,
    id,
    ...props
}: TextareaProps) {
    const inputId = id ?? React.useId();
    return (
        <label className="brk-field" htmlFor={inputId}>
            {label && <span className="brk-field__label">{label}</span>}
            <textarea
                id={inputId}
                className={cn(
                    "brk-textarea",
                    `brk-input--${size}`,
                    variant === "error" && "brk-textarea--error",
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
