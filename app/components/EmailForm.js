"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setStatus("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-sm flex flex-col items-center">
      {/* Introductory Text */}
      <p className="mb-4 text-center text-white">
        Subscribe to hear more about our launch
      </p>

      {/* Subscription Form */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-4 rounded mb-4 text-white bg-white bg-opacity-20 placeholder-gray-200"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-500 text-white font-semibold py-4 rounded hover:bg-purple-600 transition"
        >
          Join Now
        </button>
        {status && <p className="mt-4 text-white">{status}</p>}
      </form>
    </div>
  );
}
