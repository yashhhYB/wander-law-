import React, { useEffect, useState } from 'react';
import { MapPin, Navigation, Plane, Globe, Clock } from 'lucide-react';

interface LoadingScreenProps {
  destination: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ destination }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('Preparing journey...');
  const [mapZoom, setMapZoom] = useState(2);

  // Comprehensive coordinates for all destinations
  const destinationCoords = {
    // Countries
    France: { lat: 48.8566, lng: 2.3522 },
    Italy: { lat: 41.9028, lng: 12.4964 },
    Japan: { lat: 35.6762, lng: 139.6503 },
    India: { lat: 28.6139, lng: 77.2090 },
    Egypt: { lat: 30.0444, lng: 31.2357 },
    USA: { lat: 40.7128, lng: -74.0060 },
    Spain: { lat: 40.4168, lng: -3.7038 },
    China: { lat: 39.9042, lng: 116.4074 },
    Mexico: { lat: 19.4326, lng: -99.1332 },
    Turkey: { lat: 41.0082, lng: 28.9784 },
    
    // Specific places
    'Eiffel Tower': { lat: 48.8584, lng: 2.2945 },
    'Louvre Museum': { lat: 48.8606, lng: 2.3376 },
    'Notre-Dame Cathedral': { lat: 48.8530, lng: 2.3499 },
    'Colosseum': { lat: 41.8902, lng: 12.4922 },
    'Venice Canals': { lat: 45.4408, lng: 12.3155 },
    'Leaning Tower of Pisa': { lat: 43.7230, lng: 10.3966 },
    'Mount Fuji': { lat: 35.3606, lng: 138.7274 },
    'Fushimi Inari Shrine': { lat: 34.9671, lng: 135.7727 },
    'Tokyo Tower': { lat: 35.6586, lng: 139.7454 },
    'Taj Mahal': { lat: 27.1751, lng: 78.0421 },
    'Red Fort': { lat: 28.6562, lng: 77.2410 },
    'Great Pyramid of Giza': { lat: 29.9792, lng: 31.1342 },
    'Sphinx': { lat: 29.9753, lng: 31.1376 },
    'Statue of Liberty': { lat: 40.6892, lng: -74.0445 },
    'Grand Canyon': { lat: 36.0544, lng: -112.1401 },
    'Times Square': { lat: 40.7580, lng: -73.9855 },
    'Sagrada Familia': { lat: 41.4036, lng: 2.1744 },
    'Park Güell': { lat: 41.4145, lng: 2.1527 },
    'Great Wall of China': { lat: 40.4319, lng: 116.5704 },
    'Forbidden City': { lat: 39.9163, lng: 116.3972 },
    'Chichen Itza': { lat: 20.6843, lng: -88.5678 },
    'Teotihuacan': { lat: 19.6925, lng: -98.8438 },
    'Hagia Sophia': { lat: 41.0086, lng: 28.9802 },
    'Blue Mosque': { lat: 41.0054, lng: 28.9768 },
    
    // Heritage places
    'Hashima Island': { lat: 32.6278, lng: 129.7386 },
    'Pompeii': { lat: 40.7497, lng: 14.4869 },
    'Pripyat': { lat: 51.3890, lng: 30.0990 },
    'Varosha': { lat: 35.1264, lng: 33.9619 },
    'Bhangarh Fort': { lat: 27.0973, lng: 76.0094 },
    'Centralia': { lat: 40.8042, lng: -76.3405 },
    'Kolmanskop': { lat: -26.7078, lng: 15.2286 },
    'Bodie': { lat: 38.2125, lng: -119.0075 },
    'Craco': { lat: 40.3789, lng: 16.4394 },
    'Kayaköy': { lat: 36.5667, lng: 29.0833 }
  };

  const coords = destinationCoords[destination as keyof typeof destinationCoords] || destinationCoords.France;

  useEffect(() => {
    const phases = [
      'Initializing journey...',
      'Launching navigation...',
      `Traveling to ${destination}...`,
      'Approaching destination...',
      'Preparing landing...'
    ];

    let currentPhase = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5;
        
        // Update phase based on progress
        if (newProgress >= 20 && currentPhase === 0) {
          setPhase(phases[1]);
          currentPhase = 1;
        } else if (newProgress >= 40 && currentPhase === 1) {
          setPhase(phases[2]);
          currentPhase = 2;
        } else if (newProgress >= 70 && currentPhase === 2) {
          setPhase(phases[3]);
          currentPhase = 3;
        } else if (newProgress >= 90 && currentPhase === 3) {
          setPhase(phases[4]);
          currentPhase = 4;
        }
        
        // Update map zoom level for realistic zoom effect
        setMapZoom(2 + (newProgress / 100) * 16);
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [destination]);

  const getMapUrl = () => {
    const zoom = Math.min(Math.floor(mapZoom), 18);
    const mapType = zoom < 8 ? 'satellite' : 'hybrid';
    return `https://maps.googleapis.com/maps/api/staticmap?center=${coords.lat},${coords.lng}&zoom=${zoom}&size=600x400&maptype=${mapType}&key=AIzaSyAq4zQcQ1B4vdmZL5suv63IY703bh_whPU&style=feature:all|element:labels|visibility:simplified`;
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center z-50 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-slate-100/30"></div>

      <div className="relative flex flex-col items-center max-w-4xl mx-auto px-6">
        
        {/* Professional Map Container */}
        <div className="mb-8 relative">
          <div 
            className="w-[500px] h-[300px] rounded-xl overflow-hidden shadow-xl border border-gray-200 transition-all duration-1000 bg-white"
            style={{ 
              transform: `scale(${1 + (progress / 100) * 0.1})`,
            }}
          >
            <img
              src={getMapUrl()}
              alt={`Satellite view of ${destination}`}
              className="w-full h-full object-cover transition-all duration-500"
              onError={(e) => {
                // Fallback to a clean gradient if map fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
              }}
            />
            
            {/* Professional Location Info Overlay */}
            <div className="absolute bottom-4 left-4 text-white">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="font-semibold text-sm">{destination}</span>
                </div>
                <div className="text-xs text-white/80">
                  {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
                </div>
              </div>
            </div>

            {/* Professional Crosshair */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                <div className="w-8 h-8 border-2 border-blue-500 rounded-full bg-blue-500/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                {/* Crosshair lines */}
                <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-blue-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-0.5 h-6 bg-blue-500 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Loading Interface */}
        <div className="text-center z-10 w-full max-w-lg">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Globe className="w-8 h-8 text-blue-600 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{phase}</h2>
          </div>
          
          {/* Professional Progress Bar */}
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-6 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <p className="text-gray-800 text-lg font-medium">
              {Math.round(progress)}% Complete
            </p>
            <p className="text-gray-600">
              Preparing your journey to <span className="text-blue-600 font-semibold">{destination}</span>
            </p>
          </div>
          
          {/* Professional Journey Steps */}
          <div className="flex justify-center gap-3 mb-6">
            {[
              { label: 'Start', icon: Globe },
              { label: 'Navigate', icon: Navigation },
              { label: 'Travel', icon: Plane },
              { label: 'Locate', icon: MapPin },
              { label: 'Arrive', icon: Clock }
            ].map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center transition-all duration-500 ${
                  progress > index * 20 
                    ? 'scale-110 opacity-100' 
                    : 'scale-100 opacity-50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                    progress > index * 20 
                      ? 'bg-blue-500 border-blue-500 text-white shadow-lg' 
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                </div>
                <span className="text-xs text-gray-600 mt-1 font-medium">{step.label}</span>
              </div>
            ))}
          </div>

          {/* Professional Status */}
          <div className="flex items-center justify-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              <span>Zoom: {Math.floor(mapZoom)}x</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>ETA: {Math.max(0, 5 - Math.floor(progress / 20))}s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;