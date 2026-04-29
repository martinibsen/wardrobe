import * as React from "react";
import { cn } from "./cn";

type Option = { value: string; label: string };

type SelectProps = {
    options: Option[];
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange">;

export function Select({
    options,
    value,
    onValueChange,
    placeholder,
    className,
    ...props
}: SelectProps) {
    return (
        <select
            className={cn("psc-field__input", className)}
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            {...props}
        >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
}
