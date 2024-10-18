"use client";

export default function Feature({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-white/[0.1] p-6 rounded-lg shadow-lg backdrop-blur-md transform transition-transform duration-300 hover:scale-105">
      <Icon className="text-6xl text-white mb-4" aria-hidden="true" />
      <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
}
