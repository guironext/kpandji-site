"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Car, Zap, Fuel, Settings } from "lucide-react";
import { createFactureProforma } from "@/lib/actions/onboarding";

interface Car {
  id: string;
  name: string;
  image: string;
  intImage1?: string;
  intImage2?: string;
  intImage3?: string;
  title: string;
  description: string;
  features: string[];
  accent: string;
  specs: {
    engine: string;
    power: string;
    consumption: string;
    transmission: string;
  };
}

interface CarPageClientProps {
  car: Car;
  id: string;
}

const CarPageClient = ({ car, id }: CarPageClientProps) => {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await createFactureProforma({
      carName: car.name,
      name: formData.nom,
      email: formData.email,
      phone: formData.telephone,
      message: formData.message || "",
    });

    if (result.success) {
      alert("Demande envoyée avec succès!");
      setIsDialogOpen(false);
      setFormData({ nom: "", email: "", telephone: "", message: "" });
    } else {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const getAccentColor = (accent: string) => {
    const colors = {
      amber: "from-amber-500 to-orange-600",
      blue: "from-blue-500 to-indigo-600",
      green: "from-green-500 to-emerald-600",
    };
    return (
      colors[accent as keyof typeof colors] || "from-blue-500 to-indigo-600"
    );
  };

  const specIcons = {
    engine: Car,
    power: Zap,
    consumption: Fuel,
    transmission: Settings,
  };

  // Prepare all images
  const allImages = [
    { src: car.image, label: "Extérieur" },
    ...(car.intImage1 ? [{ src: car.intImage1, label: "Intérieur 1" }] : []),
    ...(car.intImage2 ? [{ src: car.intImage2, label: "Intérieur 2" }] : []),
    ...(car.intImage3 ? [{ src: car.intImage3, label: "Vue arrière" }] : []),
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-8 px-4">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto my-16">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 group shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-lg">Retour</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${getAccentColor(
                car.accent
              )} bg-clip-text text-transparent mb-6`}
            >
              {car.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {car.title}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Enhanced Image Gallery Section */}
            <div className="space-y-6">
              {/* Main Image Display */}
              <div className="relative">
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${getAccentColor(
                    car.accent
                  )} opacity-20 rounded-3xl blur-xl`}
                ></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <Image
                    src={allImages[activeImage].src}
                    alt={`${car.name} - ${allImages[activeImage].label}`}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    priority
                  />
                  {/* Image Label */}
                  
                </div>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                      activeImage === index
                        ? `ring-2 ring-offset-2 ring-offset-black ring-${
                            getAccentColor(car.accent).split("-")[1]
                          }-500 scale-105`
                        : "hover:scale-105 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={`${car.name} - ${img.label}`}
                      width={200}
                      height={150}
                      className="w-full h-20 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                    
                  </button>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Description */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Description
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Caractéristiques Principales
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {car.features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className={`bg-gradient-to-r ${getAccentColor(
                        car.accent
                      )} p-4 rounded-xl text-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Spécifications Techniques
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(car.specs).map(([key, value]) => {
                const IconComponent = specIcons[key as keyof typeof specIcons];
                const labels = {
                  engine: "Moteur",
                  power: "Puissance",
                  consumption: "Consommation",
                  transmission: "Transmission",
                };

                return (
                  <div
                    key={key}
                    className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${getAccentColor(
                        car.accent
                      )} rounded-full mx-auto mb-4 flex items-center justify-center`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-gray-400 text-sm font-medium mb-2">
                      {labels[key as keyof typeof labels]}
                    </h4>
                    <p className="text-white font-bold text-xl">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Intéressé par ce modèle ?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Contactez-nous pour plus d&apos;informations ou pour planifier un
                essai routier.
              </p>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-lg"
              >
                Facture Proforma
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/75" onClick={() => setIsDialogOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-900 transition-colors bg-white rounded-full p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Car Image & Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{car.name}</h3>
                <div className="relative h-64 bg-gray-100 rounded-xl overflow-hidden">
                  <Image src={car.image} alt={car.name} fill className="object-contain" />
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Demande Facture Proforma</h3>
                
                <input
                  type="text"
                  required
                  value={formData.nom}
                  onChange={(e) => setFormData({...formData, nom: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-gray-900"
                  placeholder="Nom complet"
                />

                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-gray-900"
                  placeholder="Email"
                />

                <input
                  type="tel"
                  required
                  value={formData.telephone}
                  onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-gray-900"
                  placeholder="Téléphone"
                />

                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-gray-900"
                  placeholder="Message (optionnel)"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarPageClient;
