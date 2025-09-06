# Developer Portfolio Website

## Overview

This is a modern, developer-focused portfolio website built for Ashima Tiwari, showcasing her skills, projects, achievements, and professional experience. The portfolio features a dark theme with purple and indigo accent colors, smooth animations, and a responsive design that works across all devices. The application serves as both a personal branding tool and a demonstration of frontend development capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a component-based React architecture with the following key decisions:

**Framework Choice**: React 18 with Vite for fast development and optimized builds. Vite was chosen over Create React App for its superior performance and modern tooling.

**Styling Strategy**: TailwindCSS with shadcn/ui components for consistent, maintainable styling. The design system uses CSS custom properties for theming and maintains a dark aesthetic with purple/indigo accents.

**Animation System**: Framer Motion provides smooth, performant animations throughout the portfolio including fade-ins, slides, and hover effects that enhance user engagement without compromising performance.

**Component Structure**: The portfolio is organized into distinct sections (Hero, About, Skills, Projects, etc.) as separate components, making the codebase modular and maintainable.

**State Management**: Uses React's built-in state management with React Query for any future API integrations and data fetching needs.

### Backend Architecture
**Server Framework**: Express.js with TypeScript providing a lightweight, extensible backend foundation.

**Database Layer**: Drizzle ORM configured for PostgreSQL with Neon Database integration. The current schema includes basic user management with plans for potential future features like contact form submissions or analytics.

**Storage Interface**: Abstracted storage layer with both in-memory and database implementations, allowing for easy testing and deployment flexibility.

### Contact Form Integration
**Email Service**: Configured for EmailJS integration with placeholder environment variables (SERVICE_ID, TEMPLATE_ID, USER_ID) for easy deployment setup.

**Form Handling**: React Hook Form with Zod validation for type-safe form management and user input validation.

### Responsive Design
**Mobile-First Approach**: TailwindCSS breakpoints ensure optimal viewing across all device sizes from mobile phones to desktop displays.

**Performance Optimization**: Vite's build system provides code splitting, tree shaking, and optimized asset loading for fast page loads.

## External Dependencies

### Core Frontend Dependencies
- **React & Vite**: Modern React development with fast HMR and optimized builds
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Pre-built, accessible component library with Radix UI primitives
- **Framer Motion**: Animation library for smooth, performant UI transitions

### Form & Validation
- **React Hook Form**: Performant form management with minimal re-renders
- **Zod**: TypeScript-first schema validation for type safety
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Backend & Database
- **Express.js**: Minimal, flexible Node.js web framework
- **Drizzle ORM**: Type-safe SQL ORM with excellent TypeScript support
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle Kit**: Database migration and schema management tools

### Development Tools
- **TypeScript**: Static type checking for enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **Wouter**: Lightweight routing library for single-page navigation

### External Services
- **EmailJS**: Client-side email service for contact form functionality (requires SERVICE_ID, TEMPLATE_ID, USER_ID configuration)
- **Google Fonts**: Inter font family for modern typography
- **Font Awesome**: Icon library for social media and UI icons

### Deployment Considerations
- **Environment Variables**: Configured for EmailJS credentials and database URL
- **Build Process**: Optimized for static hosting with API routes support
- **Database**: Uses Neon PostgreSQL for scalable, serverless database hosting