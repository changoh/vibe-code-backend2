# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the server

```bash
node index.js
```

Requires a MongoDB connection configured via `MONGO_URI` in `.env` (currently points to MongoDB Atlas). The server starts on port 5000.

## Architecture

This is a minimal Express + Mongoose REST API for a todo list.

- `index.js` — app entry point: connects to MongoDB, mounts the router at `/todos`, starts the server
- `models/Todo.js` — Mongoose schema with fields: `title` (String, required), `completed` (Boolean, default false), `createdAt` (Date, default now)
- `routes/todo.js` — CRUD route handlers mounted at `/todos`

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/todos` | Create a todo (`{ title }`) |
| GET | `/todos` | List all todos |
| PATCH | `/todos/:id` | Update a todo (`{ title?, completed? }`) |
| DELETE | `/todos/:id` | Delete a todo |
