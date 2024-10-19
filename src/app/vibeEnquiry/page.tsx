"use client";
import React, { useState } from "react";

export default function InquiryForm() {
  const [step, setStep] = useState<number>(1); // Handles the form steps
  const [status, setStatus] = useState<string>("");

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const Submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formEle = e.currentTarget;
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbznuPPRN2k4RBx-CYUmKg2qjKE1Lr-lj1ycgYEEZJ_U0TK1Attt405UN5aSlINJkp3c/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          formEle.reset();
          return res.text();
        } else {
          setStatus("error");
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setStatus("error");
      });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col lg:flex-row items-center justify-center my-16 p-6">
      {/* Left Side - Video Section */}
{/* <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center relative hidden lg:block xl:hidden">
  <div className="relative">
    <video
      className="w-[350px] h-[600px] object-cover rounded-lg"
      src="/vibe.mp4" // Path to your video file
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute bottom-2 left-4 text-white bg-black bg-opacity-50 rounded-full px-4 py-2">
      <p className="text-sm">A cheeky intro from Andy, Co-Founder</p>
    </div>
  </div>
</div> */}

      {/* Right Side - Form Section */}
      <div className="lg:w-1/2 w-full">
        <form
          onSubmit={Submit}
          className="bg-transparent p-6 space-y-6"
        >
          {/* Progress Indicator */}
          <div className="mb-4">
            <p className="text-gray-400 mb-2">Step {step} of 4</p>
            <div className="w-full bg-gray-600 h-1 rounded-full">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-600 h-1 rounded-full"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Conditional Form Step Content */}
          {step === 1 && (
  <>
    <h1 className="text-3xl font-bold text-white">
      Let’s start at the very beginning
    </h1>
    <input
      className="w-full p-4 rounded-lg bg-[#111] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Name"
      name="Name"
      type="text"
      required
    />
    <input
      className="w-full p-4 rounded-lg bg-[#111] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Email"
      name="Email"
      type="email"
      required
    />
    <input
      className="w-full p-4 rounded-lg bg-[#111] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Company"
      name="Company"
      type="text"
    />
    <button
      type="button"
      onClick={nextStep}
      className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-lg font-semibold hover:opacity-90 transition"
    >
      Next Step <span aria-hidden="true">→</span>
    </button>
  </>
)}


        {/* Other Steps */}
{step === 2 && (
  <>
    <h1 className="text-3xl font-bold text-white">Let’s talk budget & timelines</h1>
    <div className="space-y-4">
      <label className="block text-white text-sm font-semibold">
        I want to launch my project on:
      </label>
      <input
        className="w-full p-4 rounded-lg bg-[#111] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="DD/MM/YYYY"
        name="LaunchDate"
        type="date"
        required
      />
      
      <label className="block text-white text-sm font-semibold">
        My budget is between:
      </label>
      <div className="flex space-x-4">
        <input
          className="w-full p-4 rounded-lg bg-[#111] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Minimum Budget (£)"
          name="BudgetMin"
          type="number"
          required
        />
        <input
          className="w-full p-4 rounded-lg bg-[#111] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Maximum Budget (£)"
          name="BudgetMax"
          type="number"
          required
        />
      </div>
    </div>

    <div className="flex justify-between">
      <button
        type="button"
        onClick={prevStep}
        className="bg-gray-600 text-white p-4 rounded-lg"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={nextStep}
        className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Next Step
      </button>
    </div>
  </>
)}


{/* ---------step 3 need update -------- */}
{step === 3 && (
  <>
    <h1 className="text-3xl font-bold text-white mb-6">What services do you require?</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="Website" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          Website
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="eCommerce" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          eCommerce
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="SEO" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          SEO
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="Branding" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          Branding
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="Content Creation" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          Content Creation
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="Social Media Management" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          Social Media Management
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="Email Marketing" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          Email Marketing
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="App Development" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          App Development
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="Consultation" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          Consultation
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="Photography" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          Photography
        </div>
      </label>

      <label className="cursor-pointer">
        <input type="checkbox" name="Services" value="Videography" className="hidden" />
        <div className="p-4 bg-[#222] text-white rounded-lg hover:ring-2 hover:ring-purple-500 transition cursor-pointer text-center">
          Videography
        </div>
      </label>
    </div>

    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={prevStep}
        className="bg-gray-600 text-white p-4 rounded-lg"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={nextStep}
        className="bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Next Step
      </button>
    </div>
  </>
)}
{step === 4 && (
  <>
    <h1 className="text-3xl font-bold text-white">Give us the deets!</h1>
    <textarea
      className="w-full p-4 rounded-lg bg-[#111] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      placeholder="Please provide a summary of your project"
      name="Details"
      rows={4}
      required
    />
    <div className="mt-4">
      <label className="block text-white text-sm font-semibold mb-2">
        Or upload a project brief
      </label>
      <input
        type="file"
        name="ProjectFile"
        accept=".pdf,.doc,.docx"
        className="block w-full text-white"
      />
    </div>

    <div className="mt-4 flex items-center">
      <input type="checkbox" name="newsletter" className="mr-2" />
      <label className="text-white">Subscribe to our newsletter for all the latest Shape goss!</label>
    </div>

    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={prevStep}
        className="bg-gray-600 text-white p-4 rounded-lg"
      >
        Previous
      </button>
      <button
        type="submit"
        className={`bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-lg font-semibold hover:opacity-90 transition duration-300 ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Submitting..." : "Send Enquiry"}
      </button>
    </div>
  </>
)}



        </form>

        {/* Success or Error Message */}
        {status === "success" && (
          <div className="mt-4 text-green-500 font-semibold">
            Successfully submitted!
          </div>
        )}
        {status === "error" && (
          <div className="mt-4 text-red-500 font-semibold">
            Error submitting the form. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}
