"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ModelTop = () => {
  return (
    <>
      <div className="relative min-h-screen  overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
            

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                KPANDJI
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  EXCELLENCE
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                Découvrez l&apos;innovation automobile qui redéfinit les standards de performance, 
                design et technologie pour une expérience de conduite exceptionnelle.
              </motion.p>

            

             
            </motion.div>

            {/* Right Content - Animated Car */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Car Image Container */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateY: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                {/* Replace with your animated car image */}
                <Image
                  src="/Djet.png" // Your animated car image
                  alt="Kpandji Car"
                  width={800}
                  height={500}
                  className="w-full h-auto object-contain filter drop-shadow-2xl"
                  priority
                />
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/20 rounded-lg blur-xl scale-110 -z-10"></div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full backdrop-blur-sm border border-white/10"
              ></motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 10, 0]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full backdrop-blur-sm border border-white/10"
              ></motion.div>

              {/* Light Beam Effect */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-24 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default ModelTop;