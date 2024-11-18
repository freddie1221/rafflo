"use client";

import { HiHeart } from "react-icons/hi";
import { useState } from "react";

export default function BermudaNationalTrust() {
  const [amount, setAmount] = useState(0);
  const [frequency, setFrequency] = useState("");

  const ticketOptions = [5, 10, 20];
  const frequencyOptions = ["weekly", "monthly"];

  return (
    <div className="container space-y-8">
      <Cause
        Icon={HiHeart}
        title="Bermuda National Trust"
        slug="bermuda-national-trust"
        description="Preserving Bermuda's natural and cultural heritage through conservation of historic buildings, nature reserves, and marine ecosystems."
      />
      <h2 className="heading-secondary">Purchase Tickets</h2>

      {/* Ticket Amount Selection */}
      <div>
        <h3 className="text-xl font-semibold mb-4 heading-secondary">Select Ticket Amount</h3>
        <div className="flex space-x-4">
          {ticketOptions.map((option) => (
            <button
              key={option}
              onClick={() => setAmount(option)}
              className={`px-4 py-2 rounded ${
                amount === option
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-purple-600 hover:text-white transition-colors duration-200"
              } focus:outline-none transition-colors duration-200`}
            >
              ${option}
            </button>
          ))}
        </div>
      </div>

      {/* Frequency Selection */}
      <div>
        <h3 className="text-xl font-semibold mb-4 heading-secondary">Select Frequency</h3>
        <div className="flex space-x-4">
          {frequencyOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFrequency(option)}
              className={`px-4 py-2 rounded ${
                frequency === option
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } focus:outline-none capitalize transition-colors duration-200`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Payment Details Form */}
      {amount > 0 && frequency && (
        <div className="mt-8 bg-white/[0.05] p-6 rounded-lg shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-semibold mb-4 text-white">Payment Details</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300">Cardholder Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-500 rounded bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300">Card Number</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-500 rounded bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-gray-300">Expiry</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-500 rounded bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">CVC</label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-500 rounded bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-600"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors duration-200"
            >
              Begin Playing
            </button>
          </form>
        </div>
      )}
    </div>
  );
}




function Cause({ Icon, title, slug, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-white/[0.1] p-6 rounded-lg shadow-lg backdrop-blur-md transform transition-transform duration-300 hover:scale-105">
      <Icon className="text-6xl text-white mb-4" aria-hidden="true" />
      <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
}