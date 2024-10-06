'use client';

import { FaPhoneAlt, FaEnvelopeOpenText, FaCommentDots } from 'react-icons/fa'; // Import the chat icon

export default function ContactUsSection() {
  return (
    <section id="contact-us" className="py-6 bg-gradient-to-r from-blue-600 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <p className="text-base md:text-lg text-gray-200">
            We’re here to help. Feel free to reach out!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Changed to 3 columns */}
          {/* Call Us Option */}
          <div className="transition-transform duration-300 transform hover:scale-105 bg-blue-900 p-4 rounded-lg flex flex-col items-center text-center">
            <FaPhoneAlt className="text-3xl text-blue-300 mb-2" />
            <h3 className="text-xl font-bold mb-1">Call Us</h3>
            <p className="text-sm text-gray-200 mb-2">Available 9 AM - 6 PM, Monday-Sunday</p>
            <a href="tel:+447419208820" className="text-lg font-semibold bg-white text-blue-800 py-2 px-4 rounded-lg hover:bg-blue-300 transition-colors duration-300">
              +44 7419 208820
            </a>
          </div>

          {/* Email Us Option */}
          <div className="transition-transform duration-300 transform hover:scale-105 bg-blue-900 p-4 rounded-lg flex flex-col items-center text-center">
            <FaEnvelopeOpenText className="text-3xl text-blue-300 mb-2" />
            <h3 className="text-xl font-bold mb-1">Email Us</h3>
            <p className="text-sm text-gray-200 mb-2">We’ll reply within 24 hours</p>
            <a href="mailto:info@stammeringtherapy.com" className="text-lg font-semibold bg-white text-blue-800 py-2 px-4 rounded-lg hover:bg-blue-300 transition-colors duration-300">
              info@stammeringtherapy.com
            </a>
          </div>

          {/* Contact Page Option */}
          <div className="transition-transform duration-300 transform hover:scale-105 bg-blue-900 p-4 rounded-lg flex flex-col items-center text-center">
            <FaCommentDots className="text-3xl text-blue-300 mb-2" />
            <h3 className="text-xl font-bold mb-1">Contact Page</h3>
            <p className="text-sm text-gray-200 mb-2">Have more questions? Visit our contact page.</p>
            <a href="/contact" className="text-lg font-semibold bg-white text-blue-800 py-2 px-4 rounded-lg hover:bg-blue-300 transition-colors duration-300">
              Go to Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
