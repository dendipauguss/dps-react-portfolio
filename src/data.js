import HeroImage from "/assets/dendi-img.webp";
// import HeroImage from "/assets/dendi_gemini_v2.png";
import LogoImage from "/assets/dps-logo.png";

const Image = {
  HeroImage,
  LogoImage
};

export default Image;

import Tools1 from "/assets/tools/html.png";
import Tools2 from "/assets/tools/css.png";
import Tools3 from "/assets/tools/js.png";
import Tools4 from "/assets/tools/bootstrap.png";
import Tools5 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/php.png";
import Tools7 from "/assets/tools/codeigniter.png";
import Tools8 from "/assets/tools/laravel.png";
import Tools9 from "/assets/tools/nodejs.png";
import Tools10 from "/assets/tools/reactjs.png";
import Tools11 from "/assets/tools/mysql.png";
import Tools12 from "/assets/tools/vscode.png";
import Tools13 from "/assets/tools/git.png";
import Tools14 from "/assets/tools/github.png";
import Tools15 from "/assets/tools/cpanel.png";
import Tools16 from "/assets/tools/arduino.png";
import Tools17 from "/assets/tools/coreldraw.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "HTML",
    ket: "Markup Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "CSS",
    ket: "Style Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Javascript",
    ket: "Programming Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "PHP",
    ket: "Programming Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Codeigniter",
    ket: "PHP Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Laravel",
    ket: "PHP Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "React JS",
    ket: "Javascript Library",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "MySQL",
    ket: "Query Language",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Git",
    ket: "Version Control",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Github",
    ket: "Cloud Repository Platform",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "cPanel",
    ket: "Web Hosting Panel",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Arduino IDE",
    ket: "Microcontroller Code Editor",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Corel Draw Graphic Suite",
    ket: "Design App",
    dad: "1700",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "1 Minute 2D Animation using Toon Boom Harmony 17",
    desk: "The animation project “KUALAT IS REAL” is a 2D Animation course assignment that I worked on using Toon Boom Harmony 17 for animation creation, CorelDraw X7 for background design, and Sony Vegas Pro 13 for final editing. This animation conveys a moral message about the importance of respecting others, by conveying that every action has its consequences—in line with the meaning of “kualat” in Indonesian culture.",
    tools: ["Harmony", "Vegas Pro", "CorelDraw"],
    links: ["https://youtu.be/EIy-OZB8ng0?si=lRgHeCNOsukxc4a5"],
    dad: "400",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Lecturer Performance Assessment Information System",
    desk: "This project, a Lecturer Performance Assessment Information System (SI-PKD), was developed to support a more efficient, transparent, and accountable lecturer performance evaluation process. This system allows lecturers to independently input their performance achievements and provides management with access to validate, assess, and report performance results. With this system, the previously manual performance assessment process can be accelerated and the potential for error minimized, while simultaneously improving the accuracy of data used in managerial decision-making at universities.",
    tools: ["HTML", "Bootstrap", "Javascript", "Laravel", "MySQL"],
    links: ["https://sikap.unma.ac.id/"],
    dad: "200",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Integrating Micro-Hydro Power Plants with an Internet of Things (IoT)-Based Monitoring System",
    desk: "Integration of Microhydro Power Plants with an Internet of Things (IoT)-Based Monitoring System. This is a social project of Innovillage 2023 held by PT. Telkom Indonesia. The goal is to monitor the microhydro power plant equipment at the Ciremai Climbing Basecamp via Apuy, Argamukti Village, Argapura District, Majalengka Regency. The IoT integration uses the main electronic device, namely ESP32 and monitoring via Blynk.io.",
    tools: ["ESP32", "C/C++", "Arduino", "Blynk.io"],
    links: ["https://www.youtube.com/watch?v=SS2p-KYn-zA&t=54s", "https://www.youtube.com/watch?v=kmsNVPAtx5I", "https://www.youtube.com/watch?v=vZU5fVxkC3k"],
    dad: "300",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Academic Quality Assurance Information System",
    desk: "A web-based academic quality assurance system for Muhammadiyah University of Cirebon. An administrator dashboard has been developed and maintained to manage internal quality audits, lecturer performance monitoring, and academic reporting. The public site displays general information, while key features are accessible through registered admin and user logins within the university.",
    tools: ["HTML", "Bootstrap", "Javascript", "Codeigniter 3", "MySQL"],
    links: ["https://mutu.umc.ac.id/"],
    dad: "200",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Administrative Information System for Sanctions Management",
    desk: "This web application is an information system designed to facilitate the monitoring, management, and reporting of administrative sanctions imposed on business actors in a structured and integrated manner. This system was developed to support the agency's oversight needs, particularly in recording violations, imposing gradual sanctions (escalation), and monitoring the follow-up status of each sanction letter issued.",
    tools: ["HTML", "Bootstrap", "Javascript", "Laravel", "MySQL"],
    links: ["https://administratif.bappebti.go.id/"],
    dad: "200",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Transaction Monitoring Analysis Information System for Alternative Trading Systems",
    desk: "This web application was developed to facilitate the automated analysis, monitoring, and auditing of trading transaction data through Journal Report and Equity Report files. The system is capable of processing large amounts of log data, quickly displaying analysis results, and reducing manual work in checking reports. This application was created to improve the efficiency of auditing and monitoring trading activities, accelerate report data analysis, and help accurately identify potential system and transaction errors.",
    tools: ["HTML", "Bootstrap", "Javascript", "Laravel", "MySQL"],
    links: ["https://data-wastran2.bappebti.go.id/"],
    dad: "200",
  },
];
export const listPengalaman = [
  {
    id: 1,
    company: "Saung Digital Printing — Lemahsugih, Majalengka ",
    lengthOfWork: "Nov 2020 - Nov 2020",
    position: ["Graphic Designer"],
    workType: ["Fulltime"],
    desk: "During my time there, I was responsible for designing various visual design needs, such as banners, signs, stickers, product packaging, and other printed promotional materials, as requested by clients. In this role, I developed the ability to transform concepts into attractive, functional, and production-ready designs, while ensuring the quality of the prints met company standards. This experience trained me to work quickly, meticulously, and creatively when dealing with diverse and time-sensitive design requests.",
    dad: "300",
  },
  {
    id: 2,
    company: "PT BGR Logistik Indonesia (member of IDFOOD) — Majalengka",
    lengthOfWork: "Aug 2024 - Nov 2024",
    position: ["Distribution Data Verifier"],
    workType: ["Contract", "Government Program"],
    desk: "Served for three months as a contract worker to verify the completeness and validity of evidence of stunting food aid distribution from sub-district field coordinators in the Majalengka area. The verified evidence was then inputted into the central system (IDFOOD) through the LOGEE application, to ensure the accuracy of targeting and accountability of the national program involving the National Food Agency (Bapanas), the state-owned enterprise IDFOOD, BGR Logistik Indonesia, and Berdikari.",
    dad: "200",
  },
  {
    id: 3,
    company: "Commodity Futures Trading Supervisory Agency (BAPPEBTI), Ministry of Trade of the Republic of Indonesia — Jakarta",
    lengthOfWork: "Nov 2025 - Present",
    position: ["Trading Staff"],
    workType: ["Internship", "Government Program"],
    desk: "During my internship with the Indonesian Ministry of Manpower and placement at the Commodity Futures Trading Supervisory Agency (BAPPEBTI), I served as a Trading Staff member, focusing on data processing, analysis, and reporting in the areas of supervision and enforcement. In practice, I participated in developing a web application capable of automatically checking and analyzing errors or violations in transaction reports on alternative trading systems. Furthermore, I also developed an administrative application to support data and document management related to the imposition of sanctions on business actors in the Commodity Futures Trading (PBK), Warehouse Receipt System (SRG), and Commodity Auction Market (PLK) sectors. This experience not only honed my technical skills in system development but also enhanced my understanding of business processes and regulations in the national trade sector.",
    dad: "200",
  },
];
