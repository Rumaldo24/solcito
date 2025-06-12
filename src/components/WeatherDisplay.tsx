import React from "react";
import {
  Thermometer,
  Eye,
  Wind,
  Droplets,
  Sunrise,
  Sunset,
  Gauge,
  MapPin,
} from "lucide-react";
import { CurrentWeather } from "../types/weather";
import { Translation } from "../i18n/translations";
import {
  getWeatherIcon,
  formatTemperature,
  formatWindSpeed,
  formatTime,
  formatFullDate,
  translateWeatherCondition,
} from "../utils/weatherHelpers";

interface WeatherDisplayProps {
  weather: CurrentWeather;
  isDark: boolean;
  translation: Translation;
}

export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  weather,
  isDark,
  translation,
}) => {
  const cardClasses = `rounded-3xl p-6 backdrop-blur-sm border-2 transition-all duration-300
    ${
      isDark
        ? "bg-slate-800/30 border-slate-600/30"
        : "bg-white/20 border-white/30"
    } shadow-xl hover:shadow-2xl transform hover:scale-[1.02]`;

  const textClasses = isDark ? "text-white" : "text-slate-900";
  const secondaryTextClasses = isDark ? "text-slate-300" : "text-slate-700";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Main Weather Card */}
      <div className={`${cardClasses} lg:col-span-2`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <h2 className={`text-2xl font-bold ${textClasses}`}>
                {weather.name}, {weather.sys.country}
              </h2>
            </div>
            <p className={`${secondaryTextClasses} text-sm`}>
              {formatFullDate(translation)}
            </p>
          </div>
          <div className="text-right">
            <div className={`text-5xl font-bold ${textClasses} mb-2`}>
              {formatTemperature(weather.main.temp)}
            </div>
            <div className={`${secondaryTextClasses} text-sm`}>
              {translation.feelsLike}{" "}
              {formatTemperature(weather.main.feels_like)}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <img
            src={getWeatherIcon(weather.weather[0].icon, true)}
            alt={weather.weather[0].description}
            className="w-24 h-24"
          />
          <div className="ml-4">
            <div className={`text-xl font-semibold ${textClasses} mb-1`}>
              {translateWeatherCondition(weather.weather[0].main, translation)}
            </div>
            <div className={`${secondaryTextClasses} text-sm`}>
              Máx: {formatTemperature(weather.main.temp_max)} Mín:{" "}
              {formatTemperature(weather.main.temp_min)}
            </div>
          </div>
        </div>

        {/* Weather Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <Droplets className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <div className={`text-lg font-semibold ${textClasses}`}>
              {weather.main.humidity}%
            </div>
            <div className={`${secondaryTextClasses} text-xs`}>
              {translation.humidity}
            </div>
          </div>
          <div className="text-center">
            <Wind className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className={`text-lg font-semibold ${textClasses}`}>
              {formatWindSpeed(weather.wind.speed)}
            </div>
            <div className={`${secondaryTextClasses} text-xs`}>
              {translation.windSpeed}
            </div>
          </div>
          <div className="text-center">
            <Eye className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <div className={`text-lg font-semibold ${textClasses}`}>
              {weather.visibility / 1000} km
            </div>
            <div className={`${secondaryTextClasses} text-xs`}>
              {translation.visibility}
            </div>
          </div>
          <div className="text-center">
            <Gauge className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <div className={`text-lg font-semibold ${textClasses}`}>
              {weather.main.pressure} hPa
            </div>
            <div className={`${secondaryTextClasses} text-xs`}>
              {translation.pressure}
            </div>
          </div>
        </div>
      </div>

      {/* Sun Times Card */}
      <div className={cardClasses}>
        <h3 className={`text-xl font-bold ${textClasses} mb-6 text-center`}>
          {translation.sunTimes}
        </h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-orange-500/20">
                <Sunrise className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <div className={`font-medium ${textClasses}`}>
                  {translation.sunrise}
                </div>
                <div className={`text-sm ${secondaryTextClasses}`}>
                  {formatTime(weather.sys.sunrise, weather.timezone)}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-purple-500/20">
                <Sunset className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className={`font-medium ${textClasses}`}>
                  {translation.sunset}
                </div>
                <div className={`text-sm ${secondaryTextClasses}`}>
                  {formatTime(weather.sys.sunset, weather.timezone)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temperature Range */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-sm ${secondaryTextClasses}`}>
              {translation.temperatureRange}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-blue-400" />
              <span className={`text-sm ${textClasses}`}>
                {formatTemperature(weather.main.temp_min)}
              </span>
            </div>
            <div className="flex-1 h-2 bg-gradient-to-r from-blue-400 to-red-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-red-400" />
              <span className={`text-sm ${textClasses}`}>
                {formatTemperature(weather.main.temp_max)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
