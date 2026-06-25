# Preloader Redesign — Techy Glitch with Terminal Boot Sequence

**Date:** 2026-06-25  
**Status:** Approved

---

## Goal

Replace the plain black preloader (small dim text on a black screen) with a visually punchy developer-themed preloader that matches the portfolio's existing dark + blue color palette.

---

## Visual Design

The preloader fills the full screen with `bg-gray-900`. It divides into two vertical zones.

**Top zone (60% of screen) — Terminal panel**

A monospace terminal panel with a dim `blue-400/20` top border and a blinking `>_` label. Five boot lines appear one by one, each prefixed with `>` in `blue-400`:

```
> Initializing portfolio...          [OK]
> Loading modules...                 [OK]
> Connecting to servers...           [OK]
> Compiling assets...                [OK]
> System ready. Launching...         [DONE]
```

Each line slides in from the left and fades in. The `[OK]` / `[DONE]` tag appears in `green-400` 200ms after its line, simulating a build log resolving.

**Bottom zone (40% of screen) — Glitch greetings**

The existing eight multilingual greetings cycle in large bold text (`text-6xl font-black`). Each greeting enters with an 80ms RGB glitch effect — red shadow offset left, cyan shadow offset right via CSS `text-shadow` — then snaps to clean white. The bottom zone fades in when the terminal phase ends.

---

## Timing Sequence

| Phase | Start | Duration | Action |
|---|---|---|---|
| Terminal lines stagger in | 0s | 2.5s | 5 lines × 500ms stagger |
| `[OK]` tags resolve | per line | +200ms | Green tag appears after each line |
| Bottom zone fades in | 2.5s | 300ms | Greeting cycle begins |
| Greetings cycle | 2.5s | 1.5s | 8 words × ~180ms |
| Exit fade | 4s | 500ms | Screen fades to black, `onComplete()` fires |

Total preloader duration: ~4.5 seconds.

---

## Component Structure

`Preloader.tsx` remains a single component. No new dependencies — Framer Motion is already installed.

### State

| State | Type | Purpose |
|---|---|---|
| `lineIndex` | `number` | How many terminal lines are visible (0–5) |
| `greetingIndex` | `number` | Which greeting word is showing |
| `phase` | `"terminal" \| "greetings" \| "exit"` | Drives which zone renders |
| `showPreloader` | `boolean` | Controls `AnimatePresence` mount |

### Data

```ts
const terminalLines = [
  { text: "Initializing portfolio...", tag: "OK" },
  { text: "Loading modules...",        tag: "OK" },
  { text: "Connecting to servers...",  tag: "OK" },
  { text: "Compiling assets...",       tag: "OK" },
  { text: "System ready. Launching...", tag: "DONE" },
];

const greetings = [
  "Hello", "こんにちは", "Hola", "안녕하세요",
  "Bonjour", "Привет", "Ciao", "ನಮಸ್ಕಾರ",
];
```

### Logic

1. On mount, start a `setInterval` every 500ms that increments `lineIndex` up to 5.
2. When `lineIndex` reaches 5 (at ~2.5s), clear the interval and set `phase = "greetings"`.
3. Start a second interval every 180ms cycling `greetingIndex` through the greetings array.
4. After all greetings cycle (~1.5s), set `phase = "exit"`, set `showPreloader = false`, call `onComplete()`.

### Glitch Effect

Add a `@keyframes glitch` rule to `globals.css`:

```css
@keyframes glitch {
  0%   { text-shadow: -3px 0 red, 3px 0 cyan; clip-path: inset(10% 0 80% 0); }
  20%  { text-shadow: 3px 0 red, -3px 0 cyan; clip-path: inset(60% 0 20% 0); }
  40%  { text-shadow: -2px 0 red, 2px 0 cyan; clip-path: inset(30% 0 50% 0); }
  60%  { text-shadow: 2px 0 red, -2px 0 cyan; }
  80%  { text-shadow: none; }
  100% { text-shadow: none; clip-path: none; }
}

.glitch {
  animation: glitch 0.08s steps(1) forwards;
}
```

Apply the `.glitch` class to the greeting `<span>` on each mount (keyed by `greetingIndex`), so it fires once per word change.

### Exit

The outer `<motion.div>` keeps the existing `exit={{ opacity: 0, transition: { duration: 0.5 } }}` inside `AnimatePresence`. Setting `showPreloader = false` triggers this fade, then `onComplete()` fires so the site fades in via its existing `motion.div` in `page.tsx`.

---

## Files Changed

| File | Change |
|---|---|
| `src/components/Preloader.tsx` | Full rewrite of component internals |
| `src/styles/globals.css` | Add `@keyframes glitch` and `.glitch` class |

No new packages. No changes to `page.tsx` or any other file.

---

## Success Criteria

- Terminal lines appear one by one with green `[OK]` tags
- Greetings cycle with a visible glitch flash on each word
- Total duration is ~4.5 seconds
- Colors match the portfolio: `gray-900` background, `blue-400` prompts, `green-400` tags, white greeting text
- Exit is a smooth fade to black before the Hero section appears
