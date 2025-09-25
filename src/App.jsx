//style
import "./App.css";
//dependencies
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
//components
import NavButton from "./Components/NavButton.jsx";
import NavigationMenu from "./Components/NavigationMenu.jsx";
import WavesSVG from "./Components/WavesSVG.jsx";
import BoatSVG from "./Components/BoatSVG.jsx";
//pages
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  //only show the sea when the location is the homepage or the navigation menu
  const showWaves = location.pathname === "/" || menuOpen;

  //to make the boat move slower on larger screens
  const getBoatDuration = () => {
    if (window.innerWidth >= 1600) return 37; // extra large screens
    if (window.innerWidth >= 1280) return 25; // desktop M/L
    if (window.innerWidth >= 1024) return 22; // desktop S
    return 17; // default for smaller screens
  };
  //to make the boat move up and down
  const getBoatCurves = () => {
    if (window.innerWidth >= 1600) return ["10%", "0%", "10%"];
    if (window.innerWidth >= 1280) return ["-30%", "0%", "-30%"];
    if (window.innerWidth >= 1024) return ["-17%", "0%", "-17%"];
    return ["8%", "0%", "8%"];
  };
  //to make the boat enter quickly on screen according to viewport width
  const getBoatEntrance = () => {
    if (window.innerWidth >= 1600) return ["-7vw", "107vw"];
    if (window.innerWidth >= 1280) return ["-9vw", "109vw"];
    if (window.innerWidth >= 1024) return ["-10vw", "112vw"];
    return ["-31vw", "112vw"];
  };

  return (
    <>
      <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavigationMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Routes>
        <Route
          path="/"
          element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* presence handles enter/exit only when showSea flips true/false */}
      <AnimatePresence mode="wait">{showWaves && <WavesSVG />}</AnimatePresence>

      {menuOpen && (
        <motion.div
          className="boatLayer"
          animate={{ x: getBoatEntrance(), y: getBoatCurves() }}
          transition={{
            duration: getBoatDuration(),
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <BoatSVG
            style={{ width: "100px", borderBottom: "1px solid #14162F" }}
          />
        </motion.div>
      )}
    </>
  );
}
