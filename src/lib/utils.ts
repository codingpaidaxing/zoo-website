import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 定义天气数据类型
export interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  city: string;
}

export async function getWeatherData(): Promise<WeatherData | null> {
  try {
    // 使用免费的天气API
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo_key';
    const city = 'Shenyang';
    
    // 如果是demo_key，返回模拟数据
    if (API_KEY === 'demo_key') {
      return {
        temperature: 22,
        description: '晴天',
        humidity: 60,
        windSpeed: 3.5,
        icon: '☀️',
        city: '沈阳'
      };
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=zh_cn`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    const data = await response.json();
    
    return {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      icon: getWeatherIcon(data.weather[0].main),
      city: '沈阳'
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

function getWeatherIcon(weatherMain: string): string {
  const iconMap: { [key: string]: string } = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Snow': '❄️',
    'Thunderstorm': '⛈️',
    'Drizzle': '🌦️',
    'Mist': '🌫️',
    'Fog': '🌫️'
  };
  
  return iconMap[weatherMain] || '🌤️';
}