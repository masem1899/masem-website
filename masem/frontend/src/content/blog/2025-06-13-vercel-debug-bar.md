---
title: Introducing vercel-debug-bar
slug: vercel-debug-bar
date: 2025-06-14
---

We're excited to release **vercel-debug-bar** — a lightweight developer overlay for inspecting [Vercel](https://vercel.com) feature flags, Web Analytics, and Core Web Vitals in real time.

### 🔍 What it does

- 📊 Displays Core Web Vitals (FCP, LCP, CLS, INP)
- 🧪 Shows feature flags set via `window.__vercelAnalyticsFlags`
- ⚡ Detects Vercel Web Analytics + Speed Insights status
- 🪟 Lets you position the bar in any corner of the screen
- 💡 Expand to view detailed performance data with color-coded badges

### 🧰 Built for developers

It's styled with TailwindCSS, plug-and-play for React, and easily toggled on or off in your development stack. Ideal for debugging A/B tests, measuring vitals during staging, or impressing your coworkers with a clean performance HUD.

### 📦 Install

```bash
npm install vercel-debug-bar
```

```tsx
import { VercelDebugBar } from 'vercel-debug-bar';

function App() {
  return (
    <>
      <YourApp />
      <VercelDebugBar />
    </>
  );
}
```

![Preview of vercel-debug-bar good](./assets/blog/vercel-debug-bar-preview-1.PNG)
![Preview of vercel-debug-bar collapsed](./assets/blog/vercel-debug-bar-preview-2.PNG)
![Preview of vercel-debug-bar poor](./assets/blog/vercel-debug-bar-preview-3.PNG)

Give it a try and let us know what you think!