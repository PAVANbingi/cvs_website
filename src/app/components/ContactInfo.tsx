import Image from 'next/image'; // Import Next.js Image for optimized loading

// Define the interface for ServiceCard props
interface ServiceCardProps {
  title: string;
  description: string;
  imgSrc: string;
  gradient: string;
}

// Component for Large Cards (First Row)
const ServiceCardLarge: React.FC<ServiceCardProps> = ({ title, description, imgSrc, gradient }) => {
  return (
    <div className="relative group p-1 w-full">
      {/* Border Gradient Hover Effect */}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
      {/* Card Content */}
      <div className="relative bg-[#030712] rounded-lg p-8 md:p-10 text-center overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          width={500} //  image aspect ratio
          height={250} 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

// Component for Small Cards (Second Row)
const ServiceCardSmall: React.FC<ServiceCardProps> = ({ title, description, imgSrc, gradient }) => {
  return (
    <div className="relative group p-1 w-full">
      {/* Border Gradient Hover Effect */}
      <div
        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
      {/* Card Content */}
      <div className="relative bg-[#030712] rounded-lg p-6 md:p-8 text-center overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          width={300} 
          height={150} //  image aspect ratio
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <section className="bg-[#030712] text-white py-16 px-4 md:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="font-light italic mb-4">
          <span className=" text-4xl font-semibold">Interested{"   "}</span><div className="text-2xl"> in having a deal with us?</div>
        </h2>
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-700 transition hover:scale-105"
          aria-label="Connect Now"
        >
          Catch the Vibe &rarr;
        </a>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto">
        {/* First Row: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {/* Card 1 */}
          <ServiceCardLarge
            title="GRAPHICS AND DESIGN"
            description="Web & App Design"
            imgSrc="/graphics&design.png"
            gradient="from-blue-500 to-blue-300"
          />

          {/* Card 2 */}
          <ServiceCardLarge
            title="PROGRAMMING & TECH"
            description="Website Development"
            imgSrc="/programmer&tech.png"
            gradient="from-pink-500 to-pink-300"
          />
        </div>

        {/* Second Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 justify-center">
          {/* Card 3 */}
          <ServiceCardSmall
            title="DIGITAL MARKETING"
            description="Methods & Technologies"
            imgSrc="/digitalmarket.png"
            gradient="from-green-500 to-green-300"
          />

          {/* Card 4 */}
          <ServiceCardSmall
            title="WRITING"
            description="Content Writing"
            imgSrc="/writing.png"
            gradient="from-purple-500 to-purple-300"
          />

          {/* Card 5 */}
          <ServiceCardSmall
            title="VIDEO & ANIMATIONS"
            description="Video Editing"
            imgSrc="/video&animation.png"
            gradient="from-yellow-500 to-yellow-300"
          />
        </div>
      </div>
    </section>
  );
}
