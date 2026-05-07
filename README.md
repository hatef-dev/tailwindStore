# TailwindStore (ProStore)

## Overview
A multi-page storefront UI built with Vite + Tailwind CSS. This project focuses on the frontend pages and interactions (product listing, product details, shopping bag steps, profile pages, brand pages, etc.). It does not include a backend API, authentication, or payment integration.

## Tech Stack
- Vite (project root is configured as `src/`)
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Swiper (sliders/carousels)

## Project Structure
- `src/`: all HTML pages, JS modules, and styles (Vite root)
- `static/`: fonts and images (served as the public directory)
- `dist/`: production build output (generated)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the URL printed in your terminal (Vite will show it, usually `http://localhost:5173/`).

## Build & Preview
- Build for production:
  ```bash
  npm run build
  ```
- Preview the production build:
  ```bash
  npm run preview
  ```

## Pages
The app is multi-page and most screens are separate HTML files inside `src/`, such as:
- Home: `src/index.html`
- PLP: `src/PLP/Plp.html`
- PDP: `src/Product.html`
- Shopping Bag: `src/Shopping-Bag/ShoppingBagFirstStep.html`
- Profile: `src/Profile/Profile.html`

## Contact
For any inquiries, reach out at: hatef.dev21@gmail.com
