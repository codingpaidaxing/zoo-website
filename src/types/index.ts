export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

export interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

export interface AnimalData {
  id: number;
  name: string;
  species: string;
  image: string;
  description: string;
  habitat: string;
  diet: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}