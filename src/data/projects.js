// images 
// SOL 
import sol_logo from "/assets/work-images/Sol/LogoSOL.jpg";
import sol_hero from "/assets/work-images/Sol/Hero-Sol.webp";
import sol_categories from "/assets/work-images/Sol/Categories-Sol.webp";
import sol_productsList from "/assets/work-images/Sol/ProductsList-Sol.webp";
import sol_productDetails from "/assets/work-images/Sol/Sol-ProductDetails.webp";
import sol_reviews from "/assets/work-images/Sol/Reviews-Sol.webp";
import sol_cart from "/assets/work-images/Sol/Cart-Sol.webp";
import sol_checkout from "/assets/work-images/Sol/Checkout-Sol.webp";
import sol_mobile from "/assets/work-images/Sol/Sol-mobileMock.webp";
// MOO 
import mooLogo_day from "/assets/work-images/Moo-MovieFinder/Logo_day_upscaled.png";
import mooLogo_night from "/assets/work-images/Moo-MovieFinder/Logo_night_upscaled.webp";
// PORTFOLIO 
import logoPedro from "/assets/work-images/Portfolio/Logo_portfolio.webp";
import portfolio_frontpage from "/assets/work-images/Portfolio/portfolio_frontpage.webp";
import logoPedroBlue from "/assets/work-images/Portfolio/logoPedroBlue.png";

export const projects = [
    { //SOL E-COMMERCE STORE
    slug: "sol-store",
    name: "SOL",
    type: "E-Commerce",
    category: "Web Development",
    cover: sol_logo,
    imgs: [sol_hero, sol_categories, sol_productsList, sol_productDetails, sol_reviews, sol_cart, sol_checkout, sol_mobile],
    descriptionLong: 
        "SOL is a modern e-commerce experience built with Next.js (App Router) and Redux. Instead of a static storefront, every browser reload simulates a significant time jump, automatically recalculating the stock of all 20 products—just as if thousands of customers had been shopping in the meantime. This creates a living, always-changing inventory where items fluctuate, sell out, and restock dynamically.",
    tech: [
      "Next.js",
      "App Router",
      "Vite",
      "CSS Modules",
      "Framer Motion",
    ],
    live: "https://pedromagalhaes.vercel.app/",
    repo: null,
    year: 2025,
  },

  { //MOO - MOVIE FINDER
    slug: "moo-movie-finder",
    name: "Moo",
    type: "Movie Finder",
    category: "Web Development",
    cover: mooLogo_day,
    imgs: [mooLogo_day, mooLogo_night],
    descriptionLong:
      "Moo is a movie-searching platform built with a focus on responsiveness, accessibility, and smooth UI animations. It integrates the TMDB API to fetch movie data, includes dark/light mode branding, and offers a clean user flow for adding and removing favorite films.",
    tech: [
      "React",
      "Vite",
      "CSS Modules",
      "Framer Motion",
      "TMDB API",
      "Figma (Logo design)"
    ],
    live: "https://moo-finder.vercel.app/",
    repo: null, //add later
    year: 2025,
  },

  { //PEDRO PORTFOLIO
    slug: "pedro-portfolio",
    name: "Pedro",
    type: "Personal Portfolio",
    category: "Web Development",
    cover: logoPedroBlue,
    imgs: [logoPedro, portfolio_frontpage],
    descriptionLong:
      "This portfolio was designed from scratch in Figma, with custom branding and smooth page transitions. It highlights my work, skills, and contact information using React Router navigation and modern UI design patterns.",
    tech: [
      "React",
      "React Router",
      "Vite",
      "CSS Modules",
      "GSAP",
      "Framer Motion",
      "Figma (Logo design)"
    ],
    live: "https://pedromagalhaes.vercel.app/",
    repo: null,
    year: 2025,
  }
];
