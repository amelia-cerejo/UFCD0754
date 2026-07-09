---
name: Fluent Learning
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff3ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fd'
  surface-container-highest: '#d9e3f7'
  on-surface: '#121c2a'
  on-surface-variant: '#404752'
  inverse-surface: '#273140'
  inverse-on-surface: '#ebf1ff'
  outline: '#717783'
  outline-variant: '#c0c7d4'
  surface-tint: '#0060ab'
  primary: '#005faa'
  on-primary: '#ffffff'
  primary-container: '#0078d4'
  on-primary-container: '#ffffff'
  inverse-primary: '#a3c9ff'
  secondary: '#00668a'
  on-secondary: '#ffffff'
  secondary-container: '#40c2fd'
  on-secondary-container: '#004d6a'
  tertiary: '#0660a4'
  on-tertiary: '#ffffff'
  tertiary-container: '#3379bf'
  on-tertiary-container: '#ffffff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e3ff'
  primary-fixed-dim: '#a3c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a0c9ff'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#00497f'
  background: '#f9f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f7'
  background-subtle: '#F0F9FF'
  text-muted: '#6B7280'
  success-green: '#10B981'
  warning-amber: '#F59E0B'
  error-red: '#EF4444'
typography:
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: courierPrime
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 64px
  component-gap: 16px
---

## Brand & Style

The design system is built for an educational context, specifically focusing on digital literacy, email communication, and web research. The brand personality is professional, authoritative, and instructional, yet remains approachable and modern. It aims to evoke a sense of digital confidence, clarity, and productivity.

The design style is **Corporate / Modern**, heavily influenced by the Microsoft 365 and SaaS aesthetic. It prioritizes "scannability" and cognitive ease through:
- **Cleanliness:** High use of whitespace to prevent information overload.
- **Modernity:** Subtle depth through soft shadows and generous corner radii.
- **Instructional Hierarchy:** Consistent use of visual anchors (icons) and structured layouts to guide the learner through technical processes.

## Colors

The palette is anchored by "Outlook Blue," providing an immediate mental association with professional productivity tools. 

- **Primary (#0078D4):** Used for main actions, headers, and brand-defining elements.
- **Secondary (#38BDF8):** Used for accents, illustrative elements, and highlights within the blue spectrum.
- **Tertiary (#005EA2):** Reserved for interactive states like hover effects, active menu items, and status badges.
- **Neutral (#374151):** The primary color for typography to ensure high legibility against light backgrounds.
- **Background (#F0F9FF):** A very light blue tint used for page backgrounds to reduce eye strain compared to pure white.

Semantic colors (Success, Warning, Error) are used sparingly for "Key Ideas," "Common Errors," and "Security Alerts" to maintain the instructional flow.

## Typography

The typography system balances the impactful, modern geometry of **Montserrat** for headings with the high legibility and professional neutrality of **Source Sans 3** (a modern alternative to Segoe UI) for body content.

- **Headlines:** Use Montserrat to create a clear visual hierarchy between chapters and sub-sections.
- **Body:** Use Source Sans 3 for all instructional text. The `body-lg` variant is preferred for introductory paragraphs.
- **Technical Content:** Naming conventions and file formats (e.g., `2026-07-07_Relatorio`) must be set in **Courier Prime** to distinguish technical syntax from general prose.
- **Portuguese Language Support:** All chosen fonts support full diacritics required for Portuguese (Portugal).

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to ensure long-form educational content remains readable (preventing line lengths from becoming too wide).

- **Grid:** A 12-column grid is used for desktop layouts, while a single-column stack is used for mobile.
- **Rhythm:** An 8px base unit governs all spacing.
- **Sectioning:** Large gaps (`section-gap`) are used between major chapters (e.g., moving from "Email" to "Web Research").
- **Instructional Grouping:** Related items (like a "Key Idea" callout and its following paragraph) should be spaced tightly using `component-gap` to signify relationship.

## Elevation & Depth

This design system uses a **Tonal Layering** approach combined with **Ambient Shadows** to create a structured, "SaaS-like" depth.

- **Level 0 (Background):** Used for the main canvas, colored in `background-subtle` (#F0F9FF).
- **Level 1 (Cards/Content):** Pure white surfaces (#FFFFFF) that sit on the background. These carry a soft, diffused shadow (12% opacity, 16px blur) to appear "lifted."
- **Interactive States:** On hover, buttons and cards may increase their shadow spread slightly or deepen their color to provide tactile feedback.
- **Dividers:** Used sparingly. Instead of heavy lines, the system prefers using background color shifts or generous whitespace to separate content.

## Shapes

The shape language is friendly and modern, characterized by significant rounding that softens the "technical" nature of the manual.

- **Standard Elements:** Input fields, small buttons, and badges use the `rounded` (8px) setting.
- **Content Containers:** Educational cards and callout blocks use `rounded-xl` (24px) to create a distinct, friendly frame for information.
- **Visual Continuity:** Rounded corners should be applied consistently to images, tables (container borders), and selection states in menus.

## Components

### Buttons
- **Primary:** Solid `#0078D4` with white text. Rounded (8px). 
- **Secondary:** Outlined with `#0078D4` or a light tint background of `#F0F9FF`.
- **States:** Hover states should transition to `#005EA2`.

### Cards (Educational)
The primary vehicle for "Key Ideas" or "Process Steps." These must have a white background, 24px corner radius, and a soft shadow. They should include a 4px left-border accent in the primary or semantic color to indicate the type of content (e.g., Yellow for "Ideia-Chave").

### Inputs & Fields
Input fields should be clean with a light gray border that turns Primary Blue on focus. Labels sit above the field in `label-md`.

### Callouts / Alerts
Used for "Erros Comuns" and "Segurança." These use a light tinted background corresponding to the alert level (e.g., light red for security) and a 24px corner radius.

### Lists & Steps
Numbered lists for procedures should use a circular background for the digit in Primary Blue to act as a strong visual anchor.

### Tables
Tables should have rounded corners on the outer container. Header rows should have a subtle background (`#F0F9FF`) and bold text.