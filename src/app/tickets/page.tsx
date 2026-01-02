'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Ticket, 
  Calendar, 
  Users, 
  Clock, 
  Star, 
  Gift, 
  CreditCard,
  AlertCircle,
  CheckCircle
} from 'lucide-react'

const TicketsPage = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [ticketQuantity, setTicketQuantity] = useState({
    adult: 0,
    child: 0,
    senior: 0
  })

  const ticketTypes = [
    {
      id: 'adult',
      name: '成人票',
      price: 120,
      originalPrice: 150,
      description: '18-59周岁成人',
      features: ['全园游览', '免费停车', '动物表演'],
      popular: true
    },
    {
      id: 'child',
      name: '儿童票',
      price: 80,
      originalPrice: 100,
      description: '3-17周岁儿童',
      features: ['全园游览', '免费停车', '动物表演', '儿童游乐区'],
      popular: false
    },
    {
      id: 'senior',
      name: '老年票',
      price: 90,
      originalPrice: 120,
      description: '60周岁以上老人',
      features: ['全园游览', '免费停车', '动物表演', '无障碍通道'],
      popular: false
    }
  ]

  const totalAmount = ticketTypes.reduce((total, ticket) => {
    return total + (ticket.price * ticketQuantity[ticket.id as keyof typeof ticketQuantity])
  }, 0)

  const totalTickets = Object.values(ticketQuantity).reduce((total, qty) => total + qty, 0)

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">网上订票</h1>
          <p className="text-xl text-gray-600">便捷购票，畅游动物园</p>
        </motion.div>

        {/* 功能开发提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AlertCircle className="w-8 h-8" />
              <h2 className="text-2xl font-bold">在线购票系统</h2>
            </div>
            <div className="text-center">
              <p className="text-lg mb-4">🚀 精彩即将呈现！</p>
              <p className="text-blue-100 mb-6">
                我们的在线购票系统正在紧张开发中，即将为您提供更便捷的购票体验。
                目前您可以通过以下方式购买门票：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">📞 电话购票</h3>
                  <p className="text-sm">400-123-4567</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">🏪 现场购票</h3>
                  <p className="text-sm">园区售票处</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">📱 微信购票</h3>
                  <p className="text-sm">关注公众号</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 票价信息 */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-6"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Ticket className="w-8 h-8 text-green-600 mr-3" />
                门票类型
              </h2>

              <div className="space-y-4">
                {ticketTypes.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative border-2 rounded-xl p-6 transition-all duration-200 ${
                      ticket.popular 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    {ticket.popular && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          推荐
                        </span>
                      </div>
                    )}

                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{ticket.name}</h3>
                        <p className="text-gray-600 mb-3">{ticket.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {ticket.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-green-600">
                            ¥{ticket.price}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            ¥{ticket.originalPrice}
                          </span>
                          <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                            省¥{ticket.originalPrice - ticket.price}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 ml-4">
                        <button
                          onClick={() => {
                            if (ticketQuantity[ticket.id as keyof typeof ticketQuantity] > 0) {
                              setTicketQuantity(prev => ({
                                ...prev,
                                [ticket.id]: prev[ticket.id as keyof typeof ticketQuantity] - 1
                              }))
                            }
                          }}
                          className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold transition-colors"
                        >
                          -
                        </button>
                        <span className="text-xl font-bold min-w-[2rem] text-center">
                          {ticketQuantity[ticket.id as keyof typeof ticketQuantity]}
                        </span>
                        <button
                          onClick={() => {
                            setTicketQuantity(prev => ({
                              ...prev,
                              [ticket.id]: prev[ticket.id as keyof typeof ticketQuantity] + 1
                            }))
                          }}
                          className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center text-xl font-bold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 日期选择 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-6 h-6 text-green-600 mr-2" />
                选择游览日期
              </h3>
              
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-2 text-yellow-800">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">开园时间：08:00 - 18:00</span>
                </div>
                <p className="text-sm text-yellow-700 mt-1">
                  建议提前30分钟到达，最晚入园时间：17:00
                </p>
              </div>
            </motion.div>
          </div>

          {/* 订单摘要 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 text-green-600 mr-2" />
                订单摘要
              </h3>

              <div className="space-y-4 mb-6">
                {ticketTypes.map((ticket) => {
                  const quantity = ticketQuantity[ticket.id as keyof typeof ticketQuantity]
                  if (quantity === 0) return null
                  
                  return (
                    <div key={ticket.id} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{ticket.name}</span>
                        <span className="text-gray-500 ml-2">x {quantity}</span>
                      </div>
                      <span className="font-semibold">¥{ticket.price * quantity}</span>
                    </div>
                  )
                })}
              </div>

              {totalTickets > 0 && (
                <>
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">小计</span>
                      <span className="font-semibold">¥{totalAmount}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">优惠</span>
                      <span className="text-green-600">-¥0</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>总计</span>
                      <span className="text-green-600">¥{totalAmount}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <Gift className="w-5 h-5" />
                    <span>立即购买（开发中）</span>
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    点击购买表示同意我们的服务条款
                  </p>
                </>
              )}

              {totalTickets === 0 && (
                <div className="text-center py-8">
                  <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">请选择门票数量</p>
                </div>
              )}

              {/* 优惠提示 */}
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                <div className="flex items-center space-x-2 text-orange-800 mb-2">
                  <Gift className="w-5 h-5" />
                  <span className="font-medium">限时优惠</span>
                </div>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• 买3张送1张儿童票</li>
                  <li>• 周末家庭套票8折</li>
                  <li>• 生日当月半价优惠</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 购票须知 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
              购票须知
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">入园规则</h4>
                <ul className="space-y-1">
                  <li>• 门票当日有效，过期作废</li>
                  <li>• 儿童票需携带有效证件</li>
                  <li>• 老年票需出示身份证</li>
                  <li>• 禁止携带宠物入园</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">退改政策</h4>
                <ul className="space-y-1">
                  <li>• 可在游览日前1天免费取消</li>
                  <li>• 游览当天不支持退款</li>
                  <li>• 改期需提前24小时申请</li>
                  <li>• 恶劣天气可免费改期</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TicketsPage