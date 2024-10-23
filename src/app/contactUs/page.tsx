"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link'; 


export default function App() {
  const [status, setStatus] = useState<string>(""); // To handle submission status

  // Function to handle form submission
  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading"); // Set status to loading before form submission

    const formEle = e.currentTarget;
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbzJH5EitiAI0KtdLSdX5-Qs3PFGj9DhI6ln56u0fawB4sg1ouEFbXSJsIFMznK7QFGt/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          formEle.reset();
          setTimeout(() => setStatus(""), 5000); // Auto-hide success message after 5 seconds
          return res.text();
        } else {
          setStatus("error");
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log("Response received:", data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setStatus("error");
      });
  }

  return (
    <div className="relative min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center my-20 ">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/cvs2.mp4" // Path to your video file
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.2)' }} // Adjust brightness for a subdued background
        />
      </div>

      {/* Main container */}
      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-start z-10">
        {/* Left side: Title and form */}
      <div className="space-y-8">
        <h1 className="text-7xl font-bold">
          It’s nice to <br />
          meet you 
          <span className="inline-block w-14 h-18 rounded-full py-1 ml-4 align-middle">
  {/* Arrow icon */}
  <Image 
    src="/logo.ico" 
    alt="Logo" // Provide an appropriate alt text
    width={56} // Adjust width as needed
    height={56} // Adjust height as needed
  />
</span>

        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Let’s Create Something Amazing Together! Vibe with Us at <b>Code Vibe Studios.</b>
          For any general inquiries, simply fill out the form below, and we’ll get back to you in no time. 
          Got a project in mind? Check out our Services, where we guide you step by step to bring your vision to life with care and attention to detail!
        </p>
        <Link href="/services_">
        <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-700 transition hover:scale-105">
          Go to Services
          <span className="inline-block ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>
        </Link>
        <p className="text-md text-gray-500">
          Hate contact forms? Email us directly at{" "}
          <a href="mailto:info@codevibestudios.com" className="text-blue-500">
          info@codevibestudios.com
          </a>
        </p>
      </div>
        {/* Right side: Form */}
        <div>
          <form className="space-y-4" onSubmit={Submit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Name"
                name="Name"
                type="text"
                required
              />
              <input
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Email Address"
                name="Email"
                type="email"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Phone (Optional)"
                name="Phone"
                type="tel"
              />
              <select
                className="w-full p-3 rounded-lg bg-gray-800 text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                name="How_did_you_hear_aboutUs"
                required
              >
                <option value="">How did you hear about us?</option>
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
              </select>
            </div>
            <textarea
              className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Tell us about your project"
              name="ProjectDetails"
              rows={4}
              required
            ></textarea>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-purple-500 rounded focus:ring-purple-500"
                id="subscribe"
                name="subscribe"
              />
              <label htmlFor="subscribe" className="ml-2 text-gray-400">
                Subscribe to our newsletter for all the latest updates!
              </label>
            </div>
            <button
              className={`w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-700 transition hover:scale-105 ${
                status === "loading" ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Send Message"}
              <span className="inline-block ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </form>

          {/* Conditional rendering for success/error message */}
          {status === "success" && (
            <div className="mt-4 text-green-500 font-semibold text-center">
              Successfully submitted! Our team will approach you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 text-red-500 font-semibold text-center">
              Error submitting the form. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
