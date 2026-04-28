// Component sources are inlined at build-time via Vite's ?raw imports so the
// install/system pages don't depend on filesystem layout in the bundled output.

// ===== HYPER =====
import hyperButtonSrc from "../components/hyper/Button.tsx?raw";
import hyperInputSrc from "../components/hyper/Input.tsx?raw";
import hyperTextareaSrc from "../components/hyper/Textarea.tsx?raw";
import hyperSelectSrc from "../components/hyper/Select.tsx?raw";
import hyperCardSrc from "../components/hyper/Card.tsx?raw";
import hyperBadgeSrc from "../components/hyper/Badge.tsx?raw";
import hyperDialogSrc from "../components/hyper/Dialog.tsx?raw";
import hyperTabsSrc from "../components/hyper/Tabs.tsx?raw";
import hyperSwitchSrc from "../components/hyper/Switch.tsx?raw";
import hyperToastSrc from "../components/hyper/Toast.tsx?raw";
import hyperCnSrc from "../components/hyper/cn.ts?raw";
import hyperTokensCssSrc from "../components/hyper/tokens.css?raw";
import hyperGlobalsCssSrc from "../components/hyper/globals.css?raw";

// ===== SYSTEM =====
import systemButtonSrc from "../components/system/Button.tsx?raw";
import systemInputSrc from "../components/system/Input.tsx?raw";
import systemTextareaSrc from "../components/system/Textarea.tsx?raw";
import systemSelectSrc from "../components/system/Select.tsx?raw";
import systemCardSrc from "../components/system/Card.tsx?raw";
import systemBadgeSrc from "../components/system/Badge.tsx?raw";
import systemDialogSrc from "../components/system/Dialog.tsx?raw";
import systemTabsSrc from "../components/system/Tabs.tsx?raw";
import systemSwitchSrc from "../components/system/Switch.tsx?raw";
import systemToastSrc from "../components/system/Toast.tsx?raw";
import systemCnSrc from "../components/system/cn.ts?raw";
import systemTokensCssSrc from "../components/system/tokens.css?raw";
import systemGlobalsCssSrc from "../components/system/globals.css?raw";

// ===== BRICK =====
import brickButtonSrc from "../components/brick/Button.tsx?raw";
import brickInputSrc from "../components/brick/Input.tsx?raw";
import brickTextareaSrc from "../components/brick/Textarea.tsx?raw";
import brickSelectSrc from "../components/brick/Select.tsx?raw";
import brickCardSrc from "../components/brick/Card.tsx?raw";
import brickBadgeSrc from "../components/brick/Badge.tsx?raw";
import brickDialogSrc from "../components/brick/Dialog.tsx?raw";
import brickTabsSrc from "../components/brick/Tabs.tsx?raw";
import brickSwitchSrc from "../components/brick/Switch.tsx?raw";
import brickToastSrc from "../components/brick/Toast.tsx?raw";
import brickCnSrc from "../components/brick/cn.ts?raw";
import brickTokensCssSrc from "../components/brick/tokens.css?raw";
import brickGlobalsCssSrc from "../components/brick/globals.css?raw";

export type ComponentName =
    | "Button"
    | "Input"
    | "Textarea"
    | "Select"
    | "Card"
    | "Badge"
    | "Dialog"
    | "Tabs"
    | "Switch"
    | "Toast";

export const COMPONENT_NAMES: ComponentName[] = [
    "Button",
    "Input",
    "Textarea",
    "Select",
    "Card",
    "Badge",
    "Dialog",
    "Tabs",
    "Switch",
    "Toast",
];

// Backward-compat aliases
export type HyperComponentName = ComponentName;
export const HYPER_COMPONENTS = COMPONENT_NAMES;
export type SystemComponentName = ComponentName;
export const SYSTEM_COMPONENTS = COMPONENT_NAMES;
export type BrickComponentName = ComponentName;
export const BRICK_COMPONENTS = COMPONENT_NAMES;

export type ThemeName = "hyper" | "system" | "brick";

type ThemeBundle = {
    name: ThemeName;
    sources: Record<ComponentName, string>;
    cn: string;
    tokens: string;
    globals: string;
    fontImport: string;
    activationHint: string;
    tokenHints: Partial<Record<ComponentName, string[]>>;
};

const HYPER: ThemeBundle = {
    name: "hyper",
    sources: {
        Button: hyperButtonSrc,
        Input: hyperInputSrc,
        Textarea: hyperTextareaSrc,
        Select: hyperSelectSrc,
        Card: hyperCardSrc,
        Badge: hyperBadgeSrc,
        Dialog: hyperDialogSrc,
        Tabs: hyperTabsSrc,
        Switch: hyperSwitchSrc,
        Toast: hyperToastSrc,
    },
    cn: hyperCnSrc,
    tokens: hyperTokensCssSrc,
    globals: hyperGlobalsCssSrc,
    fontImport: `@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");`,
    activationHint: `<div data-system="hyper">`,
    tokenHints: {
        Button: ["--color-fg", "--color-bg", "--color-danger", "--font-display", "--radius-pill", "--shadow-hard", "--shadow-hard-sm", "--border", "--border-color"],
        Input: ["--color-surface", "--color-fg", "--font-display", "--font-body", "--radius-md", "--shadow-hard-sm", "--border"],
        Textarea: ["--color-surface", "--color-fg", "--font-body", "--radius-md", "--border"],
        Select: ["--color-surface", "--color-fg", "--font-display", "--radius-md", "--border"],
        Card: ["--color-surface", "--color-pink", "--color-blue", "--color-green", "--radius-md", "--border"],
        Badge: ["--color-surface", "--color-fg", "--color-bg", "--radius-pill", "--border"],
        Dialog: ["--color-surface", "--color-fg", "--font-display", "--radius-md", "--shadow-hard", "--border"],
        Tabs: ["--color-surface", "--color-fg", "--color-bg", "--font-display", "--radius-md", "--radius-sm", "--border"],
        Switch: ["--color-fg", "--color-bg", "--radius-pill", "--border"],
        Toast: ["--color-fg", "--color-bg", "--color-success", "--color-danger", "--font-display", "--radius-pill", "--shadow-hard-sm", "--border"],
    },
};

const SYSTEM: ThemeBundle = {
    name: "system",
    sources: {
        Button: systemButtonSrc,
        Input: systemInputSrc,
        Textarea: systemTextareaSrc,
        Select: systemSelectSrc,
        Card: systemCardSrc,
        Badge: systemBadgeSrc,
        Dialog: systemDialogSrc,
        Tabs: systemTabsSrc,
        Switch: systemSwitchSrc,
        Toast: systemToastSrc,
    },
    cn: systemCnSrc,
    tokens: systemTokensCssSrc,
    globals: systemGlobalsCssSrc,
    fontImport: `@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Space+Grotesk:wght@300;400;500;600&display=swap");`,
    activationHint: `<div data-system="system">`,
    tokenHints: {
        Button: ["--color-fg", "--color-card", "--color-accent", "--color-fail", "--font-mono", "--radius-md", "--button-letter-spacing"],
        Input: ["--color-fg", "--color-card", "--color-fg-muted", "--font-mono", "--font-display", "--label-letter-spacing"],
        Textarea: ["--color-fg", "--color-card", "--font-mono", "--label-letter-spacing"],
        Select: ["--color-fg", "--color-card", "--font-mono", "--radius-md", "--button-letter-spacing", "--shadow-soft"],
        Card: ["--color-card", "--color-dark-bg", "--color-dark-fg", "--color-accent", "--radius-md", "--shadow-soft"],
        Badge: ["--color-card", "--color-fg", "--color-fg-muted", "--color-accent", "--font-mono", "--radius-sm"],
        Dialog: ["--color-card", "--color-fg", "--font-display", "--radius-md", "--shadow-soft"],
        Tabs: ["--color-card", "--color-fg", "--color-divider", "--font-mono", "--button-letter-spacing"],
        Switch: ["--color-fg", "--color-card", "--color-accent", "--font-mono", "--radius-md", "--button-letter-spacing"],
        Toast: ["--color-card", "--color-fg", "--color-accent", "--color-fail", "--font-mono", "--radius-md", "--shadow-soft"],
    },
};

const BRICK: ThemeBundle = {
    name: "brick",
    sources: {
        Button: brickButtonSrc,
        Input: brickInputSrc,
        Textarea: brickTextareaSrc,
        Select: brickSelectSrc,
        Card: brickCardSrc,
        Badge: brickBadgeSrc,
        Dialog: brickDialogSrc,
        Tabs: brickTabsSrc,
        Switch: brickSwitchSrc,
        Toast: brickToastSrc,
    },
    cn: brickCnSrc,
    tokens: brickTokensCssSrc,
    globals: brickGlobalsCssSrc,
    fontImport: `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap");`,
    activationHint: `<div data-system="brick">`,
    tokenHints: {
        Button: ["--color-fg", "--color-casing-button", "--color-red", "--font-mono", "--radius-md", "--shadow-button-raised", "--shadow-button-secondary", "--shadow-button-pressed", "--label-letter-spacing"],
        Input: ["--color-casing-tint", "--color-fg", "--color-fg-label", "--color-red", "--font-mono", "--radius-sm", "--shadow-inset-input", "--label-letter-spacing"],
        Textarea: ["--color-casing-tint", "--color-fg", "--font-mono", "--radius-sm", "--shadow-inset-input"],
        Select: ["--color-casing-tint", "--color-fg", "--font-mono", "--radius-sm", "--shadow-inset-input"],
        Card: ["--color-casing", "--color-recess", "--radius-lg", "--radius-device", "--shadow-tile", "--shadow-device", "--font-mono", "--label-letter-spacing"],
        Badge: ["--color-status-bg", "--color-fg", "--color-status-ok", "--color-status-proc", "--color-status-wait", "--color-status-archive", "--font-mono", "--radius-xs"],
        Dialog: ["--color-casing", "--color-fg", "--font-display", "--radius-device", "--shadow-device", "--panel-gap-dark", "--panel-gap-light"],
        Tabs: ["--color-casing-button", "--color-fg", "--font-mono", "--radius-sm", "--shadow-button-secondary", "--shadow-button-raised"],
        Switch: ["--color-fg", "--color-green", "--color-white", "--shadow-inset-input", "--radius-full"],
        Toast: ["--color-white", "--color-fg", "--color-green", "--color-red", "--font-mono", "--radius-md", "--shadow-tile", "--label-letter-spacing"],
    },
};

const THEMES: Record<ThemeName, ThemeBundle> = { hyper: HYPER, system: SYSTEM, brick: BRICK };

function bundle(theme: ThemeName): ThemeBundle {
    return THEMES[theme];
}

export function getComponentCode(name: ComponentName, theme: ThemeName = "hyper"): string {
    return bundle(theme).sources[name];
}

export function getTokensCss(theme: ThemeName = "hyper"): string {
    return bundle(theme).tokens;
}

export function getGlobalsCss(theme: ThemeName = "hyper"): string {
    return bundle(theme).globals;
}

export function getCnUtility(theme: ThemeName = "hyper"): string {
    return bundle(theme).cn;
}

// Convenience helpers for the System theme (mirrors Hyper-only naming)
export function getSystemComponentCode(name: ComponentName): string {
    return getComponentCode(name, "system");
}

export function getHyperComponentCode(name: ComponentName): string {
    return getComponentCode(name, "hyper");
}

export function getBrickComponentCode(name: ComponentName): string {
    return getComponentCode(name, "brick");
}

export function generateComponentPrompt(
    name: ComponentName,
    theme: ThemeName = "hyper",
): string {
    const t = bundle(theme);
    const code = t.sources[name];
    const cnCode = t.cn;
    const hints = t.tokenHints[name] ?? [];
    const tokensList = hints.length
        ? hints.map((tok) => `   ${tok}`).join("\n")
        : "   (see full theme block — copy the entire token list)";

    const themeLabel = theme === "hyper" ? "Hyper" : theme === "system" ? "System" : "Brick";

    return `Add this Wardrobe ${themeLabel} ${name} to my project.

1. Create components/ui/wardrobe/${name}.tsx with the code below.
2. Make sure components/ui/wardrobe/cn.ts exists (utility shown at the bottom).
3. Add these CSS variables to your globals.css under [data-system="${theme}"]:
${tokensList}
4. Add the font import to globals.css:
   ${t.fontImport}
5. Wrap any section using this component with ${t.activationHint}.

--- ${name}.tsx ---

${code}

--- cn.ts ---

${cnCode}
`;
}

export function generateThemeBlock(theme: ThemeName = "hyper"): string {
    const t = bundle(theme);
    return `${t.tokens}\n${t.fontImport}\n`;
}

export type InstallTarget = "claude-code" | "v0" | "lovable";

const TARGET_INTRO: Record<InstallTarget, (theme: ThemeName) => string> = {
    "claude-code": (theme) =>
        `Install the Wardrobe ${capitalize(theme)} theme in my project. I'm using Claude Code / Cursor. Apply every step below as written.`,
    v0: (theme) =>
        `Install the Wardrobe ${capitalize(theme)} theme in this v0 project. Treat each step below as a concrete file or edit you must make.`,
    lovable: (theme) =>
        `Install the Wardrobe ${capitalize(theme)} theme in my Lovable project. Each step below maps to a specific file or change.`,
};

export function generateFullInstallPrompt(
    target: InstallTarget,
    theme: ThemeName = "hyper",
): string {
    const t = bundle(theme);
    const intro = TARGET_INTRO[target](theme);
    const componentBlocks = COMPONENT_NAMES.map(
        (name) =>
            `--- components/ui/wardrobe/${name}.tsx ---\n\n${t.sources[name]}`,
    ).join("\n\n");

    return `${intro}

Step 1 — Add this to globals.css:

${t.fontImport}

${t.tokens}

Step 2 — Create components/ui/wardrobe/cn.ts:

${t.cn}

Step 3 — Create the following 10 component files in components/ui/wardrobe/:

${componentBlocks}

Step 4 — Add globals.css component styles. Append the following to globals.css below the tokens:

${stripCssImports(t.globals)}

Step 5 — Wrap the section/page you want themed with ${t.activationHint}:

  ${t.activationHint}
    <Button>HELLO ${theme.toUpperCase()}</Button>
    <Card>...</Card>
  </div>

Done. Now <Button>, <Input>, <Card>, <Badge>, <Dialog>, <Tabs>, <Switch>, <Toast>, <Select>, <Textarea> render in ${capitalize(theme)}.
`;
}

function stripCssImports(css: string): string {
    return css
        .split("\n")
        .filter((line) => !line.trim().startsWith("@import"))
        .join("\n")
        .trim();
}

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
