"use client";

import EmailForm from "@/app/components/EmailForm";
import Feature from "@/app/components/Feature";
import { HiHeart, HiSparkles, HiUserGroup } from "react-icons/hi";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-8">
      <h1 className="text-5xl font-extrabold text-white mb-6">Rafflo</h1>
      <p className="text-xl text-white mb-10 text-center max-w-lg">
        A simple way for donors to make weekly donations to their favorite charities through a fun lottery system, empowering charities to recruit more recurring donations.
      </p>
      
      <section className="w-full max-w-4xl mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <Feature
            Icon={HiHeart}
            title="Simple Weekly Donations"
            description="A straightforward way for donors to make weekly contributions to their favorite charities without any hassle."
          />
          <Feature
            Icon={HiSparkles}
            title="Engaging Lottery System"
            description="Engage donors with an exciting lottery, making the donation experience enjoyable and rewarding."
          />
          <Feature
            Icon={HiUserGroup}
            title="Powerful Recurring Support"
            description="Empower charities to recruit more recurring donations, ensuring sustained support for their causes."
          />
        </div>
      </section>

      <EmailForm />
    </div>
  );
}
