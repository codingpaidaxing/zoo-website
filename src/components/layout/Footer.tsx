import React from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram,
  MessageCircle
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: '关于我们', href: '/about' },
    { name: '园区展示', href: '/showcase' },
    { name: '动物表演', href: '/performances' },
    { name: '游园指南', href: '/guide' },
  ]

  const services = [
    { name: '网上订票', href: '/tickets' },
    { name: '餐饮娱乐', href: '/dining' },
    { name: '保护教育', href: '/education' },
    { name: '招商项目', href: '/investment' },
  ]

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 联系信息 */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🦁</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">沈阳野生动物园</h3>
                <p className="text-sm text-gray-300">与自然共舞，与动物为友</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>400-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span>info@syzoo.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>沈阳市棋盘山开发区</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-400" />
                <span>08:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 服务项目 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">服务项目</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 关注我们 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-blue-400 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-pink-600 p-3 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-gray-700 hover:bg-green-600 p-3 rounded-full transition-colors"
                aria-label="微信"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-gray-700 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">订阅我们的通讯</h5>
              <p className="text-sm text-gray-300 mb-3">获取最新动物资讯和优惠信息</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="输入邮箱地址"
                  className="flex-1 px-3 py-2 bg-gray-600 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              <p>&copy; {currentYear} 沈阳野生动物园. 保留所有权利.</p>
              <p className="mt-1">辽ICP备12345678号-1</p>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-green-400 text-sm transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-green-400 text-sm transition-colors">
                使用条款
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-green-400 text-sm transition-colors">
                网站地图
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer