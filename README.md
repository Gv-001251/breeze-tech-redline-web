# BREEZE TECHNIQUES - Premium Pneumatic Solutions

A modern, responsive website for BREEZE TECHNIQUES, showcasing their premium pneumatic equipment and industrial solutions.

## Project Overview

This website serves as the digital presence for BREEZE TECHNIQUES, a leading manufacturer of pneumatic equipment including air compressors, dryers, filters, and custom solutions for industrial applications.

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Routing**: React Router DOM
- **Backend**: Supabase (for authentication and data)
- **Notifications**: Sonner (Toast notifications)
- **Form Handling**: React Hook Form with Zod validation

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Components**: 
  - Hero section with call-to-action
  - Product catalog with detailed cards
  - Service offerings grid
  - Company information and statistics
  - Contact form with validation
  - Navigation with smooth scrolling
- **Authentication**: User signup and signin with Supabase
- **Toast Notifications**: User-friendly feedback system
- **SEO Optimized**: Meta tags and structured data

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd breezetechniques-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Add your Supabase credentials to .env
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Contact.tsx     # Contact form section
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   └── ...
├── hooks/              # Custom React hooks
├── integrations/       # External service integrations
│   └── supabase/       # Supabase client configuration
├── lib/                # Utility functions
├── pages/              # Page components
└── main.tsx           # Application entry point
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

This project can be deployed to any static hosting service:

1. **Netlify**: Connect your repository and deploy automatically
2. **Vercel**: Import your project and deploy with zero configuration
3. **GitHub Pages**: Build and deploy to GitHub Pages
4. **Custom Hosting**: Build the project and upload the `dist` folder

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by BREEZE TECHNIQUES.

## Contact

- **Website**: https://breezetechniques.com
- **Email**: info@breezetechniques.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Industrial Avenue, Manufacturing District, City, State 12345

---

Built with ❤️ for BREEZE TECHNIQUES