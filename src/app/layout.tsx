// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SEO />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main> {/* Main content of each page */}
        <Footer /> {/* Footer appears on every page */}
      </body>
    </html>
  );
}
