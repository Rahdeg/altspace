# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Space Tourism Website Preview](./public/preview.jpg)

### Links

- Solution URL: [GitHub Repository](https://github.com/Rahdeg/altspace)
- Live Site URL: [Live Demo](https://altspace-nine.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework (v15.5.0)
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styling (v4)
- [shadcn/ui](https://ui.shadcn.com/) - For UI components
- [Radix UI](https://www.radix-ui.com/) - For accessible primitives
- [Lucide React](https://lucide.dev/) - For icons

### What I learned

This project taught me several valuable lessons about building modern web applications:

#### Component Architecture with shadcn/ui
I learned how to effectively use shadcn/ui components to build a consistent design system:

```tsx
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Reusable button with consistent styling
<Button
  size="lg"
  className="w-48 h-48 rounded-full bg-white text-black hover:bg-gray-100"
>
  Explore
</Button>
```

#### Responsive Design with Tailwind CSS
I implemented a comprehensive responsive design system using Tailwind's utility classes:

```css
/* Mobile-first responsive backgrounds */
.bg-[url('/assets/home/background-home-mobile.jpg')] bg-cover bg-center bg-no-repeat md:hidden
.bg-[url('/assets/home/background-home-tablet.jpg')] bg-cover bg-center bg-no-repeat hidden md:block lg:hidden
.bg-[url('/assets/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat hidden lg:block
```

#### Advanced Typography with Next.js Fonts
I learned to optimize font loading and create a cohesive typography system:

```tsx
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"], 
  weight: ["300", "400", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});
```

### Continued development

Areas I want to continue focusing on in future projects:

- **Performance Optimization**: Implementing advanced Next.js features like Suspense and streaming
- **Animation Systems**: Creating more sophisticated animations using Framer Motion or similar libraries
- **Accessibility**: Improving keyboard navigation and screen reader support
- **Testing**: Adding comprehensive unit and integration tests
- **State Management**: Implementing more complex state management patterns for larger applications

### Useful resources

- [Next.js 15 Documentation](https://nextjs.org/docs) - Essential for understanding the latest features and App Router patterns
- [Tailwind CSS v4 Guide](https://tailwindcss.com/) - Helped me leverage the new v4 features and utilities
- [shadcn/ui Documentation](https://ui.shadcn.com/) - Comprehensive guide for building accessible component systems
- [Radix UI Primitives](https://www.radix-ui.com/primitives) - In-depth documentation for accessible component primitives
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Crucial for implementing proper type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/Rahdeg/altspace]
cd ecomerce
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm run start
```

## Author

- Website - [Adegbite Raheem](https://raheem-dev.vercel.app/)
- Frontend Mentor - [@rahdeg](https://www.frontendmentor.io/profile/rahdeg)
- GitHub - [@Rahdeg](https://github.com/Rahdeg)
