import React, { useState } from "react";
import { Search, MapPin, History, X } from "lucide-react";
import { SearchHistoryItem } from "../types/weather";
import { Translation } from "../i18n/translations";

interface SearchBarProps {
  onSearch: (city: string) => void;
  onLocationRequest: () => void;
  searchHistory: SearchHistoryItem[];
  onClearHistory: () => void;
  loading: boolean;
  isDark: boolean;
  translation: Translation;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onLocationRequest,
  searchHistory,
  onClearHistory,
  loading,
  isDark,
  translation,
}) => {
  const [query, setQuery] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
      setShowHistory(false);
    }
  };

  const handleHistoryClick = (item: SearchHistoryItem) => {
    onSearch(`${item.city}, ${item.country}`);
    setShowHistory(false);
  };

  const inputClasses = `w-full pl-12 pr-4 py-3 rounded-2xl border-2 transition-all duration-300
    ${
      isDark
        ? "bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-400"
        : "bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white/50"
    } backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50`;

  return (
    <div className="relative w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowHistory(true)}
          placeholder={translation.searchPlaceholder}
          className={inputClasses}
          disabled={loading}
        />
      </form>

      <button
        onClick={onLocationRequest}
        disabled={loading}
        className="absolute right-2 top-2 p-2 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 
                   transition-all duration-300 text-white/80 hover:text-white
                   disabled:opacity-50 disabled:cursor-not-allowed"
        title={translation.useCurrentLocation}
      >
        <MapPin className="w-5 h-5" />
      </button>

      {/* Search History Dropdown - Menú desplegable del historial de búsqueda */}
      {showHistory && searchHistory.length > 0 && (
        <div
          className={`absolute top-full left-0 right-0 mt-2 rounded-2xl border-2 backdrop-blur-sm z-10
          ${isDark ? "bg-slate-800/90 border-slate-600" : "border-white/30"}`}
        >
          <div className="flex items-center justify-between p-3 border-b border-white/20">
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70">{translation.searchHistory}</span>
            </div>
            <button
              onClick={() => setShowHistory(false)}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-white/70" />
            </button>
          </div>
          <div className="max-h-48 overflow-y-auto">
            {searchHistory.map((item) => (
              <button
                key={item.id}
                onClick={() => handleHistoryClick(item)}
                className="w-full text-left p-3 hover:bg-white/10 transition-colors
                           text-white/80 hover:text-white first:rounded-t-none last:rounded-b-2xl"
              >
                <div className="font-medium">{item.city}</div>
                <div className="text-sm text-white/60">{item.country}</div>
              </button>
            ))}
          </div>
          {searchHistory.length > 0 && (
            <div className="border-t border-white/20 p-2">
              <button
                onClick={() => {
                  onClearHistory();
                  setShowHistory(false);
                }}
                className="w-full text-center text-sm text-white/60 hover:text-white/80 
                           py-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                {translation.clearHistory}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Click outside to close */}
      {showHistory && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowHistory(false)}
        />
      )}
    </div>
  );
};
