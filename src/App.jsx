import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Kode yang indah lahir dari pengalaman. 😎</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hai, saya Dendi Paugus Sukmaya</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya adalah lulusan baru dengan gelar Sarjana Teknik Informatika dari Universitas Majalengka. Saya memiliki ketertarikan untuk terus mengikuti perkembangan teknologi terbaru serta menerapkan prinsip-prinsip object-oriented dalam pengembangan perangkat lunak. {/* Saya bercita-cita berkarier di bidang teknologi informasi, khususnya dalam pengembangan dan pemeliharaan aplikasi web. Saya menguasai teknologi pengembangan full-stack seperti Laravel, CodeIgniter, serta ekosistem JavaScript modern termasuk React.js, Express.js, dan Next.js. Kemampuan inti saya mencakup PHP, JavaScript, Node.js, dan arsitektur aplikasi web modern. */}
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600">
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
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">
            Saya adalah lulusan baru dengan gelar Sarjana Teknik Informatika dari Universitas Majalengka. Saya memiliki ketertarikan untuk terus mengikuti perkembangan teknologi terbaru serta menerapkan prinsip-prinsip object-oriented dalam pengembangan perangkat lunak. Saya bercita-cita berkarier di bidang teknologi informasi, khususnya dalam pengembangan dan pemeliharaan aplikasi web. Saya menguasai teknologi pengembangan full-stack seperti Laravel, CodeIgniter, serta ekosistem JavaScript modern termasuk React.js, Express.js, dan Next.js. Kemampuan inti saya mencakup PHP, JavaScript, Node.js, dan arsitektur aplikasi web modern.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">45 <span className="text-blue-500">+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">2 <span className="text-blue-500">+</span></h1>
                <p>Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Berikut ini beberapa tool yang saya pakai untuk kebutuhan Pengembangan Aplikasi Web: </p>
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
      <div className="proyek mt-32 py-10" id="proyek">
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
                  <a href="#" className="bg-blue-700 p-3 rounded-lg block border border-zinc-600 hover:bg-blue-600">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Kontak */}
      <div className="kontak mt-32 p-10" id="kontak">
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
    </>
  )
}

export default App
