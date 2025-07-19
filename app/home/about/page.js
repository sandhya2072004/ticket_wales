"use client";

import { Box, Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export default function Page() {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push("/explore");
  };

  return (
    <div className="bg-[#FFFBEF]">
      {/* 🔹 Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#5b5ea6] shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-400">Ticket_Wale</div>
        <ul className="flex space-x-6 font-medium text-white">
          <li className="hover:text-red-600 cursor-pointer">About</li>
        </ul>
        <Button
          style={{
            textTransform: "none",
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
          }}
          variant="contained"
        >
          Download App
        </Button>
      </nav>

      {/* 🔹 Main Content with padding to avoid overlap with navbar */}
      <div className="pt-24 flex flex-col md:flex-row items-center justify-center px-6 py-12 text-white">
        {/* Left Content */}
        <Box className="max-w-xl text-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transport in India
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            Taxi, Bike, Bus Services
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            <strong>Ticket_Wale</strong> is your all-in-one travel companion.
            Whether you're booking buses, trains, or flights — we provide a
            fast, secure, and hassle-free ticketing experience so you can focus
            on your journey.
          </p>
        </Box>

        {/* Right Image Grid */}
        <Box className="mt-10 md:mt-0 md:ml-10 w-full md:w-[400px] flex flex-row gap-2">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 w-1/2">
            <img
              src="https://img.freepik.com/free-photo/front-view-young-female-sitting-bike-prayer-pose-white-background-woman-vacation-motorcycle-city-color-vehicle-road_179666-39277.jpg?semt=ais_hybrid&w=740"
              alt="Female on bike"
              className="w-full h-[200px] object-cover shadow-lg"
              style={{
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            />
            <img
              src="https://img.freepik.com/premium-photo/yamaha-riders-stylish-couple-blue-superbike-city_1300520-1749.jpg"
              alt="Yamaha riders"
              className="w-full h-[200px] object-cover shadow-lg"
              style={{
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2 w-1/2">
            <img
              src="https://i.pinimg.com/736x/3a/9e/8f/3a9e8f5039cd3f83768e9791c2b01ed4.jpg"
              alt="Stylish couple"
              className="w-full h-[200px] object-cover shadow-lg"
              style={{
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zZf9Ig6WosUZyxhgjeQ1-4-m2YBtHP5uQg&s"
              alt="Bike rider"
              className="w-full h-[200px] object-cover shadow-lg"
              style={{
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
            />
          </div>
        </Box>
      </div>

      {/* 🔹 Video Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          src="https://cdn.dribbble.com/userupload/44078251/file/original-ea1ad5269676af39e887482aaa000e91.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

        {/* Content on Video */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            About <span className="text-yellow-300">Ticket_Wale</span>
          </h1>

          <p className="text-md md:text-xl text-gray-200 font-bold mt-4 max-w-3xl drop-shadow-sm leading-relaxed">
            <strong>Ticket_Wale</strong> is your all-in-one travel companion.
            Whether you're booking buses, trains, or flights — we provide a
            fast, secure, and hassle-free ticketing experience so you can focus
            on your journey.
          </p>

          <button
            onClick={handleExploreClick}
            className="mt-8 px-6 py-3 bg-yellow-300 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Explore Services
          </button>
        </div>
      </div>

      <div className="bg-black py-10 px-4 text-white">
        {/* App Badges */}
        <Box display="flex" flexDirection="column" alignItems="center" gap={8}>
          {/* Customer App Section */}
          <div className="text-center">
            <p className="text-2xl font-semibold mb-4">Customer App</p>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          {/* Captain App Section */}
          <div className="text-center">
            <p className="text-2xl font-semibold mb-4">Captain App</p>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
          </div>
        </Box>

        {/* Footer Links */}
        <Box className="mt-10">
          <div className="  flex justify-center gap-60">
            {/* Company Links */}
            <ul className="space-y-1 text-sm">
              <li className="font-semibold text-base mb-1">Company</li>
              <li>Home</li>
              <li>About</li>
              <li>Safety</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
            </ul>

            {/* Services Links */}
            <ul className="space-y-1 text-sm">
              <li className="font-semibold text-base mb-1">Services</li>
              <li>Flight</li>
              <li>Hotel</li>
              <li>Bus</li>
              <li>Auto</li>
              <li>Bike</li>
              <li>Parcel</li>
            </ul>
          </div>
        </Box>

        {/* Social Icons */}
        <div className="mt-12 text-center">
          <h1 className="text-2xl font-semibold mb-6">Follow Us</h1>
          <div className="flex justify-center gap-6 text-3xl h-[50px] ">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
          </div>
          <p className="text-lg">© 2025 Uber Technologies Inc.</p>
        </div>
      </div>
    </div>
  );
}
