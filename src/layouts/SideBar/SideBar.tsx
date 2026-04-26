import { useState } from 'react';
import { Link } from 'react-router';
import  './SideBar.css';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <button className="menuBtn" onClick={toggleMenu} aria-label="Open menu">
                <div className={`line ${isOpen ? 'line1' : ''}`}></div>
                <div className={`line ${isOpen ? 'line2' : ''}`}></div>
                <div className={`line ${isOpen ? 'line3' : ''}`}></div>
            </button>

            {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <nav className="nav">
                <Link to="/" onClick={toggleMenu}>Inicio</Link>
                <Link to="/movies" onClick={toggleMenu}>Películas</Link>
                <Link to="/favorites" onClick={toggleMenu}>Favoritos</Link>
                </nav>
            </aside>
        </>
    );
}