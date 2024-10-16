"use client";
import React, { useState } from "react";

export default function App() {
  const [status, setStatus] = useState<string>(""); // To handle submission status

  // Function to handle form submission
  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading"); // Set status to loading before form submission

    const formEle = e.currentTarget; // Use the event to get the form element
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbznuPPRN2k4RBx-CYUmKg2qjKE1Lr-lj1ycgYEEZJ_U0TK1Attt405UN5aSlINJkp3c/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        if (res.ok) {
          // If the response is successful (status 200-299)
          setStatus("success");
          formEle.reset(); // Clear form fields after successful submission
          return res.text(); // Return text in case it's not JSON
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
        setStatus("error"); // Handle the error case
      });
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Contact Us</h1>
      <h2 className="text-lg text-gray-300 mb-8">Testing......</h2>
      <div className="w-full max-w-md">
        <form
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          onSubmit={Submit} // TSX way of handling form submission
        >
          <input
            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            name="Name"
            type="text"
            required
          />
          <input
            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            name="Email"
            type="email"
            required
          />
          <textarea
            className="w-full p-3 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            name="Message"
            rows={4}
            required
          ></textarea>
          <button
            className={`w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 ${
              status === "loading" ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={status === "loading"} // Disable button while submitting
          >
            {status === "loading" ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Conditional rendering for success message */}
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
