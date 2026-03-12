import React from "react";

const header = () => {
  return (
    <header className="w-full bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-yellow-400">
          SnipFlow AI
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="/" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="/services" className="hover:text-yellow-400 transition">
            Services
          </a>

          <a href="/booking" className="hover:text-yellow-400 transition">
            Booking
          </a>

          <a href="/chatbot" className="hover:text-yellow-400 transition">
            AI Assistant
          </a>

          <a href="/profile" className="hover:text-yellow-400 transition">
            Profile
          </a>
        </nav>

        {/* Button */}
        <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Book Now
        </button>

      </div>
    </header>
  );
};

export default header;