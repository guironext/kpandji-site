"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const KpandjiCars = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeSpec, setActiveSpec] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % carImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const carImages = [
    { src: '/Djet.png', title: 'Vue Frontale', description: 'Design agressif et moderne' },
    { src: '/arriere.png', title: 'Vue Latérale', description: 'Lignes aérodynamiques perfectionnées' },
    { src: '/djetaut1.jpg', title: 'Vue Arrière', description: 'Design moderne et élégant' },
    { src: '/DjetInt2.png', title: 'Vue Intérieur', description: 'Design moderne et élégant' }
  ];

  const specifications = [
    { 
      category: 'Moteur',
      items: [
        { label: 'Type', value: 'Turbo Diesel' },
        { label: 'Cylindrée (L)', value: '2.5' },
        { label: 'Puissance (Km/tr/min)', value: '110 à 3600 tr/min' },
        { label: 'Couple (Km/tr/min)', value: '360 à 2400 tr/min' }
      ]
    },
    {
      category: 'Performance',
      items: [
        { label: 'Nombre chevaux', value: '136' },
        { label: 'Capacité reservoir', value: '75 L' },
        { label: 'Système alimentation', value: 'Injection Directe' },
        { label: 'Consommation de carburant (L/100 km)', value: '8.1' }
      ]
    },
    {
      category: 'Technique',
      items: [
        { label: 'Transmission', value: 'Automatique / Manuelle ' },
        { label: 'Mode de conduite', value: '4x2 / 4x4' },
        { label: 'Long x Larg x Haut', value: '5341 x 1885 x 1845 mm' },
        { label: 'Assistance Freinage', value: 'EBA/BAS' }
      ]
    }
  ];

  // Enhanced viewport animation variants
  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const slideInLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0
    }
  };

  const slideInRightVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotate: 5
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0
    }
  };

  const scaleUpVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: 45
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0
    }
  };

  const downloadBrochure = () => {
    if (typeof window === 'undefined') return;
    const link = document.createElement('a');
    link.href = '/fiche_djetran.pdf';
    link.download = 'Kpandji_Djetran_Brochure.pdf';
    link.click();
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-white overflow-hidden relative"
      suppressHydrationWarning
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255,191,0,0.1), transparent 70%)",
            "radial-gradient(circle at 80% 50%, rgba(255,191,0,0.1), transparent 70%)",
            "radial-gradient(circle at 50% 20%, rgba(255,191,0,0.1), transparent 70%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      <div className="relative z-10 container mx-auto px-4 py-12">
        
        {/* Hero Header with Enhanced Animation */}
        <motion.div 
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="flex flex-col text-8xl md:text-9xl font-black tracking-wider mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span 
              className="text-6xl md:text-8xl bg-gradient-to-r from-white via-amber-400 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -50, rotateX: 90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              KPANDJI
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-white via-amber-400 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              DJETRAN
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Image Gallery with Slide In Left */}
          <motion.div 
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", type: "spring", stiffness: 100 }}
            className="lg:col-span-8"
          >
            
            {/* Main Image */}
            <motion.div className="relative mb-8">
              <motion.div 
                className="relative aspect-video rounded-3xl overflow-hidden border border-amber-400/30"
                whileInView={{ 
                  scale: [0.9, 1],
                  rotateY: [15, 0],
                  boxShadow: [
                    "0 0 0 rgba(251,191,36,0)",
                    "0 25px 50px -12px rgba(251,191,36,0.3)"
                  ]
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(251,191,36,0.5)",
                  borderColor: "rgba(251,191,36,0.7)"
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage}
                    initial={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={carImages[selectedImage].src}
                      alt={carImages[selectedImage].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Image Selector */}
              <motion.div 
                className="flex space-x-4 mt-6"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {carImages.map((image, index) => (
                  <motion.button
                    key={index}
                    variants={fadeInUpVariants}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -8,
                      rotateY: 5,
                      boxShadow: "0 10px 25px rgba(251,191,36,0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index ? 'border-amber-400' : 'border-gray-600'
                    }`}
                  >
                    <Image src={image.src} alt={image.title} fill className="object-cover" />
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>

            {/* Performance Metrics with Enhanced Stagger */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { metric: '136', unit: 'CV', label: 'Puissance' },
                { metric: '8.1', unit: 'SEC', label: '0-100 km/h' },
                { metric: '200', unit: 'KM/H', label: 'V-Max' },
                { metric: '2400', unit: 'NM', label: 'Couple' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={scaleUpVariants}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    borderColor: "rgba(251,191,36,0.5)",
                    boxShadow: "0 15px 35px rgba(251,191,36,0.3)"
                  }}
                  className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-800 cursor-pointer"
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold text-amber-400"
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.8,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {item.metric}
                    </motion.div>
                    <div className="text-xs text-gray-400 font-semibold">{item.unit}</div>
                    <div className="text-sm text-gray-300 mt-1">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Specifications Sidebar with Slide In Right */}
          <motion.div 
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-8">
              <motion.h2 
                className="text-2xl font-bold mb-6 text-center"
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Spécifications <span className="text-amber-400">Détaillées</span>
              </motion.h2>

              <motion.div 
                className="space-y-4"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {specifications.map((spec, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUpVariants}
                    whileHover={{ 
                      scale: 1.02, 
                      rotateY: 2,
                      boxShadow: "0 10px 25px rgba(251,191,36,0.2)"
                    }}
                    className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
                  >
                    <motion.button
                      whileHover={{ backgroundColor: "rgba(251,191,36,0.1)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveSpec(activeSpec === index ? null : index)}
                      className="w-full p-4 text-left flex justify-between items-center"
                    >
                      <span className="font-semibold text-lg">{spec.category}</span>
                      <motion.span
                        animate={{ rotate: activeSpec === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ↓
                      </motion.span>
                    </motion.button>
                    
                    <AnimatePresence>
                      {activeSpec === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-4 pb-4 space-y-3">
                            {spec.items.map((item, itemIndex) => (
                              <motion.div 
                                key={itemIndex}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: itemIndex * 0.1 }}
                                className="flex justify-between items-center py-2 border-b border-gray-700/30 last:border-b-0"
                              >
                                <span className="text-gray-300">{item.label}</span>
                                <span className="text-amber-400 font-semibold">{item.value}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="mt-8 space-y-3"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                
                <motion.button 
                  variants={fadeInUpVariants}
                  whileHover={{ 
                    backgroundColor: "rgb(251 191 36)", 
                    color: "black",
                    scale: 1.02,
                    rotateX: -5
                  }}
                  onClick={downloadBrochure}
                  className="w-full border border-amber-400 text-amber-400 font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Télécharger la Brochure
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features Strip with Wave Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-20 hidden sm:block"
        >
          <motion.div 
            className="bg-gradient-to-r from-transparent via-gray-900/50 to-transparent p-8 rounded-2xl border-t border-b border-amber-400/20"
            whileInView={{ 
              scale: [0.95, 1],
              rotateX: [10, 0]
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="grid md:grid-cols-3 gap-8 text-center"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: '🏆', title: 'Excellence', desc: 'Conception et fabrication d\'exception', color: 'from-amber-400 to-orange-500' },
                { icon: '⚡', title: 'Innovation', desc: 'Technologies de pointe intégrées', color: 'from-blue-400 to-blue-600' },
                { icon: '💎', title: 'Exclusivité', desc: 'Série limitée, chaque exemplaire unique', color: 'from-purple-400 to-purple-600' }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={scaleUpVariants}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      boxShadow: "0 20px 40px rgba(251,191,36,0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default KpandjiCars;