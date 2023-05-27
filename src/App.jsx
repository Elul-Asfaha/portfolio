import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Specialities from "./pages/Specialities";
import MobileMenu from "./components/MobileMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const [nightmode, setNightMode] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);

    const handleNightMode = () => {
        setNightMode(!nightmode);
        console.log(nightmode);
    };
    const handleMenuToggle = () => {
        setMenuToggle(!menuToggle);
    };
    return (
        <BrowserRouter>
            <div
                className={`font-poppins ${
                    !nightmode
                        ? "text-white bg-blue-950"
                        : "text-black bg-white"
                }`}
            >
                <Home
                    nightModeToggler={handleNightMode}
                    nightmode={nightmode}
                    menuToggler={handleMenuToggle}
                />

                <Specialities />
                <Projects />
                {menuToggle && (
                    <MobileMenu
                        nightmode={nightmode}
                        menuToggler={handleMenuToggle}
                    />
                )}
            </div>
        </BrowserRouter>
    );
}

export default App;
