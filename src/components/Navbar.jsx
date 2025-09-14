import { useState, useEffect } from "react";

const Navbar = () => {
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShrink(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 transition-all duration-300 ${shrink
                    ? "py-3 bg-white/30 backdrop-blur-md shadow-md"
                    : "py-7 bg-transparent"
                }`}
        >
            {/* Logo */}
            <div className="logo transition-all duration-300">
                <h1
                    className={`font-bold text-white transition-all duration-300 ${shrink ? "text-2xl" : "text-3xl"
                        }`}
                >
                    Portfolio
                </h1>
            </div>

            {/* Menu */}
            <ul className="flex items-center gap-8">
                <li>
                    <a href="#beranda" className="text-white font-medium hover:opacity-80">
                        Beranda
                    </a>
                </li>
                <li>
                    <a href="#tentang" className="text-white font-medium hover:opacity-80">
                        Tentang
                    </a>
                </li>
                <li>
                    <a href="#proyek" className="text-white font-medium hover:opacity-80">
                        Proyek
                    </a>
                </li>
                <li>
                    <a href="#kontak" className="text-white font-medium hover:opacity-80">
                        Kontak
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
