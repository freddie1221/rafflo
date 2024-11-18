"use client";

import Link from "next/link";
import Feature from "@/app/components/Feature";
import { HiHeart, HiLightBulb, HiAcademicCap, HiFire } from "react-icons/hi";
export default function Causes() {
  return (
    <div className="container">
      <h1 className="text-5xl font-extrabold text-white mb-6">Causes</h1>
      <h2 className="heading-secondary text-2xl font-semibold text-white mb-6">Select a cause to begin playing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <Cause
            Icon={HiHeart}
            title="Bermuda National Trust"
            slug="bermuda-national-trust"
            description="Preserving Bermuda's natural and cultural heritage through conservation of historic buildings, nature reserves, and marine ecosystems."
          />
          <Cause
            Icon={HiLightBulb}
            title="Bermuda Environmental Fund"
            description="Dedicated to protecting Bermuda's environment by supporting sustainable initiatives and conservation projects."
          />
          <Cause
            Icon={HiAcademicCap}
            title="Bermuda Education Foundation"
            description="Empowering the community through educational programs, scholarships, and resources to foster lifelong learning."
          />
          <Cause
            Icon={HiFire}
            title="Bermuda Health Initiative"
            description="Focused on improving public health services, promoting wellness, and supporting medical research in Bermuda."
          />
        </div>
    </div>
  );
}


function Cause({ Icon, title, slug, description }) {
  return (
    <Link href={`/account/causes/${slug}`} className="flex flex-col items-center text-center bg-white/[0.1] p-6 rounded-lg shadow-lg backdrop-blur-md transform transition-transform duration-300 hover:scale-105">
      <Icon className="text-6xl text-white mb-4" aria-hidden="true" />
      <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-white">{description}</p>
    </Link>
  );
}
 