"use client";

import { Button } from "antd";
import React, { useState } from "react";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import HotelClassIcon from "@mui/icons-material/HotelClass";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import { Box } from "@mui/material";

export default function Page() {
  const [checkboxValues, setCheckboxValues] = useState({
    nearbyFrom: false,
    nearbyTo: false,
    direct: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxValues((prev) => ({
      ...prev,
      [name]: checked,
    }));
    console.log("Checked values changed:", {
      ...checkboxValues,
      [name]: checked,
    });
  };

  const buttons = [
    { icon: <HotelClassIcon className="text-amber-50" />, label: "Hotels" },
    { icon: <TimeToLeaveIcon />, label: "Car" },
    { icon: <AirplanemodeActiveIcon />, label: "Flight" },
    { icon: <DirectionsCarIcon />, label: "Rapido" },
    { icon: <TwoWheelerIcon />, label: "Bike" },
    { icon: <LocalTaxiIcon />, label: "Auto" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        margin: "0px",
        padding: "0px",
        backgroundColor: "transparent",
      }}
    >
      <div className="bg-black h-150">
        <div className="flex items-center justify-center py-20">
          <h1 className="text-5xl font-extrabold text-center text-amber-50">
            The best flight offers from anywhere, to everywhere
          </h1>
        </div>

        <div className="relative h-[700px] mt-10">
          {/* Input and Button Row Container */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full px-4">
            <div className="max-w-[1400px] mx-auto bg-transparent bg-opacity-80 p-6 rounded-xl shadow-lg flex flex-col gap-6">
              {/* Inputs and Search in Same Row */}
              <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4">
                {["From", "To", "Travellers & Cabin Class"].map(
                  (placeholder, idx) => (
                    <input
                      key={idx}
                      type="text"
                      placeholder={placeholder}
                      className="w-full sm:w-[200px] p-2 border border-gray-300 rounded-md bg-white bg-opacity-80 h-20 text-black placeholder-gray-400"
                    />
                  )
                )}

                <input
                  type="date"
                  className="w-full sm:w-[200px] p-2 border text-gray-800 border-gray-300 rounded-md bg-white bg-opacity-80 h-20"
                />

                <input
                  type="date"
                  className="w-full sm:w-[200px] p-2 border text-gray-800 border-gray-300 rounded-md bg-white bg-opacity-80 h-20"
                />

                <button className="bg-white text-black text-3xl  font-bold h-20 w-full sm:w-[200px] rounded-3xl">
                  Search
                </button>
              </div>

              {/* ✅ Checkbox Section */}
              <div className="w-full flex flex-col sm:flex-row gap-4 pt-2  items-start sm:items-center">
                <label className="flex items-center gap-2 text-white">
                  <input
                    type="checkbox"
                    name="nearbyFrom"
                    checked={checkboxValues.nearbyFrom}
                    onChange={handleCheckboxChange}
                  />
                  Add nearby airports (From)
                </label>

                <label className="flex items-center gap-2 text-white">
                  <input
                    type="checkbox"
                    name="nearbyTo"
                    checked={checkboxValues.nearbyTo}
                    onChange={handleCheckboxChange}
                  />
                  Add nearby airports (To)
                </label>

                <label className="flex items-center gap-2 text-white">
                  <input
                    type="checkbox"
                    name="direct"
                    checked={checkboxValues.direct}
                    onChange={handleCheckboxChange}
                  />
                  Direct flights only
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Buttons Section with Map */}
      <div
        style={{
          // backgroundImage: `url("/fly.jpg")`,
          backgroundColor: "#FFFBEB",
          height: "50vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {buttons.map((btn, index) => (
          <Button
            key={index}
            style={{ color: "white" }}
            className="!bg-black !h-22 !w-40 "
            variant="contained"
          >
            {btn.icon}
            <span className="ml-2">{btn.label}</span>
          </Button>
        ))}
      </div>

      <div>
        <div>
          <h1>Booking flight with Ticket Wale</h1>
        </div>
      </div>
    </Box>
  );
}
