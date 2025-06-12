import React from 'react';
import { Loader } from 'lucide-react';
import { Translation } from '../i18n/translations';

interface LoadingSpinnerProps {
  message?: string;
  isDark: boolean;
  translation: Translation;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message, 
  isDark,
  translation 
}) => {
  const textClasses = isDark ? 'text-white' : 'text-white';
  const displayMessage = message || translation.loadingWeather;
  
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <Loader className={`w-12 h-12 ${textClasses} animate-spin`} />
        <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
      </div>
      <p className={`mt-4 text-lg ${textClasses} animate-pulse`}>{displayMessage}</p>
    </div>
  );
};