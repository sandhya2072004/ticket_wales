"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function Page() {
  const navItems = [
    { title: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
    { title: "Bookings", href: "/bookings", icon: <BookOnlineIcon /> },
    { title: "Rooms", href: "/rooms", icon: <HotelIcon /> },
    { title: "Customers", href: "/customers", icon: <PeopleIcon /> },
    { title: "Settings", href: "/settings", icon: <SettingsIcon /> },
  ];

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Sidebar */}
      <div className="w-64 bg-black bg-opacity-80 text-white p-4 h-screen backdrop-blur">
        <h2 className="text-2xl font-bold mb-6">Hotel Booking</h2>
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                component="a"
                variant="contained"
                startIcon={item.icon}
                sx={{
                  height: "40px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 2,
                  px: 2,
                  mt: 1.5,
                  width: "100%",
                  justifyContent: "flex-start",
                  "&:hover": {
                    backgroundColor: "#f0e6f6",
                  },
                }}
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white bg-opacity-90 rounded-l-3xl overflow-y-auto">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">
          Hotel Management System
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://img.freepik.com/premium-photo/booking-hotel-travel-traveler-search-business-reservation-holiday-book-research-plan-tourism_43780-6975.jpg?semt=ais_hybrid&w=740"
              className="w-full h-40 object-cover"
              alt="Bookings"
            />
            <div className="p-4">
              <Link href="/bookings">
                <Button variant="contained">Bookings</Button>
              </Link>
              <p className="text-blue-400">Total Today: 15</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiSicOTouO1flIPqSBRElBwEST2V99rfp4w&s"
              className="w-full h-40 object-cover"
              alt="Rooms"
            />
            <div className="p-4">
              <Link href="/rooms">
                <Button variant="contained">Available Rooms</Button>
              </Link>
              <p className="text-blue-400">Rooms: 24</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=800&q=80"
              className="w-full h-40 object-cover"
              alt="Customers"
            />
            <div className="p-4">
              <Link href="/customers">
                <Button variant="contained">Customers</Button>
              </Link>
              <p className="text-blue-400">Checked-in: 32</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVSckkrt0f4G-AfvHYQoSHH0CzAbbPMYC0Q&s"
              className="w-full h-40 object-cover"
              alt="Garden"
            />
            <div className="p-4">
              <Link href="/garden">
                <Button variant="contained">Garden</Button>
              </Link>
              <p className="text-blue-400">Checked-in: 33</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
