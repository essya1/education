"use client"; // يجب إضافته في بداية الملف

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // استخدام Image من Next.js

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
            alt="الشعار" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span className="text-white text-xl font-bold">تعليمي</span>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-blue-200">
            الرئيسية
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200">
            حول المشروع
          </Link>
          <Link href="/games" className="text-white hover:text-blue-200">
            الألعاب التعليمية
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200">
            التواصل
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block text-white py-2 px-4 hover:bg-blue-600">
            الرئيسية
          </Link>
          <Link href="/about" className="block text-white py-2 px-4 hover:bg-blue-600">
            حول المشروع
          </Link>
          <Link href="/games" className="block text-white py-2 px-4 hover:bg-blue-600">
            الألعاب التعليمية
          </Link>
          <Link href="/contact" className="block text-white py-2 px-4 hover:bg-blue-600">
            التواصل
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;