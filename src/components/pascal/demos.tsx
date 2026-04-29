import * as React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { Dialog } from "./Dialog";
import { Tabs } from "./Tabs";
import { Switch } from "./Switch";
import { Toast } from "./Toast";

export function ButtonDemo() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Button variant="primary">FILE ENTRY</Button>
            <Button variant="secondary">CANCEL</Button>
            <Button variant="destructive">PURGE</Button>
            <Button variant="ghost">SKIP</Button>
            <Button variant="primary" size="sm">SM</Button>
            <Button variant="primary" size="lg">LG</Button>
        </div>
    );
}

export function InputDemo() {
    const [val, setVal] = React.useState("");
    return (
        <div style={{ display: "grid", gap: 20, width: "100%", maxWidth: 420 }}>
            <Input fieldCode="FLD_01" label="ENTRY_TITLE" placeholder="brutalist_grids" value={val} onChange={(e) => setVal(e.target.value)} />
            <Input fieldCode="FLD_02" label="CATEGORY" placeholder="theory · design · code" />
            <Input fieldCode="FLD_03" label="REVISION" placeholder="v4.02.b" hint="format: vN.NN.x" />
        </div>
    );
}

export function TextareaDemo() {
    return (
        <Textarea
            fieldCode="FLD_BODY"
            label="LOG_BODY"
            placeholder="paste manifest. plain text only."
            hint="Plain text. Markdown coming."
        />
    );
}

export function SelectDemo() {
    const [val, setVal] = React.useState("theory");
    return (
        <div style={{ maxWidth: 320 }}>
            <Select
                value={val}
                onValueChange={setVal}
                options={[
                    { value: "theory", label: "THEORY" },
                    { value: "design", label: "DESIGN" },
                    { value: "code", label: "CODE" },
                    { value: "essay", label: "ESSAY" },
                ]}
            />
        </div>
    );
}

export function CardDemo() {
    return (
        <div className="psc-grid" style={{ gridTemplateColumns: "1fr 1fr", padding: 0 }}>
            <Card>
                <span className="psc-label-tiny">DOCUMENT_ID</span>
                <span className="psc-mono" style={{ fontWeight: 600 }}>MANIFESTO_01</span>
            </Card>
            <Card variant="mint">
                <span className="psc-label-tiny">STATUS</span>
                <span className="psc-mono" style={{ fontWeight: 600 }}>LIVE_NODE</span>
            </Card>
            <Card variant="pink">
                <span className="psc-label-tiny">CATEGORY</span>
                <span className="psc-mono" style={{ fontWeight: 600 }}>THEORY</span>
            </Card>
            <Card variant="ink">
                <span className="psc-label-tiny" style={{ opacity: 0.7 }}>REV</span>
                <span className="psc-mono" style={{ fontWeight: 600 }}>v4.02.b</span>
            </Card>
        </div>
    );
}

export function BadgeDemo() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Badge>OPEN</Badge>
            <Badge variant="mint">LIVE_NODE</Badge>
            <Badge variant="pink">CRITICAL</Badge>
            <Badge variant="ink">STABLE</Badge>
        </div>
    );
}

export function DialogDemo() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setOpen(true)}>OPEN DIALOG</Button>
            <Dialog open={open} onOpenChange={setOpen} title="CONFIRM PURGE">
                <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.5 }}>
                    This entry will be permanently removed from the archive.
                    No revisions retained.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                    <Button variant="destructive" onClick={() => setOpen(false)}>CONFIRM</Button>
                    <Button variant="ghost" onClick={() => setOpen(false)}>CANCEL</Button>
                </div>
            </Dialog>
        </>
    );
}

export function TabsDemo() {
    const [active, setActive] = React.useState("entries");
    return (
        <Tabs
            tabs={[
                { id: "entries", label: "ENTRIES" },
                { id: "tags", label: "TAGS" },
                { id: "stats", label: "STATS" },
                { id: "system", label: "SYSTEM" },
            ]}
            activeId={active}
            onTabChange={setActive}
        />
    );
}

export function SwitchDemo() {
    const [on, setOn] = React.useState(true);
    return <Switch checked={on} onCheckedChange={setOn} label="AUTO_ARCHIVE" />;
}

export function ToastDemo() {
    return (
        <div style={{ display: "grid", gap: 12, maxWidth: 320 }}>
            <Toast title="ENTRY FILED" description="Log #088 — BRUTALIST_GRIDS." variant="success" />
            <Toast title="CONNECTION_LOST" description="Sync paused. Retry pending." variant="error" />
        </div>
    );
}
