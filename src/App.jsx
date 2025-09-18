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
        {showWaves && <WavesSVG  key="sea"/>} 
        {/* key is constant while in sea context → no remount when toggling Home/Menu */}
      </AnimatePresence>
      
        {menuOpen && (
          <motion.div
            className="boatLayer"        
            animate={{ x: ["-30vw", "112vw"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >

    <BoatSVG style={{ width: "100px" }} />
  </motion.div>
)}



      </>
  );
}


