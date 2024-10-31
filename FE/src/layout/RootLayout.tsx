
import Navbar from "../components/nav/Navbar";

import { Outlet } from "react-router-dom";




const RootLayout = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector("nav");
        header?.classList.toggle("navFixed", this.window.scrollY > 0);
    });


    return (
        <>
            <nav className="nav">
                <Navbar />
            </nav>
            <Outlet />
        </>
    )
}

export default RootLayout