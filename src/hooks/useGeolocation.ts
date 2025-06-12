import { useState, useEffect } from 'react';
import { Translation } from '../i18n/translations';

interface GeolocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  loading: boolean;
}

export const useGeolocation = (translation: Translation) => {
  const [location, setLocation] = useState<GeolocationState>({
    latitude: null,
    longitude: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        error: 'La geolocalización no es compatible con este navegador.',
        loading: false,
      }));
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        loading: false,
      });
    };

    const handleError = (error: GeolocationPositionError) => {
      let errorMessage = 'No se pudo obtener tu ubicación';
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = translation.locationDenied;
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = translation.locationUnavailable;
          break;
        case error.TIMEOUT:
          errorMessage = translation.locationTimeout;
          break;
      }

      setLocation(prev => ({
        ...prev,
        error: errorMessage,
        loading: false,
      }));
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 600000, // 10 minutes
    });
  }, [translation]);

  return location;
};