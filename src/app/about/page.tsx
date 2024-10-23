"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; 
import Link from "next/link";

export default function AboutUs() {
  // State for handling FAQ toggling
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // State for the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/cvs_office_1.jpg",
    "/cvs_office_2.jpg",
    "/cvs_office_3.jpg",
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <section className="bg-[#030712] text-white mt-8 py-16 px-4">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-20 py-16">
        {/* Main Content Wrapper */}
        <div className="relative p-8 md:p-16 bg-gray-900 rounded-lg shadow-lg">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Text Content */}
            <article className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              {/* Company Logo */}
              <div className="flex items-center justify-center md:justify-start cursor-pointer mb-6">
                <Image
                  src="/cvs_logo.png"
                  alt="Code Vibe Studios Logo"
                  height={160}
                  width={1150}
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-gray-300 p-6 mb-6">
                Welcome to Code Vibe Studios, where creativity meets technology.
                Our talented team of designers and developers work collaboratively to
                transform your ideas into powerful, user-focused digital experiences.
                Whether it&ldquo;s a custom website, a mobile app, or any digital product,
                we blend innovation with precision to deliver solutions that resonate with
                your audience. Let&ldquo;s craft something extraordinary together!
              

              {/* Contact Information */}
              <p className="text-md text-gray-500 mt-5">
                Email us directly at{" "}
                <a
                  href="mailto:info@codevibestudios.com"
                  className="text-blue-400 hover:underline"
                >
                  info@codevibestudios.com
                </a>
              </p>

              {/* Social Media Icons */}
              <div className="mt-6 flex justify-center md:justify-start space-x-6">
                <a
                  href="https://www.linkedin.com/company/code-vibe-studios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn"
                >
                  <Image
                    src="/brand-linkedin.svg"
                    alt="LinkedIn logo"
                    width={28}
                    height={28}
                    className="hover:opacity-80"
                  />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our X"
                >
                  <Image
                    src="/brand-x.svg"
                    alt="X logo"
                    width={28}
                    height={28}
                    className="hover:opacity-80"
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram"
                >
                  <Image
                    src="/brand-instagram.svg"
                    alt="Instagram logo"
                    width={28}
                    height={28}
                    className="hover:opacity-80"
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Behance"
                >
                  <Image
                    src="/brand-facebook.svg"
                    alt="Behance logo"
                    width={28}
                    height={28}
                    className="hover:opacity-80"
                  />
                </a>
              </div>
              </p>
            </article>

            {/* Image Section with Carousel */}
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={images[currentImageIndex]}
                alt="Our team at Code Vibe Studio working on a project"
                width={500} // Adjust width to match the text section
                height={400}
                className="w-full h-auto rounded-lg object-cover shadow-md"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="faq-section mt-16">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Frequently Asked Questions
          </h2>
          <div className="faqs space-y-4">
       
        {/* FAQ Item 1 */}
<div className="faq-item  bg-gray-800 rounded-lg p-5 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl cursor-pointer" onClick={() => toggleAnswer(0)}>
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-bold text-white">How long does a website project usually take to complete?</h3>
    <span className="text-white">{activeIndex === 0 ? "←" : "→"}</span>
  </div>
  {activeIndex === 0 && (
    <div className="faq-answer mt-3 text-gray-300 transition-opacity duration-500 ease-in-out">
      <p>At Code Vibe Studio, the timeline depends on the scope and complexity of your project. Here are some typical guidelines:</p>
      <ul className="list-disc pl-6 mt-2">
        <li><strong>Full Stack Development projects:</strong> Typically take around 4 to 6 weeks.</li>
        <li><strong>Frontend React & Tailwind CSS projects:</strong> Usually take 3 to 4 weeks.</li>
        <li><strong>Backend (Java Spring Boot) projects:</strong> Require at least 5 weeks.</li>
        <li><strong>E-commerce platform development:</strong> Generally takes 6 to 8 weeks.</li>
        <li><strong>UI/UX Design projects:</strong> Typically take 2 to 3 weeks.</li>
      </ul>
      <p className="mt-2">These timelines can vary depending on your specific requirements and the scope of the project.</p>
    </div>
  )}
</div>


{/* FAQ Item 2 */}
<div className="faq-item bg-gray-800 rounded-lg p-4 cursor-pointer" onClick={() => toggleAnswer(1)}>
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">How much does a website cost?</h3>
    <span>{activeIndex === 1 ? "←" : "→"}</span>
  </div>
  {activeIndex === 1 && (
    <div className="faq-answer mt-2">
      <p>The cost of a project at Code Vibe Studio varies based on its unique requirements. Every brief is different. Once we understand your goals and project specifics, we will provide a tailored quote that reflects the scope, timelines, and services required, whether it&ldquo;s <strong>web design</strong>, <strong>website development</strong>, <strong>app design</strong>, or other services we offer.</p>
    </div>
  )}
</div>

{/* FAQ Item 3 */}
<div className="faq-item bg-gray-800 rounded-lg p-4 cursor-pointer" onClick={() => toggleAnswer(2)}>
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">How easy is it for me to change content myself?</h3>
    <span>{activeIndex === 2 ? "←" : "→"}</span>
  </div>
  {activeIndex === 2 && (
    <div className="faq-answer mt-2">
      <p>We build every website with user-friendliness in mind. At Code Vibe Studio, we ensure that adding, editing, or removing content is effortless. We provide tools and systems that allow you to create new pages, make updates quickly, and maintain your website without hassle. You won’t need to worry about additional costs for updates; we empower you to manage your site with ease.</p>
    </div>
  )}
</div>

{/* FAQ Item 4 */}
<div className="faq-item bg-gray-800 rounded-lg p-4 cursor-pointer" onClick={() => toggleAnswer(3)}>
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">Can I create PPC landing pages myself?</h3>
    <span>{activeIndex === 3 ? "←" : "→"}</span>
  </div>
  {activeIndex === 3 && (
    <div className="faq-answer mt-2">
      <p>Absolutely! If your marketing strategy includes Google Ads or other PPC campaigns, we design specific PPC landing pages during the design phase. Once your website is live, you’ll be able to easily create, modify, and optimize landing pages as needed to align with your campaigns.</p>
    </div>
  )}
</div>

{/* FAQ Item 5 */}
<div className="faq-item bg-gray-800 rounded-lg p-4 cursor-pointer" onClick={() => toggleAnswer(4)}>
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">We have a limited budget, will you still work with us?</h3>
    <span>{activeIndex === 4 ? "←" : "→"}</span>
  </div>
  {activeIndex === 4 && (
    <div className="faq-answer mt-2">
      <p>At Code Vibe Studio, we value collaboration with all clients, from startups to large organizations. If you have a limited budget, we encourage you to share it with us. This allows us to offer recommendations on how best to allocate resources for services such as <strong>web design</strong>, <strong>app development</strong>, or <strong>UI/UX design</strong> while delivering the best possible outcome for your brand.</p>
    </div>
  )}
</div>

{/* FAQ Item 6 */}
<div className="faq-item bg-gray-800 rounded-lg p-4 cursor-pointer" onClick={() => toggleAnswer(5)}>
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">Do you outsource any work?</h3>
    <span>{activeIndex === 5 ? "←" : "→"}</span>
  </div>
  {activeIndex === 5 && (
    <div className="faq-answer mt-2">
      <p>We handle most aspects of our projects in-house to maintain quality and consistency. However, we occasionally partner with trusted specialists for services such as <strong>photography</strong>, <strong>videography</strong>, and <strong>social media campaigns</strong>. Rest assured, we provide full project management and ensure a seamless process from start to finish.</p>
    </div>
  )}
</div>

{/* FAQ Item 7 */}
<div className="faq-item bg-gray-800 rounded-lg p-4 cursor-pointer" onClick={() => toggleAnswer(6)}>
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">We’re not based in India, does that matter?</h3>
    <span>{activeIndex === 6 ? "←" : "→"}</span>
  </div>
  {activeIndex === 6 && (
    <div className="faq-answer mt-2">
      <p>Not at all! Code Vibe Studio works with clients across the globe. Whether you&ldquo;re in the U.S., Europe, or anywhere else, we can guide you through the process. We communicate clearly via email, Zoom, or your preferred platform, ensuring we’re always aligned no matter where you are located.</p>
    </div>
  )}
</div>

{/* FAQ Item 8 */}
<div className="faq-item bg-gray-800 rounded-lg p-4 cursor-pointer" onClick={() => toggleAnswer(7)}>
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-semibold">What services do you offer?</h3>
    <span>{activeIndex === 7 ? "←" : "→"}</span>
  </div>
  {activeIndex === 7 && (
    <div className="faq-answer mt-2">
      <p>We offer a full range of services at Code Vibe Studio, including:</p>
      <ul className="list-disc pl-6">
        <li><strong>Web Design</strong></li>
        <li><strong>App Design</strong></li>
        <li><strong>Website Development</strong></li>
        <li><strong>App Development</strong></li>
        <li><strong>Software Development</strong></li>
        <li><strong>UI/UX Design</strong></li>
        <li><strong>E-commerce Solutions</strong></li>
        <li><strong>Mobile Apps</strong></li>
        <li><strong>Digital Consulting</strong></li>
        <li><strong>Cloud Solutions</strong></li>
        <li><strong>Database Management</strong></li>
        <li><strong>Cybersecurity</strong></li>
        <li><strong>API Integration</strong></li>
        <li><strong>IT Support</strong></li>
        <li><strong>DevOps</strong></li>
      </ul>
    </div>
  )}
</div>





            {/* Add more FAQ items similarly */}
          </div>
        </section>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
  
  {/* Text Section */}
  <div className="text-lg font-semibold text-white text-center sm:text-left animate-fade-in">
    <p>Let&ldquo;s elevate your journey with Code Vibe Studio</p>
  </div>
  
  {/* CTA Button */}


  {/* <a
    href="/vibeEnquiry"
    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-700 transition hover:scale-105">
    Launch Your Vision
  </a> */}

   <Link href="/vibeEnquiry">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-700 transition hover:scale-105">
              
               
               Launch Your Vision
            </button>
          </Link>



</div>

      </div>
    </section>
  );
}
