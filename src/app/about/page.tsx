"use client";

import React from "react";
import Navbar from '../components/Navbar'; // Adjust the import path if needed
import Footer from '../components/Footer'; // Adjust the import path if needed

export default function Page() {
    return (
        <div className="text-5xl text-white m-40 text-center">
            <Navbar /> {/* Added Navbar component */}
            <p>Hi, the about page will be here soon!</p>
            <Footer /> {/* Added Footer component */}
        </div>
    );
}
