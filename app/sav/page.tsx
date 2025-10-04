"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const SavPage = () => {
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedPartner, setSelectedPartner] = useState<number | null>(null);
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  const cities = [
    { id: "all", label: "Toutes les villes", icon: "" },
    { id: "abidjan", label: "Abidjan", icon: "" },
    { id: "bouake", label: "Bouaké", icon: "" },
    { id: "sanPedro", label: "San-Pedro", icon: "" },
  ];

  const partners = [
    {
      id: 1,
      name: "AutoFix Pro",
      city: "abidjan",
      address: "Abidjan, Yopougon",
      phone: "+225 01 44 10 00 00 \n +225 25 22 01 86 72",
      image: "/garage1.jpeg",
      badge: "PREMIUM",
      rating: 4.8,
      shortDesc: "Spécialiste mécanique et carrosserie",
      services: [
        "Réparation mécanique",
        "Carrosserie",
        "Peinture",
        "Diagnostic",
      ],
      hours: "Lun-Ven: 8h-18h, Sam: 9h-17h",
      colors: ["#3b82f6", "#2563eb", "#1d4ed8"],
    },
    {
      id: 2,
      name: "Garage Central",
      city: "bouake",
      address: "Bouaké quartier Air-France",
      phone: "+225 01 44 10 00 00 \n +225 25 22 01 86 72",
      image: "/garage2.jpg",
      badge: "CERTIFIÉ",
      rating: 4.6,
      shortDesc: "Expert diagnostic électronique",
      services: [
        "Diagnostic électronique",
        "Révision",
        "Pneumatiques",
        "Entretien",
      ],
      hours: "Lun-Ven: 7h30-19h, Sam: 8h-16h",
      colors: ["#10b981", "#059669", "#047857"],
    },
    {
      id: 3,
      name: "Méca Service",
      city: "sanPedro",
      address: "San-pédro Zone portuaire",
      phone: "+225 01 44 10 00 00 \n +225 25 22 01 86 72",
      image: "/garage3.jpg",
      badge: "EXPERT",
      rating: 4.7,
      shortDesc: "Réparation toutes marques",
      services: [
        "Réparation toutes marques",
        "Climatisation",
        "Freinage",
        "Transmission",
      ],
      hours: "Lun-Ven: 8h-18h30",
      colors: ["#f59e0b", "#d97706", "#b45309"],
    },
  ];

  const filteredPartners =
    selectedCity === "all"
      ? partners
      : partners.filter((partner) => partner.city === selectedCity);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 25,
      },
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: { type: "spring" as const, stiffness: 400, damping: 25 },
    },
  };

  // Add state management like equipments page does
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      x: number[];
      y: number[];
      scale: number[];
      opacity: number[];
      duration: number;
    }>
  >([]);

  useEffect(() => {
    setIsMounted(true);
    const newParticles = Array.from({ length: 25 }, () => ({
      x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
      y: [
        Math.random() * window.innerHeight,
        Math.random() * window.innerHeight,
      ],
      scale: [0, Math.random() * 2 + 1, 0],
      opacity: [0, 0.6, 0],
      duration: Math.random() * 15 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Animated Background - Client Only */}
      {isMounted && particles.length > 0 && (
        <motion.div
          style={{ y: backgroundY }}
          className="fixed inset-0 overflow-hidden pointer-events-none"
        >
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              initial={{ x: particle.x[0], y: particle.y[0], scale: 0 }}
              animate={{
                x: particle.x,
                y: particle.y,
                scale: particle.scale,
                opacity: particle.opacity,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <motion.div
          ref={heroRef}
          style={{ y: heroY }}
          className="text-center mb-16"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 100, scale: 0.8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    duration: 1.2,
                  },
                },
              }}
              className="text-6xl md:text-8xl font-black mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500">
                SERVICE 24/7
              </span>
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.8 },
                },
              }}
              className="relative"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                APRÈS-VENTE KPANDJI
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Trouvez un partenaire agréé près de chez vous pour
                l&apos;entretien et la réparation de votre véhicule
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* City Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {cities.map((city, index) => (
            <motion.button
              key={city.id}
              custom={index}
              variants={{
                hidden: { opacity: 0, x: -50, scale: 0.9 },
                visible: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.1,
                  },
                },
              }}
              onClick={() => setSelectedCity(city.id)}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 30px rgba(59,130,246,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-500 ${
                selectedCity === city.id
                  ? "bg-gradient-to-r from-blue-400 to-cyan-500 text-black shadow-lg shadow-blue-400/25"
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20"
              }`}
            >
              <motion.span
                animate={{ rotate: selectedCity === city.id ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {city.icon}
              </motion.span>
              <span>{city.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredPartner(partner.id)}
                onHoverEnd={() => setHoveredPartner(null)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                  {/* Badge & Rating */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                    <motion.span
                      className="px-3 py-1 rounded-full text-xs font-bold text-black"
                      style={{ backgroundColor: partner.colors[0] }}
                      animate={{
                        boxShadow: [
                          `0 0 0px ${partner.colors[0]}`,
                          `0 0 20px ${partner.colors[0]}50`,
                          `0 0 0px ${partner.colors[0]}`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {partner.badge}
                    </motion.span>

                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-lg font-bold text-white">
                        {partner.rating}
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <motion.div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at center, ${partner.colors[0]}, transparent 70%)`,
                      }}
                      animate={{
                        scale: hoveredPartner === partner.id ? [1, 1.2, 1] : 1,
                        opacity:
                          hoveredPartner === partner.id ? [0.2, 0.4, 0.2] : 0.2,
                      }}
                      transition={{ duration: 1.5 }}
                    />

                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: partner.colors[0] }}
                      animate={{
                        textShadow:
                          hoveredPartner === partner.id
                            ? `0 0 20px ${partner.colors[0]}50`
                            : "0 0 0px transparent",
                      }}
                    >
                      {partner.name}
                    </motion.h3>

                    <p className="text-gray-300 mb-2">{partner.shortDesc}</p>

                    {/* Address & Phone */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-gray-400 text-sm">
                          {partner.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <div className="flex flex-col">
                          <p className="text-gray-300 text-sm">
                            +225 01 44 10 00 00
                          </p>
                          <p className="text-gray-300 text-sm">
                            +225 01 01 04 77 03
                          </p>
                          <p className="text-gray-300 text-sm">
                            +225 07 48 69 36 10
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {partner.services.slice(0, 3).map((service, i) => (
                        <motion.span
                          key={i}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: `${partner.colors[0]}20`,
                          }}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20"
                        >
                          {service}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDialog(true)}
                        className="flex-1 py-3 rounded-xl font-semibold"
                        style={{
                          background: `linear-gradient(135deg, ${partner.colors[0]}, ${partner.colors[1]})`,
                          color: "black",
                        }}
                      >
                        Prendre RDV
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={{
                      background:
                        hoveredPartner === partner.id
                          ? `linear-gradient(135deg, ${partner.colors[0]}10, ${partner.colors[1]}10)`
                          : "transparent",
                      boxShadow:
                        hoveredPartner === partner.id
                          ? `0 20px 60px ${partner.colors[0]}30`
                          : "0 0 0px transparent",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 p-12">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1), transparent 70%)",
                  "radial-gradient(circle at 80% 50%, rgba(59,130,246,0.1), transparent 70%)",
                  "radial-gradient(circle at 50% 80%, rgba(59,130,246,0.1), transparent 70%)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">
                Besoin d&apos;aide pour trouver un partenaire ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Notre service client est à votre disposition pour vous orienter
                vers le partenaire le plus proche de chez vous
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(59,130,246,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-500 text-black font-bold rounded-xl text-lg"
                >
                  Appeler le service client
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(59,130,246,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-xl text-lg"
                >
                  Nous contacter
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dialog Modal */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowDialog(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <svg
                    className="w-8 h-8 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  Contactez-nous
                </h3>

                <p className="text-lg text-gray-300 mb-6">Appelez-nous au</p>

                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-8"
                >
                  +225 01 44 10 00 00 
                </motion.div>

                
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-8"
                >
                  +225 01 01 04 77 03 
                </motion.div>

                
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-8"
                >
                  +225 01 44 10 00 00 
                </motion.div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowDialog(false)}
                    className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-400 to-cyan-500 text-black font-semibold rounded-xl"
                  >
                    Fermer
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SavPage;
