"use client";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import brainImage from './brain.png'; // Ensure the image is in the same folder and named correctly

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !userID) {
      console.error('EmailJS credentials are not defined in environment variables.');
      return; // Exit the function if credentials are missing
    }

    setLoading(true);
    setSuccessMessage('');
    setErrorMessage(''); // Clear any previous error messages

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        setSuccessMessage('Email sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setErrorMessage('Failed to send email. Please try again.'); // Set error message
      })
      .finally(() => {
        setLoading(false); // Hide loading spinner
      });
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 to-purple-200 text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Side: Contact Info */}
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">Get in Touch</h3>
            <p className="mb-6 text-gray-700">
              Whether you have questions about our services or need assistance, feel free to reach out. We're here to help!
            </p>
            
            <div className="flex flex-col space-y-4">
              {/* Phone Number */}
              <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-7 5l5-5-5-5"></path>
                </svg>
                <p className="text-lg">+44 7419 208820</p>
              </div>
              {/* Email Address */}
              <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
                <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-7 5l5-5-5-5"></path>
                </svg>
                <p className="text-lg">info@stammeringtherapy.com</p>
              </div>
            </div>

            {/* Image */}
            <div className="mt-8">
              <Image src={brainImage} alt="Brain" className="w-full h-auto" />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2">
            <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-semibold mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-lg font-semibold mb-2 text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-semibold mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                disabled={loading} // Disable the button while loading
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {/* Display success or error messages */}
              {successMessage && <p className="text-green-600 mt-4">{successMessage}</p>}
              {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
