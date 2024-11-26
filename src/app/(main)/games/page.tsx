"use client"; // Pour définir cette page comme un composant côté client

import Image from "next/image"; // Utiliser le composant Image de Next.js pour afficher des images

const gamesData = [
  {
    id: 1,
    title: "Jeu des Mathématiques",
    description: "Améliorez vos compétences en calcul mental grâce à des défis amusants.",
    imageUrl: "/math.jpg",
  },
  {
    id: 2,
    title: "Jeu des Sciences",
    description: "Explorez les concepts scientifiques fondamentaux de manière interactive.",
    imageUrl: "/sc.jpeg",
  },
  {
    id: 3,
    title: "Jeu de Langue Arabe",
    description: "Apprenez la grammaire arabe grâce à des jeux de mots.",
    imageUrl: "/arabia.jpg",
  },
  {
    id: 4,
    title: "Jeu des Langues Étrangères",
    description: "Apprenez les langues étrangères de manière amusante et interactive.",
    imageUrl: "/lan.jpg",
  },
];

const Games: React.FC = () => {
  return (
    <div>
      {/* Section d'en-tête */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 py-12 text-center">
        <h1 className="text-white text-4xl font-bold mb-4">Jeux Éducatifs</h1>
        <p className="text-white text-lg max-w-md mx-auto">
          Profitez d&apos;une expérience éducative unique avec une variété de jeux éducatifs interactifs.
        </p>
      </section>

      {/* Section des jeux */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {gamesData.map((game) => (
            <div
              key={game.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <Image
                src={game.imageUrl}
                alt={game.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{game.title}</h3>
                <p className="text-gray-600">{game.description}</p>
              </div>
              <div className="p-4 text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                  Explorer le jeu
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-gradient-to-r from-green-400 to-blue-500 py-4 text-center text-white">
        <p>&copy; 2024 Éducatif. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Games;
