# Copilot Instructions

## Repository overview

This repository contains a small full-stack application that pairs a React + Vite
frontend with a Node.js/Express backend. The backend acts as a proxy that forwards
requests to Google Cloud Vertex AI on behalf of the frontend, so that Google Cloud
credentials never have to be exposed in the browser.

The project is intended for **demonstration and prototyping** purposes only and is
not production-ready.

## Tech stack

- **Language:** TypeScript (frontend) and JavaScript / ES modules (backend)
- **Frontend:** React 19, Vite, Tailwind-style utilities (`clsx`, `tailwind-merge`),
  `framer-motion`, `lucide-react`
- **AI SDK:** `@google/genai`
- **Backend:** Node.js, Express, `google-auth-library`, `node-fetch`,
  `express-rate-limit`, `dotenv`
- **Build tool:** Vite

## Project layout

The repository is currently flat (despite the `frontend/` and `backend/` directories
mentioned in the README). Key files:

- `index.html`, `index.tsx`, `App.tsx` – React frontend entry points
- `types.ts` – shared TypeScript types
- `vite.config.ts` – Vite config; proxies `/api-proxy` to `http://localhost:5000`
- `server.js` – Express backend that proxies requests to Vertex AI
- `vertex-ai-proxy-interceptor.js` – request/response interception for the proxy
- `metadata.json` – application metadata
- `.env.local` – local environment variables (not committed in real deployments)
- `package.json` – dependencies and scripts

## Common commands

Install dependencies and run the dev server:

```bash
npm install
npm run dev      # start Vite dev server (frontend)
npm run build    # production build of the frontend
npm run preview  # preview the production build
```

The backend (`server.js`) requires the following environment variables to be set
(typically via `.env.local`):

- `GOOGLE_CLOUD_PROJECT`
- `GOOGLE_CLOUD_LOCATION`
- `API_BACKEND_PORT` (optional, defaults to `5000`)
- `API_PAYLOAD_MAX_SIZE` (optional, defaults to `7mb`)

Authenticate locally with Application Default Credentials before starting the
backend:

```bash
gcloud auth application-default login
```

There is currently no test runner, linter, or formatter configured in this
repository. Do not add one unless the change explicitly requires it.

## Coding guidelines for changes

- Keep changes **small and surgical**. Touch only the files needed for the task.
- Match the existing code style: 2-space indentation, single quotes in JS/TS, ES
  modules (`import`/`export`), and React function components with hooks.
- Prefer TypeScript for any new frontend code; keep `types.ts` as the home for
  shared types used across components.
- Do **not** introduce new dependencies unless strictly required, and prefer
  packages already present in `package.json`.
- Never commit secrets, credentials, or real Google Cloud project values. Use
  environment variables and document them in the README if new ones are added.
- The backend uses `express-rate-limit` and validates required environment
  variables at startup. Preserve these safeguards when modifying `server.js`.
- When changing the proxy behavior, keep the frontend `/api-proxy` prefix and the
  Vite proxy target in `vite.config.ts` in sync with `server.js`.

## Validating changes

Before finishing a change:

1. Run `npm install` if dependencies changed.
2. Run `npm run build` to make sure the frontend still type-checks and builds.
3. For backend changes, start `node server.js` with the required env vars set and
   confirm it boots without errors.
4. Manually exercise any UI changes in the dev server (`npm run dev`).
