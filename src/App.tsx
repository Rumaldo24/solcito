import { useState, useEffect } from "react";
import { SearchBar } from "./components/SearchBar";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { ForecastDisplay } from "./components/ForecastDisplay";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ErrorMessage } from "./components/ErrorMessage";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageSelector } from "./components/LanguageSelector";
import { useGeolocation } from "./hooks/useGeolocation";
import { useWeatherAPI } from "./hooks/useWeatherAPI";
import { useLanguage } from "./hooks/useLanguage";
import {
  getWeatherBackground,
  isDaytime,
  getWeatherAnimation,
} from "./utils/weatherHelpers";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [hasRequestedLocation, setHasRequestedLocation] = useState(false);

  const { currentLanguage, translation, changeLanguage } = useLanguage();
  const geolocation = useGeolocation(translation);
  const weatherAPI = useWeatherAPI(translation);

  // Auto-fetch weather based on geolocation when available
  // Obtener automáticamente el clima según la geolocalización cuando esté disponible
  useEffect(() => {
    if (
      geolocation.latitude &&
      geolocation.longitude &&
      !hasRequestedLocation
    ) {
      weatherAPI.fetchWeatherByCoords(
        geolocation.latitude,
        geolocation.longitude
      );
      setHasRequestedLocation(true);
    }
  }, [
    geolocation.latitude,
    geolocation.longitude,
    hasRequestedLocation,
    weatherAPI,
  ]);

  // Determine background and animations based on weather
  // Determinar el fondo y las animaciones según el clima
  const backgroundClass = weatherAPI.currentWeather
    ? getWeatherBackground(
        weatherAPI.currentWeather.weather[0].main,
        isDaytime(
          weatherAPI.currentWeather.dt,
          weatherAPI.currentWeather.sys.sunrise,
          weatherAPI.currentWeather.sys.sunset,
          weatherAPI.currentWeather.timezone
        )
      )
    : `min-h-screen transition-all duration-1000 ${
        isDark
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
          : "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
        // isDark ? "bg-neutral-900 text-white" : "bg-white !text-black"
      }`;

  const weatherAnimation = weatherAPI.currentWeather
    ? getWeatherAnimation(weatherAPI.currentWeather.weather[0].main)
    : "";

  const handleLocationRequest = () => {
    if (geolocation.latitude && geolocation.longitude) {
      weatherAPI.fetchWeatherByCoords(
        geolocation.latitude,
        geolocation.longitude
      );
    }
  };

  const handleRetry = () => {
    if (geolocation.latitude && geolocation.longitude) {
      weatherAPI.fetchWeatherByCoords(
        geolocation.latitude,
        geolocation.longitude
      );
    }
  };

  return (
    <div
      className={`${backgroundClass} ${weatherAnimation} relative overflow-x-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 min-h-screen p-4">
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={changeLanguage}
        />
        <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
              {translation.appTitle}
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              {translation.appSubtitle}
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar
              onSearch={weatherAPI.fetchWeatherByCity}
              onLocationRequest={handleLocationRequest}
              searchHistory={weatherAPI.searchHistory}
              onClearHistory={weatherAPI.clearSearchHistory}
              loading={weatherAPI.loading}
              isDark={isDark}
              translation={translation}
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {weatherAPI.loading && (
              <LoadingSpinner
                message={
                  hasRequestedLocation
                    ? translation.gettingLocalWeather
                    : translation.loadingWeather
                }
                isDark={isDark}
                translation={translation}
              />
            )}

            {weatherAPI.error && !weatherAPI.loading && (
              <ErrorMessage
                message={weatherAPI.error}
                onRetry={handleRetry}
                isDark={isDark}
                translation={translation}
              />
            )}

            {geolocation.error &&
              !geolocation.loading &&
              !weatherAPI.currentWeather &&
              !weatherAPI.loading && (
                <ErrorMessage
                  message={`${geolocation.error}. Por favor, busca una ciudad manualmente o habilita el acceso a la ubicación.`}
                  isDark={isDark}
                  translation={translation}
                />
              )}

            {weatherAPI.currentWeather && !weatherAPI.loading && (
              <>
                <WeatherDisplay
                  weather={weatherAPI.currentWeather}
                  isDark={isDark}
                  translation={translation}
                />

                {weatherAPI.forecast && (
                  <ForecastDisplay
                    forecast={weatherAPI.forecast}
                    isDark={isDark}
                    translation={translation}
                  />
                )}
              </>
            )}

            {!weatherAPI.currentWeather &&
              !weatherAPI.loading &&
              !weatherAPI.error &&
              !geolocation.error && (
                <div className="text-center text-white/80 py-12">
                  <p className="text-xl mb-4">{translation.welcome}</p>
                  <p>{translation.welcomeMessage}</p>
                </div>
              )}
          </div>

          {/* Footer */}
          <footer className="text-center text-white/90 py-8 mt-12">
            <p className="text-sm">{translation.footerText}</p>
            <p className="text-sm">
              {translation.by}
              <a
                href="https://www.linkedin.com/in/rumaldo-riquelme20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline ml-1 text-sm"
              >
                {" "}
                {translation.footerCredits}
              </a>
            </p>
          </footer>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;
