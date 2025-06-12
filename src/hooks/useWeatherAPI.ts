/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from 'react';
import { CurrentWeather, ForecastData, SearchHistoryItem } from '../types/weather';
import { Translation } from '../i18n/translations';

const API_KEY = '2612b2545082c7ac4977e80e26ddfb91'; // Users will need to add their own API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

interface WeatherState {
  currentWeather: CurrentWeather | null;
  forecast: ForecastData | null;
  loading: boolean;
  error: string | null;
}

export const useWeatherAPI = (translation: Translation) => {
  const [weatherState, setWeatherState] = useState<WeatherState>({
    currentWeather: null,
    forecast: null,
    loading: false,
    error: null,
  });

  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('weatherSearchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to load search history:', error);
      }
    }
  }, []);

  // Save search history to localStorage
  const saveToHistory = useCallback((city: string, country: string) => {
    const newItem: SearchHistoryItem = {
      id: Date.now().toString(),
      city,
      country,
      timestamp: Date.now(),
    };

    setSearchHistory(prev => {
      const filtered = prev.filter(item => 
        !(item.city.toLowerCase() === city.toLowerCase() && 
          item.country.toLowerCase() === country.toLowerCase())
      );
      const newHistory = [newItem, ...filtered].slice(0, 10); // Keep only last 10 searches
      localStorage.setItem('weatherSearchHistory', JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  // const getErrorMessage = (error: any): string => {
  //   if (error.message?.includes('404')) {
  //     return translation.cityNotFound;
  //   }
  //   if (error.message?.includes('network') || error.message?.includes('fetch')) {
  //     return translation.networkError;
  //   }
  //   return error.message || translation.networkError;
  // };
  const getErrorMessage = (error: unknown): string => {
    if (typeof error === 'object' && error !== null && 'message' in error && typeof (error as { message: string }).message === 'string') {
      const message = (error as { message: string }).message;
      if (message.includes('404')) {
        return translation.cityNotFound;
      }
      if (message.includes('network') || message.includes('fetch')) {
        return translation.networkError;
      }
      return message || translation.networkError;
    }
    return translation.networkError;
  };

  const fetchWeatherByCoords = useCallback(async (lat: number, lon: number) => {
    if (!API_KEY) {
      setWeatherState(prev => ({
        ...prev,
        error: translation.apiKeyMissing,
        loading: false,
      }));
      return;
    }

    setWeatherState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`),
        fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`)
      ]);

      if (!currentResponse.ok || !forecastResponse.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const currentWeather: CurrentWeather = await currentResponse.json();
      const forecast: ForecastData = await forecastResponse.json();

      setWeatherState({
        currentWeather,
        forecast,
        loading: false,
        error: null,
      });

      // Save to history
      saveToHistory(currentWeather.name, currentWeather.sys.country);
    } catch (error) {
      setWeatherState(prev => ({
        ...prev,
        loading: false,
        error: getErrorMessage(error),
      }));
    }
  }, [saveToHistory, translation]);

  const fetchWeatherByCity = useCallback(async (city: string) => {
    if (!API_KEY) {
      setWeatherState(prev => ({
        ...prev,
        error: translation.apiKeyMissing,
        loading: false,
      }));
      return;
    }

    setWeatherState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const [currentResponse, forecastResponse] = await Promise.all([
        fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`),
        fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
      ]);

      if (!currentResponse.ok || !forecastResponse.ok) {
        throw new Error('City not found or failed to fetch weather data');
      }

      const currentWeather: CurrentWeather = await currentResponse.json();
      const forecast: ForecastData = await forecastResponse.json();

      setWeatherState({
        currentWeather,
        forecast,
        loading: false,
        error: null,
      });

      // Save to history
      saveToHistory(currentWeather.name, currentWeather.sys.country);
    } catch (error) {
      setWeatherState(prev => ({
        ...prev,
        loading: false,
        error: getErrorMessage(error),
      }));
    }
  }, [saveToHistory, translation]);

  const clearSearchHistory = useCallback(() => {
    setSearchHistory([]);
    localStorage.removeItem('weatherSearchHistory');
  }, []);

  return {
    ...weatherState,
    searchHistory,
    fetchWeatherByCoords,
    fetchWeatherByCity,
    clearSearchHistory,
  };
};