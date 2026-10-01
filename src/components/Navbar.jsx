import DataImage from "../data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] = useState(false);   // untuk mobile
    const [shrink, setShrink] = useState(false);   // untuk desktop
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);

        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
                if (window.innerWidth >= 768) {
                    setShrink(true);
                }
            } else {
                setActive(false);
                if (window.innerWidth >= 768) {
                    setShrink(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`navbar flex items-center justify-between fixed top-0 lg:px-19 md:px-10 px-5 left-0 w-full z-50 transition-all duration-300
                ${shrink ? "py-3 bg-yellow-600/10 backdrop-blur-md shadow-md" : "py-7 bg-transparent"}`}
        >

            {/* Logo */}
            <div className="logo">
                <h1
                    className={`font-bold transition-all duration-300 lg:ms-5 
                        ${shrink ? "text-2xl text-white" : "text-3xl text-white"} 
                        ${!isDesktop && active ? "opacity-0 scale-95 pointer-events-none"
                            : "opacity-100 scale-100"}`}
                >
                    <img src={DataImage.LogoImage} alt="Hero Image" className="w-[60px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s rounded-3xl" loading="lazy" />
                </h1>
            </div>

            {/* Menu */}
            <ul
                className={`menu flex md:flex-nowrap flex-wrap items-center justify-center
      sm:gap-10 gap-4 
      md:static fixed left-0 md:left-1/2 md:-translate-x-0 -translate-x-0
      w-full md:w-auto
      md:opacity-100 bg-white/30 md:backdrop-blur-none backdrop-blur-md 
      p-4 md:p-0 
      md:rounded-none rounded-br-2xl rounded-bl-2xl
      md:bg-transparent transition-all md:transition-none z-40
      ${active ? "top-1 opacity-100" : "-top-60 opacity-0"}`}
            >
                <li><Link to="/" onClick={() => setActive(false)} className="sm:text-lg text-base font-medium">Home</Link></li>
                <li><Link to="/about" onClick={() => setActive(false)} className="sm:text-lg text-base font-medium">About</Link></li>
                <li><Link to="/tools" onClick={() => setActive(false)} className="sm:text-lg text-base font-medium">Tools</Link></li>
                <li><Link to="/projects" onClick={() => setActive(false)} className="sm:text-lg text-base font-medium">Projects</Link></li>
                <li><Link to="/experience" onClick={() => setActive(false)} className="sm:text-lg text-base font-medium">Work Experience</Link></li>
                <li><Link to="/contact" onClick={() => setActive(false)} className="sm:text-lg text-base font-medium">Contact</Link></li>
            </ul>

            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white cursor-pointer hover:bg-yellow-600 transition-colors z-50 ml-4"
                aria-label="Toggle Theme"
            >
                {theme === "dark" ? (
                    <i className="ri-sun-line ri-lg"></i>
                ) : (
                    <i className="ri-moon-line ri-lg"></i>
                )}
            </button>

        </div>
    );
};

export default Navbar;
