import Link from 'next/link';
import Image from 'next/image';

// Import images
import stagesOfStutteringImg from './Stages of stuttering.jpg';
import stammeringImg from './Stammering.png'; 
import upcomingArticle3Img from './Stutteringandtreatment.jpg';
import upcomingArticle4Img from './Causes of Stuttering.jpg';

export default function Articles() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-10">Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* First Article Box */}
        <Link href="/articles/stages-of-stuttering">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src={stagesOfStutteringImg}
                alt="Stages of Stuttering" 
                layout="fill" 
                objectFit="cover" 
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-indigo-700">Stages of Stuttering</h2>
            <p className="text-gray-600">Explore the various stages of stuttering from childhood to adulthood.</p>
          </div>
        </Link>

        {/* Second Article: Stammering */}
        <Link href="/articles/stammering">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src={stammeringImg} 
                alt="Stammering" 
                layout="fill" 
                objectFit="cover" 
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-indigo-700">Stammering</h2>
            <p className="text-gray-600">An insightful exploration of stammering and its impact on individuals.</p>
          </div>
        </Link>

        {/* Upcoming Article 3 */}
        <Link href="/articles/StutteringAndTreatment">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src={upcomingArticle3Img} 
                alt="Upcoming Article 3" 
                layout="fill" 
                objectFit="cover" 
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-indigo-700">Stuttering and Treatment</h2>
            <p className="text-gray-600">A comprehensive overview of stuttering treatment methods and their effectiveness.</p>
          </div>
        </Link>

        {/* Upcoming Article 4 */}
        <Link href="/articles/Causes-of-Stuttering">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
            <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src={upcomingArticle4Img} 
                alt="Causes of Stuttering" 
                layout="fill" 
                objectFit="cover" 
                className="transform hover:scale-105 transition duration-300"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2 text-indigo-700">Causes of Stuttering</h2>
            <p className="text-gray-600">An examination of the various factors contributing to stuttering.</p>
          </div>
        </Link>
        
      </div>
    </div>
  );
}
