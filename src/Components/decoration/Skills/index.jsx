import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Skills() {
  const [activeKey, setActiveKey] = useState(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 1024;

  const handleEnter = (key) => {
    if (!isMobile) setActiveKey(key);
  };
  const handleLeave = () => {
    if (!isMobile) setActiveKey(null);
  };
  const handleClick = (key) => {
    if (isMobile) {
      setActiveKey((prev) => (prev === key ? null : key));
    }
  };

  const getFill = (key) => {
    if (activeKey === key) {
      return isMobile ? "var(--clr-primary)" : "var(--clr-bg-light)";
    }
    return "var(--clr-bg-dark)";
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    exit: {
      opacity: 0,
      y: 15,
      transition: {
        duration: 0.35,
        ease: "easeIn",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const iconVariants = {
  hidden: {
    opacity: 0,
    y: 30,          // deeper under the water
    scaleY: 0.7,    // squashed
    scaleX: 1.08,   // a bit wider
  },
  visible: {
    opacity: 1,
    y: [30, -6, 0],               
    scaleY: [0.7, 1.15, 1],        
    scaleX: [1.08, 0.95, 1],       
    transition: {
      duration: 0.8,
      ease: "easeOut",
      times: [0, 0.55, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 15,
    transition: { duration: 0.25, ease: "easeIn" },
  },

    float1: {
      y: [-12, 0, 10, 0, -12],
      rotateX: [0, 30, 5, -25, 0],
      rotateZ: [0, -25, 5, 25, 0],
      transition: {
        duration: 11,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        delay: 0.7,
      },
    },
    float2: {
      y: [15, 7, 0, 7, 15],
      rotateX: [-20, 0, 0, 0, 20],
      rotateZ: [10, 0, -5, 0, 10],
      transition: {
        duration: 9,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <div>
      <motion.div
        className={styles.mainContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* REACT  */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            //64 default
            width={30}
            height={30}
            fill={getFill("react")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("react")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("react")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float1"],
              exit: "exit",
            })}
            className={styles.top}
          >
            <path d="M12 9.46a1.785 1.785 0 1 0 0 3.57 1.785 1.785 0 1 0 0-3.57M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452S3.674 8.53 6.607 7.789l.395-.1.111.391a19.5 19.5 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54q.41-1.304.985-2.54a20 20 0 0 1-.985-2.542m10.572 6.095-.11-.392a19.6 19.6 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453s-1.683 2.711-4.617 3.452zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a21 21 0 0 1-.987 2.542"></path>
            <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a20 20 0 0 0-2.02 2.474l-.113.162-.196.016a19.7 19.7 0 0 0-3.157.509zm1.582-5.529q-.337 0-.589.145c-.828.477-.974 2.138-.304 4.38q1.337-.297 2.696-.417a21 21 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985m7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a20 20 0 0 0 2.021-2.477l.112-.16.194-.019a19.5 19.5 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a2 2 0 0 1-1.005.257m-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986q.339-.001.589-.145c.829-.478.976-2.142.304-4.384q-1.335.299-2.698.419a20.5 20.5 0 0 1-1.71 2.124"></path>
            <path d="m17.58 8.695-.395-.099a19.5 19.5 0 0 0-3.158-.509l-.194-.017-.112-.162A19.6 19.6 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.304-4.381-.824-.477-2.375.253-4.004 1.841q.926 1.005 1.71 2.123M8.001 20.15a2 2 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.930.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522m-.993-5.362c-.57 2.242-.424 3.906.304 4.384.825.47 2.371-.255 4.005-1.842a21 21 0 0 1-1.713-2.123 21 21 0 0 1-2.696-.419"></path>
            <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a26 26 0 0 1-1.126-1.769 26 26 0 0 1-.971-1.859l-.084-.177.084-.179q.448-.948.971-1.858c.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25 25 0 0 1 4.198 0l.194.019.113.16a25 25 0 0 1 2.1 3.628l.083.179-.083.177a25 25 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087m-1.834-.904c1.235.093 2.433.093 3.667 0a24.5 24.5 0 0 0 1.832-3.168 24 24 0 0 0-1.832-3.168 24 24 0 0 0-3.667 0 24 24 0 0 0-1.832 3.168 25 25 0 0 0 1.832 3.168"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "react" ? 1 : 0,
              y: activeKey === "react" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            React
          </motion.span>
        </div>
        {/* TS */}{" "}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("ts")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("ts")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("ts")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float2"],
              exit: "exit",
            })}
            className={styles.bottom}
          >
            <path d="M19.24 3H4.76A1.76 1.76 0 0 0 3 4.76v14.48A1.76 1.76 0 0 0 4.76 21h14.48A1.76 1.76 0 0 0 21 19.24V4.76A1.76 1.76 0 0 0 19.24 3m-5.8 10h-2.25v6.44H9.4V13H7.15v-1.46h6.29zm5.8 5.28a1.7 1.7 0 0 1-.67.74 3 3 0 0 1-1 .39 6 6 0 0 1-1.2.12 7 7 0 0 1-1.23-.11 4.5 4.5 0 0 1-1-.33v-1.71l-.06-.06h.06v.07a3.4 3.4 0 0 0 1 .54 3.1 3.1 0 0 0 1.13.2 2.6 2.6 0 0 0 .6-.06 1.5 1.5 0 0 0 .42-.17.75.75 0 0 0 .25-.25.69.69 0 0 0-.06-.74 1.2 1.2 0 0 0-.35-.33 3 3 0 0 0-.53-.3l-.67-.28a3.6 3.6 0 0 1-1.37-1 2 2 0 0 1-.46-1.33 2.16 2.16 0 0 1 .24-1.06 2.1 2.1 0 0 1 .66-.71 2.9 2.9 0 0 1 1-.42 5 5 0 0 1 1.19-.13 7 7 0 0 1 1.09.07 4.5 4.5 0 0 1 .88.23v1.65a2.4 2.4 0 0 0-.42-.24 4 4 0 0 0-.49-.17 3 3 0 0 0-.49-.1 2.5 2.5 0 0 0-.46 0 2.3 2.3 0 0 0-.56.06 1.5 1.5 0 0 0-.43.16.8.8 0 0 0-.26.25.63.63 0 0 0-.09.33.6.6 0 0 0 .1.35 1.2 1.2 0 0 0 .3.29 2.2 2.2 0 0 0 .46.28l.63.28a6.6 6.6 0 0 1 .84.42 2.7 2.7 0 0 1 .30.49 1.8 1.8 0 0 1 .42.63 2.5 2.5 0 0 1 .14.85 2.7 2.7 0 0 1-.25 1.08z"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "ts" ? 1 : 0,
              y: activeKey === "ts" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Typescript
          </motion.span>
        </div>
        {/* GSAP  */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("gsap")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("gsap")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("gsap")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float1"],
              exit: "exit",
            })}
            className={styles.middle}
          >
            <path d="m7.83,11.76h0s-.26,1.15-.26,1.15c-.01.06-.08.11-.15.11h-.32s-.04.02-.05.04c-.29.99-.69,1.68-1.21,2.09-.45.35-1,.51-1.73.51-.66,0-1.1-.21-1.48-.63-.5-.55-.7-1.46-.58-2.55.22-2.05,1.29-4.12,3.34-4.12.62,0,1.11.19,1.45.57.36.41.54,1.02.54,1.82,0,.07-.06.13-.13.13h-1.5c-.05,0-.1-.05-.1-.1-.01-.55-.18-.82-.5-.82-.58,0-.91.78-1.09,1.21-.25.6-.38,1.26-.35,1.92.01.3.06.73.35.91.26.16.62.05.84-.12.22-.17.4-.48.47-.75.01-.04.01-.07,0-.08-.01-.01-.04-.02-.06-.02h-.39s-.08-.02-.11-.05c-.02-.02-.03-.06-.02-.09l.26-1.14c.01-.06.07-.1.13-.11h0s2.53,0,2.53,0c0,0,.01,0,.02,0,.07,0,.11.07.11.14h0Z"></path>
            <path d="m12.18,10.45c0,.07-.06.13-.13.13h-1.38c-.09,0-.17-.07-.17-.16,0-.4-.14-.6-.42-.6s-.47.18-.47.48c0,.34.19.65.74,1.18.72.68,1.01,1.28,1,2.08-.02,1.29-.9,2.12-2.23,2.12-.68,0-1.2-.18-1.54-.54-.35-.36-.51-.9-.48-1.59,0-.07.06-.13.13-.13h1.43s.08.02.1.05c.02.03.03.06.03.09-.02.25.03.43.13.54.06.07.15.1.26.1.26,0,.42-.19.42-.51,0-.28-.08-.53-.57-1.03-.63-.61-1.19-1.24-1.17-2.23.01-.58.24-1.1.30-1.48.43-.4,1.01-.61,1.69-.61.68,0,1.2.2,1.53.58.32.36.47.88.46,1.54h0Z"></path>
            <path d="m16.47,15.43v-6.84c.01-.07-.05-.13-.12-.13,0,0,0,0,0,0h-2.14c-.07,0-.1.06-.12.1l-3.1,6.82h0s0,0,0,0c-.03.08.03.17.12.17h1.5c.08,0,.13-.02.16-.08l.3-.71c.04-.09.04-.1.15-.1h1.43c.1,0,.1,0,.1.1l-.03.66c0,.07.06.13.13.13,0,0,0,0,0,0h1.51s.07-.02.1-.04c.02-.02.03-.06.03-.09Zm-2.65-2.28s-.02,0-.03,0c-.02,0-.03-.02-.03-.04,0,0,0,0,0,0,0-.01,0-.02.01-.04l1.07-2.65s.02-.05.03-.08c.02-.04.04-.04.05-.01,0,.02-.12,2.72-.12,2.72-.01.1-.01.11-.11.11h-.86s0-.01,0-.01h0s0,0,0,0Z"></path>
            <path d="m19.51,8.46h-1.14c-.06,0-.13.03-.14.1l-1.58,6.86s0,.06.02.09c.03.03.07.05.11.05h1.42c.08,0,.13-.04.14-.1,0,0,.17-.78.17-.78.01-.06,0-.11-.06-.14-.03-.01-.05-.03-.08-.04l-.25-.13-.24-.13-.09-.05s-.03-.02-.02-.04c0-.03.02-.05.05-.05h.78c.23,0,.47-.01.69-.05,1.61-.3,2.68-1.59,2.71-3.34.03-1.5-.81-2.26-2.48-2.26,0,0,0,0,0,0Zm-.39,4.08h-.03c-.07,0-.08,0-.08,0,0,0,.45-1.98.45-1.98.01-.06.01-.09-.02-.11-.05-.02-.7-.37-.7-.37-.02,0-.03-.02-.02-.04,0-.03.02-.05.05-.05h1.04c.32,0,.5.3.49.79-.01.85-.42,1.74-1.17,1.77h0Z"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "gsap" ? 1 : 0,
              y: activeKey === "gsap" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            GSAP
          </motion.span>
        </div>
        {/* HTML  */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("html")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("html")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("html")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float2"],
              exit: "exit",
            })}
            className={styles.bottom}
          >
            <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.302z"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "html" ? 1 : 0,
              y: activeKey === "html" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            HTML5
          </motion.span>
        </div>
        {/* GIT  */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("git")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("git")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("git")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float1"],
              exit: "exit",
            })}
            className={styles.middle}
          >
            <path d="m21.62 11.108-8.731-8.729a1.29 1.29 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.54 1.54 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.307.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.53 1.53 0 0 1 0-2.130q.23-.226.504-.339v-5.49a1.53 1.53 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "git" ? 1 : 0,
              y: activeKey === "git" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Git
          </motion.span>
        </div>
        {/* MOTION  */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("motion")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("motion")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("motion")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float2"],
              exit: "exit",
            })}
            className={styles.middle}
          >
            <path
              d="M20.2 8.5a1.8 1.75 0 1 0 0 3.5 1.8 1.75 0 1 0 0-3.5M10.54 15.5h1.8c1 0 2.19-.69 2.67-1.53L18.1 8.5h-3.6zM7.76 8.5c-1 0-2.19.69-2.67 1.53L2 15.5h3.6l3.96-7zM10.23 8.5l-3.95 7h3.6l3.96-7z"
              class="b"
            ></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "motion" ? 1 : 0,
              y: activeKey === "motion" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Motion
          </motion.span>
        </div>
        {/* CSS  */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("css")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("css")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("css")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float1"],
              exit: "exit",
            })}
            className={styles.bottom}
          >
            <path d="M4.192 3.143h15.615l-1.42 16.034-6.304 1.812-6.369-1.813zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.130.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137z"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "css" ? 1 : 0,
              y: activeKey === "css" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            CSS3
          </motion.span>
        </div>
        {/* NODE.JS */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("node")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("node")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("node")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float2"],
              exit: "exit",
            })}
            className={styles.middle}
          >
            <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.130 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.030.771-1.339l7.316-4.237a1.30 1.30 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165m2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.303-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.309 2.568a.3.3 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.21.21 0 0 1-.202-.130c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "node" ? 1 : 0,
              y: activeKey === "node" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Node.js
          </motion.span>
        </div>
        {/* JAVASCRIPT  */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("js")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("js")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("js")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float1"],
              exit: "exit",
            })}
            className={styles.bottom}
          >
            <path d="M3 3h18v18H3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.301-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.301.383 1.502.507 2.304.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635z"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "js" ? 1 : 0,
              y: activeKey === "js" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Javascript
          </motion.span>
        </div>
        {/* NEXT.JS  */}
        <div className={styles.skillContainer}>
          <motion.svg
            xmlns="http://www.w3.org/2000/motion.svg"
            width={30}
            height={30}
            fill={getFill("next")}
            viewBox="0 0 24 24"
            onHoverStart={() => handleEnter("next")}
            onHoverEnd={handleLeave}
            onClick={() => handleClick("next")}
            variants={iconVariants}
            {...(!isMobile && {
              initial: "hidden",
              animate: ["visible", "float2"],
              exit: "exit",
            })}
            className={styles.top}
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.05 0 3.95-.62 5.54-1.67L9.26 9.63v6.5H7.87V7.86h1.74l9.03 11.63A9.97 9.97 0 0 0 22.01 12c0-5.52-4.48-10-10-10Zm4.25 12.13-1.38-1.78V7.86h1.38z"></path>
          </motion.svg>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{
              opacity: activeKey === "next" ? 1 : 0,
              y: activeKey === "next" ? 0 : 4,
            }}
            transition={{ duration: 0.2 }}
          >
            Next.js
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
