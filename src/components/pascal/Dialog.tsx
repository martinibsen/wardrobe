import * as React from "react";

type DialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    children: React.ReactNode;
};

export function Dialog({ open, onOpenChange, title, children }: DialogProps) {
    React.useEffect(() => {
        if (!open) return;
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onOpenChange(false);
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onOpenChange]);

    if (!open) return null;
    return (
        <div
            className="psc-dialog-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={title}
            onClick={(e) => {
                if (e.target === e.currentTarget) onOpenChange(false);
            }}
        >
            <div className="psc-dialog">
                <div className="psc-dialog__head">
                    <h2 className="psc-dialog__title">{title}</h2>
                    <button
                        type="button"
                        className="psc-dialog__close"
                        onClick={() => onOpenChange(false)}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                </div>
                <div className="psc-dialog__body">{children}</div>
            </div>
        </div>
    );
}
