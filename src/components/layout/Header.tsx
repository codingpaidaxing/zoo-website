'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock, Share2 } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigationItems = [
    { name: '首页', href: '/', key: 'home' },
    { name: '关于我们', href: '/about', key: 'about' },
    { name: '园区资讯', href: '/news', key: 'news' },
    { name: '园区展示', href: '/showcase', key: 'showcase' },
    { name: '动物表演', href: '/performances', key: 'performances' },
    { name: '保护教育', href: '/education', key: 'education' },
    { name: '游园指南', href: '/guide', key: 'guide' },
    { name: '网上订票', href: '/tickets', key: 'tickets' },
    { name: '餐饮娱乐', href: '/dining', key: 'dining' },
    { name: '招商项目', href: '/investment', key: 'investment' },
    { name: '在线留言', href: '/message', key: 'message' },
    { name: '联系我们', href: '/contact', key: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '沈阳野生动物园',
        text: '来沈阳野生动物园，与自然共舞，与动物为友！',
        url: window.location.href,
      })
    } else {
      // 备选分享方案
      const url = encodeURIComponent(window.location.href)
      const text = encodeURIComponent('沈阳野生动物园 - 与自然共舞，与动物为友！')
      window.open(`https://service.weibo.com/share/share.php?url=${url}&title=${text}`, '_blank')
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* 顶部信息栏 */}
      <div className="bg-green-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>24小时咨询热线: 400-123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>开园时间: 08:00 - 18:00</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>地址: 沈阳市棋盘山开发区</span>
            </div>
          </div>
          <button 
            onClick={handleShare}
            className="flex items-center space-x-1 hover:text-green-200 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>分享</span>
          </button>
        </div>
      </div>

      {/* 主导航 */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🦁</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-700">沈阳野生动物园</h1>
              <p className="text-sm text-gray-600">与自然共舞，与动物为友</p>
            </div>
          </Link>

          {/* 桌面导航 */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.slice(0, 8).map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* 更多菜单 */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-all duration-200">
                更多 ▼
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navigationItems.slice(8).map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 移动端导航菜单 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-lg border overflow-hidden"
            >
              <div className="py-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header