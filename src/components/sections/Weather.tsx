'use client'

import React, { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, Thermometer, Wind, Droplets } from 'lucide-react'
import { getWeatherData } from '@/lib/utils'
import type { WeatherData } from '@/types'

const Weather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getWeatherData()
        setWeather(data)
      } catch (error) {
        console.error('获取天气失败:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  const getWeatherIcon = (weatherMain: string) => {
    switch (weatherMain.toLowerCase()) {
      case 'clear':
        return <Sun className="w-8 h-8 text-yellow-500" />
      case 'clouds':
        return <Cloud className="w-8 h-8 text-gray-500" />
      case 'rain':
        return <CloudRain className="w-8 h-8 text-blue-500" />
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />
    }
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
          <div className="h-8 bg-white/20 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (!weather) {
    return (
      <div className="bg-gradient-to-r from-gray-500 to-gray-600 text-white p-6 rounded-xl shadow-lg">
        <p className="text-center">天气信息暂不可用</p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">{weather.name}天气</h3>
          <p className="text-sm text-blue-100">今日游园参考</p>
        </div>
        {getWeatherIcon(weather.weather[0].main)}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Thermometer className="w-5 h-5 text-yellow-300" />
          <div>
            <p className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
            <p className="text-xs text-blue-100">体感 {Math.round(weather.main.feels_like)}°C</p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center space-x-1">
            <Wind className="w-4 h-4" />
            <span>风速 {weather.wind.speed} m/s</span>
          </div>
          <div className="flex items-center space-x-1">
            <Droplets className="w-4 h-4" />
            <span>湿度 {weather.main.humidity}%</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-blue-100">{weather.weather[0].description}</p>
        <p className="text-xs text-blue-200 mt-1">
          {weather.main.temp > 20 ? '适宜游园，请注意防晒' : '天气凉爽，适合户外活动'}
        </p>
      </div>
    </div>
  )
}

export default Weather