export default function StagesOfStuttering() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10">Stages of Stuttering</h1>

        {/* Introduction */}
        <div className="bg-blue-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Definition of Stuttering</h2>
          <p className="text-gray-800 leading-relaxed">
            Traditionally, stuttering is defined as "a disorder in which speech rhythm or fluency is disrupted by interruptions or blocks" (Bloodstein and Ratner, 2008). According to the American Psychiatric Association, the main feature of stuttering is speech that is not fluent or appropriately timed for the individual's age.
          </p>
        </div>

        {/* Stages of Stuttering */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-indigo-700">Stages of Stuttering</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Stage I: Preschool Years</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stuttering is irregular and often occurs when the child is upset or under pressure. Repetitions of words or syllables are common, especially at the beginning of sentences.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Stage II: School-Age Years</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stuttering becomes more chronic, and the child may start to see themselves as a stutterer. While stuttering is frequent, it usually doesn't cause much distress to the child.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Stage III: Late Childhood and Early Adolescence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stuttering becomes more variable. The child starts to struggle with certain sounds or words more than others, often leading to avoidance behaviors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900">Stage IV: Late Adolescence and Adulthood</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stuttering at this stage may involve a fear of certain sounds, words, or situations, often leading to more pronounced avoidance and emotional responses.
                </p>
              </div>
            </div>
          </section>

          {/* Types of Stuttering */}
          <section className="bg-indigo-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">Types of Stuttering</h2>
            <ul className="list-disc ml-8 space-y-3">
              <li>
                <strong>Developmental Stuttering:</strong> Often seen in children under 7, many of whom outgrow it without therapy.
              </li>
              <li>
                <strong>Treatable Stuttering:</strong> More common in those over 7, where therapy and a supportive environment can significantly help.
              </li>
              <li>
                <strong>Chronic Stuttering:</strong> A lifelong struggle for some, who may face recurring fluency problems.
              </li>
            </ul>
          </section>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Conclusion</h2>
          <p className="text-gray-800 leading-relaxed">
            Effective management of stuttering involves ongoing therapy and strategies for maintaining fluency. Individuals are encouraged to learn techniques that promote smooth speech and avoid relapse.
          </p>
        </div>
      </div>
    </div>
  );
}
