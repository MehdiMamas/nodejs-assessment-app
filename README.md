# Medication Reminder App

Vue 3 frontend for a small medication reminder system, built as a take-home assessment. You enter a phone number and press **Trigger Call**; the app asks the backend to place a reminder call to that number.

The backend is [nodejs-assessment-server](https://github.com/MehdiMamas/nodejs-assessment-server). Both are tied together in the super repo [DTxPlus-assessment](https://github.com/MehdiMamas/DTxPlus-assessment).

## How it works

`src/App.vue` has one phone number field and one button. The button sends `POST http://localhost:5000/api/call` with `{ "phoneNumber": "..." }` and shows the message the server returns.

## Run it

1. Start the backend first, following the steps in [nodejs-assessment-server](https://github.com/MehdiMamas/nodejs-assessment-server). By default it listens on port 5000.
2. Clone and install:

   ```sh
   git clone https://github.com/MehdiMamas/nodejs-assessment-app
   cd nodejs-assessment-app
   npm install
   ```

3. Serve the folder with any static server and open `public/index.html`, for example:

   ```sh
   python3 -m http.server 3000
   ```

   then visit http://localhost:3000/public/. The page loads Vue 3 from a CDN.

Note that `npm start` only prints a reminder that no dev server is configured; this repo has no build step, tests or CI.

## Tech

Vue 3, plain JavaScript and HTML. Calls a Node.js and Express backend.
