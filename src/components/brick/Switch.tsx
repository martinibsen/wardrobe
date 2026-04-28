import * as React from "react";

type SwitchProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    label?: string;
    id?: string;
};

export function Switch({ checked, onCheckedChange, label, id }: SwitchProps) {
    const inputId = id ?? React.useId();
    return (
        <label className="brk-switch" htmlFor={inputId}>
            <input
                id={inputId}
                type="checkbox"
                role="switch"
                checked={checked}
                onChange={(e) => onCheckedChange(e.target.checked)}
                className="brk-switch__input"
            />
            <span className="brk-switch__track">
                <span className="brk-switch__thumb" />
            </span>
            {label && <span>{label}</span>}
        </label>
    );
}
