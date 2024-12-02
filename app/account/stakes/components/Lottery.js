"use client"

import React, { useState, useEffect } from 'react';
import { Car, Utensils, Gift, Trophy, Ticket } from 'lucide-react';
import Countdown from './Countdown';

// Define the prizes outside the component for better readability
const PRIZES = [
  {
    id: 1,
    name: 'Luxury Car',
    icon: <Car className="w-12 h-12 text-blue-600" />,
    description: 'Brand New Luxury Vehicle',
    value: '$75,000',
  },

  {
    id: 3,
    name: 'Weekend Getaway',
    icon: <Trophy className="w-12 h-12 text-purple-600" />,
    description: 'All expenses paid trip to NYC for two',
    value: '$5,000',
  },
  {
    id: 2,
    name: '5-Star Restaurant',
    icon: <Utensils className="w-12 h-12 text-green-600" />,
    description: 'Dinner at Intrepid for Two',
    value: '$500',
  },
  {
    id: 4,
    name: 'Case of Wine',
    icon: <Gift className="w-12 h-12 text-yellow-600" />,
    description: 'A case of wine from Two Rock',
    value: '$200',
  },
];

const LotteryPreview = () => {
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);

  useEffect(() => {
    // Cycle through prizes every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentPrizeIndex((prevIndex) => (prevIndex + 1) % PRIZES.length);
    }, 3000);

    // Clean up the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (

      <div className="flex flex-col items-center w-full" >
        <h1 className="heading-secondary mt-8">Next Prize Draw</h1>
        <div className="mb-6 text-xl bg-white/[0.1] px-6 py-4 rounded-lg">
          <Countdown />
        </div>

        <div className="mb-6 flex flex-col items-center w-full">
          <h3 className="heading-secondary">Prize Showcase</h3>
          <div className="w-full space-y-4">
            {PRIZES.map((prize, index) => (
              <div 
                key={prize.id} 
                className={`flex items-center w-full p-4 rounded-lg transition-transform duration-500 bg-white/[0.1] ${
                  index === currentPrizeIndex 
                    ? 'scale-105 shadow-md' 
                    : ''
                }`}
              >
                {prize.icon}
                <div className="ml-3 text-left">
                  <h4 className="font-semibold">{prize.name}</h4>
                  <p className="text-sm">{prize.description}</p>
                  <p className="font-medium">Value: {prize.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
};

export default LotteryPreview;