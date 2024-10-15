export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#030712]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${'hero_bg.jfif'})`,
          filter: 'brightness(0.5)', // Adjust brightness for a subdued background
        }}
      ></div>

      {/* Hero Content */}
      <div className="text-center px-6 relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Your Vision, <br />
          Coded to Perfection
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          "Seamless design and development to bring your website to life effortlessly!"
        </p>

        {/* Call to Action Button */}
        <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-80 transition duration-300 ease-in-out">
          Explore Now
        </button>
      </div>
    </section>
  );
}
