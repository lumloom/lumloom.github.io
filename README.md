# Lumloom

**We weave brighter days.**

The official landing page for the Lumloom brand — a home for small ideas and small tools that make everyday life a little brighter.

## Tech

- React + Vite
- No backend, fully static
- Deployed via GitHub Pages

## Structure

```
src/
  components/   Header, Hero, Philosophy, Manifesto, Projects, About, Footer
  config/       projects.js — add new projects/apps here
  hooks/        useFadeIn — scroll fade-in animation
```

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
