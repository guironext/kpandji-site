"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { createCommandeAccessoire } from '@/lib/actions/onboarding';

// Replace the any types with proper interface
interface Accessory {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  badge: string;
  shortDesc: string;
  description: string;
  specs: string[];
  colors: string[];
}

const EquipmentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredAccessory, setHoveredAccessory] = useState<number | null>(null);
  const [selectedAccessory, setSelectedAccessory] = useState<Accessory | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{x: number, y: number, scale: number, duration: number}>>([]);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });

  const categories = [
    { id: 'all', label: 'Tous les accessoires', icon: '' },
    { id: 'protection', label: 'Protection', icon: '' },
    { id: 'comfort', label: 'Confort', icon: '' },
    { id: 'exterior', label: 'Extérieur', icon: '' },
    { id: 'practical', label: 'Pratique', icon: '' }
  ];

  const accessories = [
    {
      id: 1,
      name: "Barres de Toit",
      category: "practical",
      price: "450€",
      image: "/accessoires/bars.webp",
      badge: "PREMIUM",
      shortDesc: "Transport sécurisé",
      description: "Barres de toit robustes en aluminium pour transporter vos équipements en toute sécurité.",
      specs: ["Aluminium", "Charge max 75kg", "Verrouillage", "Aérodynamique"],
      colors: ["#3b82f6", "#2563eb", "#1d4ed8"]
    },
    {
      id: 2,
      name: "Cover",
      category: "protection",
      price: "320€",
      image: "/accessoires/cache.webp",
      badge: "PROTECTION",
      shortDesc: "Protection moteur optimale",
      description: "Cover en enox, plastique pour couvrir l'arrière et améliorer l'esthétique.",
      specs: ["inox / Plastique plissé", "Anti-corrosion", "Facile à installer", "Design KPANDJI"],
      colors: ["#10b981", "#059669", "#047857"]
    },
    
    {
      id: 4,
      name: "Housses de Siège",
      category: "comfort",
      price: "350€",
      image: "/accessoires/housses.webp",
      badge: "CONFORT",
      shortDesc: "Confort et protection",
      description: "Housses de siège sur mesure en cuir véritable pour un confort optimal.",
      specs: ["Cuir véritable", "Sur mesure", "Facile d'entretien", "Anti-dérapant"],
      colors: ["#f59e0b", "#d97706", "#b45309"]
    },
    {
      id: 5,
      name: "Marchepied Latéral",
      category: "practical",
      price: "650€",
      image: "/accessoires/marche.webp",
      badge: "ACCÈS",
      shortDesc: "Accès facilité",
      description: "Marchepieds latéraux en aluminium antidérapant pour faciliter l'accès au véhicule.",
      specs: ["Aluminium", "Antidérapant", "Support 150kg", "Fixation renforcée"],
      colors: ["#ef4444", "#dc2626", "#b91c1c"]
    },
    {
      id: 6,
      name: "Pare-Buffle",
      category: "protection",
      price: "890€",
      image: "/accessoires/pare.webp",
      badge: "ROBUSTE",
      shortDesc: "Protection frontale maximale",
      description: "Pare-buffle robuste en acier inoxydable pour une protection frontale optimale.",
      specs: ["Acier inoxydable", "Finition chromée", "Compatible LED", "Homologué"],
      colors: ["#6b7280", "#4b5563", "#374151"]
    },
    {
      id: 7,
      name: "Protection sièges",
      category: "protection",
      price: "180€",
      image: "/accessoires/sitcover.webp",
      badge: "ESSENTIAL",
      shortDesc: "Protection complète",
      description: "Bâche de protection imperméable avec traitement anti-UV pour un stockage optimal.",
      specs: ["Imperméable", "Anti-UV", "Respirante", "Fixation élastique"],
      colors: ["#059669", "#047857", "#065f46"]
    },
   
  ];

  const filteredAccessories = selectedCategory === 'all' 
    ? accessories 
    : accessories.filter(acc => acc.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
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
        damping: 25
      }
    },
    hover: {
      scale: 1.02,
      y: -10,
      transition: { type: "spring" as const, stiffness: 400, damping: 25 }
    }
  };

  const openDialog = (accessory: Accessory) => {
    setSelectedAccessory(accessory);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedAccessory(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await createCommandeAccessoire(formData);
    
    if (result.success) {
      alert('Commande envoyée avec succès!');
      setFormData({ prenom: '', nom: '', email: '', phone: '', message: '' });
      closeDialog();
    } else {
      alert('Erreur lors de l\'envoi de la commande.');
    }
    
    setIsSubmitting(false);
  };

  useEffect(() => {
    setIsMounted(true);
    // Generate particles once on client side
    const newParticles = Array.from({ length: 25 }, () => ({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      scale: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 10
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden" suppressHydrationWarning>
      
      {/* Animated Background - Client-side only */}
      {isMounted && particles.length > 0 && (
        <motion.div 
          style={{ y: backgroundY }}
          className="fixed inset-0 overflow-hidden pointer-events-none"
          suppressHydrationWarning
        >
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: 0
              }}
              animate={{
                x: [particle.x, particle.x + 200],
                y: [particle.y, particle.y + 100],
                scale: [0, particle.scale, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut"
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
          suppressHydrationWarning
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
                  transition: { type: "spring", stiffness: 100, damping: 20, duration: 1.2 }
                }
              }}
              className="text-6xl md:text-8xl font-black mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                ACCESSOIRES
              </span>
            </motion.h1>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.3, duration: 0.8 }
                }
              }}
              className="relative"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                KPANDJI COLLECTION
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Découvrez notre gamme complète d&apos;accessoires pour personnaliser et optimiser votre véhicule KPANDJI
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              custom={index}
              variants={{
                hidden: { opacity: 0, x: -50, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }
                }
              }}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 10px 30px rgba(251,191,36,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-500 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg shadow-amber-400/25'
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20'
              }`}
            >
              <motion.span
                animate={{ rotate: selectedCategory === category.id ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {category.icon}
              </motion.span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Accessories Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="wait">
            {filteredAccessories.map((accessory, index) => (
              <motion.div
                key={accessory.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredAccessory(accessory.id)}
                onHoverEnd={() => setHoveredAccessory(null)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500">
                  
                  {/* Badge & Price */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                    <motion.span 
                      className="px-3 py-1 rounded-full text-xs font-bold text-black"
                      style={{ backgroundColor: accessory.colors[0] }}
                      animate={{
                        boxShadow: [
                          `0 0 0px ${accessory.colors[0]}`,
                          `0 0 20px ${accessory.colors[0]}50`,
                          `0 0 0px ${accessory.colors[0]}`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {accessory.badge}
                    </motion.span>
                    
                    
                  </div>

                  {/* Image */}
                  <motion.div className="relative h-64 overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at center, ${accessory.colors[0]}, transparent 70%)`
                      }}
                      animate={{
                        scale: hoveredAccessory === accessory.id ? [1, 1.2, 1] : 1,
                        opacity: hoveredAccessory === accessory.id ? [0.2, 0.4, 0.2] : 0.2
                      }}
                      transition={{ duration: 1.5 }}
                    />
                    
                    <Image
                      src={accessory.image}
                      alt={accessory.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </motion.div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: accessory.colors[0] }}
                      animate={{
                        textShadow: hoveredAccessory === accessory.id 
                          ? `0 0 20px ${accessory.colors[0]}50`
                          : "0 0 0px transparent"
                      }}
                    >
                      {accessory.name}
                    </motion.h3>
                    
                    <p className="text-gray-300 mb-4">{accessory.shortDesc}</p>
                    
                    {/* Specs */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {accessory.specs.map((spec, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: `${accessory.colors[0]}20` 
                          }}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/20"
                        >
                          {spec}
                        </motion.span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openDialog(accessory)}
                        className="flex-1 py-3 rounded-xl font-semibold"
                        style={{
                          background: `linear-gradient(135deg, ${accessory.colors[0]}, ${accessory.colors[1]})`,
                          color: 'black'
                        }}
                      >
                        Commander
                      </motion.button>
                      
                     
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    animate={{
                      background: hoveredAccessory === accessory.id 
                        ? `linear-gradient(135deg, ${accessory.colors[0]}10, ${accessory.colors[1]}10)`
                        : 'transparent',
                      boxShadow: hoveredAccessory === accessory.id 
                        ? `0 20px 60px ${accessory.colors[0]}30`
                        : '0 0 0px transparent'
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

       
      </div>

      {/* Order Dialog */}
      <AnimatePresence>
        {isDialogOpen && selectedAccessory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeDialog}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-3xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left - Accessory Image */}
                <div className="lg:w-1/2 relative h-64 lg:h-auto">
                  <Image
                    src={selectedAccessory.image}
                    alt={selectedAccessory.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-bold text-black"
                      style={{ backgroundColor: selectedAccessory.colors[0] }}
                    >
                      {selectedAccessory.badge}
                    </span>
                  </div>
                </div>

                {/* Right - Visitor Form */}
                <div className="lg:w-1/2 p-8 overflow-y-auto">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedAccessory.name}</h2>
                    </div>
                    <button
                      onClick={closeDialog}
                      className="text-gray-400 hover:text-white text-2xl"
                    >
                      ✕
                    </button>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Prénom</label>
                        <input
                          type="text"
                          required
                          value={formData.prenom}
                          onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Nom</label>
                        <input
                          type="text"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({...formData, nom: e.target.value})}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Téléphone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none"
                        placeholder="Votre numéro"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2">Message</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-amber-400 focus:outline-none resize-none"
                        placeholder="Informations supplémentaires..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-xl text-lg mt-6 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Envoi...' : 'Confirmer la commande'}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EquipmentsPage;