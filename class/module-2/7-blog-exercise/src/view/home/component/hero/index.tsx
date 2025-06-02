"use client";

import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <main className="h-full overflow-hidden">
      <nav>
        <Navbar />
      </nav>
      
      <div className="flex flex-col justify-center items-center text-center px-4 py-0 gap-10">
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
