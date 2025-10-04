"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createOffreExceptionnelle } from "@/lib/actions/onboarding";

const starStyle = `
  .star-shape {
    width: 80px;
    height: 80px;
    position: relative;
    display: inline-block;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  }
`;

const slides = [
  {
    id: "lathaye",
    image: "/hero/pic2.png",
    title: "S.U.V. redoutable sur les routes",
    name: "KPANDJI LATHAYE",
    description:
      "Cette S.U.V. s'impose comme un concurrent redoutable sur la route. Équipé d'un ingénieux moteur 2.0 T GDI turbo-compressé, associé à une transmission CVT à 8 vitesses, il atteint des vitesses impressionnantes de 210 km/h.",
    features: ["2.0T GDI", "CVT 8V", "210 km/h"],
    accent: "red",
    promotion: {
      isActive: true,
      originalPrice: "24 615 000 FCFA TTC",
      discountedPrice: "19 000 000 FCFA TTC",
      discount: "22.8%",
      period: "Du 01 Octobre au 30 Novembre 2025",
      badge: "OFFRE EXCEPTIONNELLE",
    },
  },
  {
    id: "djetran-auto",
    image: "/hero/pic1.png",
    name: "DJETRAN AUTOMATIQUE",
    title: "Robuste, fiable et innovant",
    description:
      "Avec un moteur turbo Diesel de 2,5 Litres et une puissance de 100 KW / 136 chevaux, la Kpandji Djetran a une consommation de carburant de 8,1 L/100 km. Il combine économie de carburant et des performances exceptionnelles.",
    features: ["2.5L Turbo Diesel", "136 CV", "8.1L/100km"],
    accent: "blue",
    promotion: {
      isActive: true,
      originalPrice: "26 000 000 FCFA TTC",
      discountedPrice: "22 500 000 FCFA TTC",
      discount: "13.46%",
      period: "Du 01 Octobre au 30 Novembre 2025",
      badge: "OFFRE EXCEPTIONNELLE",
    },
  },
  {
    id: "djetran-manual",
    image: "/hero/pic11.png",
    name: "DJETRAN MANUELLE",
    title: "Robuste, fiable et innovant",
    description:
      "Avec un moteur turbo Diesel de 2,5 Litres et une puissance de 100 KW / 136 chevaux, la Kpandji Djetran a une consommation de carburant de 8,1 L/100 km. Il combine économie de carburant et des performances exceptionnelles.",
    features: ["2.5L Turbo Diesel", "136 CV", "8.1L/100km"],
    accent: "blue",
    promotion: {
      isActive: true,
      originalPrice: "21 500 000 FCFA TTC",
      discountedPrice: "18 000 000 FCFA TTC",
      discount: "16.3%",
      period: "Du 01 Octobre au 30 Novembre 2025",
      badge: "OFFRE EXCEPTIONNELLE",
    },
  },
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<(typeof slides)[0] | null>(
    null
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const currentSlide = slides[currentSlideIndex] || slides[0];

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const getAccentColor = (accent: string) => {
    switch (accent) {
      case "blue":
        return "from-blue-500 to-blue-600";
      case "red":
        return "from-red-500 to-red-600";
      case "green":
        return "from-green-500 to-green-600";
      case "amber":
        return "from-amber-500 to-amber-600";
      default:
        return "from-amber-500 to-amber-600";
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden w-full px-6">
      <style jsx>{starStyle}</style>
      {/* Background with bg.png */}
      <div className="absolute inset-0">
        <Image
          src="/bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      </div>

      {/* Main Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content - Text */}
            <div className="space-y-6 lg:space-y-8 transform transition-all duration-1000 translate-x-0 opacity-100">
              {/* Car Name */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9]">
                <span className="block drop-shadow-2xl tracking-tight">
                  {currentSlide.name}
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/80 font-light mt-2 lg:mt-4">
                  {currentSlide.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-lg font-light">
                {currentSlide.description}
              </p>

              {/* Car Image Container - Mobile Only */}
              <div className="relative w-full h-[50vh] sm:hidden rounded-none overflow-hidden">
                <div className="relative w-full h-full">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                        index === currentSlideIndex
                          ? "translate-x-0 opacity-100"
                          : index === (currentSlideIndex + 1) % slides.length
                          ? "translate-x-full opacity-0"
                          : "opacity-0"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.name}
                        fill
                        className="object-contain p-1 sm:p-2"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none"></div>
              </div>

              {/* Features Grid - Hidden on Mobile */}
              <div className="hidden sm:grid grid-cols-3 gap-2 sm:gap-4 py-4 lg:py-6">
                {currentSlide.features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/20 backdrop-blur-xl rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-0.5 lg:mb-1">
                      {feature.split(" ")[0]}
                    </div>
                    <div className="text-xs text-white/80 font-medium uppercase tracking-wide">
                      {feature.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Promotional Section - Mobile Only */}
              {currentSlide.promotion?.isActive && (
                <div className="sm:hidden bg-gradient-to-r from-red-600/90 to-orange-500/90 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-3 sm:p-4 mt-8 lg:mt-16 border-2 border-yellow-400/50 shadow-2xl transform transition-all duration-1000 animate-pulse hover:scale-105 hover:shadow-3xl hover:border-yellow-300">
                  {/* Star Badge */}
                  <div className="absolute -right-4 sm:-right-6 lg:-right-8">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transform rotate-12 transition-all duration-700 animate-bounce hover:rotate-45 hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full fill-yellow-400 stroke-yellow-500 stroke-1 drop-shadow-lg"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-black text-xs lg:text-xs uppercase tracking-tight leading-tight text-center px-1 lg:px-2">
                          Offre
                          <br />
                          Exceptionnelle
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center justify-between mb-2 lg:mb-3">
                    <div className="transform transition-all duration-500 hover:scale-105">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <span className="text-white/70 line-through text-xs sm:text-sm transition-all duration-300 hover:text-white/90">
                          {currentSlide.promotion.originalPrice}
                        </span>
                        <span className="text-xl sm:text-2xl lg:text-3xl font-black text-yellow-300 transition-all duration-300 hover:text-yellow-200 hover:scale-110">
                          {currentSlide.promotion.discountedPrice}
                        </span>
                      </div>
                      <p className="text-white/90 text-sm sm:text-base lg:text-lg mt-1 transition-all duration-300 hover:text-yellow-300">
                        Économisez {currentSlide.promotion.discount}!
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="bg-white/20 rounded-full px-2 sm:px-3 py-1 transition-all duration-300 hover:bg-yellow-300/30 hover:scale-110 hover:rotate-3">
                        <span className="text-sm sm:text-base lg:text-lg font-black text-yellow-300 transition-all duration-300 hover:text-yellow-100">
                          -{currentSlide.promotion.discount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Benefits Section */}
                  <div className="bg-white/10 rounded-lg lg:rounded-xl p-2 lg:p-3 mb-2 lg:mb-3 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:border-yellow-300/50">
                    <h4 className="text-yellow-300 font-bold text-lg lg:text-xl mb-2 text-center transition-all duration-300 hover:text-yellow-200 hover:scale-105">
                      🎁 Avantages Inclus
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2 transition-all duration-300 hover:bg-white/20 hover:scale-102 hover:translate-x-1">
                        <div className="bg-green-500 rounded-full p-1 transition-all duration-300 hover:bg-green-400 hover:scale-110 hover:rotate-12">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-white font-semibold text-sm sm:text-base lg:text-xl transition-all duration-300 hover:text-yellow-300">
                          📄 Immatriculation Offerte
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2 transition-all duration-300 hover:bg-white/20 hover:scale-102 hover:translate-x-1">
                        <div className="bg-green-500 rounded-full p-1 transition-all duration-300 hover:bg-green-400 hover:scale-110 hover:rotate-12">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-white font-thin text-sm sm:text-base lg:text-xl transition-all duration-300 hover:text-yellow-300">
                          🔧 Entretien offert jusqu&apos;à 10 000 km
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Period */}
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm sm:text-base lg:text-xl transition-all duration-300 hover:text-yellow-300 hover:scale-105">
                      📅 {currentSlide.promotion.period}
                    </p>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-y-4  sm:gap-4">
                <Link href={`/cars/${currentSlide.id}`}>
                  <button
                    className={`group relative bg-gradient-to-r ${getAccentColor(
                      currentSlide.accent
                    )} hover:shadow-2xl text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-5 rounded-xl lg:rounded-2xl text-base sm:text-lg font-bold transition-all duration-500 transform hover:scale-105 overflow-hidden`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 lg:gap-3">
                      <span className="text-center">
                        Découvrir {currentSlide.name}
                      </span>
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </Link>

                {/* Promotional CTA Button */}
                {currentSlide.promotion?.isActive && (
                  <button
                    onClick={() => {
                      setSelectedSlide(currentSlide);
                      setIsDialogOpen(true);
                    }}
                    className="group relative bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black px-6 sm:px-8 lg:px-10 py-4 lg:py-5 rounded-xl lg:rounded-2xl text-base sm:text-lg font-bold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  >
                    <span className="flex items-center justify-center gap-2 lg:gap-3">
                      <span>Profiter de l&apos;offre</span>
                    </span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Content - Car Image (Desktop Only) */}
            <div className="relative transform transition-all duration-1000 delay-300 translate-x-0 opacity-100">
              {/* Promotional Section - Desktop Only */}
              {currentSlide.promotion?.isActive && (
                <div className="hidden sm:block relative bg-gradient-to-r from-red-600/90 to-orange-500/90 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-3 sm:p-4 mt-8 lg:mt-16 border-2 border-yellow-400/50 shadow-2xl transform transition-all duration-1000 animate-pulse hover:scale-105 hover:shadow-3xl hover:border-yellow-300">
                  {/* Star Badge */}
                  <div className="absolute -right-4 sm:-right-6 lg:-right-8">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 transform rotate-12 transition-all duration-700 animate-bounce hover:rotate-45 hover:scale-110">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-full h-full fill-yellow-400 stroke-yellow-500 stroke-1 drop-shadow-lg"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-black text-xs lg:text-xs uppercase tracking-tight leading-tight text-center px-1 lg:px-2">
                          Offre
                          <br />
                          Exceptionnelle
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-center justify-between mb-2 lg:mb-3">
                    <div className="transform transition-all duration-500 hover:scale-105">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <span className="text-white/70 line-through text-xs sm:text-sm transition-all duration-300 hover:text-white/90">
                          {currentSlide.promotion.originalPrice}
                        </span>
                        <span className="text-xl sm:text-2xl lg:text-3xl font-black text-yellow-300 transition-all duration-300 hover:text-yellow-200 hover:scale-110">
                          {currentSlide.promotion.discountedPrice}
                        </span>
                      </div>
                      <p className="text-white/90 text-sm sm:text-base lg:text-lg mt-1 transition-all duration-300 hover:text-yellow-300">
                        Économisez {currentSlide.promotion.discount}!
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="bg-white/20 rounded-full px-2 sm:px-3 py-1 transition-all duration-300 hover:bg-yellow-300/30 hover:scale-110 hover:rotate-3">
                        <span className="text-sm sm:text-base lg:text-lg font-black text-yellow-300 transition-all duration-300 hover:text-yellow-100">
                          -{currentSlide.promotion.discount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Benefits Section */}
                  <div className="bg-white/10 rounded-lg lg:rounded-xl p-2 lg:p-3 mb-2 lg:mb-3 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:border-yellow-300/50">
                    <h4 className="text-yellow-300 font-bold text-lg lg:text-xl mb-2 text-center transition-all duration-300 hover:text-yellow-200 hover:scale-105">
                      🎁 Avantages Inclus
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2 transition-all duration-300 hover:bg-white/20 hover:scale-102 hover:translate-x-1">
                        <div className="bg-green-500 rounded-full p-1 transition-all duration-300 hover:bg-green-400 hover:scale-110 hover:rotate-12">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-white font-semibold text-sm sm:text-base lg:text-xl transition-all duration-300 hover:text-yellow-300">
                          📄 Immatriculation Offerte
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2 transition-all duration-300 hover:bg-white/20 hover:scale-102 hover:translate-x-1">
                        <div className="bg-green-500 rounded-full p-1 transition-all duration-300 hover:bg-green-400 hover:scale-110 hover:rotate-12">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-white font-thin text-sm sm:text-base lg:text-xl transition-all duration-300 hover:text-yellow-300">
                          🔧 Entretien offert jusqu&apos;à 10 000 km
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Period */}
                  <div className="text-center">
                    <p className="text-white font-semibold text-sm sm:text-base lg:text-xl transition-all duration-300 hover:text-yellow-300 hover:scale-105">
                      📅 {currentSlide.promotion.period}
                    </p>
                  </div>
                </div>
              )}

              {/* Car Image Container - Desktop Only */}
              <div className="hidden sm:block relative w-full h-[50vh] sm:h-[60vh] lg:h-[75vh] rounded-none overflow-hidden">
                <div className="relative w-full h-full">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
                        index === currentSlideIndex
                          ? "translate-x-0 opacity-100"
                          : index === (currentSlideIndex + 1) % slides.length
                          ? "translate-x-full opacity-0"
                          : "opacity-0"
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.name}
                        fill
                        className="object-contain p-1 sm:p-2"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Offer Dialog */}
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setIsDialogOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl lg:rounded-2xl overflow-hidden max-w-4xl w-full max-h-[95vh] relative flex flex-col lg:flex-row overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white/80 backdrop-blur-sm rounded-full p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Left Side - Car Image */}
              <div className="lg:w-1/2 relative">
                <div className="aspect-square lg:aspect-auto lg:h-full relative min-h-[200px] sm:min-h-[300px]">
                  <Image
                    src={selectedSlide?.image || currentSlide.image}
                    alt={selectedSlide?.name || currentSlide.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">KPANDJI</h3>
                  <p className="text-base sm:text-lg">
                    {selectedSlide?.name || currentSlide.name}
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:w-1/2 p-4 sm:p-6 overflow-y-auto">
                <div className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    Profiter de l&apos;offre exceptionnelle
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Complétez le formulaire pour bénéficier de cette offre
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    ID du véhicule:{" "}
                    <span className="font-mono font-semibold">
                      {selectedSlide?.id || currentSlide.id}
                    </span>
                  </p>
                </div>

                {/* Success Message */}
                {isFormSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg z-20 flex items-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Votre demande a été envoyée avec succès!</span>
                  </motion.div>
                )}

                <form
                  className="space-y-3 sm:space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const data = {
                      vehicule: selectedSlide?.name || currentSlide.name,
                      prixPromotionnel:
                        selectedSlide?.promotion?.discountedPrice ||
                        currentSlide.promotion?.discountedPrice ||
                        "",
                      remise:
                        selectedSlide?.promotion?.discount ||
                        currentSlide.promotion?.discount ||
                        "",
                      name: formData.get("name") as string,
                      email: formData.get("email") as string,
                      phone: formData.get("phone") as string,
                      message: (formData.get("message") as string) || "",
                    };

                    const result = await createOffreExceptionnelle(data);

                    if (result.success) {
                      setIsFormSubmitted(true);
                      form.reset();
                      setTimeout(() => {
                        setIsDialogOpen(false);
                        setIsFormSubmitted(false);
                      }, 1500);
                    }
                  }}
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Véhicule
                    </label>
                    <input
                      type="text"
                      value={selectedSlide?.name || currentSlide.name}
                      readOnly
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prix promotionnel
                    </label>
                    <input
                      type="text"
                      value={
                        selectedSlide?.promotion?.discountedPrice ||
                        currentSlide.promotion?.discountedPrice
                      }
                      readOnly
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Remise
                    </label>
                    <input
                      type="text"
                      value={`-${
                        selectedSlide?.promotion?.discount ||
                        currentSlide.promotion?.discount
                      }`}
                      readOnly
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg bg-green-50 text-green-700 font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Des questions sur l'offre..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsDialogOpen(false)}
                      className="w-full sm:flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={isFormSubmitted}
                      className="w-full sm:flex-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all disabled:opacity-50"
                    >
                      {isFormSubmitted ? "Envoyé!" : "Profiter de l'offre"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
