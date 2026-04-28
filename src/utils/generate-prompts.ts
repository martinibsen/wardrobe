// Component sources are inlined at build-time via Vite's ?raw imports so the
// install/system pages don't depend on filesystem layout in the bundled output.

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

export type HyperComponentName = ComponentName;
export const HYPER_COMPONENTS = COMPONENT_NAMES;

const HYPER_SOURCES: Record<ComponentName, string> = {
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
};

const HYPER_FONT_IMPORT = `@import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");`;
const HYPER_ACTIVATION = `<div data-system="hyper">`;

const HYPER_TOKEN_HINTS: Partial<Record<ComponentName, string[]>> = {
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
};

export function getComponentCode(name: ComponentName): string {
    return HYPER_SOURCES[name];
}

export function getTokensCss(): string {
    return hyperTokensCssSrc;
}

export function getGlobalsCss(): string {
    return hyperGlobalsCssSrc;
}

export function getCnUtility(): string {
    return hyperCnSrc;
}

export function generateComponentPrompt(name: ComponentName): string {
    const code = HYPER_SOURCES[name];
    const cnCode = hyperCnSrc;
    const hints = HYPER_TOKEN_HINTS[name] ?? [];
    const tokensList = hints.length
        ? hints.map((tok) => `   ${tok}`).join("\n")
        : "   (see full theme block — copy the entire token list)";

    return `Add this Wardrobe Hyper ${name} to my project.

1. Create components/ui/wardrobe/${name}.tsx with the code below.
2. Make sure components/ui/wardrobe/cn.ts exists (utility shown at the bottom).
3. Add these CSS variables to your globals.css under [data-system="hyper"]:
${tokensList}
4. Add the font import to globals.css:
   ${HYPER_FONT_IMPORT}
5. Wrap any section using this component with ${HYPER_ACTIVATION}.

--- ${name}.tsx ---

${code}

--- cn.ts ---

${cnCode}
`;
}

export function generateThemeBlock(): string {
    return `${hyperTokensCssSrc}\n${HYPER_FONT_IMPORT}\n`;
}

export type InstallTarget = "claude-code" | "v0" | "lovable";

const TARGET_INTRO: Record<InstallTarget, string> = {
    "claude-code":
        `Install the Wardrobe Hyper theme in my project. I'm using Claude Code / Cursor. Apply every step below as written.`,
    v0:
        `Install the Wardrobe Hyper theme in this v0 project. Treat each step below as a concrete file or edit you must make.`,
    lovable:
        `Install the Wardrobe Hyper theme in my Lovable project. Each step below maps to a specific file or change.`,
};

export function generateFullInstallPrompt(target: InstallTarget): string {
    const intro = TARGET_INTRO[target];
    const componentBlocks = COMPONENT_NAMES.map(
        (name) =>
            `--- components/ui/wardrobe/${name}.tsx ---\n\n${HYPER_SOURCES[name]}`,
    ).join("\n\n");

    return `${intro}

Step 1 — Add this to globals.css:

${HYPER_FONT_IMPORT}

${hyperTokensCssSrc}

Step 2 — Create components/ui/wardrobe/cn.ts:

${hyperCnSrc}

Step 3 — Create the following 10 component files in components/ui/wardrobe/:

${componentBlocks}

Step 4 — Add globals.css component styles. Append the following to globals.css below the tokens:

${stripCssImports(hyperGlobalsCssSrc)}

Step 5 — Wrap the section/page you want themed with ${HYPER_ACTIVATION}:

  ${HYPER_ACTIVATION}
    <Button>HELLO HYPER</Button>
    <Card>...</Card>
  </div>

Done. Now <Button>, <Input>, <Card>, <Badge>, <Dialog>, <Tabs>, <Switch>, <Toast>, <Select>, <Textarea> render in Hyper.
`;
}

function stripCssImports(css: string): string {
    return css
        .split("\n")
        .filter((line) => !line.trim().startsWith("@import"))
        .join("\n")
        .trim();
}
