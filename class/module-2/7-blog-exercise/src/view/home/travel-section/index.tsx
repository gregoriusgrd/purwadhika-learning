"use client";

export default function HeroSection() {
  return (
    <section className="bg-white px-36 py-24">
      <div className="h-[600px] bg-[url('/home/travel-section/travel-background.jpg')] bg-cover bg-center rounded">
      <div className="h-full bg-[rgba(0,_0,_0,_0.5)]">

        <div className="px-36 flex h-full flex-col items-center justify-center text-center">
          <p className="bg-[rgba(255,255,255,0.4)] text-white font-bold rounded px-2 py-1 ">Travel</p>
          <h1 className="mt-2.5 text-4xl font-bold">
            Richird Norton photorealistic rendering as real photos
          </h1>
          <p className="mt-5 text-lg font-bold">
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
          </p>

          <button className="mt-7 h-12 w-80 cursor-pointer rounded-lg border-none bg-white text-lg text-violet-500">
            Start planning your trip
          </button>
      </div>
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
