export default function Experience() {

const experiencesData = [
  {
    id:1,
    poste: "Développeur Web Junior",
    entreprise: "Auto-entrepreneur",
    periode: "2024 - Présent",
    mission: [
      "Développement de sites web et landing pages avec React et Next.js",
        "Intégration de design responsive avec Tailwind CSS",
        "Optimisation SEO et performance des sites",
        "Gestion de projets clients de A à Z"
    ]
  },
  {
    id:2,
    poste: "Formation Développeur Web",
    entreprise: "Believemy, ecole du web",
    periode: "2023 - 2024",
    mission: [
      "Maîtrise de React, Next.js, JavaScript ES6+",
        "Développement d'applications full-stack",
        "Utilisation de Git/GitHub pour le versioning",
        "Réalisation de projets pratiques et professionnels"
    ]
  },
  {
    id:3,
    poste: "Adjoint Technique territorial 1ere classe principale",
    entreprise: "Mairie de Villetaneuse",
    periode: "2001 - 2025",
    mission: [
      "Coordination et organisation des evenements locaux",
      "Supervision d'une équipe de techniciens"
    ]
  }

]

  return (
    <section>
      <div className="max-w-4xl mx-auto px-6 py-4">
        <h2 className="text-3xl Roboto font-bold mb-4 text-(--prim) border-b-2 border-(--second)  w-fit">
          Expériences Professionnelles
        </h2>

        <div className="space-y-6">
          {experiencesData.map((exp) => (
          <div key={exp.id} className="bg-white p-6 rounded-lg shadow-sm">
            {/* Header de l'expérience */}
            <div className="mb-4">
              <h3 className="Roboto text-xl font-semibold text-gray-800">
                {exp.poste}
              </h3>
              <p className="text-blue-600 Inter font-medium">{exp.entreprise}</p>
              <p className="text-gray-500 Inter text-sm">{exp.periode}</p>
            </div>

            {/* Missions */}
            <ul className="space-y-2">
              {exp.mission.map((mission, index) => (
                <li key={index} className={`text-gray-700 Inter flex items-start ${mission.includes('Git/GitHub') || mission.includes('Gestion de projets clients') ? 'print:hidden' : ''}`}>
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-justify">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}