import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Satellite, Map, Mountain, Eye, Camera, Plus, Minus, RotateCcw, Navigation } from 'lucide-react';

interface Map3DViewProps {
  lat: number;
  lng: number;
  placeName: string;
  onToggleStreetView: () => void;
}

const Map3DView: React.FC<Map3DViewProps> = ({ lat, lng, placeName, onToggleStreetView }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isStreetViewActive, setIsStreetViewActive] = useState(false);
  const [streetView, setStreetView] = useState<google.maps.StreetViewPanorama | null>(null);
  const [is3DEnabled, setIs3DEnabled] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [currentMapType, setCurrentMapType] = useState<string>('hybrid');

  useEffect(() => {
    if (!mapRef.current) return;

    const initializeMap = () => {
      try {
        const mapInstance = new google.maps.Map(mapRef.current!, {
          center: { lat, lng },
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          tilt: 0,
          heading: 0,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          zoomControl: false,
          gestureHandling: 'greedy',
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'simplified' }]
            }
          ]
        });

        // Add custom marker with enhanced styling
        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: mapInstance,
          title: placeName,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: '#3B82F6',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 4
          },
          animation: google.maps.Animation.DROP
        });

        // Enhanced info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; font-family: Arial, sans-serif; max-width: 200px;">
              <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px;">${placeName}</h3>
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px;">Explore this amazing destination</p>
              <div style="display: flex; gap: 8px; margin-top: 8px;">
                <button onclick="window.open('https://www.google.com/maps/@${lat},${lng},3a,75y,90t/data=!3m6!1e1', '_blank')" 
                        style="background: #3B82F6; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">
                  Street View
                </button>
              </div>
            </div>
          `
        });

        // Enhanced marker interactions
        marker.addListener('click', () => {
          infoWindow.open(mapInstance, marker);
        });

        marker.addListener('mouseover', () => {
          marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            scale: 15,
            fillColor: '#1D4ED8',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 4
          });
        });

        marker.addListener('mouseout', () => {
          marker.setIcon({
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: '#3B82F6',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 4
          });
        });

        // Initialize Street View
        const streetViewInstance = new google.maps.StreetViewPanorama(
          mapRef.current!,
          {
            position: { lat, lng },
            pov: { heading: 0, pitch: 0 },
            visible: false,
            addressControl: false,
            linksControl: true,
            panControl: true,
            enableCloseButton: false,
            motionTracking: false,
            motionTrackingControl: false
          }
        );

        mapInstance.setStreetView(streetViewInstance);
        setMap(mapInstance);
        setStreetView(streetViewInstance);

        // Add map loaded listener
        google.maps.event.addListenerOnce(mapInstance, 'idle', () => {
          setMapLoaded(true);
        });

        // Add map type change listener
        mapInstance.addListener('maptypeid_changed', () => {
          const newMapType = mapInstance.getMapTypeId();
          setCurrentMapType(newMapType || 'hybrid');
        });

      } catch (error) {
        console.error('Error initializing map:', error);
        setMapLoaded(true); // Set to true to remove loading screen even on error
      }
    };

    // Check if Google Maps is loaded
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      // Wait for Google Maps to load
      const checkGoogleMaps = setInterval(() => {
        if (window.google && window.google.maps) {
          clearInterval(checkGoogleMaps);
          initializeMap();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        clearInterval(checkGoogleMaps);
        setMapLoaded(true); // Show map container even if Google Maps fails to load
      }, 10000);
    }
  }, [lat, lng, placeName]);

  const handleMapTypeChange = (mapType: string) => {
    if (!map) return;
    map.setMapTypeId(mapType as google.maps.MapTypeId);
    setCurrentMapType(mapType);
  };

  const toggle3DView = () => {
    if (!map) return;
    const newTilt = is3DEnabled ? 0 : 45;
    map.setTilt(newTilt);
    setIs3DEnabled(!is3DEnabled);
  };

  const handleStreetViewToggle = () => {
    if (!streetView) return;
    const newVisibility = !isStreetViewActive;
    streetView.setVisible(newVisibility);
    setIsStreetViewActive(newVisibility);
    onToggleStreetView();
  };

  const zoomIn = () => {
    if (!map) return;
    const currentZoom = map.getZoom() || 16;
    map.setZoom(Math.min(currentZoom + 1, 21));
  };

  const zoomOut = () => {
    if (!map) return;
    const currentZoom = map.getZoom() || 16;
    map.setZoom(Math.max(currentZoom - 1, 1));
  };

  const resetView = () => {
    if (!map) return;
    map.setCenter({ lat, lng });
    map.setZoom(16);
    map.setTilt(0);
    map.setHeading(0);
    setIs3DEnabled(false);
  };

  const rotateMap = () => {
    if (!map) return;
    const currentHeading = map.getHeading() || 0;
    map.setHeading(currentHeading + 45);
  };

  return (
    <div className="relative w-full h-full min-h-[500px] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      {/* Loading overlay */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20">
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading 3D Map...</p>
            <p className="text-sm text-gray-400 mt-2">Initializing Google Maps</p>
          </div>
        </div>
      )}

      {/* Map container */}
      <div 
        ref={mapRef} 
        className="w-full h-full min-h-[500px]"
        style={{ minHeight: '500px' }}
      />
      
      {/* Enhanced Map Controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-3 z-10">
        {/* Map Type Controls */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200">
          <div className="flex gap-1">
            <button
              onClick={() => handleMapTypeChange('satellite')}
              className={`p-2 rounded-md transition-colors ${
                currentMapType === 'satellite' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
              title="Satellite View"
            >
              <Satellite className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleMapTypeChange('hybrid')}
              className={`p-2 rounded-md transition-colors ${
                currentMapType === 'hybrid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
              title="Hybrid View"
            >
              <Map className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleMapTypeChange('terrain')}
              className={`p-2 rounded-md transition-colors ${
                currentMapType === 'terrain' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
              title="Terrain View"
            >
              <Mountain className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* View Controls */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200">
          <div className="flex gap-1">
            <button
              onClick={toggle3DView}
              className={`p-2 rounded-md transition-colors ${
                is3DEnabled ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
              title="3D View"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={handleStreetViewToggle}
              className={`p-2 rounded-md transition-colors ${
                isStreetViewActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
              }`}
              title="Street View"
            >
              <Camera className="w-4 h-4" />
            </button>
            <button
              onClick={rotateMap}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              title="Rotate Map"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Reset Control */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-gray-200">
          <button
            onClick={resetView}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            title="Reset View"
          >
            <Navigation className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-1 z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200">
          <button
            onClick={zoomIn}
            className="p-3 border-b border-gray-200 hover:bg-gray-100 transition-colors rounded-t-lg flex items-center justify-center"
            title="Zoom In"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={zoomOut}
            className="p-3 hover:bg-gray-100 transition-colors rounded-b-lg flex items-center justify-center"
            title="Zoom Out"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Enhanced Location Info */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200 max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-800">{placeName}</span>
          </div>
          <div className="text-xs text-gray-600">
            <p>Lat: {lat.toFixed(4)}, Lng: {lng.toFixed(4)}</p>
            <p className="mt-1">
              {is3DEnabled ? '3D View Active' : '2D View'} • 
              {isStreetViewActive ? ' Street View' : ` ${currentMapType.charAt(0).toUpperCase() + currentMapType.slice(1)} Map`}
            </p>
          </div>
        </div>
      </div>

      {/* Map Status Indicator */}
      {mapLoaded && (
        <div className="absolute bottom-4 right-4 z-10">
          <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
            Map Ready
          </div>
        </div>
      )}
    </div>
  );
};

export default Map3DView;