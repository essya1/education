"use client"; // Nécessaire pour les composants côté client

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image 
            src="/logo.jpg" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span className="text-white text-xl font-bold">Éducatif</span>
        </div>

        {/* Liens du menu (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-blue-200">
            Accueil
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200">
            À propos
          </Link>
          <Link href="/games" className="text-white hover:text-blue-200">
            Jeux éducatifs
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200">
            Contact
          </Link>
        </div>

        {/* Liens d'authentification (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="text-white border border-white py-1 px-3 rounded hover:bg-white hover:text-blue-500">
            Connexion
          </Link>
          <Link href="/signup" className="text-blue-500 bg-white py-1 px-3 rounded hover:bg-blue-500 hover:text-white">
            Inscription
          </Link>
        </div>

        {/* Icône Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block text-white py-2 px-4 hover:bg-blue-600">
            Accueil
          </Link>
          <Link href="/about" className="block text-white py-2 px-4 hover:bg-blue-600">
            À propos
          </Link>
          <Link href="/games" className="block text-white py-2 px-4 hover:bg-blue-600">
            Jeux éducatifs
          </Link>
          <Link href="/contact" className="block text-white py-2 px-4 hover:bg-blue-600">
            Contact
          </Link>
          <Link href="/login" className="block text-white py-2 px-4 hover:bg-blue-600">
            Connexion
          </Link>
          <Link href="/signup" className="block text-blue-500 py-2 px-4 bg-white hover:bg-blue-500 hover:text-white">
            Inscription
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
