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
import { Toast, ToastProvider, useToast } from "./Toast";

export function ButtonDemo() {
    return (
        <>
            <Button variant="primary" size="md">
                [ EXECUTE ]
            </Button>
            <Button variant="secondary" size="md">
                [ CANCEL ]
            </Button>
            <Button variant="destructive" size="md">
                [ DELETE ]
            </Button>
            <Button variant="primary" size="sm">
                [ SM ]
            </Button>
            <Button variant="primary" size="lg">
                [ LG ]
            </Button>
        </>
    );
}

export function InputDemo() {
    const [val, setVal] = React.useState("");
    return (
        <div style={{ display: "grid", gap: 20, width: "100%", maxWidth: 420 }}>
            <Input
                label="ORDER_ID"
                placeholder="RX-0000"
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
            <Input
                label="QTY"
                hint="Out of range — max 9,999"
                variant="error"
                defaultValue="99,999"
            />
            <Input label="STATION" defaultValue="44-09" />
        </div>
    );
}

export function TextareaDemo() {
    return (
        <div style={{ width: "100%", maxWidth: 420 }}>
            <Textarea
                label="REQUISITION_NOTES"
                placeholder="Add details for the line operator…"
                defaultValue=""
            />
        </div>
    );
}

export function SelectDemo() {
    const [v, setV] = React.useState("standard");
    return (
        <div style={{ width: "100%", maxWidth: 320 }}>
            <Select
                label="SPEC_REF"
                value={v}
                onValueChange={setV}
                options={[
                    { value: "standard", label: "2x4 STANDARD" },
                    { value: "heavy", label: "4x4 HEAVY" },
                    { value: "pivot", label: "1x1 PIVOT" },
                ]}
            />
        </div>
    );
}

export function CardDemo() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
                width: "100%",
            }}
        >
            <Card modelNumber="3001-R">
                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--color-fg-label)",
                        marginBottom: 8,
                    }}
                >
                    UNIT COUNT
                </div>
                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 28,
                        fontWeight: 700,
                        color: "var(--color-red)",
                    }}
                >
                    1,200
                </div>
            </Card>
            <Card variant="recessed" modelNumber="3002-B">
                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--color-fg-label)",
                        marginBottom: 8,
                    }}
                >
                    QUEUED
                </div>
                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 28,
                        fontWeight: 700,
                        color: "var(--color-blue)",
                    }}
                >
                    08
                </div>
            </Card>
            <Card variant="device" modelNumber="MK-1">
                <div
                    style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        fontSize: 18,
                        letterSpacing: "-0.02em",
                        marginBottom: 6,
                    }}
                >
                    Device frame
                </div>
                <div
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--color-fg-muted)",
                    }}
                >
                    used for hero sections
                </div>
            </Card>
        </div>
    );
}

export function BadgeDemo() {
    return (
        <>
            <Badge variant="ok">DELIVERED</Badge>
            <Badge variant="proc">IN_TRANSIT</Badge>
            <Badge variant="wait">QUEUED</Badge>
            <Badge variant="archive">ARCHIVED</Badge>
            <Badge variant="filled">SYSTEM</Badge>
        </>
    );
}

export function DialogDemo() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>[ OPEN_PROMPT ]</Button>
            <Dialog
                open={open}
                onOpenChange={setOpen}
                title="Confirm requisition"
                modelNumber="REQ.01-B"
            >
                <p
                    style={{
                        marginTop: 0,
                        lineHeight: 1.55,
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "var(--color-fg-muted)",
                    }}
                >
                    Submit the requisition to STATION-44-09. Allocations are
                    reserved on submit; cancellations require operator approval.
                </p>
                <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                    <Button onClick={() => setOpen(false)}>[ EXECUTE ]</Button>
                    <Button variant="secondary" onClick={() => setOpen(false)}>
                        [ CANCEL ]
                    </Button>
                </div>
            </Dialog>
        </>
    );
}

export function TabsDemo() {
    const [tab, setTab] = React.useState("all");
    return (
        <Tabs
            tabs={[
                { id: "all", label: "ALL_SIZES" },
                { id: "1x2", label: "1×2" },
                { id: "2x2", label: "2×2" },
                { id: "2x4", label: "2×4" },
            ]}
            activeId={tab}
            onTabChange={setTab}
        />
    );
}

export function SwitchDemo() {
    const [a, setA] = React.useState(true);
    const [b, setB] = React.useState(false);
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Switch checked={a} onCheckedChange={setA} label="Auto-archive logs" />
            <Switch checked={b} onCheckedChange={setB} label="Notify on dispatch" />
        </div>
    );
}

function ToastDemoInner() {
    const { show } = useToast();
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Button
                onClick={() =>
                    show({
                        title: "DELIVERED",
                        description: "Order RX-8821 received at station-44-09.",
                        variant: "success",
                    })
                }
            >
                [ SUCCESS ]
            </Button>
            <Button
                variant="destructive"
                onClick={() =>
                    show({
                        title: "FAULT",
                        description: "Could not reach line operator.",
                        variant: "error",
                    })
                }
            >
                [ ERROR ]
            </Button>
            <Button
                variant="secondary"
                onClick={() =>
                    show({
                        title: "QUEUED",
                        description: "Awaiting allocation.",
                    })
                }
            >
                [ DEFAULT ]
            </Button>
        </div>
    );
}

export function ToastDemo() {
    return (
        <ToastProvider>
            <ToastDemoInner />
        </ToastProvider>
    );
}

export { Toast };
