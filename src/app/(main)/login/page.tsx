"use client"; // Marquer ce fichier comme un composant client

import React, { useState } from 'react';

const Connexion: React.FC = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState('');
  const [chargement, setChargement] = useState(false);
  const [succès, setSuccès] = useState(false);

  const gérerSoumission = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setChargement(true);
    setErreur('');
    setSuccès(false);

    // Simuler le processus de connexion
    setTimeout(() => {
      if (email === '' || motDePasse === '') {
        setErreur('Veuillez remplir tous les champs');
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        setErreur('Adresse e-mail invalide');
      } else {
        setSuccès(true);
        console.log('Email:', email, 'Mot de passe:', motDePasse);
      }
      setChargement(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Connexion</h2>
        {erreur && <p className="text-red-500 text-center mb-4">{erreur}</p>}
        {succès && <p className="text-green-500 text-center mb-4">Connexion réussie !</p>}
        <form onSubmit={gérerSoumission}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre adresse e-mail"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="motDePasse">Mot de passe</label>
            <input
              type="password"
              id="motDePasse"
              name="motDePasse"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          <button
            type="submit"
            disabled={chargement}
            className={`w-full py-2 px-4 rounded-md text-white ${chargement ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {chargement ? 'Vérification en cours...' : 'Se connecter'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Vous n&apos;avez pas de compte ? <a href="/signup" className="text-blue-500 hover:underline">Créer un compte</a></p>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
