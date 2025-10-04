"use client";

import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { createReservation } from "@/lib/actions/reservations";

const DerniereSortie = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Array<{left: number, top: number, delay: number, duration: number}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Refs for viewport animations
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const tabsRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  // Viewport detection
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const imageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.2 });
  const tabsInView = useInView(tabsRef, { once: true, amount: 0.5 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.8 });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] as const }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] as const }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] as const }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.6, 0.01, 0.05, 0.9] as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.9] as const }
    }
  };

  useEffect(() => {
    setMounted(true);
    setIsVisible(true);
    
    // Generate particles only on client side to avoid hydration mismatch
    setParticles([...Array(30)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    })));

    // Advanced mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const content = useMemo(() => ({
    description: {
      title: "Description",
      text: "Découvrez notre dernière sortie avec des caractéristiques exceptionnelles et un design moderne qui redéfinit l'expérience de conduite. Apparence unique avec plus d'attention pour la conception dynamique. Un chef-d'œuvre d'expert avec une philosophie de conception simple et puissante. Taille pénétrante, ingénieusement fusionnée avec une apparence robuste et des lignes douces. Phare à LED, frappant et lumineux.",
      image: "/derniers/lathaye.png",
      features: ["Design Moderne", "Performance", "Confort"],
    },
    interieur: {
      title: "Intérieur", 
      text: "Matériau unique et vous offre plus de plaisir pour des configurations diversifiées Écran tactile HD de 10,25 pouces, améliore la réalité de la perception visuelle et le plaisir de conduire. Volant multifonctionnel en cuir, toucher de haute qualité, fonctionnement flexible. Toit ouvrant panoramique surdimensionné, vue large, profitez de la beauté de la nature..",
      image: "/derniers/intlat1.png",
      features: ["Matériaux Premium", "Technologie", "Espace"],
    },
    arriere: {
      title: "Arrière",
      text: "Un design arrière élégant et aérodynamique qui combine performance et esthétique, avec des détails soignés et des finitions de qualité supérieure. Véhicule confortable et fonctionnel avec des accessoires pratiques pour la vie quotidienne. Finitions de qualité supérieure et des détails soignés.",
      image: "/derniers/backlat.png",
      features: ["Aérodynamique", "Élégance", "Finitions"],
    },
    moteur: {
      title: "Moteur",
      text: "Intelligence unique. Moteur à injection directe dans le cylindre 2.0T GDI. Pression d'injection de 350 bars, combustion efficace. 221 ch, couple de 385 Nm. Accélérez jusqu'à 100 km en 8 secondes. Transmission à 8 vitesses AT. La meilleure transmission 8AT de quatrième génération au monde. Technologie allemande de convertisseur de couple hydraulique ZF. La durée de vie peut atteindre 300 000 kilomètres",
      image: "/derniers/lathaye.png", // Changed from moteurlat.png to existing image
      features: ["Puissance", "Efficacité", "Consommation"],
    },
  }), []);

  // Tab cycling effect - Updated to 5 seconds
  useEffect(() => {
    const tabs = Object.keys(content);
    let currentIndex = 0;
    
    const cycleTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % tabs.length;
      setActiveTab(tabs[currentIndex]);
    }, 5000);

    return () => clearInterval(cycleTimer);
  }, [content]);

  // Add dialog open handler
  const handleReservationClick = () => {
    setIsDialogOpen(true);
  };

  // Add form submission handler
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await createReservation({
        voiture: formData.get("voiture") as string,
        name: formData.get("name") as string,
        prenoms: formData.get("prenoms") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        date: formData.get("date") as string,
        message: formData.get("message") as string || "",
      });

      if (result.success) {
        setIsFormSubmitted(true);
        // Close dialog after 2 seconds
        setTimeout(() => {
          setIsFormSubmitted(false);
          setIsDialogOpen(false);
        }, 2000);
      } else {
        console.error("Failed to create reservation:", result.error);
        // Handle error - you might want to show an error message
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error - you might want to show an error message
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen py-8 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ultra Premium Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-800/95"></div>
      
      {/* Dynamic Aurora Background */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute w-full h-full bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-purple-500/20 animate-aurora-1"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute w-full h-full bg-gradient-to-l from-blue-500/15 via-cyan-500/10 to-amber-500/15 animate-aurora-2"
          style={{ transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)` }}
        ></div>
      </div>

      {/* Floating Holographic Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 animate-grid-flow" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}></div>
      </div>

      {/* Morphing Plasma Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-amber-500/30 via-orange-500/15 to-transparent rounded-full blur-3xl animate-plasma-morph"
          style={{
            top: '10%',
            right: '15%',
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-radial from-purple-500/25 via-blue-500/15 to-transparent rounded-full blur-3xl animate-plasma-morph-reverse"
          style={{
            bottom: '15%',
            left: '10%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        ></div>
        <div 
          className="absolute w-60 h-60 bg-gradient-radial from-cyan-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl animate-plasma-drift"
          style={{
            top: '60%',
            right: '60%',
            transform: `translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)`,
          }}
        ></div>
      </div>

      {/* Enhanced Particle System with Energy Trails */}
      {mounted && particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute group"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
              }}
            >
              <div className="relative">
                <div className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-particle-float">
                  <div className="absolute inset-0 bg-cyan-400/60 rounded-full animate-pulse"></div>
                </div>
                <div 
                  className="absolute -inset-2 bg-gradient-to-r from-cyan-400/30 to-transparent rounded-full animate-energy-ripple"
                  style={{ animationDelay: `${particle.delay}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Ultra Premium Section Header */}
        <motion.div 
          ref={heroRef}
          variants={fadeInUp}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          className={`text-center mb-8 sm:mb-12 lg:mb-20 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
          <div className="inline-block relative">
            {/* Holographic Frame */}
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-3xl animate-holographic-frame blur-sm"></div>
            
            {/* Main Title with Advanced Text Effects */}
            <motion.h2 
              variants={scaleIn}
              className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-4 sm:mb-6 lg:mb-8 tracking-tight overflow-hidden"
            >
              <span className="inline-block bg-gradient-to-r from-white via-cyan-200 to-amber-200 bg-clip-text text-transparent animate-text-shimmer">
                Dernière Sortie
              </span>
              {/* Premium Text Glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-white/40 to-amber-400/20 bg-clip-text text-transparent blur-sm animate-text-glow"></span>
            </motion.h2>
            
            {/* Ultra Enhanced Underline System */}
            <div className="w-20 sm:w-24 lg:w-32 h-1 flex justify-center space-x-1 relative overflow-hidden">
              <div className="w-full h-1 bg-gradient-to-r from-amber-800 via-orange-500 to-orange-400 rounded-full transform animate-line-draw relative">
                {/* Quantum Energy Flow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full animate-quantum-flow"></div>
                
                {/* DNA Helix Effect */}
                <div className="absolute -top-1 left-0 w-full h-3 flex items-center justify-center">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-dna-strand-1"></div>
                  <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent animate-dna-strand-2"></div>
                </div>
                
                {/* Orbiting Particles */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-orbit-particle"
                    style={{ 
                      animationDelay: `${i * 0.4}s`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.p 
            variants={fadeInUp}
            className={`text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-8 sm:mt-12 lg:mt-16 px-4 transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block animate-text-wave">
              Découvrez l&apos;excellence automobile avec notre dernière création
            </span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Enhanced Image Section with tab transition */}
          <motion.div 
            ref={imageRef}
            variants={fadeInLeft}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            className={`order-2 lg:order-1 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.3 }}
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${mousePosition.y * 0.01}deg)`,
              }}
            >
              {/* Cyberpunk Frame System */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-amber-500/20 rounded-3xl animate-cyberpunk-frame blur-sm"></div>
              
              {/* Enhanced Image Container with smooth transitions */}
              <div className="relative w-full h-[240px] sm:h-[260px] md:h-[290px] lg:h-[320px] xl:h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-1000 group-hover:scale-105">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={content[activeTab as keyof typeof content].image}
                    alt={content[activeTab as keyof typeof content].title}
                    fill
                    className="object-contain transition-all duration-1000 group-hover:scale-110 animate-subtle-float "
                  />
                </motion.div>
                
                {/* Enhanced transition overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-1000 group-hover:opacity-90"></div>
                
                
                
                {/* Holographic Scan Lines */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-scan-line-horizontal"></div>
                  <div className="absolute h-full w-1 bg-gradient-to-b from-transparent via-amber-400/80 to-transparent animate-scan-line-vertical"></div>
                </div>
                
                {/* Corner Targeting System */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400 animate-target-lock opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 animate-target-lock opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400 animate-target-lock opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400 animate-target-lock opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300"></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div 
            ref={contentRef}
            variants={fadeInRight}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className={`order-1 lg:order-2 space-y-6 sm:space-y-8 lg:space-y-12 transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
          >
            
            {/* Neural Network Background */}
            <div className="absolute -inset-8 opacity-20 pointer-events-none">
              <svg className="w-full h-full animate-neural-pulse" viewBox="0 0 400 300">
                {[...Array(15)].map((_, i) => (
                  <g key={i}>
                    <circle
                      cx={50 + (i % 5) * 80}
                      cy={50 + Math.floor(i / 5) * 80}
                      r="2"
                      fill="rgba(34, 197, 94, 0.8)"
                      className="animate-node-glow"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                    {i % 5 < 4 && (
                      <line
                        x1={50 + (i % 5) * 80}
                        y1={50 + Math.floor(i / 5) * 80}
                        x2={130 + (i % 5) * 80}
                        y2={50 + Math.floor(i / 5) * 80}
                        stroke="rgba(34, 197, 94, 0.4)"
                        strokeWidth="1"
                        className="animate-data-flow"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    )}
                  </g>
                ))}
              </svg>
            </div>

            {/* Enhanced Tab Navigation with auto-cycle indicators */}
            <motion.div 
              ref={tabsRef}
              variants={staggerContainer}
              initial="hidden"
              animate={tabsInView ? "visible" : "hidden"}
              className="space-y-4 sm:space-y-6 relative z-10"
            >
              <motion.h3 
                variants={staggerItem}
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 mb-4 sm:mb-6 animate-glow-text"
              >
                Explorez la KPANDJI LATHAYE
              </motion.h3>
              <div className="hidden sm:flex sm:flex-row flex-wrap gap-2 sm:gap-3 lg:gap-4">
                {Object.keys(content).map((key) => (
                  <motion.button
                    key={key}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-2 sm:px-4 sm:py-2 lg:px-5 lg:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-1000 transform relative overflow-hidden group ${
                      activeTab === key
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-2xl shadow-amber-500/50 animate-active-tab scale-105"
                        : "bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 border border-white/20 hover:animate-tab-hover"
                    }`}
                  >
                    <span className="relative z-10">
                      {content[key as keyof typeof content].title}
                    </span>
                    
                    {/* Auto-cycle progress indicator */}
                    {activeTab === key && (
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 animate-tab-progress"></div>
                    )}
                    
                    {/* Liquid Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-liquid-flow"></div>
                    
                    {/* Energy Ripple */}
                    {activeTab === key && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-energy-sweep"></div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Content Display with smooth transitions */}
            <motion.div 
              className="space-y-4 sm:space-y-6 lg:space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="animate-content-reveal"
              >
                <motion.h4 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 transition-all duration-1000 hover:animate-title-glow transform translate-y-0 opacity-100 animate-slide-in-from-right"
                >
                  {content[activeTab as keyof typeof content].title}
                </motion.h4>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed transition-all duration-1000 transform translate-y-0 opacity-100 animate-fade-in-delayed"
                >
                  {content[activeTab as keyof typeof content].text}
                </motion.p>
              </motion.div>

              {/* Enhanced Feature Cards with stagger animation */}
              <motion.div 
                ref={featuresRef}
                variants={staggerContainer}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                className=" hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
              >
                {content[activeTab as keyof typeof content].features.map(
                  (feature, index) => (
                    <motion.div
                      key={`${activeTab}-${index}`}
                      variants={staggerItem}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(34, 211, 238, 0.3)"
                      }}
                      className="bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10 transition-all duration-700 group hover:animate-card-levitate relative overflow-hidden"
                    >
                      {/* Card Energy Field */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-card-energy"></div>
                      
                      <div className="text-center relative z-10">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover:animate-icon-quantum transition-all duration-500">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-black rounded-full animate-inner-glow"></div>
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-white group-hover:text-cyan-300 transition-colors duration-500">
                          {feature}
                        </div>
                      </div>
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Ultra Premium CTA */}
            <motion.div 
              ref={ctaRef}
              variants={fadeInUp}
              initial="hidden"
              animate={ctaInView ? "visible" : "hidden"}
              className="space-y-4 sm:space-y-6"
            >
              <motion.button 
                onClick={handleReservationClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.8), 0 0 60px rgba(245, 158, 11, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg font-bold transition-all duration-700 transform overflow-hidden w-full sm:w-auto hover:animate-cta-supreme"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                  <span>Réserver maintenant</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-arrow-quantum transition-transform duration-500"
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
                
                {/* Multi-layer Energy Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-cta-energy"></div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Reservation Dialog */}
      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsDialogOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full h-[95%] relative flex flex-col md:flex-row overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 bg-white/80 backdrop-blur-sm rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Left Side - Car Image */}
              <div className="md:w-1/2 relative">
                <div className="aspect-square md:aspect-auto md:h-full relative">
                  <Image
                    src="/derniers/lathaye.png"
                    alt="KPANDJI Lathaye"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">KPANDJI</h3>
                  <p className="text-lg">Lathaye</p>
                </div>
              </div>
              
              {/* Right Side - Form */}
              <div className="md:w-1/2 p-6 overflow-y-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Réserver la Lathaye</h2>
                  <p className="text-gray-600">Complétez le formulaire pour réserver votre KPANDJI Lathaye</p>
                </div>
                
                {/* Success Message */}
                {isFormSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg z-20 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Votre demande de réservation a été envoyée avec succès!</span>
                  </motion.div>
                )}

                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Véhicule</label>
                    <input
                      type="text"
                      name="voiture"
                      value="Lathaye"
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénoms</label>
                    <input
                      type="text"
                      name="prenoms"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Vos prénoms"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date souhaitée</label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Des demandes particulières..."
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Annuler
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || isFormSubmitted}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting && (
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      )}
                      {isSubmitting ? "Envoi..." : isFormSubmitted ? "Envoyé!" : "Réserver"}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Ultra Premium Animation System */
        
        /* New Auto-Cycling Animations - Updated to 5 seconds */
        @keyframes tab-progress {
          0% { 
            width: 0%;
            opacity: 0.6;
          }
          100% { 
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes slide-in-from-right {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-stagger {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes image-transition {
          0% {
            opacity: 0;
            transform: scale(0.95);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        /* Background Aurora Effects */
        @keyframes aurora-1 {
          0%, 100% { 
            transform: translateX(-50%) translateY(-50%) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          25% { 
            transform: translateX(-30%) translateY(-40%) rotate(90deg) scale(1.1);
            opacity: 0.7;
          }
          50% { 
            transform: translateX(0%) translateY(0%) rotate(180deg) scale(0.9);
            opacity: 0.5;
          }
          75% { 
            transform: translateX(30%) translateY(40%) rotate(270deg) scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes aurora-2 {
          0%, 100% { 
            transform: translateX(50%) translateY(50%) rotate(360deg) scale(1);
            opacity: 0.3;
          }
          33% { 
            transform: translateX(20%) translateY(-20%) rotate(240deg) scale(1.2);
            opacity: 0.6;
          }
          66% { 
            transform: translateX(-20%) translateY(20%) rotate(120deg) scale(0.8);
            opacity: 0.4;
          }
        }
        
        /* Holographic Grid */
        @keyframes grid-flow {
          0%, 100% { 
            transform: translateX(0) translateY(0) rotate(0deg);
            opacity: 0.1;
          }
          50% { 
            transform: translateX(30px) translateY(-20px) rotate(2deg);
            opacity: 0.3;
          }
        }
        
        /* Plasma Morphing */
        @keyframes plasma-morph {
          0%, 100% { 
            border-radius: 50% 40% 30% 70%;
            transform: rotate(0deg) scale(1);
            filter: hue-rotate(0deg);
          }
          25% { 
            border-radius: 30% 60% 70% 40%;
            transform: rotate(90deg) scale(1.2);
            filter: hue-rotate(90deg);
          }
          50% { 
            border-radius: 70% 30% 50% 60%;
            transform: rotate(180deg) scale(0.8);
            filter: hue-rotate(180deg);
          }
          75% { 
            border-radius: 40% 50% 60% 30%;
            transform: rotate(270deg) scale(1.1);
            filter: hue-rotate(270deg);
          }
        }
        
        @keyframes plasma-morph-reverse {
          0%, 100% { 
            border-radius: 60% 30% 70% 40%;
            transform: rotate(360deg) scale(1);
            filter: hue-rotate(360deg);
          }
          33% { 
            border-radius: 50% 70% 30% 60%;
            transform: rotate(240deg) scale(0.9);
            filter: hue-rotate(240deg);
          }
          66% { 
            border-radius: 30% 40% 60% 70%;
            transform: rotate(120deg) scale(1.3);
            filter: hue-rotate(120deg);
          }
        }
        
        @keyframes plasma-drift {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.2;
          }
          25% { 
            transform: translate(40px, -30px) rotate(90deg) scale(1.1);
            opacity: 0.4;
          }
          50% { 
            transform: translate(-20px, 40px) rotate(180deg) scale(0.9);
            opacity: 0.3;
          }
          75% { 
            transform: translate(-40px, -20px) rotate(270deg) scale(1.05);
            opacity: 0.5;
          }
        }
        
        /* Enhanced Particle System */
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-15px) rotate(90deg) scale(1.2);
            opacity: 1;
          }
          50% { 
            transform: translateY(-8px) rotate(180deg) scale(0.8);
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-20px) rotate(270deg) scale(1.1);
            opacity: 0.9;
          }
        }
        
        @keyframes energy-ripple {
          0% { 
            transform: scale(0.5);
            opacity: 1;
          }
          100% { 
            transform: scale(3);
            opacity: 0;
          }
        }
        
        /* Premium Text Effects */
        @keyframes text-shimmer {
          0% { 
            background-position: -200% center;
            filter: brightness(1);
          }
          50% { 
            filter: brightness(1.2);
          }
          100% { 
            background-position: 200% center;
            filter: brightness(1);
          }
        }
        
        @keyframes text-glow {
          0%, 100% { 
            opacity: 0.3;
            filter: blur(4px);
          }
          50% { 
            opacity: 0.7;
            filter: blur(2px);
          }
        }
        
        @keyframes holographic-frame {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.1;
            filter: hue-rotate(0deg);
          }
          50% { 
            transform: scale(1.02) rotate(1deg);
            opacity: 0.3;
            filter: hue-rotate(180deg);
          }
        }
        
        /* Quantum Line Effects */
        @keyframes quantum-flow {
          0% { 
            transform: translateX(-100%) skewX(-15deg);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(200%) skewX(-15deg);
            opacity: 0;
          }
        }
        
        @keyframes dna-strand-1 {
          0% { 
            transform: rotateX(0deg) translateZ(0);
          }
          100% { 
            transform: rotateX(360deg) translateZ(15px);
          }
        }
        
        @keyframes dna-strand-2 {
          0% { 
            transform: rotateX(180deg) translateZ(0);
          }
          100% { 
            transform: rotateX(540deg) translateZ(-15px);
          }
        }
        
        @keyframes orbit-particle {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(25px) rotate(0deg);
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(25px) rotate(-360deg);
          }
        }
        
        @keyframes text-wave {
          0%, 100% { 
            transform: translateY(0);
          }
          25% { 
            transform: translateY(-3px);
          }
          50% { 
            transform: translateY(0);
          }
          75% { 
            transform: translateY(3px);
          }
        }
        
        /* Image Enhancement Effects */
        @keyframes cyberpunk-frame {
          0%, 100% { 
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
            filter: hue-rotate(0deg);
          }
          50% { 
            transform: scale(1.01) rotate(0.5deg);
            opacity: 0.6;
            filter: hue-rotate(180deg);
          }
        }
        
        @keyframes subtle-float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-8px);
          }
        }
        
        @keyframes scan-line-horizontal {
          0% { 
            top: -4px;
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            top: 100%;
            opacity: 0;
          }
        }
        
        @keyframes scan-line-vertical {
          0% { 
            left: -4px;
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            left: 100%;
            opacity: 0;
          }
        }
        
        @keyframes target-lock {
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
            filter: drop-shadow(0 0 5px rgba(34, 211, 238, 0.5));
          }
          50% { 
            opacity: 1;
            transform: scale(1.1);
            filter: drop-shadow(0 0 15px rgba(34, 211, 238, 0.8));
          }
        }
        
        @keyframes energy-pulse {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.5));
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.02);
            filter: drop-shadow(0 0 30px rgba(34, 211, 238, 0.8));
          }
        }
        
        /* Orbiting Data Elements */
        @keyframes orbit-data-1 {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
        
        @keyframes orbit-data-2 {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(180px) rotate(0deg);
          }
          100% { 
            transform: translate(-50%, -50%) rotate(-360deg) translateX(180px) rotate(360deg);
          }
        }
        
        @keyframes orbit-data-3 {
          0% { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(240px) rotate(0deg);
          }
          100% { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(240px) rotate(-360deg);
          }
        }
        
        @keyframes float-1 {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translate(-10px, -15px) rotate(180deg) scale(1.1);
            opacity: 0.4;
          }
        }
        
        @keyframes float-2 {
          0%, 100% { 
            transform: translate(0, 0) rotate(360deg) scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: translate(15px, 10px) rotate(180deg) scale(0.9);
            opacity: 0.5;
          }
        }
        
        /* Neural Network Effects */
        @keyframes neural-pulse {
          0%, 100% { 
            opacity: 0.2;
          }
          50% { 
            opacity: 0.8;
          }
        }
        
        @keyframes node-glow {
          0%, 100% { 
            transform: scale(1);
            fill: rgba(34, 197, 94, 0.8);
            filter: drop-shadow(0 0 3px rgba(34, 197, 94, 0.5));
          }
          50% { 
            transform: scale(1.5);
            fill: rgba(34, 197, 94, 1);
            filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.8));
          }
        }
        
        @keyframes data-flow {
          0% { 
            stroke-dasharray: 0 100;
            stroke: rgba(34, 197, 94, 0.4);
          }
          50% { 
            stroke: rgba(34, 197, 94, 0.8);
          }
          100% { 
            stroke-dasharray: 100 0;
            stroke: rgba(34, 197, 94, 0.4);
          }
        }
        
        @keyframes glow-text {
          0%, 100% { 
            text-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
          }
          50% { 
            text-shadow: 0 0 20px rgba(245, 158, 11, 0.8), 0 0 30px rgba(245, 158, 11, 0.6);
          }
        }
        
        /* Tab System */
        @keyframes active-tab {
          0%, 100% { 
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(245, 158, 11, 0.5), 0 0 40px rgba(245, 158, 11, 0.3);
          }
          50% { 
            transform: scale(1.08);
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.8), 0 0 60px rgba(245, 158, 11, 0.5);
          }
        }
        
        @keyframes tab-hover {
          0%, 100% { 
            transform: scale(1);
            filter: brightness(1);
          }
          50% { 
            transform: scale(1.02);
            filter: brightness(1.1);
          }
        }
        
        @keyframes liquid-flow {
          0%, 100% { 
            border-radius: 16px;
            transform: scale(0.8) rotate(0deg);
          }
          50% { 
            border-radius: 32px;
            transform: scale(1.2) rotate(180deg);
          }
        }
        
        @keyframes energy-sweep {
          0% { 
            transform: translateX(-100%) skewX(-20deg);
            opacity: 0;
          }
          50% { 
            opacity: 1;
          }
          100% { 
            transform: translateX(200%) skewX(-20deg);
            opacity: 0;
          }
        }
        
        /* Content Effects */
        @keyframes content-reveal {
          0% { 
            transform: translateY(20px);
            opacity: 0;
            filter: blur(5px);
          }
          100% { 
            transform: translateY(0);
            opacity: 1;
            filter: blur(0px);
          }
        }
        
        @keyframes title-glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(245, 158, 11, 0.5);
            transform: scale(1);
          }
          50% { 
            text-shadow: 0 0 30px rgba(245, 158, 11, 0.8), 0 0 50px rgba(245, 158, 11, 0.6);
            transform: scale(1.02);
          }
        }
        
        /* Feature Cards */
        @keyframes card-levitate {
          0%, 100% { 
            transform: translateY(0) rotateX(0deg);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          50% { 
            transform: translateY(-8px) rotateX(5deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 20px rgba(34, 211, 238, 0.3);
          }
        }
        
        @keyframes card-energy {
          0%, 100% { 
            transform: scale(0.8) rotate(0deg);
            opacity: 0;
          }
          50% { 
            transform: scale(1.2) rotate(180deg);
            opacity: 1;
          }
        }
        
        @keyframes icon-quantum {
          0%, 100% { 
            transform: rotate(0deg) scale(1);
            filter: hue-rotate(0deg);
          }
          25% { 
            transform: rotate(90deg) scale(1.2);
            filter: hue-rotate(90deg);
          }
          50% { 
            transform: rotate(180deg) scale(0.8);
            filter: hue-rotate(180deg);
          }
          75% { 
            transform: rotate(270deg) scale(1.1);
            filter: hue-rotate(270deg);
          }
        }
        
        @keyframes inner-glow {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
            box-shadow: inset 0 0 5px rgba(245, 158, 11, 0.5);
          }
          50% { 
            transform: scale(0.7);
            opacity: 0.7;
            box-shadow: inset 0 0 15px rgba(245, 158, 11, 0.8);
          }
        }
        
        /* CTA Button */
        @keyframes cta-supreme {
          0%, 100% { 
            transform: scale(1.05);
            box-shadow: 
              0 0 20px rgba(245, 158, 11, 0.5),
              0 0 40px rgba(245, 158, 11, 0.3),
              0 20px 40px rgba(0, 0, 0, 0.2);
          }
          50% { 
            transform: scale(1.08);
            box-shadow: 
              0 0 30px rgba(245, 158, 11, 0.8),
              0 0 60px rgba(245, 158, 11, 0.5),
              0 0 80px rgba(34, 211, 238, 0.3),
              0 30px 60px rgba(0, 0, 0, 0.3);
          }
        }
        
        @keyframes arrow-quantum {
          0%, 100% { 
            transform: translateX(2px) rotate(0deg);
          }
          25% { 
            transform: translateX(6px) rotate(5deg);
          }
          50% { 
            transform: translateX(10px) rotate(0deg);
          }
          75% { 
            transform: translateX(6px) rotate(-5deg);
          }
        }
        
        @keyframes cta-energy {
          0%, 100% { 
            transform: scale(0.8) rotate(0deg);
            opacity: 0;
          }
          50% { 
            transform: scale(1.3) rotate(180deg);
            opacity: 1;
          }
        }
        
        /* Animation Classes */
        .animate-aurora-1 { animation: aurora-1 20s ease-in-out infinite; }
        .animate-aurora-2 { animation: aurora-2 25s ease-in-out infinite; }
        .animate-grid-flow { animation: grid-flow 15s ease-in-out infinite; }
        .animate-plasma-morph { animation: plasma-morph 18s ease-in-out infinite; }
        .animate-plasma-morph-reverse { animation: plasma-morph-reverse 22s ease-in-out infinite; }
        .animate-plasma-drift { animation: plasma-drift 16s ease-in-out infinite; }
        .animate-particle-float { animation: particle-float 4s ease-in-out infinite; }
        .animate-energy-ripple { animation: energy-ripple 2s ease-out infinite; }
        .animate-text-shimmer { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
          background-size: 200% 100%;
          animation: text-shimmer 3s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-holographic-frame { animation: holographic-frame 4s ease-in-out infinite; }
        .animate-line-draw { animation: line-draw 2s ease-out; }
        .animate-quantum-flow { animation: quantum-flow 3s ease-in-out infinite 1s; }
        .animate-dna-strand-1 { animation: dna-strand-1 4s linear infinite; }
        .animate-dna-strand-2 { animation: dna-strand-2 4s linear infinite; }
        .animate-orbit-particle { animation: orbit-particle 3s linear infinite; }
        .animate-text-wave { animation: text-wave 4s ease-in-out infinite; }
        .animate-cyberpunk-frame { animation: cyberpunk-frame 5s ease-in-out infinite; }
        .animate-subtle-float { animation: subtle-float 6s ease-in-out infinite; }
        .animate-scan-line-horizontal { animation: scan-line-horizontal 3s linear infinite; }
        .animate-scan-line-vertical { animation: scan-line-vertical 4s linear infinite; }
        .animate-target-lock { animation: target-lock 1.5s ease-in-out infinite; }
        .animate-energy-pulse { animation: energy-pulse 2s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
        .animate-neural-pulse { animation: neural-pulse 4s ease-in-out infinite; }
        .animate-node-glow { animation: node-glow 2s ease-in-out infinite; }
        .animate-data-flow { animation: data-flow 3s linear infinite; }
        .animate-glow-text { animation: glow-text 3s ease-in-out infinite; }
        .animate-active-tab { animation: active-tab 2s ease-in-out infinite; }
        .animate-tab-hover { animation: tab-hover 0.5s ease-in-out; }
        .animate-liquid-flow { animation: liquid-flow 2s ease-in-out infinite; }
        .animate-energy-sweep { animation: energy-sweep 1.5s ease-out infinite; }
        .animate-content-reveal { animation: content-reveal 1s ease-out; }
        .animate-title-glow { animation: title-glow 2s ease-in-out; }
        .animate-card-levitate { animation: card-levitate 0.8s ease-in-out; }
        .animate-card-energy { animation: card-energy 2s ease-in-out infinite; }
        .animate-icon-quantum { animation: icon-quantum 2s ease-in-out; }
        .animate-inner-glow { animation: inner-glow 3s ease-in-out infinite; }
        .animate-cta-supreme { animation: cta-supreme 2s ease-in-out infinite; }
        .animate-arrow-quantum { animation: arrow-quantum 1.5s ease-in-out infinite; }
        .animate-cta-energy { animation: cta-energy 3s ease-in-out infinite; }
        
        /* Updated Animation Classes for 5-second cycle */
        .animate-tab-progress { 
          animation: tab-progress 5s linear; 
        }
        .animate-slide-in-from-right { 
          animation: slide-in-from-right 0.8s ease-out; 
        }
        .animate-fade-in-delayed { 
          animation: fade-in-delayed 1s ease-out 0.3s both; 
        }
        .animate-slide-in-stagger { 
          animation: slide-in-stagger 0.6s ease-out forwards; 
        }
        .animate-image-transition { 
          animation: image-transition 1s ease-out; 
        }
        
        /* Utility Classes */
        .bg-gradient-radial { 
          background: radial-gradient(circle, var(--tw-gradient-stops)); 
        }
        .perspective-1000 { 
          perspective: 1000px; 
        }
        
        /* Existing animations preserved */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DerniereSortie;