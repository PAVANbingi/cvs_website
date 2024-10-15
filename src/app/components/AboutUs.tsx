export default function AboutUs() {
  return (
    <section className="bg-[#030712] text-white py-16 px-4">

      {/*  <section className="bg-gray-900 text-white py-16 px-4"> */}

      <div className="container mx-auto max-w-screen-xl px-4 md:px-20">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          About Us
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#030712] p-8 md:p-16 rounded-lg">
          
          {/* Text Content */}
          <article className="md:w-3/5 mb-8 md:mb-0 text-center md:text-left">
            <p className="text-base md:text-lg leading-relaxed">
              At Code Vibe Studio, we transform ideas into exceptional digital experiences.
              Our dedicated team of designers and developers crafts user-centric websites and applications
              tailored to your unique needs. We believe in collaboration and precision, working closely with clients 
              to bring their vision to life. Let’s create something amazing together!
            </p>
          </article>

          {/* Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/aboutus.png"
              alt="Our team at Code Vibe Studio working on a project"
              className="w-full h-auto rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
