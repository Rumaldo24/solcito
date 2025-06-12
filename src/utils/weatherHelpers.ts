import { Translation } from '../i18n/translations';

export const getWeatherIcon = (iconCode: string, isLarge: boolean = false) => {
  const size = isLarge ? '@4x' : '@2x';
  return `https://openweathermap.org/img/wn/${iconCode}${size}.png`;
};

export const formatTemperature = (temp: number): string => {
  return `${Math.round(temp)}°C`;
};

export const formatWindSpeed = (speed: number): string => {
  return `${Math.round(speed * 3.6)} km/h`; // Convert m/s to km/h
};

export const formatTime = (timestamp: number, timezone: number): string => {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const formatDate = (timestamp: number, translation: Translation): string => {
  const date = new Date(timestamp * 1000);
  const dayNames = [
    translation.sunday,
    translation.monday,
    translation.tuesday,
    translation.wednesday,
    translation.thursday,
    translation.friday,
    translation.saturday
  ];

  const monthNames = [
    translation.january,
    translation.february,
    translation.march,
    translation.april,
    translation.may,
    translation.june,
    translation.july,
    translation.august,
    translation.september,
    translation.october,
    translation.november,
    translation.december
  ];

  const dayName = dayNames[date.getDay()];
  const monthName = monthNames[date.getMonth()];

  return `${dayName.slice(0, 3)} ${date.getDate()} ${monthName.slice(0, 3)}`;
};

export const formatFullDate = (translation: Translation): string => {
  const date = new Date();
  const dayNames = [
    translation.sunday,
    translation.monday,
    translation.tuesday,
    translation.wednesday,
    translation.thursday,
    translation.friday,
    translation.saturday
  ];

  const monthNames = [
    translation.january,
    translation.february,
    translation.march,
    translation.april,
    translation.may,
    translation.june,
    translation.july,
    translation.august,
    translation.september,
    translation.october,
    translation.november,
    translation.december
  ];

  const dayName = dayNames[date.getDay()];
  const monthName = monthNames[date.getMonth()];

  return `${dayName}, ${date.getDate()} de ${monthName} de ${date.getFullYear()}`;
};

export const getWeatherBackground = (weatherMain: string, isDaytime: boolean): string => {
  const baseClasses = "min-h-screen transition-all duration-1000 ";

  if (!isDaytime) {
    return baseClasses + "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800";
  }

  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return baseClasses + "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600";
    case 'clouds':
      return baseClasses + "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600";
    case 'rain':
    case 'drizzle':
      return baseClasses + "bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800";
    case 'thunderstorm':
      return baseClasses + "bg-gradient-to-br from-gray-800 via-gray-900 to-black";
    case 'snow':
      return baseClasses + "bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300";
    case 'mist':
    case 'fog':
    case 'haze':
      return baseClasses + "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500";
    default:
      return baseClasses + "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600";
  }
};

export const isDaytime = (currentTime: number, sunrise: number, sunset: number, timezone: number): boolean => {
  const localTime = currentTime + timezone;
  const localSunrise = sunrise + timezone;
  const localSunset = sunset + timezone;

  return localTime >= localSunrise && localTime <= localSunset;
};

export const getWeatherAnimation = (weatherMain: string): string => {
  switch (weatherMain.toLowerCase()) {
    case 'rain':
    case 'drizzle':
      return 'animate-pulse';
    case 'snow':
      return 'animate-bounce';
    case 'thunderstorm':
      return 'animate-pulse';
    default:
      return '';
  }
};

export const capitalizeWords = (str: string): string => {
  return str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
};

export const translateWeatherCondition = (condition: string, translation: Translation): string => {
  const conditionMap: Record<string, keyof Translation> = {
    'clear': 'clear',
    'clouds': 'clouds',
    // 'rain': 'rain',
    'rain': 'forecastRain',
    'drizzle': 'drizzle',
    'thunderstorm': 'thunderstorm',
    'snow': 'snow',
    'mist': 'mist',
    'fog': 'fog',
    'haze': 'haze',
  };
  //forecastRain
  const translationKey = conditionMap[condition.toLowerCase()];
  return translationKey ? translation[translationKey] : capitalizeWords(condition);
};