import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Shield, AlertTriangle, Phone, Cloud, Volume2, Scale, Camera, Users, DollarSign, Languages, Star, Info, Eye, Calendar } from 'lucide-react';
import { TravelPlace, ForgottenPlace } from '../data/travelData';
import Map3DView from './Map3DView';

interface PlaceDetailsCardProps {
  place: TravelPlace | ForgottenPlace;
  onClose: () => void;
  isForgottenPlace?: boolean;
}

const PlaceDetailsCard: React.FC<PlaceDetailsCardProps> = ({ place, onClose, isForgottenPlace = false }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPastImage, setShowPastImage] = useState(false);
  const [isStreetViewActive, setIsStreetViewActive] = useState(false);

  // Type guards and data extraction
  const isTraditionalPlace = (p: any): p is TravelPlace => !isForgottenPlace && 'laws' in p;
  const isForgotten = (p: any): p is ForgottenPlace => isForgottenPlace && 'yearAbandoned' in p;

  const tabs = isForgottenPlace ? [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'heritage', label: 'Heritage Tips', icon: Shield },
    { id: 'safety', label: 'Safety', icon: AlertTriangle },
  ] : [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'laws', label: 'Laws & Rules', icon: Scale },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'tips', label: 'Travel Tips', icon: Shield },
    { id: 'emergency', label: 'Emergency', icon: AlertTriangle },
    { id: 'climate', label: 'Climate', icon: Cloud },
  ];

  const handleToggleStreetView = () => {
    setIsStreetViewActive(!isStreetViewActive);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const getPlaceImage = () => {
    if (isForgotten(place)) {
      return showPastImage ? place.imageBefore : place.imageNow;
    }
    if (isTraditionalPlace(place)) {
      return showPastImage ? place.imageThen : place.imageNow;
    }
    return place.imageNow || '';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[95vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className={`${isForgottenPlace ? 'bg-gradient-to-r from-red-600 to-purple-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'} p-4 text-white`}>
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <div className="flex items-center gap-3">
              <h1 className="text-xl md:text-2xl font-bold">{place.name}</h1>
              <div className="flex items-center gap-1">
                {isForgottenPlace ? (
                  <>
                    <Eye className="w-5 h-5 text-red-300" />
                    <span className="text-sm">Heritage Site</span>
                  </>
                ) : (
                  <>
                    <Star className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">Featured Destination</span>
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              {isForgotten(place) ? (
                <>
                  <Calendar className="w-4 h-4" />
                  <span>Abandoned {place.yearAbandoned}</span>
                </>
              ) : isTraditionalPlace(place) ? (
                <>
                  <DollarSign className="w-4 h-4" />
                  <span>{place.localCurrency}</span>
                </>
              ) : null}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Side - Map */}
          <div className="flex-1 lg:w-3/5 p-4">
            <div className="w-full h-full min-h-[400px] lg:min-h-[500px]">
              <Map3DView
                lat={place.lat}
                lng={place.lng}
                placeName={place.name}
                onToggleStreetView={handleToggleStreetView}
              />
            </div>
          </div>

          {/* Right Side - Information */}
          <div className="w-full lg:w-2/5 bg-gray-50 flex flex-col overflow-hidden">
            
            {/* Large Image */}
            <div className="p-4 pb-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={getPlaceImage()}
                  alt={place.name}
                  className={`w-full h-48 md:h-56 object-cover ${isForgottenPlace ? 'filter grayscale hover:grayscale-0 transition-all duration-500' : ''}`}
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setShowPastImage(!showPastImage)}
                    className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium hover:bg-white transition-colors"
                  >
                    {showPastImage ? 'Now' : (isForgottenPlace ? 'Before' : 'Past')}
                  </button>
                  <button
                    onClick={() => speakText(place.history)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                    title="Listen to history"
                  >
                    <Volume2 className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2">
                    <p className="text-sm font-medium">{place.country}</p>
                    {isTraditionalPlace(place) && (
                      <p className="text-xs text-white/80">{place.bestTimeToVisit}</p>
                    )}
                    {isForgotten(place) && (
                      <p className="text-xs text-white/80">Abandoned: {place.yearAbandoned}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="px-4 pb-2">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {isTraditionalPlace(place) && (
                  <>
                    <div className="bg-white rounded-lg p-2 flex items-center gap-2">
                      <Languages className="w-3 h-3 text-blue-600" />
                      <span className="text-gray-700">{place.language}</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-green-600" />
                      <span className="text-gray-700">{place.localCurrency}</span>
                    </div>
                  </>
                )}
                {isForgotten(place) && (
                  <>
                    <div className="bg-white rounded-lg p-2 flex items-center gap-2">
                      <AlertTriangle className="w-3 h-3 text-red-600" />
                      <span className="text-gray-700">Heritage Site</span>
                    </div>
                    <div className="bg-white rounded-lg p-2 flex items-center gap-2">
                      <Calendar className="w-3 h-3 text-orange-600" />
                      <span className="text-gray-700">{place.yearAbandoned}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === tab.id
                        ? (isForgottenPlace ? 'bg-red-600 text-white' : 'bg-blue-600 text-white')
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <tab.icon className="w-3 h-3" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 px-4 pb-4 overflow-y-auto">
              <div className="space-y-4">
                {activeTab === 'overview' && (
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-600" />
                        About {place.name}
                      </h3>
                      <p className="text-gray-700 mb-4 text-sm">
                        {isTraditionalPlace(place) ? place.description : place.history}
                      </p>
                      <div className="grid grid-cols-1 gap-3 text-sm">
                        {isTraditionalPlace(place) && (
                          <div>
                            <span className="font-medium text-gray-800">Best Time to Visit:</span>
                            <p className="text-gray-600">{place.bestTimeToVisit}</p>
                          </div>
                        )}
                        {isForgotten(place) && (
                          <div>
                            <span className="font-medium text-gray-800">Reason for Abandonment:</span>
                            <p className="text-gray-600">{place.reason}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {isTraditionalPlace(place) && place.funFacts && place.funFacts.length > 0 && (
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-600" />
                          Fun Facts
                        </h3>
                        <ul className="space-y-2">
                          {place.funFacts.map((fact, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-yellow-600 font-bold text-sm">★</span>
                              <span className="text-gray-700 text-sm">{fact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'laws' && isTraditionalPlace(place) && (
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold mb-3 flex items-center gap-2 text-blue-700">
                        <Scale className="w-4 h-4" />
                        General Laws & Regulations
                      </h3>
                      <ul className="space-y-2">
                        {place.laws.general.map((law, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold text-sm">•</span>
                            <span className="text-gray-700 text-sm">{law}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold mb-3 flex items-center gap-2 text-purple-700">
                        <Camera className="w-4 h-4" />
                        Photography Rules
                      </h3>
                      <ul className="space-y-2">
                        {place.laws.photography.map((rule, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-purple-600 font-bold text-sm">•</span>
                            <span className="text-gray-700 text-sm">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                        <Users className="w-4 h-4" />
                        Behavior & Customs
                      </h3>
                      <ul className="space-y-2">
                        {place.laws.behavior.map((behavior, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-600 font-bold text-sm">•</span>
                            <span className="text-gray-700 text-sm">{behavior}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold mb-3 flex items-center gap-2 text-orange-700">
                        <MapPin className="w-4 h-4" />
                        Cultural Customs
                      </h3>
                      <ul className="space-y-2">
                        {place.laws.customs.map((custom, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-orange-600 font-bold text-sm">•</span>
                            <span className="text-gray-700 text-sm">{custom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-600" />
                        Historical Background
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{place.history}</p>
                  </div>
                )}

                {(activeTab === 'tips' || activeTab === 'heritage') && (
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold mb-2 text-green-700 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        {isForgottenPlace ? 'Heritage Guidelines' : 'Dos'}
                      </h3>
                      <ul className="space-y-2">
                        {place.dos.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-green-600 font-bold text-sm">✓</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h3 className="font-semibold mb-2 text-red-700 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" />
                        {isForgottenPlace ? 'Safety Warnings' : "Don'ts"}
                      </h3>
                      <ul className="space-y-2">
                        {place.donts.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-red-600 font-bold text-sm">✗</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {(activeTab === 'emergency' || activeTab === 'safety') && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold mb-4 text-red-700 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      {isForgottenPlace ? 'Safety Information' : 'Emergency Contacts'}
                    </h3>
                    {isTraditionalPlace(place) && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <Phone className="w-5 h-5 text-red-600" />
                          <div>
                            <p className="font-medium text-sm">Police</p>
                            <p className="text-lg font-mono text-red-600">{place.emergency.police}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                          <Phone className="w-5 h-5 text-red-600" />
                          <div>
                            <p className="font-medium text-sm">Ambulance</p>
                            <p className="text-lg font-mono text-red-600">{place.emergency.ambulance}</p>
                          </div>
                        </div>
                        {place.emergency.fire && (
                          <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                            <Phone className="w-5 h-5 text-orange-600" />
                            <div>
                              <p className="font-medium text-sm">Fire Department</p>
                              <p className="text-lg font-mono text-orange-600">{place.emergency.fire}</p>
                            </div>
                          </div>
                        )}
                        {place.emergency.tourist && (
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <Phone className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-sm">Tourist Helpline</p>
                              <p className="text-lg font-mono text-blue-600">{place.emergency.tourist}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {isForgottenPlace && (
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded-lg">
                          <h4 className="font-medium text-red-800 mb-2">Important Safety Notes:</h4>
                          <ul className="space-y-1 text-sm text-red-700">
                            <li>• Follow all local safety guidelines and restrictions</li>
                            <li>• Stay with authorized tour groups when available</li>
                            <li>• Be aware of structural instability in abandoned buildings</li>
                            <li>• Respect local laws and heritage protection measures</li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'climate' && isTraditionalPlace(place) && place.climate && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-blue-600" />
                      Climate Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="font-medium text-gray-700 text-sm">Temperature</p>
                        <p className="text-xl font-bold text-blue-600">{place.climate.temperature}</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="font-medium text-gray-700 text-sm">Season</p>
                        <p className="text-lg text-green-600">{place.climate.season}</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <p className="font-medium text-gray-700 text-sm">Humidity</p>
                        <p className="text-lg text-purple-600">{place.climate.humidity}</p>
                      </div>
                      <div className="p-3 bg-indigo-50 rounded-lg">
                        <p className="font-medium text-gray-700 text-sm">Rainfall</p>
                        <p className="text-lg text-indigo-600">{place.climate.rainfall}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetailsCard;