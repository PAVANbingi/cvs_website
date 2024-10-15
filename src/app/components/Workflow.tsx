import React from "react";
import Image from "next/image"; // Importing Image from Next.js

const Workflow: React.FC = () => {
  return (
    <div className="bg-[#030712] text-white py-12 px-4 md:px-20">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/workflow.png" // Update with the correct image path
            alt="Workflow Illustration"
            layout="responsive" // Ensures the image scales with the container
            width={1241} // Set the image width
            height={665} // Set the image height
            className="max-w-full" // Ensures the image does not exceed the container width
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
