# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is a Create React App project (react-scripts 5.0.1).

- `npm start` — run dev server at http://localhost:3000
- `npm test` — run tests in watch mode via Jest/react-scripts (Testing Library is set up in `src/setupTests.js`)
- `npm test -- --watchAll=false` — run tests once (non-interactive), e.g. for CI-style checks
- `npm test -- --watchAll=false -t "<test name>"` — run a single test by name
- `npm run build` — production build to `build/`

There is no lint script defined; ESLint runs implicitly through `react-scripts` (config: `eslintConfig` in `package.json`, extends `react-app`).

## Architecture

Small single-page CRA app with no router and no real backend — everything lives under `src/`.

- `App.js` is the single stateful root component. It holds `isLogged` state and toggles between two views: `LoginForm` (logged out) and `Greating` + `DataFetcher` (logged in). There is no routing library — view switching is done via conditional rendering in `App.js`.
- `LoginForm` does purely local field validation (required email/password) and does not call any API — on successful validation it just calls `onLogingStatusChange(true)` (note the typo in this prop name — matches what `App.js` passes in).
- `DataFetcher` fetches from a URL passed in via props (currently hardcoded to a public JSONPlaceholder todos endpoint in `App.js`) and renders results through an internal `TaskList` sub-component, capping display at 10 items.
- `components/Task.js` defines a `Task` class purely for its JSDoc `@typedef` (documents the shape returned by `DataFetcher`); it is not otherwise instantiated/used.
- `.env` / `.env.production` define `REACT_APP_API_URL` and `REACT_APP_DEBUG`, but no component currently reads `process.env` — the API URL in `App.js` is a separate hardcoded literal, not sourced from these env vars.

### Gotchas

- `components/DataFetcher.js` imports `prop-types`, but `prop-types` is not listed in `package.json` dependencies — it currently resolves only because it's present as a transitive dependency in `node_modules`. Add it explicitly if you rely on it further.
- `App.test.js` asserts on text (`/learn react/i`) that no longer exists in `App.js` — this test is stale/broken against the current UI.
