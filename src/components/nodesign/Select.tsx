import * as React from "react";
import { cn } from "./cn";

type Option = { value: string; label: string };

type SelectProps = {
    options: Option[];
    value: string;
    onValueChange: (value: string) => void;
    placeholder?: string;
    label?: string;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange">;

export function Select({
    options,
    value,
    onValueChange,
    placeholder,
    label,
    className,
    id,
    ...props
}: SelectProps) {
    const selectId = id ?? React.useId();
    return (
        <div className="nds-field">
            {label && <label htmlFor={selectId}>{label}</label>}
            <select
                id={selectId}
                className={cn(className)}
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
        </div>
    );
}
