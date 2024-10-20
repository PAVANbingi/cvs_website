"use client"; // This ensures the component is for client-side rendering

import React, { useEffect, useState } from "react";

export default function App() {
  const [step, setStep] = useState<number>(1); // Handles form steps
  const [status, setStatus] = useState<string>(""); // Form submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  }); // Form data
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // Validation errors
  const [fileError, setFileError] = useState<string>(""); // File error message
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  // Effect to set the mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // File validation
  const validateFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file) {
      // Check file size
      if (file.size > maxSize) {
        setFileError("File size exceeds 5MB. Please upload a smaller file.");
        return;
      }

      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Invalid file format. Please upload a PDF, DOC, or DOCX.");
        return;
      }

      // Clear error if valid
      setFileError("");
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  // Field validation 
const validateField = (name: string, value: string) => {
  // Create a copy of the current errors state
  const newErrors = { ...errors };

  // Name validation
  if (name === "name") {
    if (!value.trim()) {
      newErrors.name = "Name is required"; // Set error if name is empty
    } else {
      delete newErrors.name; // Remove error if name is valid
    }
  }

  // Email validation
  if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    if (!emailRegex.test(value)) {
      newErrors.email = "Valid email is required"; // Set error if email is invalid
    } else {
      delete newErrors.email; // Remove error if email is valid
    }
  }

  // Update the state with the new errors
  setErrors(newErrors);
};

  // Check if form is valid
  const isFormValid = Object.keys(errors).length === 0 && formData.name && formData.email;

  // Navigation between steps
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Form submission
  const Submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formEle = e.currentTarget;
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbzvVuhHx_p14wW3kne9-UUsdmGoWXryKNFLqYTd7PxZxr19r8jNkRNYknPBMCanndxv/exec",
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
      .catch(() => setStatus("error"));
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center py-16 px-6">
      {/* Background Video - Render only if the component is mounted */}
      <div className="absolute inset-0 z-0">
        {isMounted && (
          <video
            src="/vibe.mp4" // Path to your video file
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }} // Adjust brightness for a subdued background
          />
        )}
      </div>

      {/* Form Container */}
      <div className="relative z-10 lg:w-1/2 w-full flex flex-col items-start bg-transparent">
        <form onSubmit={Submit} className="space-y-6 w-full">
          
          {/* Progress Indicator */}
          <div className="mb-6 text-center lg:text-left">
           
            <p className="text-gray-400 text-lg">Step {step} of 4</p>
            <div className="w-full bg-gray-600 h-1 rounded-full mt-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-600 h-1 rounded-full"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
  
          {/* Step 1: Form Fields */}
          {step === 1 && (
            <>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Let’s start at the very beginning

              
              </h1>
  
              {/* Name Input */}
              <div className="mb-4">
                <input
                  className={`w-full p-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.name
                      ? "focus:ring-red-500 ring-2 ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                  placeholder="Name *"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => validateField("name", formData.name)}
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
  
              {/* Email Input */}
              <div className="mb-4">
                <input
                  className={`w-full p-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.email
                      ? "focus:ring-red-500 ring-2 ring-red-500"
                      : "focus:ring-purple-500"
                  }`}
                  placeholder="Email *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => validateField("email", formData.email)}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
  
              {/* Company Input */}
              <div className="mb-4">
                <input
                  className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Company (optional)"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
  
              {/* Navigation Button */}
              <button
                type="button"
                onClick={nextStep}
                className={`w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-lg font-semibold hover:opacity-90 transition ${
                  isFormValid ? "" : "opacity-50 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Next Step <span aria-hidden="true">→</span>
              </button>
            </>
          )}
  
          {/* Step 2 */}
         {/* Step 2 Content */}
{step === 2 && (
  <>
    <h1 className="text-2xl lg:text-3xl font-bold text-white mb-6">Let’s talk budget & timelines</h1>
    
    {/* Launch Date Section */}
    <div className="space-y-4">
      <label className="block text-white text-sm font-semibold">
        I want to launch my project on:
      </label>
      <input
        className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="DD/MM/YYYY"
        name="LaunchDate"
        type="date"
        required
      />

      {/* Budget Section */}
      <label className="block text-white text-sm font-semibold">
        My budget is between:
      </label>

      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <input
          className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Minimum Budget (₹)"
          name="BudgetMin"
          type="number"
          required
        />
        <input
          className="w-full p-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Maximum Budget (₹)"
          name="BudgetMax"
          type="number"
          required
        />
      </div>
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-between mt-6">
      <button
        type="button"
        onClick={prevStep}
        className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-600 transition"
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

    {/* Responsive Grid for Service Selection */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[
  "Web & App Design",
  "Website Development",
  "App Development",
  
  "UI/UX Design",
  " E-commerce",
  "Mobile App Design",
  "Digital  Consulting",
  "Cloud Solutions",
  "Content Writing",
  "Cybersecurity Services",
  "API Dev & Integration",
  "IT Support ","IT Maintenance",
  "Software Solutions",
  "DevOps Services"
].map((service) => (
        <label key={service} className="cursor-pointer relative">
          <input type="checkbox" name="Services" value={service} className="hidden peer" />
          <div className="p-4 bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-600 transition text-white rounded-lg peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-blue-600 peer-checked:ring-2 peer-checked:ring-purple-500 transition cursor-pointer text-center">
            {service}
          </div>
          <span className="absolute right-4 top-4 opacity-0 peer-checked:opacity-100 transition duration-200">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </label>
      ))}
    </div>

    {/* Navigation Buttons */}
    <div className="flex justify-between mt-6 w-full space-y-4 sm:space-y-0 flex-col sm:flex-row">
      <button
        type="button"
        onClick={prevStep}
        className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-600 transition"
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

{/* --------------- */}
{step === 4 && (
  <>
    {/* Heading */}
    <h1 className="text-3xl font-bold text-white mb-4">Give us the deets!</h1>

    {/* Text Area for Project Summary */}
    <textarea
      className="w-full p-4 rounded-lg bg-[#111] text-white  rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
      placeholder="Please provide a summary of your project"
      name="Details"
      rows={4}
      required
    />

    {/* File Upload Section with Validation */}
    <div className="mt-4">
      <label className="block text-white text-sm font-semibold mb-2">
        Or upload a project brief (Max: 5MB)
      </label>
      <input
        type="file"
        name="ProjectFile"
        accept=".pdf,.doc,.docx"
        className="block w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-blue-600 transition"
        onChange={validateFile} // Attach validation function
      />
      {fileError && <p className="text-red-500 text-sm mt-2">{fileError}</p>}
    </div>

    {/* Newsletter Subscription */}
    <div className="mt-4 flex items-center">
      <input 
        type="checkbox" 
        name="newsletter" 
        id="newsletter" 
        className="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500"
      />
      <label htmlFor="newsletter" className="ml-2 text-white">
        Subscribe to our newsletter for all the latest updates!
      </label>
    </div>

    {/* Navigation Buttons */}
    <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
      {/* Previous Button */}
      <button
        type="button"
        onClick={prevStep}
        className="bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-600 transition"
      >
        Previous
      </button>

      {/* Submit Button with Loading State */}
      <button
        type="submit"
        className={`bg-gradient-to-r from-purple-500 to-blue-600 text-white p-4 rounded-lg font-semibold hover:opacity-90 transition duration-300 ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <svg
              className="animate-spin mr-2 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8h8a8 8 0 11-8 8V12H4z"
              ></path>
            </svg>
            Submitting...
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>
    </div>
  </>
)}



        </form>
      {/* Success or Error Message */}
      {status === "success" && (
        <div className="mt-4 text-green-500 font-semibold">Successfully submitted!</div>
      )}
      {status === "error" && (
        <div className="mt-4 text-red-500 font-semibold">Error submitting the form. Please try again.</div>
      )}
    </div>
  </div>
  


  );
}