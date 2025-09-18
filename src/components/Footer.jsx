import Typewriter from "./Typewriter";

const Footer = () => {

    const teks = ["Full-stack Web Developer", "IoT Engineer", "Graphic Designer"];

    return (
        <footer className="w-full bg-zinc-600 text-white py-10 px-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

                {/* Bagian Kiri */}
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold">Dendi Paugus Sukmaya</h1>
                    <p className="text-sm mt-2">
                        <Typewriter texts={teks} fontSize={"text-xl"} mode="static" />
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start mt-4">
                        <a href="https://linkedin.com/in/dendi-paugus-sukmaya" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                            <i className="ri-linkedin-fill ri-xl"></i>
                        </a>
                        <a href="https://www.instagram.com/_denpau89/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                            <i className="ri-instagram-line ri-xl"></i>
                        </a>
                        <a href="https://github.com/dendipauguss" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
                            <i className="ri-github-line ri-xl"></i>
                        </a>
                        <a href="https://www.youtube.com/@dendipaugussukmaya3303" target="_blank" rel="noopener noreferrer">
                            <i className="ri-youtube-fill ri-xl"></i>
                        </a>
                    </div>
                </div>

                {/* Bagian Kanan */}
                <div className="text-center md:text-right">
                    <div className="flex flex-wrap gap-6 justify-center md:justify-end text-sm mb-3">
                        <a href="#beranda" className="hover:underline text-xl">Home</a>
                        <a href="#tentang" className="hover:underline text-xl">About</a>
                        <a href="#tools" className="hover:underline text-xl">Tools</a>
                        <a href="#proyek" className="hover:underline text-xl">Projects</a>
                        <a href="#pengalaman" className="hover:underline text-xl">Work Experience</a>
                        <a href="#kontak" className="hover:underline text-xl">Contact</a>
                    </div>
                    <p className="text-xl opacity-80">
                        © 2025 Dendi Paugus Sukmaya. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
