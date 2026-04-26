import Navbar from "../NavBar/NavBar";
import { Outlet } from "react-router";

export default function MainLayout() {
    return (
        <div className="layout-root">
        <Navbar />
        
        <main className="content">
            <Outlet />
        </main>
        </div>
    );
}