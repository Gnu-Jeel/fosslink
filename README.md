# Fosslink 

A modern, responsive Astro website with Tailwind CSS and Alpine.js integration.

## 🚀 Features

- [Astro](https://astro.build/) - The web framework for content-driven websites
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Alpine.js](https://alpinejs.dev/) - Lightweight JavaScript framework for interactivity
- Responsive design system with custom color palette
- Dark mode support
- Smooth page transitions
- Performance optimized
- SEO-friendly

## 📦 Project Structure

```text
/
├── public/             # Static assets
│   └── favicon.svg
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable UI components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page routes
│   ├── scripts/        # JavaScript utilities
│   └── styles/         # Global styles
│       ├── global.css
│       └── transitions.css
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── package.json        # Project dependencies
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Customization

### Colors

The template includes a custom color palette defined in `tailwind.config.mjs`:

- Primary: Purple-based color scheme
- Secondary: Slate-based color scheme
- Accent: Lime-based color scheme
- Warning: Yellow-based color scheme

You can customize these colors by editing the `tailwind.config.mjs` file.

### Typography

The template uses the following font families:

- Sans: Inter (with system fallbacks)
- Display: Lexend (with system fallbacks)

### Animations

Custom animations are included:
- Fade In
- Slide Up
- Slide Down

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies with `npm install` or `pnpm install`
3. Start the development server with `npm run dev` or `pnpm dev`
4. Visit `http://localhost:4321` to see your site

### Contact form configuration

The contact form sends submissions through the server endpoint at `/api/contact`, which forwards them to Google Apps Script. Copy `.env.example` to `.env` and set both values before testing locally:

```env
GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/your-deployment-id/exec
APPS_SCRIPT_SECRET=your-shared-secret
```

For Vercel, add the same variables under **Project Settings > Environment Variables** for the environments being deployed, then redeploy. These values must match the Apps Script web app configuration; do not expose them as `PUBLIC_` variables.

## 📝 License

MIT

## 👀 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Alpine.js Documentation](https://alpinejs.dev/start-here)
