'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import type { CarouselItem } from '@/types'

const carouselData: CarouselItem[] = [
  {
    id: 1,
    title: '与野生动物零距离接触',
    subtitle: '探索神奇的动物世界',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: '在这里，您可以近距离观察各种珍稀野生动物，感受大自然的神奇魅力。'
  },
  {
    id: 2,
    title: '精彩动物表演',
    subtitle: '智慧与技巧的完美结合',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: '观看海豚、海狮等海洋动物的精彩表演，体验动物的智慧与灵性。'
  },
  {
    id: 3,
    title: '动物保护教育',
    subtitle: '守护地球家园',
    image: 'https://images.unsplash.com/photo-1516642499105-492ff63d132d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: '学习动物保护知识，了解生物多样性的重要性，共同守护我们的地球家园。'
  },
  {
    id: 4,
    title: '亲子游乐天堂',
    subtitle: '创造美好回忆',
    image: 'https://images.unsplash.com/photo-1544273677-6e4b999de2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: '专为家庭设计的互动体验项目，让大人和孩子都能找到属于自己的快乐。'
  }
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${carouselData[currentIndex].image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                >
                  {carouselData[currentIndex].title}
                </motion.h1>
                
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl md:text-2xl lg:text-3xl mb-6 text-green-300"
                >
                  {carouselData[currentIndex].subtitle}
                </motion.h2>
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                >
                  {carouselData[currentIndex].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="space-x-4"
                >
                  <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
                    立即购票
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-full font-semibold transition-all duration-200">
                    了解更多
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 导航按钮 */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 播放/暂停按钮 */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel