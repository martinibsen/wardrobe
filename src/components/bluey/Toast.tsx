import * as React from "react";
import { cn } from "./cn";

type ToastProps = {
    title: string;
    description?: string;
    variant?: "default" | "success" | "error";
};

export function Toast({ title, description, variant = "default" }: ToastProps) {
    return (
        <div
            className={cn(
                "bly-toast",
                variant !== "default" && `bly-toast--${variant}`,
            )}
            role="status"
            aria-live="polite"
        >
            <span className="bly-toast__title">{title}</span>
            {description && <span className="bly-toast__desc">{description}</span>}
        </div>
    );
}
