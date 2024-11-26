"use client";

import React, { useState } from "react";

const Inscription: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: "",
    age: "",
    email: "",
    motDePasse: "",
    confirmerMotDePasse: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ajouter ici le code d'inscription
    console.log("Formulaire soumis", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Inscription des enfants
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Âge</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Adresse e-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmerMotDePasse"
              value={formData.confirmerMotDePasse}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
