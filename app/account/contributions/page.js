import { HiHeart, HiCurrencyDollar } from "react-icons/hi";
import React from 'react';
import Countdown from './components/Countdown';
import Spinner from './components/Spinner';

export default function Contributions() {
  return (
    <div className="container">
      <h1 className="heading-primary">Your Contributions</h1>
      <div className="flex flex-col w-full gap-4">
        <Contribution 
          title="Bermuda National Trust"
          amount="$5"
          frequency="Weekly"
      />
      <Contribution 
        title="Warwick Academy USA Soccer Tour"
        amount="$10"
        frequency="Weekly"
      />
      </div>
      <PrizeDraws />
    </div>
  )
}

function Contribution({ title, amount, frequency }) {
  return (
    <div className="flex flex-col w-full bg-white/[0.1] p-6 rounded-lg shadow-lg backdrop-blur-md transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="flex flex-row items-center gap-4">
        <HiCurrencyDollar className="text-6xl" aria-hidden="true" />
        <div className="flex flex-col">
          <span className="text-lg mb-1">Amount: {amount}</span>
          <span className="text-lg">Frequency: {frequency}</span>
        </div>
      </div>
    </div>
  );
}

function PrizeDraws() {
  return (
    <div>
      <h1 className="heading-primary">Next Prize Draw</h1>
      <h2 className="heading-secondary">
        <Countdown />
      </h2>
      <Spinner segments={["1st Prize", "2nd Prize", "3rd Prize", "4th Prize", "5th Prize", "6th Prize"]} />
    </div>
  )
}


