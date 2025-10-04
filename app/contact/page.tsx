"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { createContact } from '@/lib/actions/contact';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await createContact(formData);
      
      if (result.success) {
        alert('Message envoyé avec succès!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16 sm:pt-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-4 sm:mb-6 px-2">
            Contactez-nous
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Nous sommes là pour répondre à toutes vos questions concernant nos véhicules et services
          </p>
        </div>

        {/* Mobile-First Layout */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Contact Form - Mobile First */}
          <div className="order-2 lg:order-1 bg-black/40 backdrop-blur-xl border border-amber-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl mx-2 sm:mx-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Mobile: Stack all inputs, Desktop: Grid for name/email */}
              <div className="space-y-4 sm:space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
                <div>
                  <label className="block text-amber-400 font-medium mb-2 text-sm sm:text-base">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label className="block text-amber-400 font-medium mb-2 text-sm sm:text-base">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-3 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-sm sm:text-base"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-400 font-medium mb-2 text-sm sm:text-base">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-3 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-sm sm:text-base"
                  placeholder="+225 07 00 00 00 00"
                />
              </div>

              <div>
                <label className="block text-amber-400 font-medium mb-2 text-sm sm:text-base">
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-3 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Demande d'information, facture proforma, SAV..."
                />
              </div>

              <div>
                <label className="block text-amber-400 font-medium mb-2 text-sm sm:text-base">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-3 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>


              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:opacity-50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 border border-amber-400/20 disabled:hover:scale-100 text-sm sm:text-base active:scale-95"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                    Envoi en cours...
                  </div>
                ) : (
                  'Envoyer le message'
                )}
              </button>
            </form>
          </div>

          {/* Image and Contact Info - Mobile Optimized */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 mx-2 sm:mx-0">
            {/* Hero Image - Mobile Optimized */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/logo1.png"
                alt="KPANDJI Contact"
                width={150}
                height={150}
                className="w-full h-32 sm:h-40 lg:h-48 object-contain bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">KPANDJI</h3>
                <p className="text-amber-400 text-sm sm:text-base">Excellence et Innovation</p>
              </div>
            </div>

            {/* Contact Information - Mobile Optimized */}
            <div className="bg-black/40 backdrop-blur-xl border border-amber-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Informations de contact</h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-amber-400/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm sm:text-base">Adresse</p>
                    <p className="text-gray-300 text-xs sm:text-sm break-words">Cocody Palmerais non loin de l&apos;hotel , Abidjan</p>
                  </div>
                </div> 

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-amber-400/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm sm:text-base">Téléphone</p>
                    <div className='flex flex-col'>
                  <p className="text-gray-300 text-sm">+225 01 44 10 00 00</p>
                  <p className="text-gray-300 text-sm">+225 01 01 04 77 03</p>
                  <p className="text-gray-300 text-sm">+225 07 48 69 36 10</p>
                </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-amber-400/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm sm:text-base">Email</p>
                    <a href="mailto:contact@kpandji.com" className="text-gray-300 hover:text-amber-400 transition-colors text-xs sm:text-sm break-all">
                      contact@kpandji.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="bg-amber-400/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white font-medium text-sm sm:text-base">Horaires</p>
                    <div className="text-gray-300 text-xs sm:text-sm">
                      <p>Lun-Ven: 9h-18h</p>
                      <p>Sam: 9h-17h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons - Mobile Only */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:hidden">
                <a
                  href="tel:+225 07 00 00 00 00"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">Appeler</span>
                </a>
                <a
                  href="mailto:contact@kpandji.com"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg font-medium text-center transition-all duration-300 active:scale-95 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;