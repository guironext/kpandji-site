"use client";

import Hero from "./components/Hero";
import DerniereSortie from "./components/DerniereSortie";
import VideoSection from "./components/VideoSection";
import KpandjiCars from "./components/KpandjiCars";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <DerniereSortie />
      <VideoSection />
      <KpandjiCars />
    </div>
  );
}
