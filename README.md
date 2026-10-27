# Lumloom

**We weave brighter days.**

The official landing page for the Lumloom brand — a home for small ideas and small tools that make everyday life a little brighter.

## Tech

- React + Vite
- Static GitHub Pages frontend with Supabase Auth for the shared Lumloom account
- Deployed via GitHub Pages

## Structure

```
index.html          Home page — hero, projects, and about
about.html          Why Lumloom and Manifesto page
account.html        Lumloom account sign-up, sign-in, and app launcher
src/
  components/   Header, Hero, Manifesto, Projects, Footer
  config/       projects.js — add new projects/apps here
  hooks/        useFadeIn — scroll fade-in animation
  data/         supabase.js — shared Lumloom Auth client
```

The account page uses the same Supabase project as the Lumloom apps. Supabase `Confirm Email` and custom SMTP must be enabled so new users verify their address before signing in. The page also provides password-reset email requests; app access does not require a separate administrator approval.

Add a new project by appending an object to `src/config/projects.js`:

```js
{
  title: 'New App',
  description: 'Short description.',
  detail: 'Optional extra line.',
  status: 'live', // or 'coming-soon'
  url: 'https://...',
  image: '/path/to/image.png', // optional
}
```

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. under a new `lumloom` account/org) — either:
   - `lumloom.github.io` for a user/org page (served at the domain root), or
   - any repo name for a project page (served at `/<repo-name>/`).
2. Push this project to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial Lumloom site"
   git branch -M main
   git remote add origin https://github.com/<your-account>/<repo-name>.git
   git push -u origin main
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch via the `gh-pages` package.
4. In the repo's **Settings → Pages**, set the source to the `gh-pages` branch (root).

`vite.config.js` uses a relative `base: './'`, so no changes are needed whether the site ends up at the domain root or under a subpath.
