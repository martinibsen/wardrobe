import * as React from "react";

type SwitchProps = {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    label?: string;
};

export function Switch({ checked, onCheckedChange, label }: SwitchProps) {
    return (
        <label className="psc-switch" data-checked={checked}>
            <span className="psc-switch__track">
                <span className="psc-switch__thumb" />
            </span>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onCheckedChange(e.target.checked)}
                style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
            />
            {label && <span>{label}</span>}
        </label>
    );
}
