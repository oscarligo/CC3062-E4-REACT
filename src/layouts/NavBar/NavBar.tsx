import  "./NavBar.css";
import { Link } from "react-router";
import Sidebar from "../SideBar/SideBar";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
export default function Navbar() {
    return (
        <nav className="navbar">
            <Sidebar />
        

            <Link to="/" className="logo">
                sadasd<span>asdasda</span>
            </Link>

            <input 
                type="text" 
                className="searchBar" 
                placeholder="Buscar..." 
            />

            <ThemeToggle />

            <div className="languageSelector">
                <select>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
            </div>

            

            
        </nav>
    );
}