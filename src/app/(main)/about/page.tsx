"use client"; // Pour définir cette page comme un composant côté client

const About: React.FC = () => {
  return (
    <div>
      {/* Section d'en-tête */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-500 py-12 text-center">
        <h1 className="text-white text-4xl font-bold mb-4">À propos du projet</h1>
        <p className="text-white text-lg max-w-md mx-auto">
          Notre projet vise à offrir une expérience éducative unique et agréable grâce à une variété de jeux éducatifs interactifs.
        </p>
      </section>

      {/* Section À propos du projet */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Mission */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Notre mission</h2>
            <p className="text-gray-600">
              Nous croyons que l&apos;éducation peut être à la fois amusante et interactive. Notre objectif est de développer des jeux éducatifs qui aident les étudiants à améliorer leurs compétences de manière ludique et efficace.
            </p>
          </div>

          {/* Fonctionnalités */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Caractéristiques du projet</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Une expérience éducative interactive.</li>
              <li>Une variété de jeux et de niveaux.</li>
              <li>Renforcement des compétences en mathématiques, sciences et langues.</li>
              <li>Un design adapté à tous les âges.</li>
              <li>Une interface simple et intuitive.</li>
            </ul>
          </div>

          {/* Équipe */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">L&apos;équipe</h2>
            <p className="text-gray-600">
              Notre équipe est composée de spécialistes en éducation et en technologie, travaillant avec passion pour offrir la meilleure expérience éducative possible.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Notre vision</h2>
            <p className="text-gray-600">
              Notre vision est de devenir des leaders dans le domaine de l&apos;éducation en ligne, en proposant un contenu éducatif amusant et efficace qui aide les étudiants à améliorer leurs compétences académiques et personnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-gradient-to-r from-purple-500 to-indigo-500 py-4 text-center text-white">
        <p>&copy; 2024 Projet éducatif. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default About;
