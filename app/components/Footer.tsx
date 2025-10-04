"use client";

import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
    

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-3xl" />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Enhanced Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-2">
              <div>

                <Image src="/logo1.png" alt="KPANDJI Logo" width={120} height={120} />
                
                <div className="w-16 h-1 bg-gradient-to-r from-gold to-accent rounded-full" />
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Assemblage de véhicules &amp; vente d&apos;accessoires. 
                Qualité, innovation et service client au cœur de nos engagements.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Service 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-amber-600 rounded-full" />
                  <span>Garantie officielle</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-900 rounded-full" />
                  <span>Pièces d&apos;origine</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Navigation */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gold mb-6 relative">
              Navigation
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-gold to-accent" />
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Accueil", href: "/" },
                { name: "Nos Offres", href: "/offres" },
                { name: "Accessoires", href: "/accessoires" },
                { name: "Après-Vente", href: "/aftersales" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gold mb-6 relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-gold to-accent" />
            </h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-gold/20 rounded-lg group-hover:bg-gold/30 transition-colors">
                  <IoLocationSharp className="text-gold" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Cocody Palmerais, Abidjan</p>
                  <p className="text-gray-500 text-xs">Côte d&apos;Ivoire</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-gold/20 rounded-lg group-hover:bg-gold/30 transition-colors">
                  <FaPhoneAlt className="text-gold" />
                </div>
                <div className='flex flex-col'>
                  <p className="text-gray-300 text-sm">+225 01 44 10 00 00</p>
                  <p className="text-gray-300 text-sm">+225 01 01 04 77 03</p>
                  <p className="text-gray-300 text-sm">+225 07 48 69 36 10</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-gold/20 rounded-lg group-hover:bg-gold/30 transition-colors">
                  <FaEnvelope className="text-gold" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">contact@kpandji.com</p>
                  <p className="text-gray-300 text-sm">kpandjiautomobiles@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Social Media & Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-gold mb-6 relative">
              Suivez-nous
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-gold to-accent" />
            </h3>
            
            <div className="space-y-6">
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: FaFacebookF, href: "https://www.facebook.com/kpandji.automobiles", color: "hover:text-blue-400" },
                  { icon: FaInstagram, href: "https://www.instagram.com/kpandji_auto.civ?igsh=YzhuYXFxMDBtdG50&utm_source=qr", color: "hover:text-pink-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/10 backdrop-blur-sm rounded-xl text-gray-300 ${social.color} hover:bg-white/20 transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">Restez informé de nos dernières offres</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 border border-white/20 focus:border-gold focus:outline-none transition-colors"
                  />
                  <motion.button
                    className="px-6 py-2.5 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 hover:border-amber-400/50 rounded-lg font-semibold text-sm shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      S&apos;abonner
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="border-t border-gray-700/50 mt-16 pt-8"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2024 KPANDJI AUTOMOBILES. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gold transition-colors">Politique de confidentialité</Link>
              <Link href="/terms" className="hover:text-gold transition-colors">Conditions d&apos;utilisation</Link>
              <Link href="/entretien" className="hover:text-gold transition-colors">Cookies</Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
