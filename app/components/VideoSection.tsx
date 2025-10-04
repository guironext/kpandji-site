'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronRight, Zap, Shield, Award } from 'lucide-react'

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Multiple parallax layers with different speeds
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
  const subtitleY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
  const featuresY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"])
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.95])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const playVideo = async () => {
        try {
          await video.play()
          setIsVideoPlaying(true)
          setIsVideoLoaded(true)
        } catch (error) {
          console.log('Video autoplay failed:', error)
          setIsVideoLoaded(true)
        }
      }

      const handleCanPlay = () => {
        playVideo()
      }

      const handleLoadedData = () => {
        setIsVideoLoaded(true)
        playVideo()
      }

      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('loadeddata', handleLoadedData)

      // Force load
      video.load()

      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('loadeddata', handleLoadedData)
      }
    }
  }, [])

  const features = [
    { icon: Zap, title: "Performance", desc: "Moteurs haute technologie" },
    { icon: Shield, title: "Sécurité", desc: "Protection maximale" },
    { icon: Award, title: "Excellence", desc: "Qualité reconnue" }
  ]

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Loading State */}
      {!isVideoLoaded && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-amber-950 flex items-center justify-center z-50"
          exit={{ opacity: 0 }}
        >
          <div className="text-center space-y-6">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-amber-400/30 rounded-full animate-spin border-t-amber-400"></div>
              <div className="absolute inset-0 w-20 h-20 border-2 border-amber-600/20 rounded-full animate-ping"></div>
            </div>
            <div className="space-y-2">
              <p className="text-amber-400 font-semibold text-lg">Kpandji Automobile</p>
              <p className="text-gray-400">Chargement de l&apos;expérience...</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Parallax Video Background */}
      <motion.div 
        style={{ y: videoY, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
        
        </video>
      </motion.div>

      {/* Dynamic Multi-layer Overlays */}
      <motion.div 
        style={{ y: overlayY }}
        className="absolute inset-0  z-10" 
      />
      <div className="absolute inset-0  z-10" />
      <div className="absolute inset-0  z-10" />

      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 z-15 opacity-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <motion.div
          className="absolute top-20 left-16 w-40 h-40"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full border-2 border-amber-400/20 rotate-45 rounded-lg"></div>
          <div className="absolute inset-4 border border-orange-400/30 rotate-12 rounded-lg"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-20 w-32 h-32"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-full h-full border border-amber-400/25 rounded-full"></div>
          <div className="absolute inset-6 border-2 border-orange-400/40 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-8 w-2 h-24 bg-gradient-to-b from-amber-400/30 to-transparent"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]) }}
          animate={{ scaleY: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content with Layered Parallax */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 h-full flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto text-center gap-2 mb-8 px-6 py-3">
          {/* Premium Badge */}
         

          {/* Main Title */}
          <motion.div
            style={{ y: titleY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-bold leading-none mb-4">
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                KPANDJI
              </motion.span>
              <motion.span 
                className="block text-white font-light tracking-wider"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                DJETRAN
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            style={{ y: subtitleY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-2xl md:text-4xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto">
              L&apos;art de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-semibold">
                l&apos;innovation automobile
              </span>
              <br />
              redéfini pour l&apos;excellence
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            style={{ y: featuresY }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 bg-black/30 backdrop-blur-xl border border-amber-400/20 rounded-2xl hover:border-amber-400/40 transition-all duration-500"
              >
                <feature.icon className="w-8 h-8 text-amber-400 mx-auto mb-4 group-hover:text-amber-300 transition-colors" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

         
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-25" />
    </div>
  )
}
