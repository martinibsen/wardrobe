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
            <Button variant="primary" size="md">Run Validation →</Button>
            <Button variant="secondary" size="md">Export Report</Button>
            <Button variant="ghost" size="md">Cancel</Button>
            <Button variant="primary" size="sm">SM</Button>
            <Button variant="primary" size="lg">LG</Button>
        </div>
    );
}

export function InputDemo() {
    const [val, setVal] = React.useState("");
    return (
        <div style={{ display: "grid", gap: 16, width: "100%", maxWidth: 420 }}>
            <Input label="PROBLEM_ID" placeholder="e.g. checkout-flow-drop" value={val} onChange={(e) => setVal(e.target.value)} />
            <Input label="HYPOTHESIS" placeholder="What's the friction point?" hint="Be specific. One assumption per row." />
            <Input label="ERROR" variant="error" placeholder="invalid format" defaultValue="—" />
        </div>
    );
}

export function TextareaDemo() {
    return (
        <Textarea
            label="EVIDENCE NOTES"
            placeholder="Paste or describe supporting data sources…"
            hint="Markdown supported."
        />
    );
}

export function SelectDemo() {
    const [val, setVal] = React.useState("engineering");
    return (
        <div style={{ maxWidth: 320 }}>
            <Select
                value={val}
                onValueChange={setVal}
                options={[
                    { value: "engineering", label: "Engineering" },
                    { value: "product", label: "Product" },
                    { value: "cs", label: "Customer Success" },
                    { value: "growth", label: "Growth" },
                ]}
            />
        </div>
    );
}

export function CardDemo() {
    return (
        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "1fr 1fr" }}>
            <Card>
                <span className="bly-mono-label">Risk Assessment</span>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "0.75rem", marginTop: "0.75rem" }}>
                    <span style={{ fontWeight: 600 }}>Implementation</span>
                    <Badge variant="med">Medium</Badge>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: "0.75rem" }}>
                    <span style={{ fontWeight: 600 }}>Impact</span>
                    <Badge variant="high">High</Badge>
                </div>
            </Card>
            <Card variant="score">
                <span className="bly-score-meta">Overall Confidence</span>
                <div className="bly-score-big">72</div>
                <div className="bly-score-conviction">High Conviction</div>
            </Card>
        </div>
    );
}

export function BadgeDemo() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Badge variant="validated">Validated</Badge>
            <Badge variant="needs-work">Needs Work</Badge>
            <Badge variant="rejected">Rejected</Badge>
            <Badge variant="high">High</Badge>
            <Badge variant="med">Medium</Badge>
            <Badge>Default</Badge>
        </div>
    );
}

export function DialogDemo() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setOpen(true)}>Open Dialog</Button>
            <Dialog open={open} onOpenChange={setOpen} title="Synthesize Solution">
                <p style={{ opacity: 0.75, lineHeight: 1.5 }}>
                    Combine evidence from all 3 perspectives into a recommended next step.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                    <Button variant="primary" onClick={() => setOpen(false)}>Run Synthesis</Button>
                    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                </div>
            </Dialog>
        </>
    );
}

export function TabsDemo() {
    const [active, setActive] = React.useState("engineering");
    return (
        <Tabs
            tabs={[
                { id: "engineering", label: "Engineering" },
                { id: "product", label: "Product" },
                { id: "cs", label: "Customer Success" },
            ]}
            activeId={active}
            onTabChange={setActive}
        />
    );
}

export function SwitchDemo() {
    const [on, setOn] = React.useState(true);
    return <Switch checked={on} onCheckedChange={setOn} label="Auto-sync evidence sources" />;
}

export function ToastDemo() {
    return (
        <div style={{ display: "grid", gap: 12, maxWidth: 320 }}>
            <Toast title="Validation complete" description="Score: 72 — High Conviction." variant="success" />
            <Toast title="Source unreachable" description="Sentry connector returned 504." variant="error" />
        </div>
    );
}
