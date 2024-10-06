"use client";

import Link from 'next/link';
import Image from 'next/image';
import Logo from './StammeringTheraphy.png'; 
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white py-0"> {/* Navbar size stays the same */}
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative" style={{ height: '100px', width: '240px' }}> {/* Increased the logo container size */}
            <Image 
              src={Logo} 
              alt="Stammering Therapy Logo" 
              layout="fill"
              objectFit="contain"
              className="hover:scale-104 transition-transform duration-300"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li><Link href="/" className="hover:text-blue-300 transition">Home</Link></li>
          <li><Link href="/services" className="hover:text-blue-300 transition">Services</Link></li>
          <li><Link href="/articles" className="hover:text-blue-300 transition">Articles</Link></li>
          <li><Link href="/about" className="hover:text-blue-300 transition">About Us</Link></li>
          <li><Link href="/e-stammering" className="hover:text-blue-300 transition">E-Stammering</Link></li>
          <li><Link href="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
        </ul>

        {/* Contact Info and Social Icons */}
        <div className="hidden md:flex flex-col items-center space-y-2 text-center">
          <div className="flex flex-col space-y-1">
            <a href="tel:+447419208820" className="flex items-center justify-center space-x-2 hover:text-blue-300 transition">
              <FaPhone className="text-lg" />
              <span>07419208820</span>
            </a>
            <a href="mailto:info@stammeringtherapy.com" className="flex items-center justify-center space-x-2 hover:text-blue-300 transition">
              <FaEnvelope className="text-lg" />
              <span>info@stammeringtherapy.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-3">
            <a href="https://facebook.com" className="hover:text-blue-300 transition"><FaFacebook className="text-lg" /></a>
            <a href="https://instagram.com" className="hover:text-blue-300 transition"><FaInstagram className="text-lg" /></a>
            <a href="https://twitter.com" className="hover:text-blue-300 transition"><FaTwitter className="text-lg" /></a>
            <a href="https://youtube.com" className="hover:text-blue-300 transition"><FaYoutube className="text-lg" /></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none hover:text-blue-300 transition">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <ul className="flex flex-col items-center space-y-3 py-3 bg-blue-900 text-white">
          <li><Link href="/" className="hover:text-blue-300 transition">Home</Link></li>
          <li><Link href="/services" className="hover:text-blue-300 transition">Services</Link></li>
          <li><Link href="/articles" className="hover:text-blue-300 transition">Articles</Link></li>
          <li><Link href="/about" className="hover:text-blue-300 transition">About Us</Link></li>
          <li><Link href="/e-stammering" className="hover:text-blue-300 transition">E-Stammering</Link></li>
          <li><Link href="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
          <div className="flex flex-col items-center space-y-3 mt-3">
            <a href="tel:+447419208820" className="flex items-center space-x-2 hover:text-blue-300 transition">
              <FaPhone className="text-lg" />
              <span>07419208820</span>
            </a>
            <a href="mailto:info@stammeringtherapy.com" className="flex items-center space-x-2 hover:text-blue-300 transition">
              <FaEnvelope className="text-lg" />
              <span>info@stammeringtherapy.com</span>
            </a>
            <div className="flex space-x-3">
              <a href="https://facebook.com" className="hover:text-blue-300 transition"><FaFacebook className="text-lg" /></a>
              <a href="https://instagram.com" className="hover:text-blue-300 transition"><FaInstagram className="text-lg" /></a>
              <a href="https://twitter.com" className="hover:text-blue-300 transition"><FaTwitter className="text-lg" /></a>
              <a href="https://youtube.com" className="hover:text-blue-300 transition"><FaYoutube className="text-lg" /></a>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}
