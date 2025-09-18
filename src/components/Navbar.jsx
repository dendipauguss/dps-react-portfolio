import DataImage from "../data";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);   // untuk mobile
    const [shrink, setShrink] = useState(false);   // untuk desktop
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

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
            className={`navbar flex items-center justify-between fixed top-0 lg:px-19 md:px-27 px-5 left-0 w-full z-50 transition-all duration-300
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
                className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 
                    md:-translate-x-0 md:opacity-100 bg-white/30 md:backdrop-blur-none backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl 
                    md:bg-transparent transition-all md:transition-none z-40 
                    ${active ? "top-1 opacity-100" : "-top-10 opacity-0"}`}
            >
                <li><a href="#beranda" className="sm:text-lg text-base font-medium">Home</a></li>
                <li><a href="#tentang" className="sm:text-lg text-base font-medium">About</a></li>
                <li><a href="#tools" className="sm:text-lg text-base font-medium">Tools</a></li>
                <li><a href="#proyek" className="sm:text-lg text-base font-medium">Projects</a></li>
                <li><a href="#pengalaman" className="sm:text-lg text-base font-medium">Work Experience</a></li>
                <li><a href="#kontak" className="sm:text-lg text-base font-medium">Contact</a></li>
            </ul>

        </div>
    );
};

export default Navbar;
