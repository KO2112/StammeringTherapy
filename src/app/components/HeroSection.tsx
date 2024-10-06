// src/app/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative bg-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto px-4 py-8 text-center">
        <h1 className="text-xl md:text-2xl font-bold mb-2">Stammering Therapy to Transform Your Speech</h1>
        <p className="text-sm md:text-base mb-3">Specializing in stammering and stuttering treatment to help you communicate with confidence.</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition text-xs md:text-sm"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
