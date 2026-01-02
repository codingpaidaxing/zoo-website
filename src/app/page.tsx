'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Carousel from '@/components/sections/Carousel'
import Weather from '@/components/sections/Weather'
import WeChatQR from '@/components/sections/WeChatQR'
import { 
  Calendar, 
  Camera, 
  Heart, 
  MapPin, 
  Star, 
  Users,
  Clock,
  Shield,
  Award,
  Ticket
} from 'lucide-react'
import Link from 'next/link'

const Home = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: '动物保护',
      description: '致力于野生动物保护与研究'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '亲子教育',
      description: '寓教于乐的自然科普体验'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: '精彩表演',
      description: '每日多场动物表演秀'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: '安全保障',
      description: '完善的安全设施与服务'
    }
  ]

  const quickLinks = [
    { title: '在线购票', icon: <Ticket className="w-6 h-6" />, href: '/tickets', color: 'bg-blue-500' },
    { title: '园区地图', icon: <MapPin className="w-6 h-6" />, href: '/guide', color: 'bg-green-500' },
    { title: '表演时间', icon: <Clock className="w-6 h-6" />, href: '/performances', color: 'bg-purple-500' },
    { title: '最新资讯', icon: <Calendar className="w-6 h-6" />, href: '/news', color: 'bg-orange-500' },
  ]

  const stats = [
    { number: '200+', label: '动物种类', icon: <Heart className="w-8 h-8" /> },
    { number: '50万+', label: '年接待游客', icon: <Users className="w-8 h-8" /> },
    { number: '15年', label: '运营历史', icon: <Award className="w-8 h-8" /> },
    { number: '4.8', label: '游客评分', icon: <Star className="w-8 h-8" /> },
  ]

  return (
    <div className="mt-24">
      {/* 轮播图 */}
      <Carousel />

      {/* 快捷入口 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  href={link.href}
                  className={`${link.color} text-white p-6 rounded-xl flex flex-col items-center space-y-3 hover:scale-105 transition-transform duration-200 shadow-lg`}
                >
                  {link.icon}
                  <span className="font-semibold">{link.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 侧边栏信息 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: -50 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                  为什么选择我们
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView1 ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="text-green-600 mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <Weather />
              <WeChatQR />
            </div>
          </div>
        </div>
      </section>

      {/* 数据统计 */}
      <section ref={ref2} className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">我们的成就</h2>
            <p className="text-xl text-blue-100">用数字见证我们的专业与用心</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-blue-300 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新资讯预览 */}
      <section ref={ref3} className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">最新资讯</h2>
              <p className="text-xl text-gray-600">了解园区最新动态和精彩活动</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, index) => (
                <motion.article
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView3 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      动物园新闻标题 {item}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      这里是新闻内容的简短摘要，让游客了解最新的园区动态和活动信息...
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">2024-01-{10 + index}</span>
                      <Link 
                        href="/news"
                        className="text-green-600 hover:text-green-700 font-medium"
                      >
                        阅读更多 →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link 
                href="/news"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                查看所有资讯
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home