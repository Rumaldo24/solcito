import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Translation } from "../i18n/translations";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  isDark: boolean;
  translation: Translation;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
  isDark,
  translation,
}) => {
  const cardClasses = `rounded-3xl p-8 backdrop-blur-sm border-2 transition-all duration-300
    ${
      isDark
        ? "bg-red-900/30 border-red-700/50"
        : "bg-red-500/20 border-red-400/50"
    } shadow-xl max-w-md mx-auto text-center`;

  const textClasses = isDark ? "text-white" : "text-white";

  return (
    <div className={cardClasses}>
      <div className="flex flex-col items-center">
        <div className="p-4 rounded-full bg-red-500/20 mb-4">
          <AlertCircle className="w-8 h-8 text-red-400" />
        </div>

        <h3 className={`text-xl font-bold ${textClasses} mb-3`}>
          {translation.somethingWentWrong}
        </h3>

        <p className={`${textClasses} mb-6 leading-relaxed`}>{message}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 
                       rounded-2xl border-2 border-blue-400/50 text-white font-medium
                       transition-all duration-300 transform hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" />
            {translation.tryAgain}
          </button>
        )}
      </div>
    </div>
  );
};
