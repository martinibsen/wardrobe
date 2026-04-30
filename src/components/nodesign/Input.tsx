import * as React from "react";
import { cn } from "./cn";

type InputProps = {
    size?: "sm" | "md" | "lg";
    variant?: "default" | "error";
    label?: string;
    hint?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
    label,
    hint,
    className,
    id,
    ...props
}: InputProps) {
    const inputId = id ?? React.useId();
    return (
        <div className="nds-field">
            {label && (
                <label htmlFor={inputId}>{label}</label>
            )}
            <input id={inputId} className={cn(className)} {...props} />
            {hint && (
                <span style={{ display: "block", marginTop: 6, fontSize: 10, color: "rgba(0,0,0,0.4)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {hint}
                </span>
            )}
        </div>
    );
}
