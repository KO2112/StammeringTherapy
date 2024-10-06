export default function WhatIsStammering() {
  return (
    <section
      id="what-is-stammering"
      className="py-20 bg-gradient-to-b from-blue-50 to-white text-gray-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Title and Intro */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-blue-700 mb-6 tracking-tight">
            What is Stammering?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stammering is a significant speech disorder that arises due to biological, genetic factors, or psychological traumas. These issues manifest in speech as repetitions, prolongations, pauses, and accompanying body movements.
          </p>
        </div>

        {/* Content Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">Stammering Therapy</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Stammering Therapy, our goal is to help individuals gain control of fluent speech and desensitize them to their stammering. Our therapies are provided in both individual and group settings, tailored to fit each person’s unique needs.
            </p>
            <h4 className="text-2xl font-semibold text-blue-500 mt-6 mb-3">
              Fluency Control
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              People with stammering don’t always stammer at the same intensity. During periods of anxiety or stress, the severity increases. We focus on techniques to help individuals control their fluency and manage stress-related speech disruptions.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">Desensitization</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desensitization is a critical aspect of stammering therapy. It involves working to remove the negative thoughts surrounding stammering. Our goal isn’t to eliminate stammering entirely but to teach individuals to manage and control it effectively.
            </p>
            <h4 className="text-2xl font-semibold text-blue-500 mt-6 mb-3">
              Will Stammering Go Away?
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Early stammering often resolves on its own in children aged 2-6, with the right social support and approach. Around 75% of children recover from stammering during this critical period, but therapy helps others learn how to manage it.
            </p>
          </div>
        </div>

        {/* Bottom Section with Causes */}
        <div className="mt-16">
          <h4 className="text-3xl font-bold mb-6 text-blue-700 text-center">
            Causes of Stammering
          </h4>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Research shows that stammering is influenced by neurological and genetic factors. Contrary to popular belief, fear doesn’t cause stammering, but stress and anxiety can trigger it. Effective therapy focuses on managing these triggers.
          </p>

          <h4 className="text-3xl font-bold mt-12 mb-6 text-blue-700 text-center">
            How Long Does Stammering Therapy Take?
          </h4>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            The duration of therapy varies from person to person. While some individuals can achieve fluent speech quickly, maintaining fluency over time requires continued practice. A minimum of 6 months of therapy is generally recommended for lasting results.
          </p>
        </div>
      </div>
    </section>
  );
}
