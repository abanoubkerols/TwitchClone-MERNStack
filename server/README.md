# TwitchApp — Server (API)

This folder contains the backend API for TwitchApp — an Express + Socket.IO server that exposes REST endpoints and realtime events.

## What it is
- REST API routes: authentication, channels, and settings
- Realtime: Socket.IO server registered in `src/io/io.js`
- MongoDB-backed models in `src/models`

## Repo structure (server)

- `index.js` — app entry: Express app, MongoDB connection, and Socket.IO registration
- `src/controllers` — route handlers and controller logic
- `src/routes` — Express route definitions (`/api/auth`, `/api/channels`, `/api/settings`)
- `src/models` — Mongoose models (`User`, `Channel`, `Message`)
- `src/io` — Socket.IO registration and events (chat history, etc.)
- `src/middlewares` — request middlewares (auth, validation)

## Prerequisites

- Node.js (v14+)
- npm (or yarn)
- MongoDB (local or remote)

## Environment

Create a `.env` file in this folder (a `.env` is present in repo root). Common env variables used by the server:

```env
PORT=4000            # port the server listens on (nodemon start)
API_PORT=4000        # alternative name used by index.js
MONGO_URI=mongodb://localhost:27017/twitchapp
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
# Add any other values your setup or custom code requires
```

Notes:
- `index.js` reads `process.env.PORT || process.env.API_PORT` for the listening port.
- The server will not start unless `MONGO_URI` is set and MongoDB connection succeeds.

## Install & Run

From the `server` folder:

```bash
npm install
npm start    # uses `nodemon index.js` as defined in package.json
```

If you prefer a direct node run:

```bash
node index.js
```

Open your frontend (e.g., `CLIENT_URL`) and ensure it points to the same API origin and socket URL.

## API endpoints (high-level)

- `POST /api/auth/login` — login
- `POST /api/auth/register` — register
- `GET /api/channels` — list channels
- `GET /api/channels/:id` — channel details
- `POST /api/channels/:id/follow` — follow a channel
- `GET /api/settings` — get settings
- `PUT /api/settings` — update settings

Refer to `src/routes` and `src/controllers` for full details of routes and request/response shapes.

## Realtime (Socket.IO)

- Socket server is registered via `registerSocketServer(server)` in `src/io/io.js`.
- Chat history events and message broadcasting live under `src/io/events`.

