# TwitchApp

A small self-hosted Twitch-like application consisting of a React client, an Express API server, and an RTMP server for ingesting streams.

## Repository layout

- [client](client): React frontend (create-react-app or similar) — UI, routes, hooks, and socket connection logic.
- [server](server): Node/Express backend — API routes, controllers, models, and Socket.IO event handling.
- [rtmp-server](rtmp-server): Lightweight RTMP ingest server (Node-based) for handling stream input.

## Quick Start (development)

Prerequisites:
- Node.js (v14+)
- npm (or yarn)
- A MongoDB instance (local or remote) if using persistence

1) Install dependencies for each component

```bash
# From repo root
cd server
npm install

cd ../client
npm install

cd ../rtmp-server
npm install
```

2) Configure environment variables

Create or update server .env file (server/.env). Example variables:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/twitchapp
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000
# Add any other values your local setup needs
```

3) Run each component

```bash
# Run backend (from server/)
cd server
npm run dev # if available, else `npm start` or `node index.js`

# Run frontend (from client/)
cd ../client
npm start

# Run RTMP server (from rtmp-server/)
cd ../rtmp-server
node index.js
```

Open the frontend (usually http://localhost:3000) to use the app.

## Project details

- Backend structure: controllers are in `server/src/controllers`, routes in `server/src/routes`, models in `server/src/models`, and realtime handlers in `server/src/io`.
- Frontend structure: React pages and shared hooks/components are under `client/src`. Socket connection code is in `client/socketConn`.
- The RTMP server is a minimal Node process under `rtmp-server/index.js` that accepts stream ingests and forwards them to your streaming workflow.

## Development notes

- Keep the server running while developing the client to allow API and Socket.IO interactions.
- If you change env values, restart the server process.

