import React from 'react';
import { Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import { ForecastData } from '../types/weather';
import { Translation } from '../i18n/translations';
import { 
  getWeatherIcon, 
  formatTemperature, 
  formatDate,
  translateWeatherCondition
} from '../utils/weatherHelpers';

interface ForecastDisplayProps {
  forecast: ForecastData;
  isDark: boolean;
  translation: Translation;
}

export const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ forecast, isDark, translation }) => {
  // Pronóstico del grupo por día y obtención de un artículo por día (alrededor del mediodía)
  const dailyForecasts = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();
    if (!acc[date] || new Date(item.dt * 1000).getHours() === 12) {
      acc[date] = item;
    }
    return acc;
  }, {} as Record<string, typeof forecast.list[0]>);

  const forecastItems = Object.values(dailyForecasts).slice(0, 5);

  const cardClasses = `rounded-3xl p-6 backdrop-blur-sm border-2 transition-all duration-300
    ${isDark 
      ? 'bg-slate-800/30 border-slate-600/30' 
      : 'bg-white/20 border-white/30'
    } shadow-xl hover:shadow-2xl`;

  const textClasses = isDark ? 'text-white' : 'text-white';
  const secondaryTextClasses = isDark ? 'text-slate-300' : 'text-white/80';

  return (
    <div className={`${cardClasses} max-w-6xl mx-auto`}>
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="w-6 h-6 text-blue-400" />
        <h3 className={`text-2xl font-bold ${textClasses}`}>{translation.forecast5Day}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {forecastItems.map((item, index) => {
          const isToday = index === 0;
          const date = formatDate(item.dt, translation);
          
          return (
            <div
              key={item.dt}
              className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105
                ${isDark 
                  ? 'bg-slate-700/30 hover:bg-slate-700/50' 
                  : 'bg-white/10 hover:bg-white/20'
                } border ${isDark ? 'border-slate-600/30' : 'border-white/20'}`}
            >
              <div className="text-center">
                <div className={`font-medium ${textClasses} mb-2 text-sm`}>
                  {isToday ? translation.today : date}
                </div>
                
                <img
                  src={getWeatherIcon(item.weather[0].icon)}
                  alt={item.weather[0].description}
                  className="w-12 h-12 mx-auto mb-2"
                />
                
                <div className={`text-xs ${secondaryTextClasses} mb-3 leading-tight`}>
                  {translateWeatherCondition(item.weather[0].main, translation)}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3 text-red-400" />
                    <span className={`text-sm font-semibold ${textClasses}`}>
                      {formatTemperature(item.main.temp_max)}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-1">
                    <TrendingDown className="w-3 h-3 text-blue-400" />
                    <span className={`text-sm ${secondaryTextClasses}`}>
                      {formatTemperature(item.main.temp_min)}
                    </span>
                  </div>
                </div>
                
                {item.pop > 0 && (
                  <div className={`text-xs ${secondaryTextClasses} mt-2`}>
                    {Math.round(item.pop * 100)}% {translation.forecastRain}
                    {/* {Math.round(item.pop * 100)}% {translation.weatherConditionRain} */}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pronóstico por hora de hoy */}
      <div className="mt-8">
        <h4 className={`text-lg font-semibold ${textClasses} mb-4`}>{translation.todayHourlyForecast}</h4>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {forecast.list.slice(0, 8).map((item) => {
            const time = new Date(item.dt * 1000).toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            });
            
            return (
              <div
                key={item.dt}
                className={`flex-shrink-0 p-3 rounded-xl text-center min-w-[80px]
                  ${isDark 
                    ? 'bg-slate-700/30' 
                    : 'bg-white/10'
                  } border ${isDark ? 'border-slate-600/30' : 'border-white/20'}`}
              >
                <div className={`text-xs ${secondaryTextClasses} mb-2`}>{time}</div>
                <img
                  src={getWeatherIcon(item.weather[0].icon)}
                  alt={item.weather[0].description}
                  className="w-8 h-8 mx-auto mb-2"
                />
                <div className={`text-sm font-medium ${textClasses}`}>
                  {formatTemperature(item.main.temp)}
                </div>
                {item.pop > 0 && (
                  <div className={`text-xs ${secondaryTextClasses} mt-1`}>
                    {Math.round(item.pop * 100)}%
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};