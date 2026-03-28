// src/components/Hero.jsx
import React from "react";
import Nav from "./Nav";

function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1651643367896-43a10f05bc69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
    >
      <Nav />
      {/* Overlay for darkening background */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-20 text-left text-white">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
          Doreen Geter
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-xl">
          A heartwarming story about life, love, and resilience.
        </p>

        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 rounded bg-purple-700 hover:bg-purple-800 transition">
            Learn More
          </button>
        </div>
      </div>

    </div>
  );
}

export default Hero; 