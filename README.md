# Roo API documentation

[![Deploy API Docs](https://github.com/driveroo/api-docs/actions/workflows/deploy-api-docs.yml/badge.svg)](https://github.com/driveroo/api-docs/actions/workflows/deploy-api-docs.yml) [![pages-build-deployment](https://github.com/driveroo/api-docs/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/driveroo/api-docs/actions/workflows/pages/pages-build-deployment)

Developer documentation for the ROO.AI / Driveroo Platform APIs, built using a docs-as-code approach with Docusaurus.

---

## 📚 Overview

This repository contains the source code for the API documentation of the ROO.AI platform. The documentation is generated from OpenAPI specifications and published as a static, developer-friendly site that includes API reference, guides, and conceptual documentation.

The repository is publicly accessible to support potential clients, partners, and integrators who need to evaluate or integrate with ROO.AI APIs.

---

## ✨ Key features

- **OpenAPI-driven documentation**: API reference pages are generated automatically from OpenAPI 3.x specifications.
- **Interactive API reference**: Browse endpoints, schemas, and examples directly in the browser.
- **Docs-as-code workflow**: Documentation is versioned, reviewed, and maintained using standard Git workflows.
- **Local full-text search**: Client-side search powered by `@easyops-cn/docusaurus-search-local`.
- **Type-safe configuration**: Docusaurus configuration and custom components are implemented in TypeScript.
- **Mermaid diagrams**: Diagrams and flowcharts can be authored directly in Markdown.
- **Responsive layout**: Optimized for desktop and mobile usage.

---

## 🚀 Getting started

### Prerequisites

- Node.js 20 or later
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/driveroo/api-docs.git
cd api-docs
npm install
```

---

## 🛠️ Local development (primary workflow)

The following commands represent the primary and recommended local workflow for working with this repository.

1. Clean generated API documentation:

```bash
npx docusaurus clean-api-docs all
```

2. Regenerate API documentation from OpenAPI specifications:

```bash
npx docusaurus gen-api-docs all
```

3. Start the development server with hot reload:

```bash
npm run start
```

The site is available locally at:

```text
http://localhost:3000/api-docs
```

> **Note**
> 
> The search index is generated only during production builds. Warnings related to search in development mode are expected.

---

## 📦 Production build

### Build the site

```bash
npm run build
```

The static site is generated in the `build/` directory.

### Preview the production build

```bash
npm run serve
```

### Deploy

```bash
npm run deploy
```

---

## 📁 Repository structure

```text
api-docs/
├── docs/                     # Markdown documentation content
│   ├── concepts/             # Conceptual documentation
│   ├── guides/               # How-to and task-based guides
│   ├── reference/            # Generated API reference
│   └── intro.md              # Documentation entry point
├── openapi/                  # OpenAPI specifications
│   └── public-api.v1.openapi.json
├── src/
│   ├── components/           # Custom React components
│   ├── css/                  # Custom styles
│   ├── pages/                # Standalone pages
│   └── theme/                # Theme customizations
│       └── SearchPage/       # Custom search page
├── static/                   # Static assets
├── docusaurus.config.ts      # Docusaurus configuration
├── sidebars.ts               # Sidebar configuration
└── package.json              # Scripts and dependencies
```

---

## 🔧 Configuration details

### OpenAPI integration

The OpenAPI source of truth is located at:

```text
openapi/public-api.v1.openapi.json
```

API reference generation is configured in `docusaurus.config.ts` and typically:

* Groups endpoints by OpenAPI `tags`
* Outputs generated pages under `docs/reference/`
* Generates sidebar sections automatically based on tags

### Search

Local search is implemented using `@easyops-cn/docusaurus-search-local`:

* Indexes all documentation pages
* Supports English
* Uses hashed index files for efficient caching

---

## 📝 Authoring documentation

### Add a new guide

1. Create a Markdown file in `docs/guides/`
2. Register the document in `sidebars.ts`

### Add or update API endpoints

1. Update the OpenAPI specification:

```text
openapi/public-api.v1.openapi.json
```

2. Regenerate the API reference:

```bash
npx docusaurus clean-api-docs all
npx docusaurus gen-api-docs all
```

---

## 🧪 Available scripts (optional)

The following scripts may be available in `package.json` and can be used when needed:

| Command             | Description                                    |
| ------------------- | ---------------------------------------------- |
| `npm run start`     | Start development server                       |
| `npm run build`     | Build production site                          |
| `npm run serve`     | Serve production build locally                 |
| `npm run deploy`    | Deploy to GitHub Pages                         |
| `npm run typecheck` | Run TypeScript checks                          |
| `npm run clear`     | Clear Docusaurus cache (if configured)         |
| `npm run clean-api` | Remove generated API output (if configured)    |
| `npm run gen-api`   | Generate API docs from OpenAPI (if configured) |

> If a script is not defined in `package.json`, it will fail.
> Use the `npx docusaurus ...` commands above as the canonical approach for API generation.

---

## 🏗️ Technology stack

* Docusaurus — static documentation framework
* docusaurus-plugin-openapi-docs — OpenAPI documentation generation
* @easyops-cn/docusaurus-search-local — local search
* TypeScript — configuration and tooling
* React — UI customization

---

## 🔗 Links

* Documentation site: [https://driveroo.github.io/api-docs/](https://driveroo.github.io/api-docs/)
* Repository: [https://github.com/driveroo/api-docs](https://github.com/driveroo/api-docs)
* ROO.AI website: [https://roo.ai/](https://roo.ai/)
* Support portal: [https://driveroo.atlassian.net/servicedesk/](https://driveroo.atlassian.net/servicedesk/)

---

## 📄 License

The license for this repository is not yet defined.

This repository is publicly accessible to allow potential clients, partners, and integrators to review the ROO.AI API documentation. Public access does not grant permission to reuse, redistribute, or modify the content.

Until a license is formally specified:

* All content is considered proprietary to ROO.AI.
* No rights are granted for commercial or non-commercial reuse.
* Documentation is provided for evaluation and integration reference purposes only.

---

## 🤝 Contributing

### External contributions

External contributions are not accepted at this time.

If you have questions, feedback, or integration-related inquiries, use the official support channels listed below.

### Internal contributions (ROO.AI team)

All internal contributions must follow a pull request–based workflow:

1. Create a feature branch from the main branch
2. Implement and validate changes locally
3. Open a pull request for review
4. Merge only after approval

Direct commits to the main branch are not permitted.

---

## 📞 Support

* Help Center: [https://driveroo.atlassian.net/servicedesk/](https://driveroo.atlassian.net/servicedesk/)
* GitHub Issues (internal use): [https://github.com/driveroo/api-docs/issues](https://github.com/driveroo/api-docs/issues)

---

Built and maintained with ❤️ by the ROO.AI team.
