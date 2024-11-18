"use client";

import { useEffect, useState } from 'react';

export default function Spinner({ segments }) {
  const segmentAngle = 360 / segments.length;

  return (
    <div className="relative w-64 h-64 mx-auto my-8">
      <div 
        className="absolute w-full h-full rounded-full border-4 border-white overflow-hidden"
        style={{
          animation: 'spin 4s linear infinite'
        }}
      >
        {segments.map((segment, index) => (
          <div
            key={index}
            className="absolute w-1/2 h-1/2 origin-bottom-right flex items-center justify-center text-sm font-bold text-white"
            style={{
              transform: `rotate(${index * segmentAngle}deg)`,
              transformOrigin: '100% 100%',
              background: `hsl(${(index * 360) / segments.length}, 70%, 50%)`,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
            }}
          >
            <span
              className="absolute transform -rotate-90 translate-x-12"
              style={{
                transform: `rotate(${-segmentAngle/2}deg)`,
              }}
            >
              {segment}
            </span>
          </div>
        ))}
      </div>
      {/* Center point */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />
    </div>
  );
}