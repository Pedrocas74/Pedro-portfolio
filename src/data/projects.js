// images 
// SOL 
import sol_logo from "/assets/work-images/Sol/LogoSOL.jpg";
import sol_hero from "/assets/work-images/Sol/Hero-Sol.webp";
import sol_mobile from "/assets/work-images/Sol/Sol-mobileMock.jpg";
// MOO 
import mooLogo_day from "/assets/work-images/Moo-MovieFinder/Logo_day_upscaled.png";
import mooHero from "/assets/work-images/Moo-MovieFinder/Moo-hero.webp";
import mooMobile from "/assets/work-images/Moo-MovieFinder/Moo-mobile.png";
import mooLogo_night from "/assets/work-images/Moo-MovieFinder/Logo_night_upscaled.webp";
// PORTFOLIO 
import portfolio_hero from "/assets/work-images/Portfolio/Portfolio-hero.webp";
import logoPedroBlue from "/assets/work-images/Portfolio/logoPedroBlue.png";
import portfolioMobile from "/assets/work-images/Portfolio/Portfolio-mobile.png";
import portfolioDarkMode from "/assets/work-images/Portfolio/Portfolio-darkMode.webp";


export const projects = [
    { //SOL E-COMMERCE STORE
    slug: "sol-store",
    name: "SOL",
    type: "E-Commerce",
    category: "Web Development",
    cover: sol_logo,
    imgs: [sol_hero, sol_mobile],
    descriptionLong: 
        "SOL is an experimental e-commerce platform built with Next.js and Redux that treats inventory as a living system. \nEvery page reload represents a leap forward in time, recalculating product stock as if real shoppers had been buying in the background. \nItems sell out, recover, and fluctuate organically, creating a storefront that never feels frozen or predictable.",
    tech: [
      "Next.js",
      "App Router",
      "Vite",
      "CSS Modules",
      "Framer Motion",
    ],
    live: "https://sol-shop.vercel.app/",
    repo: "https://github.com/Pedrocas74/redux-shop",
    year: 2025,
    mobile: true,
    darkMode: false,
  },

  { //MOO - MOVIE FINDER
    slug: "moo-movie-finder",
    name: "Moo",
    type: "Movie Finder",
    category: "Web Development",
    cover: mooLogo_day,
    imgs: [mooHero, mooLogo_night, mooMobile],
    descriptionLong:
      "Moo is a web app designed for people who love cinema and don’t want to lose track of the movies that matter to them. Instead of scattered notes or forgotten lists, Moo let's you build a personal movie history. \nSave films to a watchlist, mark your favorites, and keep track of what you’ve already watched — all in one place.\nMore than just a movie discovery tool, Moo is a space to curate your taste, revisit your choices, and shape your own cinematic identity.",
    tech: [
      "React",
      "Vite",
      "CSS Modules",
      "Framer Motion",
      "TMDB API",
      "Figma (Logo design)"
    ],
    live: "https://moo-finder.vercel.app/",
    repo: "https://github.com/Pedrocas74/MoovieFinder", //add later
    year: 2025,
    mobile: true,
    darkMode: true
  },

  { //PEDRO PORTFOLIO
    slug: "pedro-portfolio",
    name: "Pedro",
    type: "Personal Portfolio",
    category: "Web Development",
    cover: logoPedroBlue,
    imgs: [portfolio_hero, portfolioDarkMode, portfolioMobile],
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
    live: null,
    repo: "https://github.com/Pedrocas74/Pedro-portfolio",
    year: 2025,
    mobile: true,
    darkMode: true
  }
];
