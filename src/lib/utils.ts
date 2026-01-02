import { twMerge } from "tailwind-merge"

export function cn(...inputs: (string | undefined | null | false)[]): string {
  return twMerge(inputs.filter(Boolean).join(' '))
}

export interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  city: string;
  name: string;
  // 添加原始天气数据结构
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  wind: {
    speed: number;
  };
}

export async function getWeatherData(): Promise<WeatherData | null> {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo_key';
    const city = 'Shenyang';
    
    if (API_KEY === 'demo_key') {
      // 返回符合真实API结构的模拟数据
      return {
        temperature: 22,
        description: '晴天',
        humidity: 60,
        windSpeed: 3.5,
        icon: '☀️',
        city: '沈阳',
        name: 'A',
        weather: [{
          main: 'Clear',
          description: '晴天',
          icon: '01d'
        }],
        main: {
          temp: 22,
          humidity: 60,
           feels_like: 24,
        },
        wind: {
          speed: 3.5
        }
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
      city: '沈阳',
      name :'A',
      // 保留原始数据结构
      weather: data.weather,
      main: data.main,
      wind: data.wind
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