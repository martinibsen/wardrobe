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
    className,
    id,
    ...props
}: TextareaProps) {
    const textareaId = id ?? React.useId();
    return (
        <div className="nds-field">
            {label && <label htmlFor={textareaId}>{label}</label>}
            <textarea id={textareaId} className={cn(className)} {...props} />
            {hint && (
                <span style={{ display: "block", marginTop: 6, fontSize: 10, color: "rgba(0,0,0,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {hint}
                </span>
            )}
        </div>
    );
}
