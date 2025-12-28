import {
	SiReact,
	SiNextdotjs,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiTailwindcss,
	SiPostgresql,
	SiSupabase,
	SiMongodb,
	SiFirebase,
	SiGit,
	SiGithub,
	SiVercel,
	SiNetlify,
	SiClaude,
} from "react-icons/si";
import {
	MdDevices,
	MdApi,
	MdSecurity,
	MdMonitorHeart,
	MdShield,
} from "react-icons/md";
import { Icon } from '@iconify/react';
import cursorLogo from "../assets/logo/cursor.svg";

export default function Skills() {
	const skillsData = {
		frontend: [
			{ name: "React", icon: SiReact, color: "#61DAFB" },
			{ name: "Next.js", icon: SiNextdotjs, color: "#000000" },
			{ name: "Javascript E6+", icon: SiJavascript, color: "#F7DF1E" },
			{ name: "HTML5", icon: SiHtml5, color: "#E34F26" },
			{ name: "CSS3", icon: SiCss3, color: "#198CFF" },
			{ name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
			{ name: "Responsive Design", icon: MdDevices, color: "#EBF1F5" },
		],
		outils: [
			{ name: "Git", icon: SiGit, color: "#F05032" },
			{ name: "GitHub", icon: SiGithub, color: "#181717" },
			{ name: "VS Code", icon: "logos:visual-studio-code", color: "#198CFF", isIconify: true },
			{ name: "Cursor", icon: cursorLogo, color: "#000000", isImage: true },
			{ name: "Claude Code", icon: SiClaude, color: "#D97757" },
			{ name: "Vercel", icon: SiVercel, color: "#000000" },
			{ name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
		],
		backend: [
			{ name: "PostgreSQL", icon: SiPostgresql, color: "#198CFF" },
			{ name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
			{ name: "MongoDB", icon: SiMongodb, color: "#47A248" },
			{ name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
			{ name: "API REST", icon: MdApi, color: "#FF6B6B" },
		],
		enCours: [
			{ name: "Cybersécurité", icon: MdSecurity, color: "#DC143C" },
			{ name: "Analyse SOC", icon: MdMonitorHeart, color: "#198CFF" },
			{ name: "Ethical Hacking", icon: MdShield, color: "#00B300" },
		],
	};

	return (
		<section>
			<div className="max-w-4xl mx-auto px-6 py-4">
				<h2 className="text-3xl Roboto font-bold mb-4 text-(--prim) border-b-2 border-(--second) w-fit">
					Compétences
				</h2>
				<div className="space-y-4">
					<div className="bg-(--prim) p-4 rounded-lg">
						<h3 className="Roboto text-xl font-semibold text-white mb-3">
							🎨 &nbsp; Développement Frontend
						</h3>
						<div className="flex flex-wrap gap-6 justify-around">
							{skillsData.frontend.map((skill, index) => {
								const Icon = skill.icon;
								return (
									<div
										key={index}
										className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
										title={skill.name}
									>
										<Icon style={{ color: skill.color }} size={36} />
										<span className="Inter text-sm text-white opacity-90">
											{skill.name}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className="bg-(--prim) p-4 rounded-lg">
						<h3 className="Roboto text-xl font-semibold text-white mb-3">
							⚙️ &nbsp; Backend & Bases de données
						</h3>
						<div className="flex flex-wrap gap-6 justify-around">
							{skillsData.backend.map((skill, index) => {
								const Icon = skill.icon;
								return (
									<div
										key={index}
										className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
										title={skill.name}
									>
										<Icon style={{ color: skill.color }} size={36} />
										<span className="Inter text-sm text-white opacity-90">
											{skill.name}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className="bg-(--prim) p-4 rounded-lg">
						<h3 className="Roboto text-xl font-semibold text-white mb-3">
							🛠️ &nbsp; Outils & Technologies
						</h3>
						<div className="flex flex-wrap gap-6 justify-around">
							{skillsData.outils.map((skill, index) => {
								const IconComponent = skill.icon;
								return (
									<div
										key={index}
										className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
										title={skill.name}
									>
										{skill.isImage ? (
											<img
												src={IconComponent}
												alt={skill.name}
												style={{ width: "36px", height: "36px", filter: `brightness(0) saturate(100%) invert(1)` }}
											/>
										) : skill.isIconify ? (
											<Icon icon={IconComponent} width="36" height="36" />
										) : (
											<IconComponent style={{ color: skill.color }} size={36} />
										)}
										<span className="Inter text-sm text-white opacity-90">
											{skill.name}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className="bg-(--prim) p-4 rounded-lg">
						<h3 className="Roboto text-xl font-semibold text-white mb-3">
							🔐 &nbsp; Cybersécurité (en cours)
						</h3>
						<div className="flex flex-wrap gap-6 justify-around">
							{skillsData.enCours.map((skill, index) => {
								const Icon = skill.icon;
								return (
									<div
										key={index}
										className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-110"
										title={skill.name}
									>
										<Icon style={{ color: skill.color }} size={36} />
										<span className="Inter text-sm text-white opacity-90">
											{skill.name}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
