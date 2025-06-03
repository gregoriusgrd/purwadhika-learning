"use client";

import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <main className="relative h-screen bg-[url('/hero/hero-background.jpg')] bg-cover bg-center overflow-hidden">
      
      <nav className="w-full">
        <Navbar />
      </nav>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-6xl font-bold">
            Inspiration for travel by real people
          </h1>
          <p className="text-2xl">Book smart, travel simple</p>
        </div>

        <button className="text-2xl text-black bg-white w-80 h-12 border-none rounded-lg cursor-pointer">
          Start planning your trip
        </button>
      </div>
    </main>
  );
}
