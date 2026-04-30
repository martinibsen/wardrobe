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
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
            <Button variant="primary">Send inquiry</Button>
            <Button variant="secondary">Cancel</Button>
            <Button variant="ghost">Skip</Button>
            <Button variant="primary" size="sm">SM</Button>
            <Button variant="primary" size="lg">LG</Button>
        </div>
    );
}

export function InputDemo() {
    const [val, setVal] = React.useState("");
    return (
        <div style={{ display: "grid", gap: 32, width: "100%", maxWidth: 380 }}>
            <Input label="Name" placeholder="Your name" value={val} onChange={(e) => setVal(e.target.value)} />
            <Input label="Email" type="email" placeholder="you@something.dev" />
            <Input label="Subject" placeholder="Brief context" hint="Optional" />
        </div>
    );
}

export function TextareaDemo() {
    return (
        <div style={{ width: "100%", maxWidth: 380 }}>
            <Textarea label="Message" placeholder="Brief, please." />
        </div>
    );
}

export function SelectDemo() {
    const [val, setVal] = React.useState("residential");
    return (
        <div style={{ width: "100%", maxWidth: 320 }}>
            <Select
                label="Project type"
                value={val}
                onValueChange={setVal}
                options={[
                    { value: "residential", label: "Residential" },
                    { value: "commercial", label: "Commercial" },
                    { value: "cultural", label: "Cultural" },
                    { value: "other", label: "Other" },
                ]}
            />
        </div>
    );
}

export function CardDemo() {
    return (
        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr", width: "100%" }}>
            <Card>
                <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)" }}>Project</span>
                <p style={{ marginTop: 14, fontSize: 18, lineHeight: 1.4, letterSpacing: "-0.01em" }}>Void House</p>
                <p style={{ marginTop: 8, fontSize: 11, color: "rgba(0,0,0,0.4)" }}>2023</p>
            </Card>
            <Card variant="ghost">
                <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)" }}>Status</span>
                <p style={{ marginTop: 14, fontSize: 18, lineHeight: 1.4 }}>Built</p>
            </Card>
        </div>
    );
}

export function BadgeDemo() {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Badge>2024</Badge>
            <Badge variant="solid">Built</Badge>
            <Badge variant="soft">Concept</Badge>
        </div>
    );
}

export function DialogDemo() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button variant="primary" onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog open={open} onOpenChange={setOpen} title="Send inquiry">
                <p style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(0,0,0,0.7)" }}>
                    Brief, please. We respond on Tuesday mornings.
                </p>
                <div style={{ display: "flex", gap: 24, marginTop: 24 }}>
                    <Button variant="primary" onClick={() => setOpen(false)}>Send</Button>
                    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
                </div>
            </Dialog>
        </>
    );
}

export function TabsDemo() {
    const [active, setActive] = React.useState("residential");
    return (
        <Tabs
            tabs={[
                { id: "residential", label: "Residential" },
                { id: "commercial", label: "Commercial" },
                { id: "cultural", label: "Cultural" },
            ]}
            activeId={active}
            onTabChange={setActive}
        />
    );
}

export function SwitchDemo() {
    const [on, setOn] = React.useState(true);
    return <Switch checked={on} onCheckedChange={setOn} label="Magnetic hover" />;
}

export function ToastDemo() {
    return (
        <div style={{ display: "grid", gap: 18, maxWidth: 320 }}>
            <Toast title="Inquiry sent" description="We'll respond on Tuesday." variant="success" />
            <Toast title="Connection lost" description="Try again in a moment." variant="error" />
        </div>
    );
}
