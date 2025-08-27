const Navbar = () => {
    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">Portfolio</h1>
            </div>
            <ul className="menu flex items-center gap-10 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 -top-10 opacity-0 md:opacity-100 md:top-0">
                <li className="ms-2">
                    <a href="#" className="text-lg font-medium">Beranda</a>
                </li>
                <li className="ms-2">
                    <a href="#" className="text-lg font-medium">Tentang</a>
                </li>
                <li className="ms-2">
                    <a href="#" className="text-lg font-medium">Proyek</a>
                </li>
                <li className="ms-2">
                    <a href="#" className="text-lg font-medium">Kontak</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar