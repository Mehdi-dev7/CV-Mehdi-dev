import { MdEmail, MdPhone } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-(--prim) text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="Roboto text-5xl font-bold mb-2">Didou Wilfrid</h1>
        <h2 className="Roboto text-2xl font-light mb-6">Développeur Web Full-Stack React / Next.js</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:mehdi.dev77@gmail.com" className="hover:underline flex items-center gap-2">
            <MdEmail size={20} />
            mehdi.dev77@gmail.com
          </a>
          <a href="tel:+22990448585" className="hover:underline flex items-center gap-2">
            <MdPhone size={20} />
            +229 90 44 85 85
          </a>
          <a href="https://github.com/Mehdi-dev7" className="hover:underline flex items-center gap-2">
            <FaGithub size={20} />
            GitHub
          </a>
          <a href="#" className="hover:underline flex items-center gap-2">
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  )
}