import React from 'react';

export default function Page() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10">Stammering</h1>

        {/* Introduction */}
        <div className="bg-blue-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Understanding Stammering</h2>
          <p className="text-gray-800 leading-relaxed">
            Historically, efforts to combat stammering have involved direct interventions through speech and language therapy aimed at eliminating or controlling stammering behaviors (such as reducing the frequency of stuttering).
          </p>
        </div>

        {/* Key Concepts */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">Key Concepts in Stammering</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Self-Perception and Attitudes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Societal interventions aim to support individuals who stammer by addressing their self-perception and attitudes towards stammering, as well as public perceptions and coping skills.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Speech Therapy Techniques</h3>
                <p className="text-gray-700 leading-relaxed">
                  Significant methods developed by Charles Van Riper (1975) focus on effortless, stress-free stuttering, aiming to improve self-image and confidence among those who stutter.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Community Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Small communities have been created to connect individuals who stutter, helping them realize that stuttering is not a serious obstacle and providing comfort.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Self-Help Support Groups</h3>
                <p className="text-gray-700 leading-relaxed">
                  These groups allow individuals to gather, share experiences, and mutually support one another, complementing traditional therapy.
                </p>
              </div>
            </div>
          </section>

          {/* Challenges and Solutions */}
          <section className="bg-indigo-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">Challenges in Stammering Support</h2>
            <p className="text-gray-800 leading-relaxed">
              In developing countries, limited therapy options mean that self-help support is often the most effective assistance for individuals who stutter. However, barriers such as the lack of adequate information about stammering remain significant challenges.
            </p>
          </section>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Conclusion</h2>
          <p className="text-gray-800 leading-relaxed">
            Effective management of stammering involves ongoing support, therapy, and community involvement to enhance fluency and self-confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
