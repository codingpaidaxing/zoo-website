export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export async function getWeatherData(): Promise<WeatherData | null> {
  try {
    // 使用免费的天气API
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || 'demo_key';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Shenyang,CN&appid=${API_KEY}&units=metric&lang=zh_cn`
    );
    
    if (!response.ok) {
      // 返回模拟数据作为备选
      return {
        name: '沈阳',
        main: {
          temp: 22,
          feels_like: 24,
          humidity: 65
        },
        weather: [{
          main: 'Clear',
          description: '晴朗',
          icon: '01d'
        }],
        wind: {
          speed: 3.2
        }
      };
    }
    
    return await response.json();
  } catch (error) {
    console.error('获取天气数据失败:', error);
    return null;
  }
}

export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}