import * as React from "react";
import { cn } from "./cn";

type InputProps = {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "error";
    label?: string;
    hint?: string;
    numericBadge?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
    size = "md",
    variant = "default",
    label,
    hint,
    className,
    id,
    ...props
}: InputProps) {
    const inputId = id ?? React.useId();
    return (
        <div className="bly-field-wrap">
            {label && (
                <label htmlFor={inputId} className="bly-mono-label" style={{ marginBottom: "0.4rem" }}>
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={cn(
                    "bly-field",
                    variant === "error" && "bly-field--error",
                    className,
                )}
                {...props}
            />
            {hint && (
                <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.4rem" }}>{hint}</p>
            )}
        </div>
    );
}
