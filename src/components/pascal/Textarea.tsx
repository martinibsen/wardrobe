import * as React from "react";
import { cn } from "./cn";

type TextareaProps = {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "error";
    label?: string;
    hint?: string;
    fieldCode?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
    label,
    hint,
    fieldCode,
    className,
    id,
    ...props
}: TextareaProps) {
    const textareaId = id ?? React.useId();
    return (
        <div className="psc-field">
            {(label || fieldCode) && (
                <div className="psc-field__head">
                    {fieldCode && <span className="psc-field__code">{fieldCode}</span>}
                    {label && (
                        <label htmlFor={textareaId} className="psc-field__label">
                            {label}
                        </label>
                    )}
                </div>
            )}
            <textarea
                id={textareaId}
                className={cn("psc-field__input", className)}
                {...props}
            />
            {hint && (
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {hint}
                </span>
            )}
        </div>
    );
}
