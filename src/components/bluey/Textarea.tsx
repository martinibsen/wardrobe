import * as React from "react";
import { cn } from "./cn";

type TextareaProps = {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "error";
    label?: string;
    hint?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
    label,
    hint,
    variant = "default",
    className,
    id,
    ...props
}: TextareaProps) {
    const textareaId = id ?? React.useId();
    return (
        <div className="bly-field-wrap">
            {label && (
                <label htmlFor={textareaId} className="bly-mono-label" style={{ marginBottom: "0.4rem" }}>
                    {label}
                </label>
            )}
            <textarea
                id={textareaId}
                className={cn(
                    "bly-field",
                    "bly-textarea",
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
