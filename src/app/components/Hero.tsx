import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#030712]">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/vibe.mp4" // Path to your video file
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(1)' }} // Adjust brightness for a subdued background
        />
      </div>

      {/* Hero Content */}
      <div className="text-center px-6 relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Your Vision, <br />
          Coded to Perfection
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          &ldquo;Seamless design and development to bring your website to life effortlessly!&ldquo;
        </p>

        {/* Call to Action Button */}
        <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-400 hover:to-blue-500">
          Explore Now
        </button>
      </div>
    </section>
  );
}
