"use client"; // Pour définir cette page comme un composant côté client

import { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vous pouvez ajouter ici la logique pour envoyer les données au serveur
    setSubmitted(true);
  };

  return (
    <div>
      {/* Section d'en-tête */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-12 text-center">
        <h1 className="text-white text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-white text-lg max-w-md mx-auto">
          Si vous avez des questions ou souhaitez nous contacter, n&apos;hésitez pas à remplir le formulaire ci-dessous.
        </p>
      </section>

      {/* Section du formulaire de contact */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {submitted ? (
            <p className="text-green-500 text-center text-xl font-semibold">
              Merci de nous avoir contactés ! Nous vous répondrons bientôt.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Envoyer
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-gradient-to-r from-blue-500 to-teal-500 py-4 text-center text-white">
        <p>&copy; 2024 Projet éducatif. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Contact;
