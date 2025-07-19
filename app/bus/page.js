"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";

export default function BusDashboard() {
  const navItems = [
    { title: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
    { title: "Bookings", href: "/bookings", icon: <BookOnlineIcon /> },
    { title: "Buses", href: "/buses", icon: <DirectionsBusIcon /> },
    { title: "Customers", href: "/customers", icon: <PeopleIcon /> },
    { title: "Settings", href: "/settings", icon: <SettingsIcon /> },
  ];

  return (
    <div className="flex  bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#5b5ea6] text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Bus Booking</h2>
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              startIcon={<span style={{ color: "#5b5ea6" }}>{item.icon}</span>}
              variant="contained"
              fullWidth
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                color: "#1f2937",
                backgroundColor: "#f3f4f6",
                borderRadius: 2,
                px: 2,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#dbeafe",
                  color: "#1e3a8a",
                },
              }}
            >
              {item.title}
            </Button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Bus Booking</h1>

        {/* Booking Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Bookings */}
          <div className="bg-white rounded-3xl shadow-lg p-4">
            <img
              src="https://help.octopuspro.com/wp-content/uploads/2024/07/open-view-booking-history-from-customer-profile-1024x542.png"
              alt="sa"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-400">
              Today's Bookings
            </h2>
            <p className="text-gray-600 mb-4">Total: 28</p>
            <Link href="/bookings">
              <Button variant="contained" color="primary" fullWidth>
                View Bookings
              </Button>
            </Link>
          </div>

          {/* Card 2 - Available Buses */}
          <div className="bg-white rounded-3xl shadow-lg p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7f97Qk54eNaNT1ZVKMoIQcee3a01YDfbRmQ&s"
              alt="sa"
              className="w-full"
            />
            <h2 className="text-xl font-semibold mb-2 text-gray-400">
              Available Buses
            </h2>
            <p className="text-gray-600 mb-4">Buses: 12</p>
            <Link href="/buses">
              <Button variant="contained" color="success" fullWidth>
                Manage Buses
              </Button>
            </Link>
          </div>

          {/* Card 3 - Customers */}
          <div className="bg-white rounded-3xl shadow-lg p-4">
            <img src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.jpg?s=612x612&w=0&k=20&c=tADtuQ9F_eKe_hMH0k5Ldg7N4p5BojisWf2n-jXar_I=" />
            <h2 className="text-xl font-semibold mb-2 text-gray-400">
              Customers
            </h2>
            <p className="text-gray-600 mb-4">Checked-in: 45</p>
            <Link href="/customers">
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "#06b6d4",
                  color: "#fff",
                  borderColor: "#06b6d4",
                  "&:hover": {
                    backgroundColor: "#0891b2",
                    borderColor: "#0891b2",
                  },
                }}
              >
                View Customers
              </Button>
            </Link>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1VR-AqA6mnfozs78cd-D2ElcGmOdvv4CeA&s" />
            <h2 className="text-xl font-semibold mb-2 text-gray-400">
              Settings
            </h2>
            <p className="text-gray-600 mb-4">Checked-in: 45</p>
            <Link href="/settings">
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "pink",
                  color: "#fff",
                  borderColor: "#06b6d4",
                  "&:hover": {
                    backgroundColor: "#0891b2",
                    borderColor: "#0891b2",
                  },
                }}
              >
                View Customers
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
