const Footer = () => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col justify-between items-center md:gap-0 gap-6">
            <h1 className="text-2xl font-bold">Portfolio</h1>
            <div className="flex gap-7">
                <a href="#">Beranda</a>
                <a href="#">Tentang</a>
                <a href="#">Proyek</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://github.com/dendipauguss/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="https://linkedin.com/in/dendi-paugus-sukmaya" target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
                <a href="https://www.instagram.com/_denpau89/" target="_blank" rel="noopener noreferrer">
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="ri-reddit-fill ri-2x"></i>
                </a>
                <a href="https://www.youtube.com/@dendipaugussukmaya3303" target="_blank" rel="noopener noreferrer">
                    <i className="ri-youtube-fill ri-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer