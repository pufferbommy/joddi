# AGENTS.md - Agentic Coding Guidelines

## Build, Lint, and Test Commands

```bash
# Development
npm run dev              # Start Next.js development server

# Build
npm run build            # Production build
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint
npm run lint -- --fix    # Auto-fix ESLint issues
```

## Project Overview

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Validation**: Zod
- **Icons**: lucide-react

## Code Style Guidelines

### Imports and Path Aliases

- Use `@/` path alias for imports (e.g., `@/components/ui/button`)
- Order imports: external libraries → internal aliases → local files
- Group related imports together

```typescript
// Good
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Card } from "./card"
```

### Components

- Server Components by default; add `"use client"` directive only when needed
- Use function declarations for components, not arrow functions
- Place page components in `app/` directory with `page.tsx` naming
- UI components go in `components/ui/`

```typescript
// Good - Server Component
export default function DashboardPage() {
  return <div>...</div>
}

// Good - Client Component
"use client"

import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

### Naming Conventions

- **Components**: PascalCase (e.g., `SectionCards`, `DataTable`)
- **Files**: kebab-case for components (e.g., `section-cards.tsx`), camelCase for utilities
- **Functions**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE for config values
- **Types/Interfaces**: PascalCase with `Type` or `Interface` suffix when ambiguous

### TypeScript

- Use explicit types for function parameters and return values when not obvious
- Use `type` for unions, interfaces for objects
- Enable strict mode

```typescript
// Good
interface User {
  id: string
  name: string
  email: string
}

export function getUser(id: string): Promise<User> {
  // ...
}
```

### Tailwind CSS

- Use Tailwind utility classes for all styling
- Use `@container` responsive prefixes (e.g., `@xl/main`, `@5xl/main`)
- Use `dark:` prefix for dark mode variants
- Use `*:` selector for conditional styles (e.g., `*:data-[slot=card]:shadow-xs`)

```tsx
// Good
<div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
```

### Error Handling

- Use Zod for runtime validation
- Handle API errors gracefully with user feedback
- Never expose internal errors to users

```typescript
import { z } from "zod"

const Schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

// Validate at runtime
const data = Schema.parse(userInput)
```

### Formatting

- Single quotes for strings
- Trailing commas
- 2-space indentation
- No semicolons at end of statements (ESLint handles this)

### API Routes

- Place in `app/api/` directory following Next.js App Router conventions
- Use Route Handlers with `route.ts` naming

```typescript
// app/api/example/route.ts
import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ data: "example" })
}
```

### Git Conventions

- Use meaningful commit messages
- Create feature branches for new features
- Run `npm run lint` before committing

### Testing

- Currently no test framework configured
- If adding tests, use Vitest or Jest
- Place tests alongside components with `.test.tsx` suffix
