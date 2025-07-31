import React, { useState, useEffect } from 'react';
import { Globe, MapPin, Plane, Users, Calendar, DollarSign, Languages, ChevronRight, Star, Clock, Shield, AlertTriangle, Eye, Compass, Mountain, Play, Pause, Map, Scale, Navigation } from 'lucide-react';
import { travelData } from '../data/travelData';
import PlaceDetailsCard from '../components/PlaceDetailsCard';
import LoadingScreen from '../components/LoadingScreen';

const Index: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeritageMode, setIsHeritageMode] = useState(false);
  const [selectedForgottenPlace, setSelectedForgottenPlace] = useState<any>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-rotate country slider
  useEffect(() => {
    if (!isAutoPlay || isHeritageMode) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % travelData.countries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isHeritageMode]);

  const handleCountrySelect = (countryName: string) => {
    setIsLoading(true);
    setSelectedCountry(countryName);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const handlePlaceSelect = (place: any) => {
    setSelectedPlace(place);
  };

  const handleForgottenPlaceSelect = (place: any) => {
    setSelectedForgottenPlace(place);
  };

  const handleBackToCountries = () => {
    setSelectedCountry(null);
    setSelectedPlace(null);
    setSelectedForgottenPlace(null);
  };

  const handleBackToPlaces = () => {
    setSelectedPlace(null);
    setSelectedForgottenPlace(null);
  };

  const toggleHeritageMode = () => {
    setIsHeritageMode(!isHeritageMode);
    setSelectedCountry(null);
    setSelectedPlace(null);
    setSelectedForgottenPlace(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (isHeritageMode) {
      setCurrentSlide((prev) => (prev + 1) % travelData.forgottenPlaces.length);
    } else {
      setCurrentSlide((prev) => (prev + 1) % travelData.countries.length);
    }
  };

  const prevSlide = () => {
    if (isHeritageMode) {
      setCurrentSlide((prev) => (prev - 1 + travelData.forgottenPlaces.length) % travelData.forgottenPlaces.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + travelData.countries.length) % travelData.countries.length);
    }
  };

  if (isLoading) {
    return <LoadingScreen destination={selectedCountry || ''} />;
  }

  if (selectedPlace) {
    return (
      <PlaceDetailsCard
        place={selectedPlace}
        onClose={handleBackToPlaces}
      />
    );
  }

  if (selectedForgottenPlace) {
    return (
      <PlaceDetailsCard
        place={selectedForgottenPlace}
        onClose={handleBackToPlaces}
        isForgottenPlace={true}
      />
    );
  }

  if (selectedCountry && !isHeritageMode) {
    const country = travelData.countries.find(c => c.name === selectedCountry);
    if (!country) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-4 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={handleBackToCountries}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 text-white"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">Back to Countries</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-4xl">{country.flag}</span>
              <div className="text-center">
                <h1 className="text-xl md:text-2xl font-bold text-white">{country.name}</h1>
                <p className="text-white/70 text-sm">{country.capital} • {country.population}</p>
              </div>
            </div>
            <div className="w-32" />
          </div>
        </div>

        {/* Country Info Banner */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={country.backgroundImage} 
            alt={country.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{country.description}</h2>
              <p className="text-lg text-white/90">Discover {country.places.length} amazing destinations</p>
            </div>
          </div>
        </div>

        {/* Places Grid */}
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Explore Amazing Places in {country.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.places.map((place, index) => (
              <div
                key={index}
                onClick={() => handlePlaceSelect(place)}
                className="group cursor-pointer bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={place.imageNow}
                    alt={place.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{place.name}</h3>
                    <p className="text-white/80 text-sm">{place.country}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white/80 text-sm line-clamp-2 mb-3">
                    {place.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-blue-300">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Explore Details</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{place.bestTimeToVisit}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Languages className="w-3 h-3" />
                      <span>{place.language}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 text-center pt-16 pb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Plane className="w-12 h-12 text-blue-600" />
          <h1 className="text-7xl md:text-9xl font-bold text-gray-800">
            Wander<span className="text-blue-600">Law</span>
          </h1>
          <Globe className="w-12 h-12 text-blue-600" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4 mb-12">
          Professional travel guidance with comprehensive legal and cultural insights
        </p>
        
        {/* Enhanced Mode Toggle */}
        <div className="flex items-center justify-center gap-8 mb-16">
          <button
            onClick={() => setIsHeritageMode(false)}
            className={`group relative px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform ${
              !isHeritageMode 
                ? 'bg-blue-600 text-white shadow-xl scale-110 shadow-blue-200' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <Globe className="w-7 h-7" />
              <span>Tourist Mode</span>
            </div>
            {!isHeritageMode && (
              <div className="absolute inset-0 bg-blue-400 rounded-2xl blur opacity-30 -z-10"></div>
            )}
          </button>
          
          <div className="w-px h-16 bg-gray-300"></div>
          
          <button
            onClick={() => setIsHeritageMode(true)}
            className={`group relative px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform ${
              isHeritageMode 
                ? 'bg-purple-600 text-white shadow-xl scale-110 shadow-purple-200' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3">
              <Mountain className="w-7 h-7" />
              <span>Heritage Mode</span>
            </div>
            {isHeritageMode && (
              <div className="absolute inset-0 bg-purple-400 rounded-2xl blur opacity-30 -z-10"></div>
            )}
          </button>
        </div>
      </div>

      {/* Choose Your Destination Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Choose Your Destination</h2>
        
        {/* Main Content - Countries or Forgotten Places */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-800">
              {isHeritageMode ? 'Explore Forgotten Heritage Sites' : 'Explore Countries'}
            </h3>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-3 bg-white hover:bg-gray-50 rounded-xl transition-colors text-gray-700 shadow-lg border border-gray-200"
                title={isAutoPlay ? 'Pause Auto-play' : 'Start Auto-play'}
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={prevSlide}
                className="p-3 bg-white hover:bg-gray-50 rounded-xl transition-colors text-gray-700 shadow-lg border border-gray-200"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white hover:bg-gray-50 rounded-xl transition-colors text-gray-700 shadow-lg border border-gray-200"
              >
                →
              </button>
            </div>
          </div>
          
          {isHeritageMode ? (
            /* Forgotten Places Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {travelData.forgottenPlaces.map((place, index) => (
                <div
                  key={index}
                  onClick={() => handleForgottenPlaceSelect(place)}
                  className="group cursor-pointer bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 shadow-lg border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={place.imageNow}
                      alt={place.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Abandoned {place.yearAbandoned}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">{place.name}</h3>
                      <p className="text-white/80 text-sm">{place.country}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {place.history}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-red-600">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">Explore Heritage</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>{place.reason}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Enhanced 3D Country Slider */
            <div className="relative">
              {/* Desktop 3D Slider */}
              <div className="hidden md:block">
                <div className="relative h-96 perspective-1000">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out transform-style-preserve-3d"
                    style={{
                      transform: `translateX(-${currentSlide * 320}px)`
                    }}
                  >
                    {travelData.countries.map((country, index) => {
                      const offset = index - currentSlide;
                      const isActive = offset === 0;
                      const isAdjacent = Math.abs(offset) === 1;
                      
                      return (
                        <div
                          key={index}
                          onClick={() => handleCountrySelect(country.name)}
                          className={`flex-shrink-0 w-80 h-80 mx-4 cursor-pointer transition-all duration-700 transform ${
                            isActive 
                              ? 'scale-110 z-20' 
                              : isAdjacent 
                                ? 'scale-95 z-10' 
                                : 'scale-75 z-0 opacity-50'
                          }`}
                          style={{
                            transform: `
                              scale(${isActive ? 1.1 : isAdjacent ? 0.95 : 0.75})
                              rotateY(${offset * 15}deg)
                              translateZ(${isActive ? 50 : isAdjacent ? -25 : -50}px)
                            `,
                            opacity: Math.abs(offset) > 2 ? 0 : 1
                          }}
                        >
                          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white hover:shadow-3xl transition-all duration-300">
                            <img
                              src={country.backgroundImage}
                              alt={country.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute top-6 right-6">
                              <span className="text-5xl drop-shadow-lg">{country.flag}</span>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white">
                              <h3 className="text-2xl font-bold mb-2">{country.name}</h3>
                              <p className="text-white/90 text-sm mb-2">{country.capital}</p>
                              <p className="text-white/70 text-sm line-clamp-2">{country.description}</p>
                              <div className="flex items-center gap-4 mt-3 text-xs text-white/60">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  <span>{country.places.length} places</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  <span>{country.population}</span>
                                </div>
                              </div>
                            </div>
                            {isActive && (
                              <div className="absolute inset-0 ring-4 ring-blue-400/50 rounded-2xl"></div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                  {(isHeritageMode ? travelData.forgottenPlaces : travelData.countries).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-blue-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Grid */}
              <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
                {travelData.countries.map((country, index) => (
                  <div
                    key={index}
                    onClick={() => handleCountrySelect(country.name)}
                    className="cursor-pointer bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 shadow-lg border border-gray-100"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={country.backgroundImage}
                        alt={country.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-2 right-2">
                        <span className="text-2xl">{country.flag}</span>
                      </div>
                      <div className="absolute bottom-2 left-2 text-white">
                        <h3 className="text-lg font-bold">{country.name}</h3>
                        <p className="text-white/80 text-sm">{country.capital}</p>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                        {country.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{country.places.length} places</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">{travelData.countries.length}</div>
            <div className="text-gray-600 font-medium">Countries</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {travelData.countries.reduce((acc, country) => acc + country.places.length, 0)}
            </div>
            <div className="text-gray-600 font-medium">Destinations</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">{travelData.forgottenPlaces.length}</div>
            <div className="text-gray-600 font-medium">Forgotten Places</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
            <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
            <div className="text-gray-600 font-medium">Legal Guidance</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 text-center border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Map className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">3D Interactive Maps</h3>
            <p className="text-gray-600">Explore destinations with satellite views, street-level imagery, and 3D perspectives</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 text-center border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Legal & Cultural Guide</h3>
            <p className="text-gray-600">Stay informed about local laws, customs, and cultural etiquette</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 text-center border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Rich Historical Context</h3>
            <p className="text-gray-600">Discover fascinating stories and historical background of world landmarks</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for 3D effects */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Index;