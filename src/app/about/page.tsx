'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">关于我们</h1>
          <p className="text-xl text-gray-600">与自然共舞，与动物为友</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">沈阳野生动物园简介</h2>
            
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                沈阳野生动物园成立于2009年，占地面积240公顷，是集动物保护、科研、教育和旅游观光为一体的大型野生动物园。
                园内饲养着来自世界各地的珍稀动物200多种，3000多只（头）。
              </p>

              <p className="mb-6">
                我们致力于为游客提供与野生动物亲密接触的机会，同时传播动物保护知识，提高公众的环保意识。
                园区采用国际先进的管理理念，为动物创造了接近自然的生活环境。
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-4">我们的使命</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>保护野生动物，维护生物多样性</li>
                <li>开展科学研究，促进动物保护事业发展</li>
                <li>普及环保知识，提高公众保护意识</li>
                <li>提供优质服务，创造美好游园体验</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-4">园区特色</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">生态环境</h4>
                  <p className="text-green-700">模拟动物自然栖息环境，让动物在舒适的环境中生活</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">教育体验</h4>
                  <p className="text-blue-700">丰富的科普活动和互动体验，寓教于乐</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage