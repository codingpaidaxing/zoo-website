'use client'

import React, { useState } from 'react'
import { QrCode, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const WeChatQR = () => {
  const [showQR, setShowQR] = useState(false)

  return (
    <>
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <QrCode className="w-8 h-8" />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">关注我们的微信公众号</h3>
          <p className="text-sm text-green-100 mb-4">
            获取最新动物资讯、优惠票价信息
          </p>
          
          <button
            onClick={() => setShowQR(true)}
            className="bg-white text-green-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            扫码关注
          </button>
        </div>
      </div>

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">微信公众号</h3>
                <button
                  onClick={() => setShowQR(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="text-center">
                {/* 这里应该放实际的二维码图片 */}
                <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center mx-auto mb-4">
                  <div className="text-center">
                    <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">微信公众号二维码</p>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-800 mb-2">沈阳野生动物园</h4>
                <p className="text-sm text-gray-600 mb-4">
                  扫描二维码关注我们，获取最新动物资讯和优惠信息
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-xs text-green-700">
                    ✓ 每日动物科普知识<br/>
                    ✓ 表演时间提醒<br/>
                    ✓ 门票优惠活动<br/>
                    ✓ 园区最新动态
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default WeChatQR