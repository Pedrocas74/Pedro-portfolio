//button to open/close it

function NavButton({ menuOpen, setMenuOpen }) {

    return (
        <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1001 }}
            >
            {menuOpen ? 'X' : '+'}
            </button>
        </div>
    );
}

export default NavButton;