import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-(--prim) text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="Roboto text-5xl font-bold mb-2">Didou Wilfrid (Mehdi)</h1>
        <h2 className="Roboto text-2xl font-light mb-6">Développeur Web Full-Stack <span className="font-semibold mx-3 text-(--second)">React / Next.js</span></h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:mehdi.dev77@gmail.com" target='_blank' rel="noopener noreferrer" className="hover:underline flex items-center gap-2 Poppins">
            <MdEmail size={20} />
            mehdi.dev77@gmail.com
          </a>
          <a href="tel:+212690163841" target='_blank' rel='noopener noreferrer' className="hover:underline flex items-center gap-2 Poppins">
            <MdPhone size={20} />
            +212 6 90 16 38 41
          </a>
          <a href="https://wa.me/33650157032" target='_blank' rel='noopener noreferrer' className="hover:underline flex items-center gap-2">
            <FaWhatsapp size={20} />
            +33 6 50 15 70 32
          </a>
          <a href="https://github.com/Mehdi-dev7" target='_blank' rel="noopener noreferrer" className="hover:underline flex items-center gap-2 Poppins">
            <FaGithub size={20} />
            GitHub
          </a>
          <a href="#" target='_blank' rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}