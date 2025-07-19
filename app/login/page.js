"use client";
import Next, { useState } from "react";

import { BorderColor } from "@mui/icons-material";
import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" min-h-screen bg-gradient-to-br animate-fadeIn bg-[#FFFBEB]">
      <div className="flex flex-row  min-h-screen bg-gradient-to-br  animate-fadeIn  ">
        {/* <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-rose-500 to-pink-500 tracking-wider drop-shadow-md flex justify-self-start ">
          Ticket_Wale
        </h1> */}
        <div className="bg-[#FFFBEB] w-full flex justify-center items-center overflow-hidden px-4 py-8">
          <div className=" p-6 shadow-md w-full max-w-sm rounded-2xl flex flex-col gap-5">
            <h1 className="text-2xl font-bold text-center text-gray-800">
              Welcome Back
            </h1>

            <a
              href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=32073492121-s6ur8ti01mh34gq2bpbufb8ujdfrpn4v.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fdribbble.com%2Fauth%2Fgoogle_signup%2Fcallback&response_type=code&scope=email%20profile&state=d9cac1c0dd7cde9e808d45428ec9f4e5f4d00e2e4619cf6f&service=lso&o2v=1&flowName=GeneralOAuthFlow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                style={{
                  borderRadius: "30px",
                  height: 40,
                  fontSize: "14px",
                }}
                className="flex items-center justify-center gap-2 text-gray-700 bg-white border border-gray-300 hover:border-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200 w-full shadow-sm"
                variant="outlined"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google Logo"
                  className="h-5 w-auto"
                />
                Continue with Google
              </Button>
            </a>

            <p className="text-black text-center text-base">or</p>

            <form className="space-y-3">
              {/* <div>
                <label className="block text-gray-700 text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-1.5 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-gray-700"
                />
              </div> */}

              <div>
                <label className="block text-gray-700 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-1.5 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-gray-700"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-3 py-1.5 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-gray-700 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[50%] translate-y-[-50%] text-gray-600 text-lg"
                  >
                    {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white text-sm py-1.5 rounded-full hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>

            <p className="text-center text-xs text-gray-600">
              By continuing, you agree to our{" "}
              <a href="/privacy" className="text-black font-medium">
                terms
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-black font-medium">
                privacy policy
              </a>
              .
            </p>

            <p className="text-center text-xs text-gray-600">
              Don't have an account?{" "}
              <a href="/signup" className="text-black font-medium">
                Sign Up
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

