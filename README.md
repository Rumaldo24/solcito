# 🌤️ Aplicación del Clima - Solcito

Una aplicación web moderna y elegante para consultar el estado del clima en tiempo real, desarrollada con React, TypeScript y Tailwind CSS.

![Solcito Preview](https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop&crop=center)

## ✨ Características Principales

### 🌍 Funcionalidades del Clima
- **Geolocalización automática**: Detecta tu ubicación y muestra el clima local
- **Búsqueda por ciudad**: Busca el clima de cualquier ciudad del mundo
- **Datos meteorológicos completos**: Temperatura, humedad, viento, presión, visibilidad
- **Pronóstico extendido**: Previsión de 5 días con datos horarios
- **Horarios del sol**: Amanecer y atardecer con zona horaria local

### 🎨 Experiencia de Usuario
- **Diseño responsivo**: Optimizado para móviles, tablets y escritorio
- **Tema claro/oscuro**: Cambia entre modos según tu preferencia
- **Fondos dinámicos**: El fondo cambia según las condiciones climáticas y hora del día
- **Animaciones suaves**: Transiciones y efectos visuales elegantes
- **Interfaz intuitiva**: Diseño limpio y fácil de usar

### 🌐 Multiidioma
- **4 idiomas soportados**: Español, Inglés, Francés y Portugués
- **Detección automática**: Detecta el idioma del navegador
- **Cambio dinámico**: Cambia el idioma sin recargar la página

### 💾 Funciones Avanzadas
- **Historial de búsquedas**: Guarda tus búsquedas recientes en localStorage
- **Iconos meteorológicos**: Iconos oficiales de OpenWeatherMap
- **Datos en tiempo real**: Información actualizada cada consulta

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **API**: OpenWeatherMap API
- **Build Tool**: Vite
- **Linting**: ESLint + TypeScript ESLint

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Clave API de OpenWeatherMap

## 🛠️ Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Rumaldo24/solcito
   cd solcito
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura la API Key**
   
   Obtén tu clave API gratuita de [OpenWeatherMap](https://openweathermap.org/api):
   
   - Regístrate en OpenWeatherMap
   - Ve a "API Keys" en tu dashboard
   - Copia tu clave API
   - Copia el `.env.example ` a  `.env ` 
   - Reemplaza la línea:
     ```typescript
     const VITE_OPENWEATHER_API_KEY = ''; // Agrega tu API key aquí
     ```
     Por:
     ```typescript
     const VITE_OPENWEATHER_API_KEY = 'tu_api_key_aqui';
     ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador**
   
   Ve a `http://localhost:5173` para ver la aplicación.

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── ErrorMessage.tsx
│   ├── ForecastDisplay.tsx
│   ├── LanguageSelector.tsx
│   ├── LoadingSpinner.tsx
│   ├── SearchBar.tsx
│   ├── ThemeToggle.tsx
│   └── WeatherDisplay.tsx
├── hooks/              # Custom hooks
│   ├── useGeolocation.ts
│   ├── useLanguage.ts
│   └── useWeatherAPI.ts
├── i18n/               # Internacionalización
│   └── translations.ts
├── types/              # Definiciones de tipos TypeScript
│   └── weather.ts
├── utils/              # Funciones utilitarias
│   └── weatherHelpers.ts
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🌐 API de OpenWeatherMap

Esta aplicación utiliza la API gratuita de OpenWeatherMap que incluye:

- **Current Weather Data**: Datos meteorológicos actuales
- **5 Day Weather Forecast**: Pronóstico de 5 días con datos cada 3 horas
- **Geocoding**: Conversión de nombres de ciudades a coordenadas

### Límites de la API Gratuita
- 1,000 llamadas por día
- 60 llamadas por minuto
- Datos actualizados cada 10 minutos

## 🎯 Características Técnicas

### Responsive Design
- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm, md, lg, xl para diferentes tamaños de pantalla
- **Grid System**: CSS Grid y Flexbox para layouts flexibles

### Gestión de Estado
- **React Hooks**: useState, useEffect, useCallback
- **Custom Hooks**: Lógica reutilizable encapsulada
- **LocalStorage**: Persistencia de preferencias y historial

### Optimizaciones
- **Lazy Loading**: Carga diferida de componentes
- **Memoización**: Prevención de re-renders innecesarios
- **Debouncing**: Optimización de búsquedas
- **Error Boundaries**: Manejo robusto de errores

## 🌍 Idiomas Soportados

| Idioma | Código | Estado |
|--------|--------|--------|
| Español | `es` | ✅ Completo |
| English | `en` | ✅ Completo |
| Français | `fr` | ✅ Completo |
| Português | `pt` | ✅ Completo |

## 🎨 Temas y Personalización

### Modo Claro
- Fondos: Gradientes azules y blancos
- Texto: Tonos oscuros para buen contraste
- Iconos: Colores vibrantes

### Modo Oscuro
- Fondos: Gradientes oscuros y púrpuras
- Texto: Tonos claros para legibilidad
- Iconos: Colores suaves

### Fondos Dinámicos
Los fondos cambian según:
- **Condiciones climáticas**: Soleado, nublado, lluvioso, etc.
- **Hora del día**: Diferentes gradientes para día y noche
- **Tema seleccionado**: Adaptación al modo claro/oscuro

## 🔧 Configuración Avanzada

### Personalización de Colores
Modifica `tailwind.config.js` para personalizar la paleta de colores:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

## 🐛 Solución de Problemas

### Error: "API key missing"
- Verifica que hayas agregado tu API key en `.env`
- Asegúrate de que la API key sea válida y esté activa

### Error: "Location access denied"
- El usuario debe permitir el acceso a la ubicación
- Funciona solo en HTTPS o localhost
- Alternativa: usar búsqueda manual por ciudad

### Error: "City not found"
- Verifica la ortografía del nombre de la ciudad
- Intenta con el formato "Ciudad, País"
- Algunos nombres pueden estar en inglés

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está cubierto por una [Licencia de Uso No Comercial - Solcito](./LICENSE).

- Puedes usar, modificar y compartir el código con fines personales y educativos.
- El uso comercial requiere autorización escrita del autor.
- Para más detalles, consulta el archivo [LICENSE](./LICENSE).
  
© 2025 R. Rumaldo V. Todos los derechos reservados.

## 👨‍💻 Autor

**R. Rumaldo V.**
- GitHub: [@Rumaldo24](https://github.com/Rumaldo24)
- LinkedIn: [R. RUMALDO V.](https://www.linkedin.com/in/rumaldo-riquelme20)
- Email: rumaldorv.11@outlook.com

## 🙏 Agradecimientos

- [OpenWeatherMap](https://openweathermap.org/) por proporcionar la API meteorológica
- [Lucide](https://lucide.dev/) por los iconos elegantes
- [Tailwind CSS](https://tailwindcss.com/) por el framework de estilos
- [Unsplash](https://unsplash.com/) por las imágenes de ejemplo

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~2,500
- **Componentes**: 7
- **Custom Hooks**: 3
- **Idiomas soportados**: 4
- **Tamaño del bundle**: ~150KB (gzipped)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

🌤️ **¡Disfruta consultando el clima con estilo!**