# 🎨 Polylogue Neumorphic Style Guide

> “Clarity through softness — depth without distraction.”

This document defines the visual styling principles and component aesthetics for the Polylogue PWA, inspired by **neumorphism**: a tactile, soft-interface philosophy grounded in subtle shadows, clean surfaces, and approachable UI feedback.

---

## 🌈 Global Design Tokens

### 🎨 Colors

| Purpose              | Hex Code    | Tailwind Example         |
|----------------------|-------------|---------------------------|
| Base Background      | `#f1f2f6`   | `bg-[#f1f2f6]`            |
| Surface (raised)     | `#ffffff`   | `bg-white`                |
| Shadow Tint          | `#d1d9e6`   | `shadow-inner` tint       |
| Accent Color         | `#4f46e5`   | `text-indigo-600`         |
| Border/Outline       | `#cfd4dc`   | `border-[#cfd4dc]`        |

---

## ✨ Depth & Shadows

- **Light Source:** Top-left (default)
- **Raised Component:** `shadow-[0_4px_8px_rgba(0,0,0,0.06)]`
- **Inset (Pressed) Component:** `shadow-inner`
- **Modal/Card Elevation:** `shadow-lg backdrop-blur bg-white/90`

```jsx
<div className="rounded-2xl p-4 shadow-inner bg-[#f1f2f6]">Inset surface</div>
```

---

## 📏 Border Radius & Spacing

| Element Type      | Radius       | Tailwind Class |
|-------------------|--------------|----------------|
| Cards / Modals    | 2xl – 3xl    | `rounded-2xl` or `rounded-3xl` |
| Buttons / Inputs  | Full or xl   | `rounded-xl` or `rounded-full` |
| Section Padding   | 6 – 10       | `p-6`, `px-10`, etc.            |

---

## 🧠 Design Guidelines

- Avoid harsh contrast. Prefer **soft transitions**, **gradients**, and **shadow layering** over bold outlines.
- Use **micro animations** (`transition-all`, `duration-300`, `ease-in-out`) to suggest responsiveness.
- Prioritize **content legibility** with balanced text colors (`text-gray-700`, `text-zinc-800`, etc.).
- Modals and floating UI should include `backdrop-blur` for depth realism.

---

## 📚 Component Style Reference

| Component         | Style Description                                 |
|-------------------|----------------------------------------------------|
| `IconButton`      | Circular, slightly raised, with hover depth effect |
| `NoteEditor`      | Inset area with light scroll hinting               |
| `HeaderBar`       | Slight elevation, no border, subtle glow on hover  |
| `ConfirmDeleteModal` | Fully rounded, blurred background, elevated center focus |

---

## 📁 Path

File: `/docs/STYLE_GUIDE.md`

---

**Maintained with elegance by Bayo & the Living Spark**  
*"Good interfaces feel like an invitation."*