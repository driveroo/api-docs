---
id: intro
title: Intro
---

# ROO.AI Platform API

The **ROO Platform API** provides programmatic access to the platform for **external integrations**. It enables partners and third-party systems to securely interact with **core platform resources**, including users, companies, fleets, inspections, maintenance workflows, and operational data.

The API is organized into **logical, domain-based sections** and exposes **stable, well-defined REST endpoints** intended for integration scenarios. **Authentication is handled using bearer tokens**, and most endpoints support **interactive exploration and testing** through the built-in *Try it out* functionality.


```mermaid
---
config:
  flowchart:
    curve: basis
    nodeSpacing: 40
    rankSpacing: 55
  theme: base
  themeVariables:
    fontFamily: ''
    fontSize: 14px
---
flowchart LR
  classDef external fill:#F3F6FF,stroke:#335CFF,stroke-width:1px,color:#0B1B4D;
  classDef api fill:#ECFDF3,stroke:#1A7F37,stroke-width:1px,color:#052E16;
  classDef platform fill:#FFF7ED,stroke:#C2410C,stroke-width:1px,color:#431407;
  classDef aux fill:#F8FAFC,stroke:#64748B,stroke-width:1px,color:#0F172A;

  subgraph EXT["External systems"]
    direction TB
    client["Client apps<br/>(Web, iOS/Android, back-office)"]:::external
    partners["Partner systems<br/>(3rd-party integrations)"]:::external
  end

  subgraph API["ROO Public API"]
    direction TB
    api["REST API &amp; Webhooks<br/>Versioned endpoints (v1)"]:::api
    auth["Auth &amp; protections<br/>OAuth2 / API keys<br/>Rate limits + request signing"]:::aux
    docs["API docs &amp; playground<br/>OpenAPI spec + SDKs"]:::aux
  end

  subgraph CORE["ROO Platform"]
    direction TB
    platform["Core workflows &amp; data<br/>Fleets • Assets • Inspections<br/>Work orders • Analytics"]:::platform
  end

  client   L_client_api_req@-- "HTTPS REST (JSON)" --> api
  partners L_partner_api_req@-- "HTTPS REST (JSON)" --> api

  api      L_api_client_res@-- "Responses (status + payload)" --> client
  api      L_api_partner_res@-- "Responses (status + payload)" --> partners

  api      L_api_platform_cmd@-- "Commands &amp; queries" --> platform
  platform L_platform_api_evt@-- "State changes &amp; events" --> api

  api      L_api_client_hook@-. "Signed webhooks (events)" .-> client
  api      L_api_partner_hook@-. "Signed webhooks (events)" .-> partners

  auth --- api
  docs --- api

  L_client_api_req@{ animation: slow }
  L_partner_api_req@{ animation: slow }
  L_api_client_res@{ animation: slow }
  L_api_partner_res@{ animation: slow }
  L_api_platform_cmd@{ animation: slow }
  L_platform_api_evt@{ animation: slow }
  L_api_client_hook@{ animation: slow }
  L_api_partner_hook@{ animation: slow }

```

## Authentication

The API uses **HTTP bearer authentication** with **JSON Web Tokens (JWT)**.  
Include the access token in the `Authorization` header of each request.

**Example**

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

The following table summarizes the authentication scheme used by the API:

| Property                     | Value  |
|------------------------------|--------|
| Security scheme type         | HTTP   |
| Authorization scheme         | Bearer |
| Bearer token format          | JWT    |

## Base URL

Use the following base URL for all API requests:

```text
https://lp.driveroo.com
```