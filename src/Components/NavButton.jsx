//button to open/close it

import { easeIn, easeInOut, motion } from "framer-motion";
import SailingIcon from "./SailingIcon";

function NavButton({ menuOpen, setMenuOpen }) {
  return (
    <motion.button
      onClick={() => setMenuOpen(!menuOpen)}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1001,
        cursor: "pointer",
        border: "none",
        padding: "7px",
        borderRadius: "20px",
        background: "white",
        overflow: "hidden", // ensures border fits nicely
      }}
      animate={{
        backgroundColor: menuOpen ? "transparent" : "#14162F",
      }}
      transition={{ duration: 1.5, ease: easeIn }}
    >
      {/* Border animation */}
      <motion.div
        style={{
          position: "absolute",
          inset: 4,
          border: "2px dashed #14162F",
          borderRadius: "8px",
          pointerEvents: "none",
        }}
        initial={false}
        animate={menuOpen ? { scale: 1, opacity: 1} : { scale: 0, opacity: 0.5 }}
        transition={{ duration: 0.4}}
      />

      {/* SVG icon */}
      <SailingIcon
        style={{
          width: 40,
          height: 40,
        }}
        fill="#14162F"
      />
    </motion.button>
  );
}

export default NavButton;
