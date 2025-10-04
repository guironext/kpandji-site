"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { createOffreSpeciale } from "@/lib/actions/onboarding";

// Update the car models data type
interface CarModel {
  id: number;
  name: string;
  image: string;
  price: string;
  prix_promo: string;
  features: string[];
}

// Car models data - make sure all fields are properly defined
const carModels: CarModel[] = [
  {
    id: 1,
    name: "KPANDJI DJETRAN AUTOMATIQUE",
    image: "/Djet.png",
    price: "26 000 000 FCFA TTC",
    prix_promo: "22 500 000 FCFA TTC",
    features: ["2.5L Turbo Diesel", "136 CV", "8.1L/100km"]
  },
  {
    id: 2,
    name: "KPANDJI LATHAYE",
    image: "/derniers/lathaye.png",
    price: "24 615 000 FCFA TTC",
    prix_promo: "19 000 000 FCFA TTC",
    features: ["2.0T GDI", "CVT 8V", "210 km/h"]
  },
  {
    id: 3,
    name: "KPANDJI DJETRAN MANUELLE",
    image: "/hero/pic1.png",
    price: "21 500 000 FCFA TTC",
    prix_promo: "18 000 000 FCFA TTC",
    features: ["1.8L Hybrid", "120 CV", "5.2L/100km"]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<CarModel>(carModels[0]);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: ""
  });
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const LiensNav = [
    { name: "Accueil", href: "/" },
    { name: "Modèles", href: "/modeles" },
    { name: "Équipements", href: "/equipments" },
    { name: "SAV", href: "/sav" },
    { name: "Contact", href: "/contact" }
  ];

  // Optimize scroll handler with useCallback and throttling
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
    setIsVisible(scrollY <= 100 || scrollY > 200);
  }, []);

  // Add useEffect to handle hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Add the missing scroll event listener useEffect
  useEffect(() => {
    if (!isMounted) return;

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll, isMounted]); // Keep handleScroll in dependencies consistently

  // Close mobile menu on navigation
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await createOffreSpeciale({
        name: formData.nom,
        email: formData.email,
        phone: formData.telephone,
        message: formData.message || "",
      });
      
      if (result.success) {
        console.log("Special offer submitted successfully!");
        setIsDialogOpen(false);
        setFormData({ nom: "", email: "", telephone: "", message: "" });
      } else {
        console.error("Failed to submit special offer");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Add this temporary debug function
  const handleButtonClick = () => {
    console.log("Button clicked, opening dialog");
    setIsDialogOpen(true);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isMounted ? (isVisible ? 'translate-y-0' : '-translate-y-full') : 'translate-y-0'
      } ${
        isMounted && isScrolled 
          ? 'bg-black/60 backdrop-blur-xl border-b border-amber-400/40 shadow-2xl' 
          : 'bg-black/30 backdrop-blur-md border-b border-amber-400/20'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Simplified Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/logo1.png"
                alt="KPANDJI Logo"
                width={64}
                height={64}
                className="h-16 w-auto transition-transform duration-300 hover:scale-110"
                priority
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  KPANDJI
                </h1>
                
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {LiensNav.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className="relative px-4 py-2 text-white hover:text-amber-300 font-medium transition-colors duration-200 group text-lg"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsDialogOpen(true)}
                className="hidden sm:block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Offre spéciale
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMounted && isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl border-b border-amber-400/30 shadow-2xl">
            <div className="px-4 py-6 space-y-3">
              {LiensNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-white hover:text-amber-300 font-medium text-lg transition-colors duration-200 hover:bg-white/10 rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDialogOpen(true);
                }}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
              >
                Offre spéciale
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dialog - Simplified and more reliable */}
      {isMounted && isDialogOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black/75"
            onClick={() => setIsDialogOpen(false)}
          />
          
          {/* Dialog content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-900 transition-colors bg-white rounded-full p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 w-full">
              <div className="text-center lg:text-left w-full">
                <h3 className="text-3xl  mb-4 w-full text-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">  
                  Bénéficiez de l&apos;offre spéciale
                </h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Image */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedCar.name}
                  </h3>
                  <div className="relative h-64 lg:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
                    <Image
                      src={selectedCar.image}
                      alt={selectedCar.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Enhanced pricing section */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <div className="space-y-3">
                      {/* Promotional price */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Prix promo</span>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-green-600">
                            {selectedCar.prix_promo}
                          </p>
                        </div>
                      </div>
                      
                      {/* Original price */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">Prix normal</span>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-gray-500 line-through">
                            {selectedCar.price}
                          </p>
                        </div>
                      </div>
                      
                      {/* Savings calculation */}
                      <div className="pt-2 border-t border-amber-200">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-amber-700">Économie</span>
                          <div className="text-right">
                            <p className="text-lg font-bold text-amber-700">
                              {(() => {
                                try {
                                  const normal = parseInt(selectedCar.price?.replace(/[^\d]/g, '') || '0');
                                  const promo = parseInt(selectedCar.prix_promo?.replace(/[^\d]/g, '') || '0');
                                  const savings = normal - promo;
                                  return savings > 0 ? `${savings.toLocaleString()} FCFA` : 'N/A';
                                } catch (error) {
                                  return 'N/A';
                                }
                              })()}
                            </p>
                            <p className="text-xs text-amber-600">
                              {(() => {
                                try {
                                  const normal = parseInt(selectedCar.price?.replace(/[^\d]/g, '') || '0');
                                  const promo = parseInt(selectedCar.prix_promo?.replace(/[^\d]/g, '') || '0');
                                  if (normal > 0) {
                                    const percentage = ((normal - promo) / normal * 100).toFixed(1);
                                    return `${percentage}% de réduction`;
                                  }
                                  return 'Offre spéciale';
                                } catch (error) {
                                  return 'Offre spéciale';
                                }
                              })()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="mt-4 pt-4 border-t border-amber-200">
                      <p className="text-sm font-medium text-gray-700 mb-2">Caractéristiques clés</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedCar.features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-white text-amber-700 text-sm rounded-full border border-amber-200 font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Enhanced Form */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-900">
                      Profiter de l&apos;offre spéciale
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Obtenez votre Facture Proforma personnalisé en quelques clics
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Car selection with enhanced styling */}
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        �� Sélectionner la voiture
                      </label>
                      <select
                        value={selectedCar.id}
                        onChange={(e) => {
                          const car = carModels.find(c => c.id === parseInt(e.target.value));
                          if (car) setSelectedCar(car);
                        }}
                        className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      >
                        {carModels.map((car) => (
                          <option key={car.id} value={car.id}>
                            {car.name} - {car.prix_promo}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Visitor information with enhanced styling */}
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          👤 Nom complet *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({...formData, nom: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          placeholder="Votre nom et prénom"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          📧 Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          📱 Téléphone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telephone}
                          onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                          placeholder="+229 XX XX XX XX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          �� Message (optionnel)
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Informations complémentaires, questions spécifiques..."
                        />
                      </div>
                    </div>

                    {/* Enhanced submit button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? "⏳ Envoi en cours..." : "🚀 Envoyer ma demande"}
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Réponse sous 24h • Sans engagement
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


