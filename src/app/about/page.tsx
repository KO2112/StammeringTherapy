import { FaUsers, FaRegStar, FaLaptopHouse, FaGlobe } from 'react-icons/fa'; // Import icons
import Image from 'next/image';
import serdarImage from './Person.jpg'; // Ensure these paths are correct
import ezgiImage from './ezgi.jpg';
import beyzaImage from './beyza.jpg';
import tulinImage from './tulin.jpg';
import ebruImage from './ebru.jpg';
import aylinImage from './aylin.jpg';

export default function AboutPage() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-600 animate-fade-in">About Us</h1>

        <div className="mb-12 text-center animate-fade-in">
          <p className="text-lg mb-6 text-gray-700">
            Welcome to Stammering Therapy, where we specialize in providing comprehensive stammering therapy services to help individuals achieve fluent speech and enhanced communication. Our dedicated team employs a range of advanced techniques to address stammering and improve overall speech fluency.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="flex flex-col lg:flex-row mb-12 gap-12">
          <div className="flex-1 bg-white p-8 rounded-lg shadow-xl transition-all hover:shadow-2xl transform hover:-translate-y-2 animate-fade-in">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At Stammering Therapy, our mission is to empower individuals to overcome stammering through personalized therapy programs. We aim to provide effective solutions that improve speech fluency, boost confidence, and enhance quality of life. Our mission is rooted in a commitment to using evidence-based practices and delivering compassionate care.
            </p>
          </div>

          <div className="flex-1 bg-white p-8 rounded-lg shadow-xl transition-all hover:shadow-2xl transform hover:-translate-y-2 animate-fade-in">
            <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Vision</h2>
            <p className="text-lg text-gray-600">
              Our vision is to be a leading provider of stammering therapy services, recognized for our innovative approach and commitment to excellence. We strive to make a positive impact on the lives of those affected by stammering, helping them achieve their full potential in both personal and professional spheres.
            </p>
          </div>
        </div>

        {/* Our Techniques */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-900 animate-fade-in">Our Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <FaRegStar className="text-5xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Fluency Shaping</h3>
              <p className="text-center text-gray-600">
                Our fluency shaping techniques focus on developing smooth and controlled speech patterns. This method helps individuals maintain consistent fluency through structured practice and feedback.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <FaLaptopHouse className="text-5xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Online Therapy</h3>
              <p className="text-center text-gray-600">
                We offer online stammering therapy sessions, providing flexible access to our services from the comfort of your home. Our virtual sessions are designed to deliver the same high-quality care as in-person meetings.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <FaUsers className="text-5xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Individual & Group Therapy</h3>
              <p className="text-center text-gray-600">
                We provide both individual and group therapy sessions tailored to meet diverse needs. Our group sessions offer peer support while individual sessions focus on personalized strategies.
              </p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <FaGlobe className="text-5xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Global Expertise</h3>
              <p className="text-center text-gray-600">
                Our team is composed of experts with extensive experience in stammering therapy. We bring global best practices to our local community, ensuring effective and up-to-date treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-center text-gray-900 animate-fade-in">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <Image src={serdarImage} alt="Serdar Kilinclar" className="rounded-full w-[180px] h-[180px] object-cover mb-4 border-4 border-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Serdar Kilinclar</h3>
              <p className="text-center text-gray-600">Founder</p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <Image src={ezgiImage} alt="Ezgi Sultan Kaya" className="rounded-full w-[180px] h-[180px] object-cover mb-4 border-4 border-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Ezgi Sultan Kaya</h3>
              <p className="text-center text-gray-600">Audiology and Speech Disorders Specialist</p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <Image src={beyzaImage} alt="Beyza Tunca" className="rounded-full w-[180px] h-[180px] object-cover mb-4 border-4 border-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Beyza Tunca</h3>
              <p className="text-center text-gray-600">Clinical Psychologist</p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <Image src={tulinImage} alt="Tulin Caglar" className="rounded-full w-[180px] h-[180px] object-cover mb-4 border-4 border-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Tulin Caglar</h3>
              <p className="text-center text-gray-600">Audiology and Speech Disorders Specialist</p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <Image src={ebruImage} alt="Ebru Celik" className="rounded-full w-[180px] h-[180px] object-cover mb-4 border-4 border-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Ebru Celik</h3>
              <p className="text-center text-gray-600">Audiology and Speech Disorders Specialist</p>
            </div>

            <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
              <Image src={aylinImage} alt="Aylin Alegoz" className="rounded-full w-[180px] h-[180px] object-cover mb-4 border-4 border-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Aylin Alegoz</h3>
              <p className="text-center text-gray-600">Special Education Expert</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity animate-fade-in">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
