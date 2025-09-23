//dependencies
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

//style
import './App.css';

//components
import NavButton from './Components/NavButton.jsx';
import NavigationMenu from './Components/NavigationMenu.jsx';
import WavesSVG from './Components/WavesSVG.jsx';
import BoatSVG from './Components/BoatSVG.jsx';

//pages
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';



export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  //only show the sea when the location is the homepage or the navigation menu
  const showWaves = location.pathname === '/' || menuOpen;   

  //to make the boat move slower on larger screens
  const getBoatDuration = () => {
  if (window.innerWidth >= 1600) return 45; // Extra large screens
  if (window.innerWidth >= 1280) return 35; // Desktop M/L
  if (window.innerWidth >= 1024) return 30; // Desktop S
  return 17; // Default for smaller screens
};

  const getBoatCurves = () => {
    if (window.innerWidth >= 1600) return ["20%", "10%", "20%"] ; // Extra large screens
    if (window.innerWidth >= 1280) return ["-32%", "0%", "-32%"]; // Desktop M/L
    if (window.innerWidth >= 1024) return ["-17%", "0%", "-17%"]; // Desktop S
    return ["10%", "0%", "10%"]; // Default for smaller screens
  }


  return (
      <>
        <NavButton  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavigationMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
             

        <Routes>
          <Route path="/" element={<Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />} />                                                                                                                                                
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      
        {/* Presence handles enter/exit only when showSea flips true/false */}
      <AnimatePresence mode="wait" >
        {showWaves && <WavesSVG />} 
      </AnimatePresence>
      
        {menuOpen && (
          <motion.div
            className="boatLayer"        
            animate={{ x: ["-30vw", "112vw"], y: getBoatCurves() }}
            transition={{
              duration: getBoatDuration(),
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >

    <BoatSVG style={{ width: "100px", borderBottom: "1px solid #14162F" }} />
  </motion.div>
        )}
      </>
  );
}


