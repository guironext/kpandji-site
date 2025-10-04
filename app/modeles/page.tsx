"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ModelTop from '../components/ModelTop';

const ModelsPage = () => {
  const [hoveredModel, setHoveredModel] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const modelsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  // Only render animated background on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Conditionally create scroll-based transforms only on client
  const { scrollYProgress } = useScroll();
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const modelsInView = useInView(modelsRef, { once: false, amount: 0.1 });

  // Parallax transforms - always call hooks, conditionally use values
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const carModels = [
    {
      id: "djetran-auto",
      name: "DJETRAN AUTOMATIQUE",
      type: "Pickup 4X4",
      fullName: "KPANDJI DJETRAN",
      category: "PICKUP 4X4",
      tagline: "Robuste & Fiable",
      price: "45,000",
      mainImage: "/Djet.png",
      badge: "Pickup 4X4",
      features: ["2.5L Turbo Diesel", "136 CV", "8.1L/100km"],
      specs: {
        engine: "2.5L Turbo Diesel",
        power: "136 CV",
        consumption: "8.1L/100km",
        transmission: "Automatique"
      },
      colors: ["#fbbf24", "#f59e0b", "#d97706"]
    },
    {
      id: "lathaye",
      name: "LATHAYE AUTOMATIQUE",
      type: "SUV",
      fullName: "KPANDJI LATHAYE",
      category: "SUV",
      tagline: "S.U.V. Premium",
      price: "52,000",
      mainImage: "/derniers/lathaye.png",
      badge: "NOUVEAU",
      features: ["2.0T GDI", "CVT 8V", "210 km/h"],
      specs: {
        engine: "2.0T GDI Turbo Diesel",
        power: "221 CV",
        consumption: "7.8L/100km",
        transmission: "Automatique"
      },
      colors: ["#3b82f6", "#2563eb", "#1d4ed8"]
    },
    {
      id: "djetran-manual",
      name: "DJETRAN MANUELLE",
      type: "Pickup 4X4",
      fullName: "KPANDJI DJETRAN",
      category: "PICKUP 4X4",
      tagline: "Élégance Urbaine",
      price: "38,000",
      mainImage: "/hero/pic1.png",
      badge: "ECO",
      features: ["1.8L Hybrid", "120 CV", "5.2L/100km"],
      specs: {
        engine: "1.8L Hybrid",
        power: "120 CV",
        consumption: "5.2L/100km",
        transmission: "CVT Auto"
      },
      colors: ["#10b981", "#059669", "#047857"]
    },
   
  ];

  const filters = [

    { id: 'all', label: 'Tous les modèles', icon: '' },

    
  ];

  const filteredModels = selectedFilter === 'all' 
    ? carModels 
    : carModels.filter(model => model.category === selectedFilter);

  // Advanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 1.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: 45
    },
    visible: (index: number) => ({
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 25,
        delay: index * 0.2,
        duration: 0.8
      }
    }),
    hover: {
      scale: 1.02,
      y: -10,
      rotateY: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 1.3, 
      opacity: 0,
      filter: "blur(10px)"
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const
      }
    }
  };

  const filterVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: (index: number) => ({
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: index * 0.1
      }
    })
  };

  const specVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      scale: 0.9
    },
    visible: (index: number) => ({
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        delay: index * 0.1
      }
    })
  };

  const handleModelClick = (modelId: string) => {
    router.push(`/cars/${modelId}`);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden">
      <ModelTop />
      
     

      {/* Animated Background with Parallax - Client Only */}
      {isMounted && (
        <motion.div 
          style={{ y: isMounted ? backgroundY : 0 }}
          className="fixed inset-0 overflow-hidden pointer-events-none"
        >

          {[...Array(30)].map((_, i) => {
            const seedX = i * 123.456; // Fixed seed based on index
            const seedY = i * 789.012;
            const seedScale = i * 234.567;
            const seedDuration = i * 345.678;
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
                initial={{
                  x: (seedX % 1200),
                  y: (seedY % 800),
                  scale: 0
                }}
                animate={{
                  x: [
                    (seedX % 1200),
                    ((seedX + 100) % 1200),
                    ((seedX + 200) % 1200)
                  ],
                  y: [
                    (seedY % 800),
                    ((seedY + 100) % 800),
                    ((seedY + 200) % 800)
                  ],
                  scale: [0, (seedScale % 2) + 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: (seedDuration % 20) + 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            );
          })}



      </motion.div>
      )}

      <div className="relative z-10 container mx-auto px-4 ">
        
        {/* Hero Section with Advanced Animations */}
        <motion.div 
          ref={heroRef}
          style={{ 
            y: isMounted ? heroY : 0, 
            opacity: isMounted ? opacity : 1 
          }}
          className="text-center mb-10 -mt-20"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            key={heroInView ? "visible" : "hidden"} // Force re-animation
          >
           

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.5, duration: 0.8 }
                }
              }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto relative"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(251,191,36,0)",
                    "0 0 20px rgba(251,191,36,0.3)",
                    "0 0 0px rgba(251,191,36,0)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Explorez notre gamme exceptionnelle de véhicules KPANDJI, 
                où innovation et performance se rencontrent
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Filter Navigation with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              custom={index}
              variants={filterVariants}
              onClick={() => setSelectedFilter(filter.id)}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: "0 10px 30px rgba(251,191,36,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-500 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-400/25'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20'
              }`}
            >
              <motion.span
                animate={{ rotate: selectedFilter === filter.id ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {filter.icon}
              </motion.span>
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Models Grid with Advanced Viewport Animations */}
        <motion.div 
          ref={modelsRef}
          layout
          className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredModels.map((model, index) => (
              <motion.div
                key={model.id} // Force re-animation on viewport change
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true}}
                onHoverStart={() => setHoveredModel(model.id)}
                onHoverEnd={() => setHoveredModel(null)}
                className="group cursor-pointer perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                  
                  {/* Animated Badge */}
                  <motion.div 
                    className="absolute top-6 left-6 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    <motion.span 
                      className="px-3 py-1 rounded-full text-xs font-bold text-black"
                      style={{ backgroundColor: model.colors[0] }}
                      animate={{
                        boxShadow: [
                          `0 0 0px ${model.colors[0]}`,
                          `0 0 20px ${model.colors[0]}50`,
                          `0 0 0px ${model.colors[0]}`
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {model.badge}
                    </motion.span>
                  </motion.div>

           
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at center, ${model.colors[0]}, transparent 70%)`
                      }}
                    />
                    
                    <div className="relative w-full h-full">
                      <Image
                        src={model.mainImage}
                        alt={model.fullName}
                        fill
                        className="object-cover"
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+pX1XJJV5/9k="
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </div>
                    
                    {/* Dynamic overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                      animate={{
                        background: hoveredModel === model.id 
                          ? `linear-gradient(to top, ${model.colors[2]}40, transparent, transparent)`
                          : "linear-gradient(to top, rgba(0,0,0,0.8), transparent, transparent)"
                      }}
                    />
                  </div>

                  {/* Content with Staggered Animations */}
                  <div className="p-8">
                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      viewport={{ once: true }}
                    >
                      <motion.h3 
                        className="text-4xl font-black mb-2"
                        style={{ color: model.colors[0] }}
                        animate={{
                          textShadow: hoveredModel === model.id 
                            ? `0 0 20px ${model.colors[0]}50`
                            : "0 0 0px transparent"
                        }}
                      >
                        {model.name}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-lg text-gray-300 mb-6"
                        animate={{
                          x: hoveredModel === model.id ? 10 : 0
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {model.tagline}
                      </motion.p>

                      {/* Animated Features Pills */}
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {model.features.map((feature, i) => (
                          <motion.span
                            key={i}
                            variants={{
                              hidden: { opacity: 0, scale: 0, rotate: -180 },
                              visible: { 
                                opacity: 1, 
                                scale: 1, 
                                rotate: 0,
                                transition: { delay: i * 0.1 }
                              }
                            }}
                            whileHover={{ 
                              scale: 1.1, 
                              backgroundColor: `${model.colors[0]}20` 
                            }}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20 cursor-pointer"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Quick Specs with Individual Animations */}
                      <motion.div 
                        className="grid grid-cols-2 gap-4 mb-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {Object.entries(model.specs).map(([key, value], i) => (
                          <motion.div 
                            key={key} 
                            custom={i}
                            variants={specVariants}
                            whileHover={{ 
                              scale: 1.05, 
                              borderColor: model.colors[0],
                              backgroundColor: `${model.colors[0]}10`
                            }}
                            className="text-center p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer"
                          >
                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                            <motion.div 
                              className="text-sm font-semibold" 
                              style={{ color: model.colors[0] }}
                              animate={{
                                scale: hoveredModel === model.id ? [1, 1.1, 1] : 1
                              }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                              {value}
                            </motion.div>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Action Buttons with Advanced Animations */}
                      <motion.div 
                        className="flex gap-3"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 1 }}
                      >
                        <motion.button
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: `0 10px 30px ${model.colors[0]}40`
                          }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleModelClick(model.id)}
                          className="flex-1 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${model.colors[0]}, ${model.colors[1]})`,
                            color: 'black'
                          }}
                        >
                          <motion.span
                            className="relative z-10"
                            animate={{
                              y: hoveredModel === model.id ? [-2, 2, -2] : 0
                            }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            Découvrir
                          </motion.span>
                        </motion.button>
                        
                        
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={{
                      background: hoveredModel === model.id 
                        ? `linear-gradient(135deg, ${model.colors[0]}15, ${model.colors[1]}15)`
                        : 'transparent',
                      borderColor: hoveredModel === model.id 
                        ? model.colors[0]
                        : 'transparent',
                      borderWidth: hoveredModel === model.id ? '2px' : '0px',
                      boxShadow: hoveredModel === model.id 
                        ? `0 20px 60px ${model.colors[0]}30`
                        : '0 0 0px transparent'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Call to Action with Viewport Animation */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 1
          }}
          className="text-center my-6"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-400/10 to-orange-500/10 backdrop-blur-sm border border-amber-400/20 p-12">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(251,191,36,0.1), transparent 70%)",
                  "radial-gradient(circle at 80% 50%, rgba(251,191,36,0.1), transparent 70%)",
                  "radial-gradient(circle at 50% 80%, rgba(251,191,36,0.1), transparent 70%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Prêt à découvrir votre KPANDJI ?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Contactez notre équipe pour organiser un essai personnalisé 
                et découvrir le modèle qui vous correspond
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(251,191,36,0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-xl text-lg relative overflow-hidden"
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative z-10"
                  >
                    Planifier un essai
                  </motion.span>
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(251,191,36,0.1)",
                    borderWidth: "3px"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold rounded-xl text-lg"
                >
                  Télécharger la brochure
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ModelsPage;