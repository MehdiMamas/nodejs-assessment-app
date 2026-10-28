# AGENTS.md

## What it is
Frontend for the Medication Reminder System, written with Vue 3. The backend is MehdiMamas/nodejs-assessment-server.

## Setup and run
- `npm install`
- `npm start` only prints a message: `package.json` defines no real dev server or build. The README says to open `http://localhost:3000`, but nothing in the repo starts a server there yet.
- The backend must be running for the app to work.

## Where things live
- `index.html`: page entry.
- `src/`: `main.js`, `App.vue`, `App.js`.
- `public/index.html`: static page.

## Notes
- No tests, lint config or CI.
- Part of the super repo MehdiMamas/DTxPlus-assessment (as the `app` submodule).
