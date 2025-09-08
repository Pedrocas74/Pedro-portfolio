import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//style
import './App.css';

//components
import NavButton from './Components/NavButton.jsx';
import NavigationMenu from './Components/NavigationMenu.jsx';

//pages
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';



function App() {
  const [menuOpen, setMenuOpen] = useState(false);  //state 


  return (
      <BrowserRouter>
        <NavButton  menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavigationMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
