# Astro landing-page

```
yarn create astro --template jungley8/astro-landing-page
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── BlogPostCard.tsx
│   │   ├── CTA.tsx
│   │   ├── Card.astro
│   │   ├── Data.tsx
│   │   ├── Feature.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Price.tsx
│   │   ├── Signin.tsx
│   │   └── Stats.tsx
│   ├── env.d.ts
│   ├── layouts
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Layout.astro
│   └── pages
│       ├── 404.astro
│       ├── blog
│       │   ├── [id].astro
│       │   └── index.astro
│       ├── contact.astro
│       ├── index.astro
│       ├── price.astro
│       └── signin.astro
├── tailwind.config.cjs
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `yarn`              | Installs dependencies                            |
| `yarn dev`          | Starts local dev server at `localhost:3000`      |
| `yarn build`        | Build your production site to `./dist/`          |
| `yarn preview`      | Preview your build locally, before deploying     |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help` | Get help using the Astro CLI                     |
| `yarn prettier`     | Formate and beautify your code                   |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Demo

[astro-landing-page demo](https://astro-landing-page-jet.vercel.app)

## Deploy

Host your own live version of Astro-landing-page with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FJungley8%2Fastro-landing-page)
