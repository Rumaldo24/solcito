export interface Translation {
  // App general
  appTitle: string;
  appSubtitle: string;

  // Search
  searchPlaceholder: string;
  searchHistory: string;
  clearHistory: string;
  useCurrentLocation: string;

  // Weather display
  feelsLike: string;
  humidity: string;
  windSpeed: string;
  visibility: string;
  pressure: string;
  sunrise: string;
  sunset: string;
  temperatureRange: string;
  sunTimes: string;

  // Forecast
  forecast5Day: string;
  todayHourlyForecast: string;
  today: string;
  forecastRain: string; //modificado

  // Loading and errors
  loadingWeather: string;
  gettingLocalWeather: string;
  somethingWentWrong: string;
  tryAgain: string;
  welcome: string;
  welcomeMessage: string;

  // Footer
  footerText: string;
  by: string;
  footerCredits: string;

  // Days of week
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;

  // Months
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;

  // Weather conditions
  clear: string;
  clouds: string;
  // rain: string;
  weatherConditionRain: string;
  drizzle: string;
  thunderstorm: string;
  snow: string;
  mist: string;
  fog: string;
  haze: string;

  // Error messages
  cityNotFound: string;
  locationDenied: string;
  locationUnavailable: string;
  locationTimeout: string;
  apiKeyMissing: string;
  networkError: string;
}

export const translations: Record<string, Translation> = {
  es: {
    // App general
    appTitle: 'Aplicación del Clima',
    appSubtitle: 'Obtén información meteorológica en tiempo real para cualquier ubicación del mundo',

    // Search
    searchPlaceholder: 'Buscar una ciudad...',
    searchHistory: 'Búsquedas recientes',
    clearHistory: 'Limpiar historial',
    useCurrentLocation: 'Usar ubicación actual',

    // Weather display
    feelsLike: 'Sensación térmica',
    humidity: 'Humedad',
    windSpeed: 'Velocidad del viento',
    visibility: 'Visibilidad',
    pressure: 'Presión',
    sunrise: 'Amanecer',
    sunset: 'Atardecer',
    temperatureRange: 'Rango de temperatura',
    sunTimes: 'Horarios del Sol',

    // Forecast - Pronóstico
    forecast5Day: 'Pronóstico de 5 días',
    todayHourlyForecast: 'Pronóstico por horas de hoy',
    today: 'Hoy',
    forecastRain: 'lluvia',

    // Loading and errors
    loadingWeather: 'Cargando datos meteorológicos...',
    gettingLocalWeather: 'Obteniendo el clima local...',
    somethingWentWrong: '¡Ups! Algo salió mal',
    tryAgain: 'Intentar de nuevo',
    welcome: '¡Bienvenido a la Aplicación del Clima!',
    welcomeMessage: 'Busca una ciudad o permite el acceso a la ubicación para comenzar.',

    // Footer
    footerText: 'Datos meteorológicos proporcionados por la API de OpenWeatherMap',
    by: 'Desarrollado por',
    footerCredits: 'R. Rumaldo V.',


    // Días de la semana
    // Days of week
    monday: 'Lunes',
    tuesday: 'Martes',
    wednesday: 'Miércoles',
    thursday: 'Jueves',
    friday: 'Viernes',
    saturday: 'Sábado',
    sunday: 'Domingo',

    // Months
    january: 'Enero',
    february: 'Febrero',
    march: 'Marzo',
    april: 'Abril',
    may: 'Mayo',
    june: 'Junio',
    july: 'Julio',
    august: 'Agosto',
    september: 'Septiembre',
    october: 'Octubre',
    november: 'Noviembre',
    december: 'Diciembre',

    // Weather conditions - Condiciones climáticas
    clear: 'Despejado',
    clouds: 'Nublado',
    weatherConditionRain: 'Lluvia',
    drizzle: 'Llovizna',
    thunderstorm: 'Tormenta',
    snow: 'Nieve',
    mist: 'Neblina',
    fog: 'Niebla',
    haze: 'Bruma',

    // Error messages
    cityNotFound: 'Ciudad no encontrada o error al obtener datos meteorológicos',
    locationDenied: 'Acceso a la ubicación denegado por el usuario',
    locationUnavailable: 'La información de ubicación no está disponible',
    locationTimeout: 'La solicitud de ubicación ha expirado',
    apiKeyMissing: 'Por favor, agrega tu clave API de OpenWeatherMap para usar esta aplicación',
    networkError: 'Error de conexión. Verifica tu conexión a internet.',
  },

  en: {
    // App general
    appTitle: 'Weather App',
    appSubtitle: 'Get real-time weather information for any location worldwide',

    // Search
    searchPlaceholder: 'Search for a city...',
    searchHistory: 'Recent searches',
    clearHistory: 'Clear history',
    useCurrentLocation: 'Use current location',

    // Weather display
    feelsLike: 'Feels like',
    humidity: 'Humidity',
    windSpeed: 'Wind Speed',
    visibility: 'Visibility',
    pressure: 'Pressure',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    temperatureRange: 'Temperature Range',
    sunTimes: 'Sun Times',

    // Forecast
    forecast5Day: '5-Day Forecast',
    todayHourlyForecast: "Today's Hourly Forecast",
    today: 'Today',
    forecastRain: 'rain',

    // Loading and errors
    loadingWeather: 'Loading weather data...',
    gettingLocalWeather: 'Getting your local weather...',
    somethingWentWrong: 'Oops! Something went wrong',
    tryAgain: 'Try Again',
    welcome: 'Welcome to Weather App!',
    welcomeMessage: 'Search for a city or allow location access to get started.',

    // Footer
    footerText: 'Weather data provided by OpenWeatherMap API',
    by: 'Developed by',
    footerCredits: 'R. Rumaldo V.',

    // Days of week
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',

    // Months
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',

    // Weather conditions
    clear: 'Clear',
    clouds: 'Cloudy',
    weatherConditionRain: 'Rain',
    drizzle: 'Drizzle',
    thunderstorm: 'Thunderstorm',
    snow: 'Snow',
    mist: 'Mist',
    fog: 'Fog',
    haze: 'Haze',

    // Error messages
    cityNotFound: 'City not found or failed to fetch weather data',
    locationDenied: 'Location access denied by user',
    locationUnavailable: 'Location information is unavailable',
    locationTimeout: 'Location request timed out',
    apiKeyMissing: 'Please add your OpenWeatherMap API key to use this app',
    networkError: 'Network error. Please check your internet connection.',
  },

  fr: {
    // App general
    appTitle: 'Application Météo',
    appSubtitle: 'Obtenez des informations météorologiques en temps réel pour n\'importe quel endroit dans le monde',

    // Search
    searchPlaceholder: 'Rechercher une ville...',
    searchHistory: 'Recherches récentes',
    clearHistory: 'Effacer l\'historique',
    useCurrentLocation: 'Utiliser la position actuelle',

    // Weather display
    feelsLike: 'Ressenti',
    humidity: 'Humidité',
    windSpeed: 'Vitesse du vent',
    visibility: 'Visibilité',
    pressure: 'Pression',
    sunrise: 'Lever du soleil',
    sunset: 'Coucher du soleil',
    temperatureRange: 'Plage de température',
    sunTimes: 'Heures du soleil',

    // Forecast
    forecast5Day: 'Prévisions sur 5 jours',
    todayHourlyForecast: 'Prévisions horaires d\'aujourd\'hui',
    today: 'Aujourd\'hui',
    forecastRain: 'pluie',

    // Loading and errors
    loadingWeather: 'Chargement des données météo...',
    gettingLocalWeather: 'Obtention de votre météo locale...',
    somethingWentWrong: 'Oups ! Quelque chose s\'est mal passé',
    tryAgain: 'Réessayer',
    welcome: 'Bienvenue dans l\'Application Météo !',
    welcomeMessage: 'Recherchez une ville ou autorisez l\'accès à la localisation pour commencer.',

    // Footer
    footerText: 'Données météorologiques fournies par l\'API OpenWeatherMap',
    by: 'Développé par',
    footerCredits: 'R. Rumaldo V.',

    // Days of week
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',

    // Months
    january: 'Janvier',
    february: 'Février',
    march: 'Mars',
    april: 'Avril',
    may: 'Mai',
    june: 'Juin',
    july: 'Juillet',
    august: 'Août',
    september: 'Septembre',
    october: 'Octobre',
    november: 'Novembre',
    december: 'Décembre',

    // Weather conditions
    clear: 'Dégagé',
    clouds: 'Nuageux',
    weatherConditionRain: 'Pluie',
    drizzle: 'Bruine',
    thunderstorm: 'Orage',
    snow: 'Neige',
    mist: 'Brume',
    fog: 'Brouillard',
    haze: 'Brume sèche',

    // Error messages
    cityNotFound: 'Ville introuvable ou échec de récupération des données météo',
    locationDenied: 'Accès à la localisation refusé par l\'utilisateur',
    locationUnavailable: 'Les informations de localisation ne sont pas disponibles',
    locationTimeout: 'Délai d\'attente de la demande de localisation dépassé',
    apiKeyMissing: 'Veuillez ajouter votre clé API OpenWeatherMap pour utiliser cette application',
    networkError: 'Erreur réseau. Veuillez vérifier votre connexion internet.',
  },

  pt: {
    // App general
    appTitle: 'App do Clima',
    appSubtitle: 'Obtenha informações meteorológicas em tempo real para qualquer local do mundo',

    // Search
    searchPlaceholder: 'Pesquisar uma cidade...',
    searchHistory: 'Pesquisas recentes',
    clearHistory: 'Limpar histórico',
    useCurrentLocation: 'Usar localização atual',

    // Weather display
    feelsLike: 'Sensação térmica',
    humidity: 'Umidade',
    windSpeed: 'Velocidade do vento',
    visibility: 'Visibilidade',
    pressure: 'Pressão',
    sunrise: 'Nascer do sol',
    sunset: 'Pôr do sol',
    temperatureRange: 'Faixa de temperatura',
    sunTimes: 'Horários do Sol',

    // Forecast
    forecast5Day: 'Previsão de 5 dias',
    todayHourlyForecast: 'Previsão horária de hoje',
    today: 'Hoje',
    forecastRain: 'chuva',

    // Loading and errors
    loadingWeather: 'Carregando dados meteorológicos...',
    gettingLocalWeather: 'Obtendo seu clima local...',
    somethingWentWrong: 'Ops! Algo deu errado',
    tryAgain: 'Tentar novamente',
    welcome: 'Bem-vindo ao App do Clima!',
    welcomeMessage: 'Pesquise uma cidade ou permita acesso à localização para começar.',

    // Footer
    footerText: 'Dados meteorológicos fornecidos pela API OpenWeatherMap',
    by: 'Desenvolvido por',
    footerCredits: 'R. Rumaldo V.',

    // Days of week
    monday: 'Segunda',
    tuesday: 'Terça',
    wednesday: 'Quarta',
    thursday: 'Quinta',
    friday: 'Sexta',
    saturday: 'Sábado',
    sunday: 'Domingo',

    // Months
    january: 'Janeiro',
    february: 'Fevereiro',
    march: 'Março',
    april: 'Abril',
    may: 'Maio',
    june: 'Junho',
    july: 'Julho',
    august: 'Agosto',
    september: 'Setembro',
    october: 'Outubro',
    november: 'Novembro',
    december: 'Dezembro',

    // Weather conditions
    clear: 'Limpo',
    clouds: 'Nublado',
    weatherConditionRain: 'Chuva',
    drizzle: 'Garoa',
    thunderstorm: 'Tempestade',
    snow: 'Neve',
    mist: 'Névoa',
    fog: 'Neblina',
    haze: 'Neblina seca',

    // Error messages
    cityNotFound: 'Cidade não encontrada ou falha ao buscar dados meteorológicos',
    locationDenied: 'Acesso à localização negado pelo usuário',
    locationUnavailable: 'Informações de localização não estão disponíveis',
    locationTimeout: 'Tempo limite da solicitação de localização esgotado',
    apiKeyMissing: 'Por favor, adicione sua chave API do OpenWeatherMap para usar este app',
    networkError: 'Erro de rede. Verifique sua conexão com a internet.',
  }
};

export const getTranslation = (language: string): Translation => {
  // return translations[language] || translations.es;
  const lang = language.toLowerCase().trim();
  return translations[lang] || translations['es'];
};