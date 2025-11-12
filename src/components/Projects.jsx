import { listProyek } from "../data";

function Projects() {
    return (
        <div className="proyek mt-10 py-10 scroll-mt-20" id="proyek">
            <h1 className="text-center text-4xl font-bold mb-2" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">Projects</h1>
            <p className="text-base/loose text-center opacity-50" data-aos="zoom-out" data-aos-duration="1500" data-aos-once="true">The following projects have been completed:</p>
            <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {listProyek.map((proyek) => (
                    <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="zoom-out" data-aos-duration="2000" data-aos-delay={proyek.dad} data-aos-once="true">
                        <img src={proyek.gambar} alt="Proyek Image" />
                        <div>
                            <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                            <p className="text-base/loose mb-4">{proyek.desk}</p>
                            <div className="flex flex-wrap gap-2">
                                {proyek.tools.map((tool, index) => (
                                    <p key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">{tool}</p>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                {proyek.links.map((link, index) => (
                                    <a key={index} href={link} className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600" target="_blank">{link}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;