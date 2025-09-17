import DataImage from "./data";
import Typewriter from "./components/Typewriter";
import { listTools, listProyek } from "./data";

function App() {
  const teks = ["Full-stack Web Developer", "IoT Engineer", "Graphic Designer"];

  return (
    <div className="pt-24">
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Beautiful code is born from experience. 😎</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Dendi Paugus Sukmaya</h1>
          <Typewriter texts={teks} />
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-yellow-500 p-4 rounded-2xl hover:bg-blue-400">
              Download CV <i className="ri-download-2-line ri-md"></i>
            </a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Lihat Proyek <i className="ri-arrow-down-circle-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s rounded-3xl" loading="lazy" />
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10 scroll-mt-20" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-2xl/loose mb-10">
            I am a recent Informatics graduate from Majalengka University with a strong interest in information technology, particularly in web application development and maintenance. During my studies, I have worked on several personal projects and coursework using HTML, CSS (Bootstrap), JavaScript, PHP, and the CodeIgniter and Laravel frameworks. I am also familiar with MySQL, Git, and cPanel, and am currently learning React.js and Node.js to expand my skills. I am enthusiastic about continuing to learn and ready to contribute to the technology development team.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">2 <span className="text-blue-500">+</span></h1>
                <p>Completed Projects</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">2 <span className="text-blue-500">+</span></h1>
                <p>Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32 scroll-mt-24" id="tools">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools and Programming Languages Used</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            Here are some of the tools and programming languages I use for Web Application Development, IoT Engineering, and Graphic Design: </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div key={tool.id} className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="2000" data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10 scroll-mt-20" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="zoom-out" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="zoom-out" data-aos-duration="1500" data-aos-once="true">Berikut proyek yang sudah selesai dibuat :</p>
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
                  <a href={proyek.link} className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600" target="_blank">{proyek.link}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 p-10 scroll-mt-20" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/dendipauguss1111@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" id="nama" placeholder="Masukkan nama ..." className="bg-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">Email</label>
              <input type="email" name="email" id="email" placeholder="Masukkan email ..." className="bg-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" className="bg-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </div>
  )
}

export default App
