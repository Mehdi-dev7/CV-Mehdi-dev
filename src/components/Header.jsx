import { MdEmail, MdPhone, MdDownload } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import IMG from "../assets/img/IMG-moi.jpg";

export default function Header() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <header className="bg-(--prim) text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Informations à gauche */}
          <div className="flex-1">
            <h1 className="Roboto text-5xl font-bold mb-2">Didou Wilfrid ( Mehdi )</h1>
            <h2 className="Roboto text-2xl font-light mb-6">Développeur Web Full-Stack <span className="font-semibold mx-3 text-(--second)">React / Next.js</span></h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="mailto:mehdi.dev77@gmail.com" target='_blank' rel="noopener noreferrer" className="hover:text-(--second) hover:scale-102 transition-all duration-300 flex items-center gap-2 Poppins">
                <MdEmail size={20} />
                mehdi.dev77@gmail.com
              </a>
              <a href="tel:+212690163841" target='_blank' rel='noopener noreferrer' className="hover:text-(--second) flex items-center gap-2 Poppins hover:scale-102 transition-all duration-300">
                <MdPhone size={20} />
                +212 6 90 16 38 41
              </a>
              <a href="https://wa.me/33650157032" target='_blank' rel='noopener noreferrer' className="hover:text-(--second) flex items-center gap-2 hover:scale-102 transition-all duration-300">
                <FaWhatsapp size={20} />
                +33 6 50 15 70 32
              </a>
              <a href="https://github.com/Mehdi-dev7" target='_blank' rel="noopener noreferrer" className="hover:text-(--second) flex items-center gap-2 Poppins hover:scale-102 transition-all duration-300">
                <FaGithub size={20} />
                GitHub
              </a>
              <a href="#" target='_blank' rel="noopener noreferrer" className="hover:text-(--second) flex items-center gap-2 hover:scale-102 transition-all duration-300">
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Photo à droite */}
          <div className="shrink-0 flex flex-col items-center gap-4">
            <img
              src={IMG}
              alt="Didou Wilfrid (Mehdi)"
              className="w-42 h-42 rounded-full object-cover object-[55%_15%] border-4 border-(--second) shadow-lg"
            />
            {/* Bouton télécharger PDF */}
            <button
              onClick={handleDownloadPDF}
              className="bg-(--second) hover:bg-opacity-80 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 cursor-pointer print:hidden"
            >
              <MdDownload size={20} />
              Télécharger PDF
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}