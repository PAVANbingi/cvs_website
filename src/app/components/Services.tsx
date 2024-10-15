export default function Services() {
  return (
    <div className="bg-[#030712] text-white mx-auto px-4 py-12 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        What We Provide
      </h2>

      {/* Container with responsive grid layout */}
      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ maxWidth: "1240px" }}
      >
        {/* Row 1: Design */}
        <div className="relative group col-span-1">
          <img
            src="/design.png"
            alt="Design"
            className="object-cover rounded-lg w-full h-auto"
          />
          {/* Hover effect and vertical label */}
          <div className="absolute top-0 right-0 h-full bg-blue-600 text-white text-center px-2 flex justify-center items-center">
            <span
              className="horizontal-rl"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              DESIGN
            </span>
          </div>
        </div>

        {/* Row 1: Development */}
        <div className="relative group col-span-1 sm:col-span-2">
          <img
            src="/development.png"
            alt="Development"
            className="object-cover rounded-lg w-full h-auto"
          />
          <div className="absolute top-0 right-0 h-full bg-blue-600 text-white text-center px-2 flex justify-center items-center">
            <span
              className="horizontal-rl"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              DEVELOPMENT
            </span>
          </div>
        </div>

        {/* Row 2: Zero to Hero */}
        <div className="relative group col-span-1 sm:col-span-2">
          <img
            src="/zero_to_Hero.png"
            alt="Zero to Hero"
            className="object-cover rounded-lg w-full h-auto"
          />
          <div className="absolute top-0 right-0 h-full bg-blue-600 text-white text-center px-2 flex justify-center items-center">
            <span
              className="horizontal-rl"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              ZERO TO HERO
            </span>
          </div>
        </div>

        {/* Row 2: Enhance Specific Areas */}
        <div className="relative group col-span-1">
          <img
            src="/enhanced.png"
            alt="Enhance Specific Areas"
            className="object-cover rounded-lg w-full h-auto"
          />
          <div className="absolute top-0 right-0 h-full bg-blue-600 text-white text-center px-2 flex justify-center items-center">
            <span
              className="horizontal-rl"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              ENHANCE SPECIFIC AREAS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
