# StackInsights

> A personalized knowledge-sharing platform for teams to publish and discover insights, incident post-mortems, and retrospectives.

---

## Overview

**StackInsights** centralizes team knowledge in one place. Engineering, product, and design teams can publish technical learnings, incident post-mortems, and retrospectives—then discover content tailored to their interests through behavior-driven personalization and fast, full-text search.

### Why StackInsights?

- **Centralized knowledge** — All team learnings in one searchable hub
- **Personalized experience** — Homepage and content adapt based on what you read
- **Smart search** — Algolia-powered search across insights, incidents, and retrospectives
- **Automated workflows** — Email and Slack notifications when new content is published
- **Team-centric** — Browse by team, author, or category

---

## Features

| Feature | Description |
|---------|-------------|
| **Browse & Search** | Filter by category (Insight / Incident / Retrospective), team, author, or full-text search |
| **Personalization** | Content tailored to reading patterns—frequency, expertise level, favorite categories |
| **Profile Switching** | Demo different personas; each profile has its own behavior tracking |
| **Create & Edit Posts** | Publish new posts and update existing ones via Contentstack |
| **Dark Mode** | System, light, and dark themes |
| **Responsive Design** | Optimized for desktop, tablet, and mobile |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19, TypeScript, Vite, React Router v6 |
| **Styling** | Tailwind CSS, Shadcn/ui |
| **CMS** | Contentstack (headless CMS) |
| **Personalization** | Contentstack Personalize Edge SDK |
| **Search** | Algolia |
| **Hosting** | Contentstack Launch |
| **Automation** | Contentstack Automate (email, Slack, translation) |

---

## Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Contentstack** account (for content delivery)
- **Algolia** account (for search; optional but recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/StackInsights.git
cd StackInsights

# Install dependencies
npm install
```

### Environment Variables

Create `.env.local` in the project root:

```env
# Contentstack (required)
VITE_CONTENTSTACK_API_KEY=your_api_key
VITE_CONTENTSTACK_DELIVERY_TOKEN=your_delivery_token
VITE_CONTENTSTACK_ENVIRONMENT=development
VITE_CONTENTSTACK_REGION=us

VITE_CONTENTSTACK_MANAGEMENT_TOKEN=your_management_token

# Contentstack Personalize (optional – for personalized homepage)
VITE_CONTENTSTACK_PERSONALIZE_ENABLED=true
VITE_CONTENTSTACK_PERSONALIZE_PROJECT_ID=your_project_id

# Algolia (optional – for search)
VITE_ALGOLIA_APP_ID=your_app_id
VITE_ALGOLIA_SEARCH_API_KEY=your_search_key
```

> Get Contentstack credentials from your stack settings. Algolia setup is documented in the [Contentstack Algolia Marketplace](https://www.contentstack.com/docs/marketplace) integration.

### Run Locally

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview production build locally
```

---

## Project Structure

```
StackInsights/
├── src/
│   ├── components/     # UI components (layout, posts, ui)
│   ├── contexts/       # React context (Profile, Theme)
│   ├── hooks/          # Custom hooks (search, profile, theme)
│   ├── lib/            # API clients, helpers, personalization logic
│   ├── pages/          # Route components
│   └── types/          # TypeScript definitions
├── functions/          # Vercel serverless functions (optional)
├── public/             # Static assets
└── dist/               # Build output
```

---

## Deployment

### Contentstack Launch

1. Connect your repo in Contentstack Launch
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Configure environment variables
5. Deploy

---

## Contributing

This project is under active development. Contributions, suggestions, and feedback are welcome.

---

## License

This project is intended for internal and educational purposes.
