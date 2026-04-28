import * as React from "react";
import { cn } from "./cn";

export type ToastVariant = "default" | "success" | "error";

export type ToastProps = {
    title: string;
    description?: string;
    variant?: ToastVariant;
    timestamp?: string;
};

type ToastEntry = ToastProps & { id: number };

type ToastContextValue = {
    show: (toast: ToastProps) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast() {
    const ctx = React.useContext(ToastContext);
    if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
    return ctx;
}

function defaultTime() {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = React.useState<ToastEntry[]>([]);
    const idRef = React.useRef(0);

    const show = React.useCallback((toast: ToastProps) => {
        const id = ++idRef.current;
        setToasts((prev) => [
            ...prev,
            { timestamp: defaultTime(), ...toast, id },
        ]);
        window.setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 4000);
    }, []);

    return (
        <ToastContext.Provider value={{ show }}>
            {children}
            <div
                className="brk-toast-region"
                role="region"
                aria-label="Notifications"
                aria-live="polite"
            >
                {toasts.map((t) => (
                    <Toast key={t.id} {...t} />
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function Toast({
    title,
    description,
    variant = "default",
    timestamp,
}: ToastProps) {
    return (
        <div
            className={cn(
                "brk-toast",
                variant === "success" && "brk-toast--success",
                variant === "error" && "brk-toast--error",
            )}
            role="status"
        >
            <span className="brk-toast__title">[ {title} ]</span>
            {description && (
                <span className="brk-toast__desc">{description}</span>
            )}
            {timestamp && <span className="brk-toast__time">{timestamp}</span>}
        </div>
    );
}
