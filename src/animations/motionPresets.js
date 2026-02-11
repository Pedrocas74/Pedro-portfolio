

export const fade = { //top to bottom
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export const fadeWork = { 
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", type: "spring", damping: 8 },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export const revealLR = {
  hidden: {
    opacity: 0,
    x: -16,                       // optional: remove if you want ZERO slide
    clipPath: "inset(0 100% 0 0)"  // fully clipped from the right
  },
  visible: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0% 0 0)",   // fully revealed
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  exit: {
    opacity: 0,
    x: -16,
    clipPath: "inset(0 100% 0 0)",
    transition: { duration: 0.4, ease: "easeInOut" }
  }
};



export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      when: "beforeChildren"
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.25,
      when: "afterChildren",
    },
  },
};
