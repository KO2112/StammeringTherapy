import React from 'react';

export default function StutteringAndTreatment() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10">Stuttering and Its Treatment</h1>

        {/* Definition of Stuttering */}
        <div className="bg-blue-100 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Definition of Stuttering</h2>
          <p className="text-gray-800 leading-relaxed">
            Stuttering is a significant speech disorder within the realm of speech disorders, arising from biological, genetic, and psychological trauma experienced during early childhood. This disorder manifests as repetitions, prolongations, pauses, and accompanying body movements.
          </p>
        </div>

        {/* Key Insights */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">Key Insights on Stuttering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Research has observed that some individuals with stuttering have a family history of the disorder, with approximately 10% believed to experience it genetically. In a 2011 study, German scientists noted that the speech center responsible for fluency, typically located in the left hemisphere of the brain, is found in the right hemisphere for those who stutter. They have yet to determine whether this displacement is congenital or occurs as a result of stuttering.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Stuttering typically emerges between the ages of 3 and 8, with boys being 3-4 times more likely to stutter than girls. It is estimated that about 1% of the population experiences stuttering. The disorder is observed as prolonging the first sound or syllable, word repetitions, and pauses between words.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The severity of stuttering is difficult to quantify due to the variable nature of an individual's speech. Factors such as anxiety over speaking can lead to fluctuations in stuttering. Situations that increase anxiety can exacerbate the stuttering, and different individuals may experience this anxiety differently. While there is no universal anxiety trigger, many find they are more anxious when speaking with new acquaintances or close relatives with whom they have a strained relationship.
          </p>
        </section>

        {/* Stages of Stuttering */}
        <section className="bg-indigo-50 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">Stages of Stuttering</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Two distinct stages of stuttering have been identified. The first stage occurs between ages 3 and 6, where there is a high likelihood of self-correction. During this stage, children do not withdraw from speaking, show little anxiety about their speech, and are minimally affected by the psychological issues stemming from speech disorders. Techniques such as play therapy and family counseling can effectively address this problem.
          </p>
          <p className="text-gray-800 leading-relaxed">
            The second stage begins around age 7, where the child becomes more aware of their speech disorder. Negative feedback from peers can increase psychological issues and anxiety. Children in this stage can also seek help from specialists alongside their families to overcome these challenges.
          </p>
        </section>

        {/* Treatment of Stuttering */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Treatment of Stuttering</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            As previously mentioned, there are two stages of stuttering, each requiring different approaches to treatment.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">1) Treatment for First Stage (Ages 3-6)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In this stage, speech and language skills are still developing, so learning and psychological-based approaches should be implemented. Due to developmental differences in early childhood, a therapy program tailored to the child's age and medical history is advisable. It is essential to identify any psychological sources that may influence the stuttering or whether the child has modeled the disorder from those around them. If the root cause is psychological and creates anxiety, play therapy can help resolve the issue. Language and speech therapy can be another option.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">2) Treatment for Individuals Aged 7 and Above</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Various treatment methods have been tried for individuals experiencing stuttering, with mixed results. For those aged 7 and above who can read and write, a common technique involves reading books aloud while breaking words into syllables and using proper breathing techniques. This approach aims to prevent stuttering by maintaining a rhythm. However, an observed disadvantage is that when children encounter anxiety-triggering situations, their stuttering often re-emerges, which can diminish their motivation and belief in the treatment's effectiveness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Another treatment method developed by Goldiamond in 1956 focuses on providing rhythm to the speech of individuals who stutter. However, it can be challenging for individuals to adopt this system while striving for normal speech speed, so a slower pace is recommended at first. Initially, individuals learn to speak slowly, rhythmically, and fluently. After a specific period of practice, the slow and rhythmic speech can be gradually accelerated to a normal speaking pace.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As with other treatment methods, reading exercises and breathing exercises play a critical role in this system. Many individuals who stutter also struggle with proper breathing. The goal is to teach both the rhythm of speech and the rhythm of proper breathing, ensuring that both are used correctly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The key difference of this rhythmic speech system compared to syllable-based methods is that it can yield immediate results. The rhythmic speaking system can be taught within seven days, allowing individuals to apply fluent and rhythmic speech in their daily lives. After approximately three months, they typically return to normal speaking speed, although this timeframe may vary based on individual mental characteristics and the adaptation process to treatment.
          </p>
        </div>

        {/* Recommendations for Families */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Recommendations for Families</h2>
          <ul className="list-disc ml-8 space-y-2">
            <li>Listen to the child patiently and without interrupting; do not correct their speech with phrases like 'calm down,' 'speak slowly,' or 'there's no need to be nervous,' as such phrases can increase anxiety.</li>
            <li>Families should prefer a slower, clearer speaking style instead of rapid speech, maintaining eye contact and engaging face-to-face.</li>
            <li>Encourage the child to speak more by discussing topics that interest them, and reward them with small incentives when their speech becomes fluent.</li>
            <li>Understand that children may not reach the desired speech level quickly, as this process varies for each child.</li>
            <li>Family members should avoid any demeaning behaviors regarding the situation.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
