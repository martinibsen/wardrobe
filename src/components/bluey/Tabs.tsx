import * as React from "react";
import { cn } from "./cn";

type TabsProps = {
    tabs: Array<{ id: string; label: string }>;
    activeId: string;
    onTabChange: (id: string) => void;
};

export function Tabs({ tabs, activeId, onTabChange }: TabsProps) {
    return (
        <div className="bly-tabs" role="tablist">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={tab.id === activeId}
                    className={cn("bly-tab", tab.id === activeId && "is-active")}
                    onClick={() => onTabChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
