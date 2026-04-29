import * as React from "react";
import { cn } from "./cn";

type TabsProps = {
    tabs: Array<{ id: string; label: string }>;
    activeId: string;
    onTabChange: (id: string) => void;
};

export function Tabs({ tabs, activeId, onTabChange }: TabsProps) {
    return (
        <div
            className="psc-tabs"
            role="tablist"
            style={{ ["--psc-tab-count" as string]: tabs.length }}
        >
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={tab.id === activeId}
                    className={cn("psc-tab", tab.id === activeId && "is-active")}
                    onClick={() => onTabChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
