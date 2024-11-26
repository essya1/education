
"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <div>

      {/* Section Hero */}
      <section className="bg-gradient-to-r from-purple-500 to-blue-500 h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">Bienvenue sur la plateforme de soutien éducatif</h1>
        <p className="text-white text-lg max-w-md mx-auto">
          Nous offrons une expérience d&apos;apprentissage et de soutien conçue spécialement pour les personnes atteintes de dyslexie et de TDAH.
        </p>
      </section>

      {/* Section À propos */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">À propos de la plateforme</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Nous visons à créer un environnement éducatif interactif qui aide les enfants et les parents à améliorer leur concentration et leurs compétences. Les jeux et activités sont spécialement conçus pour répondre aux besoins des personnes atteintes de dyslexie et de TDAH.
        </p>
      </section>

      {/* Section Jeux éducatifs */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Jeux éducatifs</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Découvrez des jeux éducatifs uniques qui aident les enfants à développer leurs compétences de manière ludique et facile à comprendre.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Explorer les jeux
        </button>
      </section>

      {/* Section Support */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Support et contact</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Contactez-nous pour toute assistance ou pour poser vos questions, notre équipe est prête à vous aider.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
          Contactez-nous
        </button>
      </section>

      {/* Section TDAH */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Soutien pour les personnes atteintes de TDAH</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Nous proposons du contenu et des outils qui aident les personnes atteintes de TDAH à se concentrer et à développer leurs compétences de manière efficace et amusante.
        </p>
        <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition">
          En savoir plus
        </button>
      </section>

      {/* Section Dyslexie */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Soutien pour les personnes atteintes de dyslexie</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Nous offrons des outils spécifiques pour s&apos;entraîner à la lecture et à la compréhension dans un environnement interactif qui simule une expérience d&apos;apprentissage optimale.
        </p>
        <button className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition">
          En savoir plus sur les outils de lecture
        </button>
      </section>
      
    </div>
  );
};

export default Home;
