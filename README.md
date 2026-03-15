# Web Design Agency

A modern, responsive web design agency website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- ⚡ Fast development with Vite
- 🎨 Styled with Tailwind CSS
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🧩 Component-based architecture with shadcn/ui

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at http://localhost:5173

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── client/              # Frontend application
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── contexts/   # React contexts
│   │   ├── hooks/      # Custom hooks
│   │   ├── lib/        # Utility functions
│   │   ├── pages/      # Page components
│   │   ├── App.tsx     # Main app component
│   │   └── main.tsx    # Entry point
│   └── index.html      # HTML template
├── server/             # Backend (if needed)
└── shared/             # Shared code
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Option 2: Using Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your Git repository
5. Configure build settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
6. Click "Deploy"

### Environment Variables

If you need environment variables, create a `.env` file in the root:

```env
VITE_API_URL=your_api_url
```

Then add them in Vercel Dashboard under Settings > Environment Variables.

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Wouter** - Lightweight routing
- **shadcn/ui** - UI components
- **Sonner** - Toast notifications

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
