import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
	return (
		<footer className="bg-(--prim) text-white py-12 mt-12">
			<div className="ma-w-4xl mx-auto px-6">
				<h2 className="Roboto text-3xl font-bold mb-8 text-center">
					Me contacter
				</h2>
				<div className="flex flex-wrap justify-center gap-6 mb-8">
					<a
						href="mailto:mehdi.dev77@gmail.com"
						className="hover:text-(--second) hover:scale-105 transition-all duration-300 flex items-center gap-2"
					>
						<MdEmail size={20} />
						mehdi.dev77@gmail.com
					</a>

					<a
						href="tel:+212690163841"
						className="hover:text-(--second) hover:scale-105 transition-all duration-300 flex items-center gap-2"
					>
						<MdPhone size={20} />
						+212 6 90 16 38 41
					</a>

					<a
						href="https://wa.me/212690163841"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-(--second) hover:scale-105 transition-all duration-300 flex items-center gap-2"
					>
						<FaWhatsapp size={20} />
						WhatsApp
					</a>

					<a
						href="https://github.com/Mehdi-dev7"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-(--second) hover:scale-105 transition-all duration-300 flex items-center gap-2"
					>
						<FaGithub size={20} />
						GitHub
					</a>

					<a
						href="https://www.linkedin.com/in/ton-profil"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-(--second) hover:scale-105 transition-all duration-300 flex items-center gap-2"
					>
						<FaLinkedin size={20} />
						LinkedIn
					</a>
				</div>

				{/* Message CTA */}
				<div className="text-center mb-6">
					<p className="text-blue-100 text-md md:text-lg">
						Disponible pour de nouvelles opportunités 🚀
					</p>
				</div>
				<div className="text-center pt-6 border-t border-gray-400/50">
					<p className="text-blue-200 text-sm">
						© {new Date().getFullYear()} Mehdi - Tous droits réservés
					</p>
				</div>
			</div>
		</footer>
	);
}
