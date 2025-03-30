# TicketBounty

A modern ticketing platform built with the latest web technologies, following "The Road to Next" development journey.

## Live Demo

Visit the live application: [https://ticket-bounty-ecru.vercel.app/](https://ticket-bounty-ecru.vercel.app/)

## Tech Stack ⚡️

TicketBounty is built with a powerful, modern tech stack:

- **Next.js 15**: Full-stack React framework with advanced features like React Server Components
- **React 19**: Component-based UI library for building interactive interfaces
- **Prisma**: Next-generation TypeScript ORM for database operations
- **Supabase**: Serverless Postgres database for data storage
- **TypeScript**: Type-safe JavaScript for more reliable code
- **Zod**: TypeScript-first schema validation for data integrity
- **Oslo**: Lightweight authentication library with zero vendor lock-in
- **Vercel**: Deployment platform optimized for Next.js applications
- **Tailwind CSS**: Utility-first CSS framework for responsive styling
- **Shadcn/UI**: Reusable, customizable component library

## Key Features

TicketBounty leverages modern web development concepts including:

- **React Server Components (RSC)** for improved performance and bundle size
- **Server Actions** for handling form submissions and data mutations
- **Advanced Data Fetching** patterns with streaming and Suspense
- **Authentication & Authorization** with custom implementation
- **Database Integration** with Prisma ORM
- **Complete CRUD Operations** for ticket management
- **Multiple Rendering Strategies** (SSR, CSR, SSG, ISR)
- **Type-Safe Development** with TypeScript and Zod
- **Responsive Design** using Tailwind CSS
- **Light & Dark Mode** support

## Project Structure

The application follows a modern, feature-focused structure:

```
app/
├── (auth)/           # Authentication routes (sign up, login)
├── (dashboard)/      # Protected dashboard routes
│   ├── tickets/      # Ticket management
│   ├── profile/      # User profile
│   └── settings/     # User settings
├── components/       # Shared UI components
│   ├── ui/           # Base UI components
│   └── features/     # Feature-specific components
├── lib/              # Utility functions and shared code
│   ├── actions/      # Server actions
│   ├── auth/         # Authentication logic
│   └── db/           # Database utilities
├── prisma/           # Database schema and migrations
└── public/           # Static assets
```

## Development Approaches

TicketBounty demonstrates several modern development concepts:

- **Layered Architecture**: UI, Action, Query, and API layers
- **Progressive Enhancement**: Works without JavaScript
- **Type Safety**: End-to-end type safety with TypeScript and Zod
- **Optimized Data Fetching**: Sequential and concurrent data fetching patterns
- **Performance Optimization**: Caching strategies and code splitting
- **Server-Side Operations**: Sorting, filtering, and pagination
- **Search Params Handling**: Type-safe URL parameters

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database or Supabase account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ticket-bounty.git
   cd ticket-bounty
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Set up environment variables:

   ```
   # Create a .env.local file with the following variables
   DATABASE_URL="postgresql://..."
   AUTH_SECRET="your-auth-secret"
   ```

4. Set up the database:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Documentation

For more detailed documentation and development notes, please refer to:
[NextJs - The Road To Next](https://www.notion.so/NextJs-The-Road-To-Next-Basic-1c1008f901fb807488b5f097e39ce93e)

## Deployment

This project is deployed on Vercel. To deploy your own instance:

1. Push your code to a Git repository
2. Import the project into Vercel
3. Configure environment variables
4. Deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
