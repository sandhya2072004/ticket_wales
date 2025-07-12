"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Next.js navigation

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter(); // ✅ Correct navigation in Next.js

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:3000/api/ticket_wales",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        router.push("/home"); // ✅ Use router.push in Next.js
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br animate-fadeIn bg-[#FFFBEB]">
      <div className="flex flex-row min-h-screen animate-fadeIn">
        <div className="bg-[#FFFBEB] w-full flex justify-center items-center overflow-hidden">
          <div className="bg-transparent p-8 shadow-md w-full max-w-md rounded-3xl flex flex-col gap-7">
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
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                  alt="Google Logo"
                  className="h-7 w-auto"
                />
                Continue with Google
              </Button>
            </a>

            <p className="text-black flex justify-center text-2xl">or</p>

            {/* ✅ Login Form */}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-800">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
                />
              </div>

              <div>
                <label className="block text-gray-800">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-gray-700"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-b-full rounded-t-full hover:bg-gray-800 transition"
              >
                Login
              </button>
            </form>

            <p className="text-center mt-4 text-sm flex gap-1 text-gray-600">
              By continuing, you agree to our{" "}
              <Link href="/privacy" className="text-black font-semibold">
                terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-black font-semibold">
                privacy policy
              </Link>
            </p>

            <p className="text-center mt-4 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-black font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        <div>
          <video
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
