# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tailwind CSS

This project includes Tailwind CSS. Setup done:

- `tailwind.config.js` added with `./src` and `index.html` in the content paths.
- `postcss.config.cjs` updated to use `@tailwindcss/postcss` and `autoprefixer`.
- Tailwind directives added to `src/index.css` (@tailwind base/components/utilities).

Commands you can use:

- Install dependencies (already done during setup):

  npm install

- Build Tailwind CSS to `dist/tailwind.css` (helper script):

  node scripts/build-tailwind.cjs

- Run the dev server (Vite):

  npm run dev

When running Vite, the PostCSS pipeline will pick up Tailwind via `postcss.config.cjs` and process `src/index.css`. For quick testing you can reference `dist/tailwind.css` in `index.html`.
