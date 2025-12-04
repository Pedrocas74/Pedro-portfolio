export const fade = {
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
