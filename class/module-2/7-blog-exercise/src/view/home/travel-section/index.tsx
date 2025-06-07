"use client";

export default function HeroSection() {
  return (
    <section className="bg-white px-36 py-24">
      <div className="h-[600px] bg-[url('/home/travel-section/travel-background.jpg')] bg-cover bg-center rounded">
        <div className="flex h-full flex-col items-center justify-center text-center gap-5">
          <p className="bg-[rgba(255,255,255,0.4)] text-white font-bold rounded px-2 py-1 ">Travel</p>
          <h1 className="text-4xl font-bold">
            Richird Norton photorealistic rendering as real photos
          </h1>
          <p className="text-lg">
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </p>

          <button className="h-12 w-80 cursor-pointer rounded-lg border-none bg-white text-lg text-violet-500">
            Start planning your trip
          </button>
        </div>
      </div>
    </section>
  );
}

// <main className="h-screen relative bg-[url('/home/hero-section/hero-background.jpg')] bg-cover bg-center overflow-hidden">

/*
"use client"

export default function TravelSection () {
    return(
        <main className="h-full relative bg-[url('/home/travel-section/travel-background.jpg')]">
            
        </main>
    )
}
*/

//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 gap-10">
