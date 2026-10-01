import { useEffect } from "react";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";
import DataImage, { listTools, listProyek, listPengalaman } from "./data";
import Typewriter from "./components/Typewriter";
import HeroFrame from "./components/HeroFrame";

const teks = ["Full-stack Web Developer", "IoT Engineer", "Graphic Designer"];

function HomePage() {
  return (
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Dendi Paugus Sukmaya" className="w-10 rounded-md" loading="lazy" />
          <q>Beautiful code is born from experiences. 😎</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Dendi Paugus Sukmaya</h1>
        <Typewriter texts={teks} />
        <div className="flex items-center sm:gap-4 gap-2">
          <Link to="/contact" className="bg-yellow-500 p-4 rounded-2xl hover:bg-yellow-600 transition-colors">
            Send Message <i className="ri-mail-send-line ri-md"></i>
          </Link>
          <Link to="/projects" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
            See The Projects <i className="ri-arrow-right-circle-line ri-lg"></i>
          </Link>
        </div>
      </div>
      <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-3s">
        <HeroFrame image={DataImage.HeroImage} />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <section className="mt-10 py-10">
      <h1 className="text-4xl font-bold mb-8">About</h1>
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="Dendi Paugus Sukmaya" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
        <p className="text-2xl/loose mb-10">
          I am a recent Informatics graduate from Majalengka University with a strong interest in information technology, particularly in web application development and maintenance. During my studies, I have worked on several personal projects and coursework using HTML, CSS (Bootstrap), JavaScript, PHP, and the CodeIgniter and Laravel frameworks. I am also familiar with MySQL, Git, and cPanel, and am currently learning React.js and Node.js to expand my skills. I am enthusiastic about continuing to learn and ready to contribute to the technology development team.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Dendi Paugus Sukmaya" className="w-12 rounded-md sm:block hidden" loading="lazy" />
          <div className="flex items-center gap-6">
            <div>
              <h2 className="text-4xl mb-1">{listProyek.length} <span className="text-blue-500">+</span></h2>
              <p>Completed Projects</p>
            </div>
            <div>
              <h2 className="text-4xl mb-1">{listPengalaman.length} <span className="text-blue-500">+</span></h2>
              <p>Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolsPage() {
  return (
    <section className="mt-10 py-10">
      <h1 className="text-4xl/snug font-bold mb-4">Tools and Programming Languages</h1>
      <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
        Tools and programming languages I use for Web Application Development, IoT Engineering, and Graphic Design.
      </p>
      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listTools.map((tool) => (
          <div key={tool.id} className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
            <img src={tool.gambar} alt={tool.nama} className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
            <div>
              <h2 className="font-bold">{tool.nama}</h2>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <section className="mt-10 py-10">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-base/loose opacity-50">The following projects have been completed:</p>
      <div className="mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {[...listProyek].sort((a, b) => b.id - a.id).map((proyek) => (
          <article key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
            <img src={proyek.gambar} alt={proyek.nama} />
            <div>
              <h2 className="text-2xl font-bold my-4">{proyek.nama}</h2>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold hover:bg-zinc-700 transition-colors">{tool}</span>
                ))}
              </div>
              <div className="mt-8 text-center">
                {proyek.links.map((link, index) => (
                  <a key={index} href={link} className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600" target="_blank" rel="noreferrer">{link}</a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperiencePage() {
  return (
    <section className="mt-10 py-10">
      <h1 className="text-4xl font-bold mb-2">Work Experience</h1>
      <p className="text-base/loose opacity-50">Some work experience during or after education:</p>
      <div className="mt-14">
        {[...listPengalaman].sort((a, b) => b.id - a.id).map((pengalaman) => (
          <article key={pengalaman.id} className="p-4 bg-zinc-800 rounded-md mt-5" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay={pengalaman.dad} data-aos-once="true">
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-2xl font-bold my-4">{pengalaman.company}</h2>
              <p className="text-xl my-4 shrink-0 text-right">{pengalaman.lengthOfWork}</p>
            </div>
            <Typewriter texts={pengalaman.position} fontSize="text-xl/normal" mode="static" />
            <p className="text-base/loose mb-4">{pengalaman.desk}</p>
            <p className="text-xl/normal">Work Type: <b>{pengalaman.workType.join(" | ")}</b></p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="mt-10 py-10">
      <h1 className="text-4xl mb-2 font-bold">Contact</h1>
      <p className="text-base/loose mb-10 opacity-50">Come connect with me</p>
      <form action="https://formsubmit.co/dendipauguss1111@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="nama" className="font-semibold">Full Name</label>
            <input type="text" name="nama" id="nama" placeholder="Enter a name ..." className="bg-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter an email ..." className="bg-zinc-500 p-2 rounded-md" required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">Message</label>
            <textarea name="pesan" id="pesan" cols="45" rows="7" className="bg-zinc-500 p-2 rounded-md" required></textarea>
          </div>
          <button type="submit" className="bg-blue-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-blue-600">Send Message</button>
        </div>
      </form>
    </section>
  );
}

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="pt-24 min-h-[70vh]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}

export default App;
