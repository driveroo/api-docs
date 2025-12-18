---
id: overview
title: API Overview
---

# ROO API

Short intro to the API, auth, base URL, etc.

- Base URL: `https://api.roo.example.com`
- Auth: `Authorization: Bearer <token>`
- Main resources:
    - Tasks
    - Users

## How ROO.AI API fits into your architecture

```mermaid
flowchart LR
  client["Client & partner systems\n(Web, mobile, back-office)"]
  api["Roo.ai Public API\nREST endpoints & webhooks"]
  platform["Roo.ai Platform\nWorkflows, automation, data"]

  client -- "JSON requests / responses" --> api
  api -- "Events & webhooks" --> client
  api -->|"Tasks, assets, inspections"| platform
  platform -->|"State changes, analytics"| api

```