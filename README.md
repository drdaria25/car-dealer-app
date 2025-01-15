# Car Dealer App

The Car Dealer App is a simple web application built using Next.js. It allows users to browse vehicle makes and models, filter them by year, and view the results on a dedicated results page.

## Features

### Vehicle Filtering

- Filter vehicle makes by type and model year.
- View filtered results on a separate page.

### Dynamic Routing

- Dynamically generated pages for results based on selected make and year.

### Responsive Design

- Styled using Tailwind CSS to ensure a responsive and modern user interface.

### Improved Performance

- Utilizes Next.js features such as server-side rendering (SSR) and static site generation (SSG) for fast page loads.

## Architecture

- **Frontend Framework**: Next.js  
  Utilizes the App Router for server-side rendering (SSR) and static site generation (SSG).
- **Styling**: Tailwind CSS  
  Ensures responsive and clean design.
- **APIs**: Fetches data from the VPIC API.
- **TypeScript**: Ensures type safety and improved developer experience.
- **Linting and Formatting**: ESLint and Prettier integrated for code quality and consistency.

## Prerequisites

Ensure you have the following installed:

- Node.js (v16.8.0 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:  
   `git clone https://github.com/drdaria25/car-dealer-app.git`  
   `cd car-dealer-app`

2. Install dependencies:  
   `npm install`

## Running the Application

1. Start the development server:  
   `npm run dev`  
   Open `http://localhost:3000` in your browser to view the app.

2. Build the application for production:  
   `npm run build`  
   This will create an optimized production build in the `.next` directory.

3. Start the production server:  
   `npm start`

## Linting and Formatting

1. Run ESLint to check for issues:  
   `npx eslint src/`

2. Automatically fix linting issues:  
   `npx eslint src/ --fix`

3. Format code with Prettier:  
   `npm run format`

## Folder Structure

car-dealer-app/
├── public/                       # Static assets (e.g., favicon, images)
├── src/
│   ├── api/                      # API calls
│   │   ├── fetchMakes.ts         # Function to fetch vehicle makes
│   │   └── fetchModels.ts        # Function to fetch vehicle models
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Global layout
│   │   ├── page.tsx              # Main page (vehicle filtering)
│   │   └── result/               # Dynamic routes
│   │       └── [makeId]/[year]/
│   │           └── page.tsx      # Results page
│   ├── components/               # Reusable UI components
│   │   ├── ...                   # Components
│   ├── types/                    # TypeScript types
│   │   └── types.ts              # Shared types for the project
│   ├── styles/                   # Global styles
│       └── globals.css           # Base styles
├── .env.local                    # Environment variables
├── .eslintrc.js                  # ESLint configuration
├── .prettierrc                   # Prettier configuration
├── package.json                  # Project dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project documentation
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration