"use client";

import { BorderColor } from "@mui/icons-material";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className=" min-h-screen bg-gradient-to-br animate-fadeIn bg-[#FFFBEB]  ">
      <div className="flex flex-row  min-h-screen bg-gradient-to-br  animate-fadeIn  ">
        {/* <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-rose-500 to-pink-500 tracking-wider drop-shadow-md flex justify-self-start ">
          Ticket_Wale
        </h1> */}
        <div className="bg-[#FFFBEB]  w-full flex justify-center items-center overflow-hidden">
          <div className=" bg-transparent p-8 shadow-md w-full  max-w-md rounded-3xl flex flex-col gap-4  ">
            <h1 className="text-3xl font-bold text-center text-gray-800">
              Welcome Back
            </h1>

            <a
              href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=32073492121-s6ur8ti01mh34gq2bpbufb8ujdfrpn4v.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdribbble.com%2Fauth%2Fgoogle_signup%2Fcallback&response_type=code&scope=email%20profile&state=d9cac1c0dd7cde9e808d45428ec9f4e5f4d00e2e4619cf6f&service=lso&o2v=1&flowName=GeneralOAuthFlow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{
                  borderRadius: "40px",
                  height: 50,
                  fontSize: "18px",
                  overflow: "hidden",
                }}
                className="flex items-center justify-center gap-2 text-gray-700 bg-white border border-transparent hover:border-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-200 px-4 w-full shadow-md"
                variant="outlined"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google Logo"
                  className="h-7 w-auto"
                />
                Continue with Google
              </Button>
            </a>

            <p className="text-black flex justify-center   text-2xl">or</p>
            <form className="space-y-4 flex flex-col ">
              <div>
                <label className="block text-gray-800 text-0">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-[40px] px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-black text-gray-700"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-0">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-[40px] px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-black text-gray-700"
                />
              </div>

              <div>
                <label className="block text-gray-800 text-0">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-[40px] px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-black text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[40px] bg-black text-white text-xl py-2 rounded-b-full rounded-t-full hover:bg-gray-800 transition"
              >
                Continue
              </button>
            </form>
            <p className="text-center mt-4 text-sm flex gap-1 text-gray-600">
              By continuing, you agree to our{" "}
              <a href="/privacy" className="text-black font-semibold">
                term
              </a>
              and
              <a href="/privacy" className="text-black font-semibold">
                privacy Policy
              </a>
            </p>
            <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/signup" className="text-black font-semibold">
                sign in
              </a>
            </p>
          </div>
        </div>
        <div>
          <video
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyXmEaYyZI8v8jfob8kgwwdmZ-CXgtHDoww&s"
            src="https://cdn.dribbble.com/uploads/48226/original/b8bd4e4273cceae2889d9d259b04f732.mp4?1689028949"
            style={{ objectFit: "cover", objectPosition: "center" }}
            className="w-[700px] h-full rounded-xl"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
}
