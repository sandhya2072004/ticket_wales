import React from "react";

export default function BikeBookingPage() {
  // const handleBooking = (e) => {
  //   e.preventDefault();
  //   console.log("Bike booking confirmed!");
  // };

  return (
    <div className="bg-gradient-to-br from-pink-300 to-rose-400 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-pink-700 mb-6">
          Bike Booking
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Pickup Location
            </label>
            <input
              type="text"
              placeholder="Enter pickup location"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Drop Location
            </label>
            <input
              type="text"
              placeholder="Enter drop location"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Booking Time
            </label>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}
