import { FaClock, FaLungs, FaBrain, FaWaveSquare, FaArrowDown, FaUserCheck, FaChartLine } from 'react-icons/fa'; // Importing additional icons

export default function ServicesPage() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-600 animate-fade-in">
          Our Stammering Therapy Service and Process
        </h1>

        <p className="text-lg mb-6 text-center text-gray-700 animate-fade-in">
          At Stammering Therapy, our primary goal is to help individuals gain control over fluent speech and become desensitized to their stammering. Our comprehensive therapy programs are available in both individual and group settings, customized to meet each person’s unique needs.
        </p>

        {/* Centered Box with Arrow */}
        <div className="relative mb-12 flex flex-col items-center animate-fade-in">
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform hover:scale-105">
            <FaWaveSquare className="text-5xl text-purple-600 mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Stammering Therapy</h2>
            <p className="text-center text-gray-600">
              Our Stammering Therapy focuses on holistic improvement of speech fluency and psychological comfort. Combining advanced techniques, we tailor our approach to address individual needs and promote overall communication effectiveness.
            </p>
          </div>
          {/* Arrow pointing down */}
          <div className="flex justify-center w-full mt-4">
            <FaArrowDown className="text-2xl text-purple-600 animate-bounce" />
          </div>
        </div>

        {/* Step-by-step Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
            <FaClock className="text-5xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">15-Minute Call</h2>
            <p className="text-center text-gray-600">
              Schedule a <strong>free 15-minute Google Meet</strong> to assess your needs and how we can best support you.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
            <FaUserCheck className="text-5xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Begin Therapy</h2>
            <p className="text-center text-gray-600">
              Start personalized sessions with one of our <strong>experienced language and speech therapists</strong>, tailored to your goals.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
            <FaBrain className="text-5xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Learn Techniques</h2>
            <p className="text-center text-gray-600">
              Master proven techniques to enhance speech fluency and reduce stammering, including breath control and fluency shaping.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all animate-fade-in">
            <FaChartLine className="text-5xl text-purple-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2 text-gray-800">See the Outcome</h2>
            <p className="text-center text-gray-600">
              Track your progress as you gain more control over your speech and build confidence in your communication abilities.
            </p>
          </div>
        </div>
        </div>

        <h2 className="text-5xl font-extrabold mb-8 text-center text-blue-600 animate-fade-in">
  Techniques You Will Master
</h2>

{/* Combined Techniques Box */}
<div className="flex justify-center mb-12">
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all w-full md:w-3/4 lg:w-2/3 animate-fade-in">
    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Desensitization and Speech Techniques</h2>
    <p className="text-lg text-center text-gray-600 mb-8">
      Our techniques help you manage stammering through both desensitization and speech improvement strategies. Here are the core techniques you’ll master during therapy:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="flex flex-col items-center">
        <FaClock className="text-5xl text-purple-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Speech Rate Control</h3>
        <p className="text-center text-gray-600">
          Manage the speed of speech to enhance fluency and maintain consistent, controlled speech patterns.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <FaLungs className="text-5xl text-purple-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Diaphragmatic Breathing</h3>
        <p className="text-center text-gray-600">
          Improve breath control for smooth speech, ensuring better airflow and voice stability.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <FaBrain className="text-5xl text-purple-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Oral Motor Control</h3>
        <p className="text-center text-gray-600">
          Strengthen and coordinate speech muscles for clear and effective communication.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <FaWaveSquare className="text-5xl text-purple-600 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Fluency Shaping</h3>
        <p className="text-center text-gray-600">
          Develop fluent speech patterns, reducing stammering through structured techniques.
        </p>
      </div>

    </div>
  </div>
</div>

{/* Call to Action Button */}
<div className="text-center">
  <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-full text-xl font-semibold hover:opacity-90 transition-opacity animate-fade-in">
    Get Started
  </a>
</div>
    </section>
  );
}
