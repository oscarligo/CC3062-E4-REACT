import  "./NavBar.css";
import { Link } from "react-router";
import Sidebar from "../SideBar/SideBar";
export default function Navbar() {
    return (
        <nav className="navbar">
            <Sidebar />
            
            <Link to="/" className="logo">
                UV<span>Movies</span>
            </Link>

            <input 
                type="text" 
                className="searchBar" 
                placeholder="Buscar..." 
            />

            <div className="languageSelector">
                <select>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
            </div>

            

            
        </nav>
    );
}