export interface TravelPlace {
  name: string;
  country: string;
  lat: number;
  lng: number;
  imageNow: string;
  imageThen: string;
  description: string;
  history: string;
  bestTimeToVisit: string;
  language: string;
  localCurrency: string;
  laws: {
    general: string[];
    photography: string[];
    behavior: string[];
    customs: string[];
  };
  dos: string[];
  donts: string[];
  emergency: {
    police: string;
    ambulance: string;
    fire?: string;
    tourist?: string;
  };
  climate?: {
    temperature: string;
    season: string;
    humidity: string;
    rainfall: string;
  };
  funFacts?: string[];
}

export interface Country {
  name: string;
  flag: string;
  capital: string;
  population: string;
  description: string;
  backgroundImage: string;
  places: TravelPlace[];
}

export interface ForgottenPlace {
  name: string;
  country: string;
  lat: number;
  lng: number;
  imageBefore: string;
  imageNow: string;
  history: string;
  yearAbandoned: string;
  reason: string;
  dos: string[];
  donts: string[];
}

export const travelData = {
  countries: [
    {
      name: "France",
      flag: "🇫🇷",
      capital: "Paris",
      population: "67.4 million",
      description: "Known for art, fashion, gastronomy and culture",
      backgroundImage: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&h=600&fit=crop&auto=format",
      places: [
        {
          name: "Eiffel Tower",
          country: "France",
          lat: 48.8584,
          lng: 2.2945,
          imageNow: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
          description: "The iconic iron lattice tower on the Champ de Mars in Paris, France.",
          history: "Built in 1889 for the World's Fair, the Eiffel Tower was initially criticized but became Paris's most iconic landmark.",
          bestTimeToVisit: "April to June, September to October",
          language: "French",
          localCurrency: "Euro (€)",
          laws: {
            general: ["No drones allowed within 150m", "No littering - fines up to €68", "Security checks required for all visitors"],
            photography: ["Commercial photography requires permits", "No flash photography at night", "Tripods allowed but may be restricted during peak times"],
            behavior: ["No climbing on the structure", "No alcohol consumption", "Quiet zones must be respected"],
            customs: ["Remove hats when greeting", "Say 'Bonjour' when entering shops", "Tipping 10% is customary"]
          },
          dos: ["Buy tickets in advance online", "Visit at sunset for best photos", "Use official elevators only", "Dress appropriately"],
          donts: ["Don't climb barriers or fences", "Don't bring large bags without checking", "Don't use flash photography at night", "Don't ignore security instructions"],
          emergency: {
            police: "17",
            ambulance: "15",
            fire: "18",
            tourist: "+33-892-70-12-39"
          },
          climate: {
            temperature: "15°C average",
            season: "Temperate",
            humidity: "75%",
            rainfall: "640mm annually"
          },
          funFacts: ["324 meters tall", "Weighs 10,100 tons", "Painted every 7 years", "Sways 6-7cm in wind"]
        },
        {
          name: "Louvre Museum",
          country: "France",
          lat: 48.8606,
          lng: 2.3376,
          imageNow: "https://i.pinimg.com/originals/27/10/43/27104383817e0d5cdf1df81b8d4a439e.jpg",
          imageThen: "https://tse1.mm.bing.net/th/id/OIP.roTbCbokn1ghkiHqNzDjogHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "The world's largest art museum and a historic monument in Paris.",
          history: "Originally a royal palace, the Louvre became a public museum in 1793 and is now the world's largest art museum.",
          bestTimeToVisit: "October to March (fewer crowds)",
          language: "French",
          localCurrency: "Euro (€)",
          laws: {
            general: ["No flash photography allowed", "Silent zones enforced", "Bag checks mandatory"],
            photography: ["Personal photography allowed without flash", "Commercial photography requires permits", "No photography in special exhibitions"],
            behavior: ["Maintain 1.5m distance from artworks", "No food or drinks", "No running in galleries"],
            customs: ["Whisper or speak quietly", "Follow one-way routes", "Respect queue systems"]
          },
          dos: ["Follow queue rules strictly", "Book timed entry tickets", "Use museum map and audio guide", "Visit early morning"],
          donts: ["Don't touch exhibits", "Don't bring food or drinks", "Don't use selfie sticks", "Don't block pathways"],
          emergency: {
            police: "17",
            ambulance: "15",
            tourist: "+33-892-70-12-39"
          },
          climate: {
            temperature: "20°C controlled",
            season: "Indoor climate",
            humidity: "45-55%",
            rainfall: "N/A"
          },
          funFacts: ["Home to Mona Lisa", "35,000 artworks on display", "9 million visitors annually", "Would take 100 days to see everything"]
        },
        {
          name: "Notre-Dame Cathedral",
          country: "France",
          lat: 48.8530,
          lng: 2.3499,
          imageNow: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1471919743851-c4df8b6ee133?w=800&h=600&fit=crop",
          description: "Medieval Catholic cathedral on the Île de la Cité in Paris.",
          history: "Construction began in 1163 and was largely completed by 1345. Survived the French Revolution and was restored in the 19th century by Eugène Viollet-le-Duc.",
          bestTimeToVisit: "April to June, September to October",
          language: "French",
          localCurrency: "Euro (€)",
          laws: {
            general: ["Respect religious services", "Dress modestly", "No loud conversations"],
            photography: ["Photography allowed outside", "No flash inside", "Respect worshippers"],
            behavior: ["Remove hats inside", "No eating or drinking", "Follow mass schedules"],
            customs: ["Genuflect before altar", "Light candles respectfully", "Observe silence during prayer"]
          },
          dos: ["Attend evening vespers", "Visit the treasury", "Climb the towers", "Respect ongoing restoration"],
          donts: ["Don't interrupt services", "Don't touch religious artifacts", "Don't wear revealing clothing", "Don't use flash photography"],
          emergency: {
            police: "17",
            ambulance: "15",
            fire: "18",
            tourist: "+33-892-70-12-39"
          },
          climate: {
            temperature: "15°C average",
            season: "Temperate",
            humidity: "75%",
            rainfall: "640mm annually"
          },
          funFacts: ["Survived two world wars", "Famous for its flying buttresses", "Home to Crown of Thorns relic", "Inspiration for Victor Hugo's novel"]
        }
      ]
    },
    {
      name: "Italy",
      flag: "🇮🇹",
      capital: "Rome",
      population: "59.1 million",
      description: "Rich in history, art, architecture and cuisine",
      backgroundImage: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop",
      places: [
        {
          name: "Colosseum",
          country: "Italy",
          lat: 41.8902,
          lng: 12.4922,
          imageNow: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&h=600&fit=crop",
          description: "An ancient amphitheater in the center of Rome, Italy.",
          history: "Built between 70-80 AD, the Colosseum was the largest amphitheater ever built and hosted gladiatorial contests.",
          bestTimeToVisit: "April to May, September to October",
          language: "Italian",
          localCurrency: "Euro (€)",
          laws: {
            general: ["No climbing on ruins", "Respect historical site", "Follow guided paths only"],
            photography: ["Personal photography allowed", "No commercial photography without permits", "No flash in underground areas"],
            behavior: ["No loud noises", "No eating inside", "Stay on designated paths"],
            customs: ["Dress modestly", "Show respect for historical significance", "Follow guide instructions"]
          },
          dos: ["Book skip-the-line tickets", "Wear comfortable shoes", "Bring water bottle", "Use audio guide"],
          donts: ["Don't touch ancient stones", "Don't litter", "Don't bring large backpacks", "Don't climb on structures"],
          emergency: {
            police: "113",
            ambulance: "118",
            fire: "115",
            tourist: "+39-06-0608"
          },
          climate: {
            temperature: "25°C average",
            season: "Mediterranean",
            humidity: "65%",
            rainfall: "750mm annually"
          },
          funFacts: ["Could hold 80,000 spectators", "Had a retractable roof system", "Underground chambers housed animals", "Took 8 years to build"]
        },
        {
          name: "Venice Canals",
          country: "Italy",
          lat: 45.4408,
          lng: 12.3155,
          imageNow: "https://tse4.mm.bing.net/th/id/OIP.gaMhQfV8vzLMCiL8m1eUUAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          imageThen: "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2020/06/22001309/photo-1591208511408-4ef75495c89f-1507x900.jpeg",
          description: "A network of canals in Venice, Italy.",
          history: "Venice was built on 118 small islands separated by canals and linked by over 400 bridges.",
          bestTimeToVisit: "April to June, September to November",
          language: "Italian",
          localCurrency: "Euro (€)",
          laws: {
            general: ["No swimming in canals", "No feeding pigeons", "No sitting on bridge steps"],
            photography: ["Photography allowed everywhere", "Be respectful of locals", "No drones without permits"],
            behavior: ["Keep right when walking", "No loud music", "Respect private property"],
            customs: ["Greet with 'Buongiorno'", "Dress appropriately for churches", "Tip gondoliers"]
          },
          dos: ["Take a gondola ride", "Visit St. Mark's Square", "Try local seafood", "Walk across Rialto Bridge"],
          donts: ["Don't swim in canals", "Don't feed pigeons", "Don't sit on bridge steps", "Don't litter"],
          emergency: {
            police: "113",
            ambulance: "118",
            tourist: "+39-041-529-8711"
          },
          climate: {
            temperature: "22°C average",
            season: "Mediterranean",
            humidity: "70%",
            rainfall: "750mm annually"
          },
          funFacts: ["Built on 118 islands", "Over 400 bridges", "No cars allowed", "Sinking 1-2mm per year"]
        },
        {
          name: "Leaning Tower of Pisa",
          country: "Italy",
          lat: 43.7230,
          lng: 10.3966,
          imageNow: "https://tse4.mm.bing.net/th/id/OIP.n0n17xSRAczGrsUm_6S6cQHaE4?w=1280&h=845&rs=1&pid=ImgDetMain&o=7&rm=3",
          imageThen: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhbmluZyUyMHRvd2VyJTIwb2YlMjBwaXNhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          description: "Freestanding bell tower famous for its unintended tilt.",
          history: "Construction began in 1173 and took nearly 200 years to complete. The tilt developed during construction due to soft ground on one side.",
          bestTimeToVisit: "April to June, September to October",
          language: "Italian",
          localCurrency: "Euro (€)",
          laws: {
            general: ["Timed entry tickets required", "No climbing without reservation", "Follow safety guidelines"],
            photography: ["Photography allowed", "No commercial photography without permits", "Respect other visitors"],
            behavior: ["No running on stairs", "Follow guide instructions", "Stay in designated areas"],
            customs: ["Book tickets in advance", "Respect Italian culture", "Be patient with crowds"]
          },
          dos: ["Book climbing tickets early", "Visit Piazza dei Miracoli", "See the cathedral", "Take classic leaning photos"],
          donts: ["Don't push or lean on structure", "Don't bring large bags", "Don't ignore safety rules", "Don't block pathways"],
          emergency: {
            police: "113",
            ambulance: "118",
            fire: "115",
            tourist: "+39-050-835-011"
          },
          climate: {
            temperature: "22°C average",
            season: "Mediterranean",
            humidity: "65%",
            rainfall: "900mm annually"
          },
          funFacts: ["Leans at 3.97 degrees", "296 steps to the top", "Weighs 14,500 tons", "Galileo's gravity experiments"]
        }
      ]
    },
    {
      name: "Japan",
      flag: "🇯🇵",
      capital: "Tokyo",
      population: "125.8 million",
      description: "Blend of ancient traditions and modern technology",
      backgroundImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
      places: [
        {
          name: "Mount Fuji",
          country: "Japan",
          lat: 35.3606,
          lng: 138.7274,
          imageNow: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/bb2f/live/7140c210-95ea-11ef-9607-9df2d810c28b.jpg",
          imageThen: "https://tse3.mm.bing.net/th/id/OIP.Mq7X0NrcwpWxxXXTMPfN7QHaE7?w=1024&h=682&rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Japan's highest mountain and sacred symbol.",
          history: "Sacred mountain and symbol of Japan, last erupted in 1707. Climbing season is July-September.",
          bestTimeToVisit: "July to September (climbing season)",
          language: "Japanese",
          localCurrency: "Japanese Yen (¥)",
          laws: {
            general: ["Climbing permits required", "Stay on designated trails", "No camping outside designated areas"],
            photography: ["Photography allowed", "No drones without permits", "Respect sacred sites"],
            behavior: ["No littering", "Quiet respect required", "Follow mountain etiquette"],
            customs: ["Bow when greeting", "Remove shoes indoors", "Respect nature spirits"]
          },
          dos: ["Check weather conditions", "Bring proper gear", "Start early morning", "Respect local customs"],
          donts: ["Don't climb outside season", "Don't leave trash", "Don't pick plants", "Don't ignore safety warnings"],
          emergency: {
            police: "110",
            ambulance: "119",
            tourist: "+81-3-3201-3331"
          },
          climate: {
            temperature: "Varies by altitude",
            season: "Temperate",
            humidity: "60%",
            rainfall: "1500mm annually"
          },
          funFacts: ["3,776 meters tall", "Visible from Tokyo on clear days", "UNESCO World Heritage Site", "Climbed by 300,000 people annually"]
        },
        {
          name: "Fushimi Inari Shrine",
          country: "Japan",
          lat: 34.9671,
          lng: 135.7727,
          imageNow: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=600&fit=crop",
          description: "Famous shrine with thousands of vermillion torii gates.",
          history: "Founded in 711 AD, dedicated to Inari, the Shinto god of rice, sake, and prosperity.",
          bestTimeToVisit: "March to May, September to November",
          language: "Japanese",
          localCurrency: "Japanese Yen (¥)",
          laws: {
            general: ["Respect sacred grounds", "No loud noises", "Follow shrine etiquette"],
            photography: ["Photography allowed", "No flash in buildings", "Respect worshippers"],
            behavior: ["Bow before entering", "Purify hands and mouth", "No eating on grounds"],
            customs: ["Bow twice, clap twice, bow once", "Make offerings respectfully", "Dress modestly"]
          },
          dos: ["Follow purification ritual", "Bow respectfully", "Walk quietly", "Make small offerings"],
          donts: ["Don't touch sacred objects", "Don't be loud", "Don't eat on grounds", "Don't point at people"],
          emergency: {
            police: "110",
            ambulance: "119",
            tourist: "+81-75-641-7331"
          },
          climate: {
            temperature: "20°C average",
            season: "Temperate",
            humidity: "65%",
            rainfall: "1200mm annually"
          },
          funFacts: ["10,000 torii gates", "4km hiking trail", "Open 24/7", "Foxes are sacred messengers"]
        },
        {
          name: "Tokyo Tower",
          country: "Japan",
          lat: 35.6586,
          lng: 139.7454,
          imageNow: "https://tse4.mm.bing.net/th/id/OIP.w6nr1eAS7ldsG9i7sElnuAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          imageThen: "https://tse2.mm.bing.net/th/id/OIP.G2TXjvFuej__p-mLgxsXfQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Communications and observation tower inspired by the Eiffel Tower.",
          history: "Built in 1958 as a television broadcasting antenna. At 333 meters, it was Japan's tallest structure until Tokyo Skytree was built.",
          bestTimeToVisit: "October to December, March to May",
          language: "Japanese",
          localCurrency: "Japanese Yen (¥)",
          laws: {
            general: ["No outside food or drinks", "Follow elevator capacity limits", "Respect photography rules"],
            photography: ["Photography allowed", "No tripods on observation decks", "Commercial photography requires permits"],
            behavior: ["No loud noises", "Stay behind safety barriers", "Follow staff instructions"],
            customs: ["Bow when greeting staff", "Remove shoes if required", "Respect Japanese etiquette"]
          },
          dos: ["Visit at sunset", "Buy tickets online", "Check weather conditions", "Visit both observation decks"],
          donts: ["Don't bring prohibited items", "Don't lean on barriers", "Don't ignore safety announcements", "Don't rush other visitors"],
          emergency: {
            police: "110",
            ambulance: "119",
            tourist: "+81-3-3433-5111"
          },
          climate: {
            temperature: "16°C average",
            season: "Temperate",
            humidity: "60%",
            rainfall: "1520mm annually"
          },
          funFacts: ["333 meters tall", "Red and white color scheme", "150,000 visitors monthly", "Earthquake resistant design"]
        }
      ]
    },
    {
      name: "India",
      flag: "🇮🇳",
      capital: "New Delhi",
      population: "1.4 billion",
      description: "Diverse culture, ancient heritage and spiritual traditions",
      backgroundImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
      places: [
        {
          name: "Taj Mahal",
          country: "India",
          lat: 27.1751,
          lng: 78.0421,
          imageNow: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
          description: "Ivory-white marble mausoleum and UNESCO World Heritage Site.",
          history: "Built between 1632-1653 by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
          bestTimeToVisit: "October to March",
          language: "Hindi, English",
          localCurrency: "Indian Rupee (₹)",
          laws: {
            general: ["No photography inside main tomb", "Security checks mandatory", "Dress code enforced"],
            photography: ["No tripods allowed", "No flash photography", "Commercial photography requires permits"],
            behavior: ["Remove shoes before entering", "Maintain silence inside", "No touching marble"],
            customs: ["Dress modestly", "Respect Islamic traditions", "No leather items allowed"]
          },
          dos: ["Book tickets online", "Visit early morning", "Wear shoe covers", "Respect the monument"],
          donts: ["Don't bring food", "Don't touch the marble", "Don't wear revealing clothes", "Don't bring tobacco"],
          emergency: {
            police: "100",
            ambulance: "102",
            tourist: "+91-562-233-0498"
          },
          climate: {
            temperature: "32°C average",
            season: "Tropical",
            humidity: "70%",
            rainfall: "650mm annually"
          },
          funFacts: ["Took 22 years to build", "20,000 workers involved", "Changes color throughout day", "Perfect symmetry"]
        },
        {
          name: "Red Fort",
          country: "India",
          lat: 28.6562,
          lng: 77.2410,
          imageNow: "https://upload.wikimedia.org/wikipedia/commons/0/08/Red_Fort,_Delhi_by_alexfurr.jpg",
          imageThen: "https://tse3.mm.bing.net/th/id/OIP.8hF7W3SNS7rU-0ioUt6A7gHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Historic fortified palace and UNESCO World Heritage Site in Delhi.",
          history: "Built by Mughal Emperor Shah Jahan in 1648 as the main residence of the Mughal dynasty. Served as the capital of the Mughal Empire for 200 years.",
          bestTimeToVisit: "October to March",
          language: "Hindi, English",
          localCurrency: "Indian Rupee (₹)",
          laws: {
            general: ["Security checks mandatory", "No weapons allowed", "Valid ID required"],
            photography: ["Photography allowed in most areas", "No photography in restricted zones", "Commercial photography requires permits"],
            behavior: ["Dress modestly", "Remove shoes at religious sites", "Maintain silence in museums"],
            customs: ["Respect Islamic architecture", "Follow queue systems", "Tip guides appropriately"]
          },
          dos: ["Hire audio guide", "Visit Diwan-i-Khas", "See the throne room", "Explore the gardens"],
          donts: ["Don't touch artifacts", "Don't bring food inside", "Don't ignore security", "Don't wear revealing clothes"],
          emergency: {
            police: "100",
            ambulance: "102",
            tourist: "+91-11-2336-5358"
          },
          climate: {
            temperature: "25°C average",
            season: "Subtropical",
            humidity: "65%",
            rainfall: "790mm annually"
          },
          funFacts: ["Covers 254 acres", "Made of red sandstone", "Independence Day speeches held here", "Houses several museums"]
        }
      ]
    },
    {
      name: "Egypt",
      flag: "🇪🇬",
      capital: "Cairo",
      population: "104.3 million",
      description: "Ancient civilization and iconic pyramids",
      backgroundImage: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&h=600&fit=crop&auto=format",
      places: [
        {
          name: "Great Pyramid of Giza",
          country: "Egypt",
          lat: 29.9792,
          lng: 31.1342,
          imageNow: "https://th.bing.com/th/id/R.1a6358bf4ee804e45b21d7d363643c5c?rik=YvHZ6x3zPN0Guw&riu=http%3a%2f%2ffoundtheworld.com%2fwp-content%2fuploads%2f2015%2f12%2fGreat-Pyramids-of-Giza-9.jpg&ehk=cD8wS%2ffGvXj6pb%2b46ixf%2bDBBOH4guTFDssCX0ZxNpIM%3d&risl=&pid=ImgRaw&r=0",
          imageThen: "https://s.yimg.com/ny/api/res/1.2/TVX.rExGeg4bhjZVfXCU4Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTUzOQ--/https://media.zenfs.com/en/live_science_953/ddefda35d5127b1c867b823d377a1439",
          description: "The oldest and largest of the three pyramids in the Giza pyramid complex.",
          history: "Built around 2580-2510 BC as a tomb for Pharaoh Khufu, it's the oldest of the Seven Wonders of the Ancient World.",
          bestTimeToVisit: "October to April",
          language: "Arabic, English",
          localCurrency: "Egyptian Pound (EGP)",
          laws: {
            general: ["Respect ancient monuments", "No climbing pyramids", "Photography permits required inside"],
            photography: ["Extra fees for cameras", "No flash inside pyramids", "Commercial photography restricted"],
            behavior: ["Dress conservatively", "No loud noises", "Follow guide instructions"],
            customs: ["Bargain respectfully", "Tip guides and guards", "Respect Islamic customs"]
          },
          dos: ["Hire official guides", "Bring sun protection", "Carry water", "Wear comfortable shoes"],
          donts: ["Don't climb pyramids", "Don't touch ancient stones", "Don't buy from unofficial vendors", "Don't ignore security"],
          emergency: {
            police: "122",
            ambulance: "123",
            tourist: "+20-2-2391-3454"
          },
          climate: {
            temperature: "35°C average",
            season: "Desert",
            humidity: "45%",
            rainfall: "25mm annually"
          },
          funFacts: ["Originally 146.5m tall", "2.3 million stone blocks", "Aligned with cardinal directions", "Built without modern machinery"]
        },
        {
          name: "Sphinx",
          country: "Egypt",
          lat: 29.9753,
          lng: 31.1376,
          imageNow: "https://tse2.mm.bing.net/th/id/OIP.dhzvuOiyZErmAraB9Q3LPgHaEg?rs=1&pid=ImgDetMain&o=7&rm=3",
          imageThen: "https://tse1.explicit.bing.net/th/id/OIP.v5-cSH4CCXXmHwyDGJP5VQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Limestone statue of a mythical creature with a human head and lion's body.",
          history: "Carved from a single piece of limestone around 2500 BC during the reign of Pharaoh Khafre. One of the world's largest and oldest statues.",
          bestTimeToVisit: "October to April",
          language: "Arabic, English",
          localCurrency: "Egyptian Pound (EGP)",
          laws: {
            general: ["Respect ancient monument", "No climbing allowed", "Photography fees apply"],
            photography: ["Extra fees for cameras", "No flash photography", "Commercial photography restricted"],
            behavior: ["Dress conservatively", "No loud noises", "Follow guide instructions"],
            customs: ["Bargain respectfully with vendors", "Tip guides and guards", "Respect Islamic customs"]
          },
          dos: ["Hire official guides", "Bring sun protection", "Visit early morning", "Combine with pyramid tour"],
          donts: ["Don't climb on statue", "Don't touch the limestone", "Don't buy from unofficial vendors", "Don't ignore heat warnings"],
          emergency: {
            police: "122",
            ambulance: "123",
            tourist: "+20-2-2391-3454"
          },
          climate: {
            temperature: "35°C average",
            season: "Desert",
            humidity: "45%",
            rainfall: "25mm annually"
          },
          funFacts: ["73 meters long", "20 meters high", "Missing nose mystery", "Faces due east"]
        }
      ]
    },
    {
      name: "USA",
      flag: "🇺🇸",
      capital: "Washington D.C.",
      population: "331.9 million",
      description: "Diverse landscapes and cultural experiences",
      backgroundImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop",
      places: [
        {
          name: "Statue of Liberty",
          country: "USA",
          lat: 40.6892,
          lng: -74.0445,
          imageNow: "https://th.bing.com/th/id/R.03b740b4cd1471ddcbc77275df5fecc2?rik=ZCXhuX57SOGIig&riu=http%3a%2f%2f2.bp.blogspot.com%2f-1Rszvc6N8oQ%2fTckclcf28XI%2fAAAAAAAAAEQ%2fLc1PDLgBoKA%2fs1600%2fStatue-of-Liberty-New-York-NY-600x448.jpg&ehk=OYUhHEC6dg6ij6gsrt7AebslHEaKXxKTkhVW54dmZoc%3d&risl=&pid=ImgRaw&r=0",
          imageThen: "https://i.pinimg.com/originals/63/f8/5a/63f85a660ca63940d45f9d535166c087.jpg",
          description: "Neoclassical sculpture on Liberty Island in New York Harbor.",
          history: "Gift from France in 1886, symbol of freedom and democracy. Designed by Frédéric Auguste Bartholdi.",
          bestTimeToVisit: "April to June, September to November",
          language: "English",
          localCurrency: "US Dollar ($)",
          laws: {
            general: ["Security screening required", "No large bags", "Valid ID required"],
            photography: ["Photography allowed", "No commercial photography without permits", "No drones"],
            behavior: ["Follow park ranger instructions", "Stay in designated areas", "No climbing"],
            customs: ["Respect national symbol", "Follow queue systems", "Be patient with security"]
          },
          dos: ["Book ferry tickets in advance", "Arrive early", "Bring camera", "Visit Ellis Island too"],
          donts: ["Don't bring prohibited items", "Don't feed wildlife", "Don't climb on barriers", "Don't ignore security"],
          emergency: {
            police: "911",
            ambulance: "911",
            tourist: "+1-212-363-3200"
          },
          climate: {
            temperature: "20°C average",
            season: "Humid subtropical",
            humidity: "65%",
            rainfall: "1200mm annually"
          },
          funFacts: ["151 feet tall", "Made of copper", "Crown has 25 windows", "7 rays on crown represent continents"]
        },
        {
          name: "Grand Canyon",
          country: "USA",
          lat: 36.0544,
          lng: -112.1401,
          imageNow: "https://media.oars.com/wp-content/uploads/2023/04/20203932/DSC07522_sm-2.jpg",
          imageThen: "https://tse1.mm.bing.net/th/id/OIP._Wa1j3pWrTvI_JVkEUUgcwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Steep-sided canyon carved by the Colorado River in Arizona.",
          history: "Formed over millions of years by the Colorado River cutting through rock layers, revealing Earth's geological history.",
          bestTimeToVisit: "March to May, September to November",
          language: "English",
          localCurrency: "US Dollar ($)",
          laws: {
            general: ["Stay on designated trails", "No feeding wildlife", "Permits required for backcountry"],
            photography: ["Photography allowed everywhere", "Commercial photography requires permits", "No drones without permits"],
            behavior: ["Stay behind barriers", "No littering", "Respect wildlife"],
            customs: ["Leave no trace", "Respect Native American heritage", "Follow park rules"]
          },
          dos: ["Use railings for safety", "Bring plenty of water", "Wear sun protection", "Check weather conditions"],
          donts: ["Don't climb fences", "Don't get too close to edges", "Don't feed animals", "Don't leave trash"],
          emergency: {
            police: "911",
            ambulance: "911",
            park: "+1-928-638-7888"
          },
          climate: {
            temperature: "Varies by elevation",
            season: "Desert",
            humidity: "30%",
            rainfall: "380mm annually"
          },
          funFacts: ["277 miles long", "18 miles wide", "1 mile deep", "6 million years old"]
        },
        {
          name: "Times Square",
          country: "USA",
          lat: 40.7580,
          lng: -73.9855,
          imageNow: "https://media.istockphoto.com/id/523538287/photo/times-square.jpg?b=1&s=170667a&w=0&k=20&c=Y0oY9o7k_DvW5_bbSyB1FvZkddsCDlARsJTWWkpiRVc=",
          imageThen: "https://tse3.mm.bing.net/th/id/OIP.Mau12ERUVA-zr8O39yz1fgHaFw?rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Major commercial intersection and entertainment center in Manhattan.",
          history: "Originally called Longacre Square, renamed in 1904 after The New York Times moved its headquarters there. Became the heart of NYC's theater district.",
          bestTimeToVisit: "April to June, September to November",
          language: "English",
          localCurrency: "US Dollar ($)",
          laws: {
            general: ["No open containers of alcohol", "No aggressive solicitation", "Follow traffic signals"],
            photography: ["Photography allowed everywhere", "Be aware of costumed characters", "Commercial photography may require permits"],
            behavior: ["Stay aware of surroundings", "Keep valuables secure", "Respect street performers"],
            customs: ["Tip street performers if you watch", "Be patient with crowds", "Follow pedestrian rules"]
          },
          dos: ["Visit at night for full effect", "See a Broadway show", "Visit TKTS for discounts", "Experience New Year's Eve"],
          donts: ["Don't stop in middle of walkways", "Don't engage with aggressive vendors", "Don't leave bags unattended", "Don't expect quiet moments"],
          emergency: {
            police: "911",
            ambulance: "911",
            tourist: "+1-212-484-1200"
          },
          climate: {
            temperature: "13°C average",
            season: "Humid continental",
            humidity: "65%",
            rainfall: "1200mm annually"
          },
          funFacts: ["330,000 pedestrians daily", "Over 50 million visitors annually", "Nicknamed 'Crossroads of the World'", "Home to New Year's Eve Ball Drop"]
        }
      ]
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      capital: "Madrid",
      population: "47.4 million",
      description: "Rich culture, beautiful architecture and vibrant lifestyle",
      backgroundImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=600&fit=crop",
      places: [
        {
          name: "Sagrada Familia",
          country: "Spain",
          lat: 41.4036,
          lng: 2.1744,
          imageNow: "https://i.pinimg.com/736x/2e/66/4c/2e664c4287b7f18d6cf139331ee4deee.jpg",
          imageThen: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&h=600&fit=crop",
          description: "Large unfinished Roman Catholic minor basilica in Barcelona.",
          history: "Antoni Gaudí's masterpiece, construction began in 1882 and continues today. Expected completion around 2026.",
          bestTimeToVisit: "April to May, September to October",
          language: "Spanish, Catalan",
          localCurrency: "Euro (€)",
          laws: {
            general: ["Dress code enforced", "No photography during mass", "Timed entry required"],
            photography: ["Personal photography allowed", "No flash photography", "No commercial photography"],
            behavior: ["Maintain silence during services", "No food or drinks", "Respect religious practices"],
            customs: ["Dress modestly", "Remove hats inside", "Follow Catholic customs"]
          },
          dos: ["Book tickets online", "Respect religious services", "Follow audio guide", "Dress appropriately"],
          donts: ["Don't wear revealing clothing", "Don't use flash", "Don't bring large bags", "Don't be loud"],
          emergency: {
            police: "091",
            ambulance: "061",
            tourist: "+34-932-853-834"
          },
          climate: {
            temperature: "22°C average",
            season: "Mediterranean",
            humidity: "65%",
            rainfall: "640mm annually"
          },
          funFacts: ["18 spires planned", "UNESCO World Heritage Site", "Over 140 years in construction", "Gaudí is buried inside"]
        },
        {
          name: "Park Güell",
          country: "Spain",
          lat: 41.4145,
          lng: 2.1527,
          imageNow: "https://tse2.mm.bing.net/th/id/OIP.yLj1Dof6tlt31YnqgSlyuAHaFj?w=1080&h=810&rs=1&pid=ImgDetMain&o=7&rm=3",
          imageThen: "https://tse4.mm.bing.net/th/id/OIP.6L4x-uRl9oZ1fGDj68jWLwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Public park system composed of gardens and architectural elements designed by Antoni Gaudí.",
          history: "Originally conceived as a housing development by Eusebi Güell and designed by Gaudí between 1900-1914. Became a public park in 1926.",
          bestTimeToVisit: "April to May, September to October",
          language: "Spanish, Catalan",
          localCurrency: "Euro (€)",
          laws: {
            general: ["Timed entry tickets required", "No pets allowed", "Respect park rules"],
            photography: ["Photography allowed", "No commercial photography without permits", "Respect other visitors"],
            behavior: ["No climbing on structures", "No littering", "Stay on designated paths"],
            customs: ["Book tickets online", "Arrive on time", "Respect Catalan culture"]
          },
          dos: ["Book tickets in advance", "Visit the mosaic salamander", "See the serpentine bench", "Explore Gaudí's house"],
          donts: ["Don't bring food or drinks", "Don't touch the mosaics", "Don't climb on sculptures", "Don't be late for entry time"],
          emergency: {
            police: "091",
            ambulance: "061",
            tourist: "+34-932-853-834"
          },
          climate: {
            temperature: "22°C average",
            season: "Mediterranean",
            humidity: "65%",
            rainfall: "640mm annually"
          },
          funFacts: ["UNESCO World Heritage Site", "Covers 17 hectares", "Famous trencadís mosaic technique", "Offers panoramic city views"]
        }
      ]
    },
    {
      name: "China",
      flag: "🇨🇳",
      capital: "Beijing",
      population: "1.4 billion",
      description: "Ancient civilization with modern achievements",
      backgroundImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop",
      places: [
        {
          name: "Great Wall of China",
          country: "China",
          lat: 40.4319,
          lng: 116.5704,
          imageNow: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
          description: "Ancient fortification system across northern China.",
          history: "Built over centuries to protect Chinese states from invasions, with most existing wall from Ming Dynasty (1368-1644).",
          bestTimeToVisit: "April to June, September to November",
          language: "Mandarin Chinese",
          localCurrency: "Chinese Yuan (¥)",
          laws: {
            general: ["Stay on designated paths", "No graffiti or vandalism", "Respect historical site"],
            photography: ["Photography allowed", "No commercial photography without permits", "No drones"],
            behavior: ["No littering", "No loud noises", "Follow guide instructions"],
            customs: ["Respect Chinese culture", "Be patient with crowds", "Follow group leaders"]
          },
          dos: ["Wear comfortable shoes", "Bring water", "Use cable car if needed", "Respect the monument"],
          donts: ["Don't write on walls", "Don't litter", "Don't climb dangerous sections", "Don't ignore safety warnings"],
          emergency: {
            police: "110",
            ambulance: "120",
            tourist: "+86-10-6513-0828"
          },
          climate: {
            temperature: "15°C average",
            season: "Continental",
            humidity: "55%",
            rainfall: "570mm annually"
          },
          funFacts: ["21,196 km total length", "Took over 2000 years to build", "Not visible from space", "Millions of workers died building it"]
        },
        {
          name: "Forbidden City",
          country: "China",
          lat: 39.9163,
          lng: 116.3972,
          imageNow: "https://www.discoverwalks.com/blog/wp-content/uploads/2021/03/1440px-forbidden_city_beijing_3019178959-1024x768.jpg",
          imageThen: "https://tse1.mm.bing.net/th/id/OIP.Vi10vLdpJ9S4UGqXX_G_awHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
          description: "Palace complex that served as the home of emperors for nearly 500 years.",
          history: "Built between 1406-1420 during the Ming Dynasty. Served as the Chinese imperial palace and ceremonial center for 24 emperors until 1912.",
          bestTimeToVisit: "April to June, September to November",
          language: "Mandarin Chinese",
          localCurrency: "Chinese Yuan (¥)",
          laws: {
            general: ["Valid ID required", "Security checks mandatory", "No large bags allowed"],
            photography: ["Photography allowed in courtyards", "No photography inside buildings", "No commercial photography"],
            behavior: ["No smoking", "No littering", "Follow designated routes"],
            customs: ["Respect Chinese culture", "Follow group leaders", "Be patient with crowds"]
          },
          dos: ["Book tickets online", "Arrive early", "Wear comfortable shoes", "Bring water"],
          donts: ["Don't touch artifacts", "Don't enter restricted areas", "Don't ignore security", "Don't bring prohibited items"],
          emergency: {
            police: "110",
            ambulance: "120",
            tourist: "+86-10-6513-0828"
          },
          climate: {
            temperature: "12°C average",
            season: "Continental",
            humidity: "55%",
            rainfall: "570mm annually"
          },
          funFacts: ["980 buildings", "9,999 rooms", "Largest palace complex", "UNESCO World Heritage Site"]
        }
      ]
    },
    {
      name: "Mexico",
      flag: "🇲🇽",
      capital: "Mexico City",
      population: "128.9 million",
      description: "Rich Aztec and Mayan heritage with vibrant culture",
      backgroundImage: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=600&fit=crop",
      places: [
        {
          name: "Chichen Itza",
          country: "Mexico",
          lat: 20.6843,
          lng: -88.5678,
          imageNow: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          description: "Large pre-Columbian archaeological site built by the Maya civilization.",
          history: "Built between 600-1200 AD, Chichen Itza was one of the largest Maya cities and is now a UNESCO World Heritage Site.",
          bestTimeToVisit: "November to April",
          language: "Spanish",
          localCurrency: "Mexican Peso (MXN)",
          laws: {
            general: ["No climbing pyramids", "Respect archaeological site", "Follow designated paths"],
            photography: ["Photography allowed", "No flash in certain areas", "Commercial photography requires permits"],
            behavior: ["No loud noises", "No touching structures", "Respect Mayan heritage"],
            customs: ["Respect indigenous culture", "Tip guides appropriately", "Learn basic Spanish phrases"]
          },
          dos: ["Hire certified guides", "Bring sun protection", "Wear comfortable shoes", "Carry water"],
          donts: ["Don't climb El Castillo", "Don't touch carvings", "Don't buy from unauthorized vendors", "Don't ignore heat warnings"],
          emergency: {
            police: "911",
            ambulance: "911",
            tourist: "+52-999-920-2772"
          },
          climate: {
            temperature: "30°C average",
            season: "Tropical",
            humidity: "75%",
            rainfall: "1200mm annually"
          },
          funFacts: ["El Castillo has 365 steps", "Acoustic phenomena in ball court", "Equinox shadow serpent", "New Wonder of the World"]
        },
        {
          name: "Teotihuacan",
          country: "Mexico",
          lat: 19.6925,
          lng: -98.8438,
          imageNow: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&h=600&fit=crop",
          description: "Ancient Mesoamerican city known for its pyramids and Avenue of the Dead.",
          history: "Built between 100-450 AD, Teotihuacan was one of the largest cities in the ancient world with over 100,000 inhabitants at its peak.",
          bestTimeToVisit: "November to April",
          language: "Spanish",
          localCurrency: "Mexican Peso (MXN)",
          laws: {
            general: ["No climbing certain pyramids", "Respect archaeological site", "Follow designated paths"],
            photography: ["Photography allowed", "No flash in museums", "Commercial photography requires permits"],
            behavior: ["No loud noises", "No touching structures", "Respect ancient heritage"],
            customs: ["Respect indigenous culture", "Tip guides appropriately", "Learn basic Spanish phrases"]
          },
          dos: ["Climb Pyramid of the Sun", "Walk Avenue of the Dead", "Visit the museum", "Bring sun protection"],
          donts: ["Don't touch murals", "Don't climb restricted areas", "Don't ignore heat warnings", "Don't buy from unauthorized vendors"],
          emergency: {
            police: "911",
            ambulance: "911",
            tourist: "+52-594-956-0276"
          },
          climate: {
            temperature: "18°C average",
            season: "Subtropical highland",
            humidity: "60%",
            rainfall: "600mm annually"
          },
          funFacts: ["Pyramid of the Sun is 65m tall", "Avenue of the Dead is 2.4km long", "Name means 'place where gods were born'", "UNESCO World Heritage Site"]
        }
      ]
    },
    {
      name: "Turkey",
      flag: "🇹🇷",
      capital: "Ankara",
      population: "84.3 million",
      description: "Bridge between Europe and Asia with rich history",
      backgroundImage: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
      places: [
        {
          name: "Hagia Sophia",
          country: "Turkey",
          lat: 41.0086,
          lng: 28.9802,
          imageNow: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&h=600&fit=crop",
          description: "Former Greek Orthodox Christian patriarchal cathedral, later an Ottoman imperial mosque.",
          history: "Built in 537 AD as a cathedral, converted to mosque in 1453, museum from 1935-2020, now a mosque again.",
          bestTimeToVisit: "April to May, September to November",
          language: "Turkish",
          localCurrency: "Turkish Lira (₺)",
          laws: {
            general: ["Dress modestly", "Remove shoes before entering", "Respect prayer times"],
            photography: ["Photography allowed", "No flash during prayers", "Respect worshippers"],
            behavior: ["Maintain silence during prayers", "No eating inside", "Follow Islamic customs"],
            customs: ["Cover head for women", "Dress conservatively", "Respect religious practices"]
          },
          dos: ["Dress modestly", "Remove shoes", "Respect prayer times", "Use audio guide"],
          donts: ["Don't wear shorts", "Don't be loud during prayers", "Don't point feet toward Mecca", "Don't ignore dress code"],
          emergency: {
            police: "155",
            ambulance: "112",
            tourist: "+90-212-518-1802"
          },
          climate: {
            temperature: "18°C average",
            season: "Mediterranean",
            humidity: "70%",
            rainfall: "850mm annually"
          },
          funFacts: ["1500 years old", "Largest cathedral for 1000 years", "Famous for its dome", "UNESCO World Heritage Site"]
        },
        {
          name: "Blue Mosque",
          country: "Turkey",
          lat: 41.0054,
          lng: 28.9768,
          imageNow: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
          imageThen: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop",
          description: "Historic mosque known for its blue tiles and six minarets.",
          history: "Built between 1609-1616 during the rule of Ahmed I. Officially called Sultan Ahmed Mosque, it's famous for its blue Iznik tiles.",
          bestTimeToVisit: "April to May, September to November",
          language: "Turkish",
          localCurrency: "Turkish Lira (₺)",
          laws: {
            general: ["Dress modestly", "Remove shoes before entering", "Respect prayer times"],
            photography: ["Photography allowed", "No flash during prayers", "Respect worshippers"],
            behavior: ["Maintain silence during prayers", "No eating inside", "Follow Islamic customs"],
            customs: ["Cover head for women", "Dress conservatively", "Respect religious practices"]
          },
          dos: ["Dress modestly", "Remove shoes", "Respect prayer times", "Visit outside prayer hours"],
          donts: ["Don't wear shorts or tank tops", "Don't be loud during prayers", "Don't point feet toward Mecca", "Don't ignore dress code"],
          emergency: {
            police: "155",
            ambulance: "112",
            tourist: "+90-212-518-1802"
          },
          climate: {
            temperature: "18°C average",
            season: "Mediterranean",
            humidity: "70%",
            rainfall: "850mm annually"
          },
          funFacts: ["20,000 blue tiles", "Six minarets", "260 windows", "Can hold 10,000 worshippers"]
        }
      ]
    }
  ] as Country[],
  
  forgottenPlaces: [
    {
      name: "Hashima Island",
      country: "Japan",
      lat: 32.6278,
      lng: 129.7386,
      imageBefore: "https://tse1.mm.bing.net/th/id/OIP.-VEa22DkSUOMh4Cs5CdsBwHaDy?rs=1&pid=ImgDetMain&o=7&rm=3",
      imageNow: "https://thoughtnova.com/wp-content/uploads/2022/01/ostrov-hasima-yaponiya-1500x982.jpg",
      history: "Once a thriving coal mining facility, Hashima Island was abandoned in 1974 when coal was replaced by petroleum. At its peak, it housed over 5,000 residents in a space smaller than a city block.",
      yearAbandoned: "1974",
      reason: "Coal mine closure due to petroleum shift",
      dos: ["Follow tour guide strictly", "Wear appropriate footwear", "Bring camera for documentation", "Stay with the group"],
      donts: ["Don't wander off designated paths", "Don't touch deteriorating structures", "Don't attempt drone flights", "Don't remove any artifacts"]
    },
    {
      name: "Pompeii",
      country: "Italy",
      lat: 40.7497,
      lng: 14.4869,
      imageBefore: "https://th.bing.com/th/id/R.7f6e27e096f15902ee217dfb9280e63f?rik=%2by0Ld2CidvSHRA&riu=http%3a%2f%2ffiresofpompeii.weebly.com%2fuploads%2f2%2f5%2f8%2f6%2f25863910%2f7117472.jpg%3f343&ehk=Tm85zofOsX24qnC4bpDHPJf7y2l%2bcgCd6SCU14CkbjE%3d&risl=&pid=ImgRaw&r=0",
      imageNow: "https://content.api.news/v3/images/bin/e00125319023f3a073b587928dcade28",
      history: "Ancient Roman city buried by Mount Vesuvius eruption in 79 AD, preserving daily life in volcanic ash. The city was rediscovered in 1748 and provides unique insights into Roman life.",
      yearAbandoned: "79 AD",
      reason: "Mount Vesuvius volcanic eruption",
      dos: ["Use guided tours for historical context", "Wear sun protection", "Bring water bottle", "Respect archaeological site"],
      donts: ["Don't touch ancient ruins", "Don't climb on structures", "Don't remove artifacts", "Don't ignore safety barriers"]
    },
    {
      name: "Pripyat",
      country: "Ukraine",
      lat: 51.3890,
      lng: 30.0990,
      imageBefore: "https://external-preview.redd.it/ChNoo0SKCgcfqrrxTyrn2oeeMin2evOt7M0n76UIiAI.jpg?auto=webp&s=e15eba04bbbc0a9044ea86798710c1ce7427fd84",
      imageNow: "https://tse2.mm.bing.net/th/id/OIP.Xx_cA3k0gjW7vYHbQgw3HwHaEK?w=700&h=394&rs=1&pid=ImgDetMain&o=7&rm=3",
      history: "Evacuated after the Chernobyl nuclear disaster in 1986, Pripyat was home to 50,000 people. Now it's a ghost town frozen in time, slowly being reclaimed by nature.",
      yearAbandoned: "1986",
      reason: "Chernobyl nuclear disaster",
      dos: ["Stay on designated paths", "Follow radiation safety protocols", "Use authorized tour companies", "Wear appropriate clothing"],
      donts: ["Don't touch anything", "Don't remove items as souvenirs", "Don't enter buildings without permission", "Don't ignore safety instructions"]
    },
    {
      name: "Varosha",
      country: "Cyprus",
      lat: 35.1264,
      lng: 33.9619,
      imageBefore: "https://tse1.mm.bing.net/th/id/OIP.KOr0R24t6130bnSQOLCnEgHaEb?w=800&h=479&rs=1&pid=ImgDetMain&o=7&rm=3",
      imageNow: "https://tse1.mm.bing.net/th/id/OIP.BWuH18bpmnxcxSeEqE8kEgHaEk?w=770&h=475&rs=1&pid=ImgDetMain&o=7&rm=3",
      history: "Once a luxury resort destination known as the 'French Riviera of Cyprus', abandoned during the 1974 Turkish invasion. The area remains under military control.",
      yearAbandoned: "1974",
      reason: "Turkish invasion of Cyprus",
      dos: ["Respect military zones", "Follow local guides", "Bring proper identification", "Understand political sensitivity"],
      donts: ["Don't cross military barriers", "Don't photograph military installations", "Don't enter restricted areas", "Don't ignore checkpoint instructions"]
    },
    {
      name: "Bhangarh Fort",
      country: "India",
      lat: 27.0973,
      lng: 76.0094,
      imageBefore: "https://travellersjunction.com/wp-content/uploads/2020/02/67477036_2338135623069049_2184347500548765822_n.jpg",
      imageNow: "https://media.istockphoto.com/id/642799102/photo/old-bhangarh-fort-in-india.webp?b=1&s=612x612&w=0&k=20&c=mY4OoNzE5CiT87Qmfdbe_KGd_-kSKKw7Um520wMWYns=",
      history: "17th-century fort city abandoned due to famine and war, now considered one of India's most haunted places. The Archaeological Survey of India prohibits overnight stays.",
      yearAbandoned: "1783",
      reason: "Famine and Mughal-Maratha conflicts",
      dos: ["Visit during daylight hours only", "Stay with groups", "Respect local beliefs and folklore", "Follow ASI guidelines"],
      donts: ["Don't visit after sunset", "Don't camp overnight", "Don't disturb wildlife", "Don't ignore local warnings"]
    },
    {
      name: "Centralia",
      country: "USA",
      lat: 40.8042,
      lng: -76.3405,
      imageBefore: "https://th.bing.com/th/id/R.88092a76b0f17cc6e477f7512eb76967?rik=4BFrLDMUU52u7w&riu=http%3a%2f%2fwww.centraliapa.org%2fwp-content%2fuploads%2f2014%2f09%2fcentralia-pa-south-locust-1960.jpg&ehk=PnEjsodjnXBZbisBVH6XO1dpoVvyxKkANigSFZD9fVw%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      imageNow: "https://tse1.mm.bing.net/th/id/OIP.uif96__NajK3s0UYOmeAOAHaFj?w=800&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
      history: "Pennsylvania town abandoned due to an underground coal fire that has been burning since 1962. The fire could burn for another 250 years.",
      yearAbandoned: "1992",
      reason: "Underground coal mine fire",
      dos: ["Stay on main roads", "Be aware of ground instability", "Respect private property", "Understand fire dangers"],
      donts: ["Don't walk on unstable ground", "Don't ignore warning signs", "Don't attempt to access mine areas", "Don't underestimate toxic gases"]
    },
    {
      name: "Kolmanskop",
      country: "Namibia",
      lat: -26.7078,
      lng: 15.2286,
      imageBefore: "https://tse4.mm.bing.net/th/id/OIP.2F5wNdNlS_Ec7B1boSzluwHaE3?rs=1&pid=ImgDetMain&o=7&rm=3",
      imageNow: "https://i.dailymail.co.uk/i/pix/2013/03/31/article-2302018-18FAEE74000005DC-967_964x639.jpg",
      history: "German diamond mining town abandoned when richer diamond fields were discovered elsewhere. Sand dunes now fill the buildings.",
      yearAbandoned: "1954",
      reason: "Diamond deposits exhausted",
      dos: ["Join guided tours", "Bring sun protection", "Respect photography rules", "Stay hydrated"],
      donts: ["Don't enter buildings alone", "Don't remove sand or artifacts", "Don't ignore desert safety", "Don't wander off tour paths"]
    },
    {
      name: "Bodie",
      country: "USA",
      lat: 38.2125,
      lng: -119.0075,
      imageBefore: "https://images.unsplash.com/photo-1582141928912-6197a5e2b570?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA5ODM1ODI0fA&ixlib=rb-4.0.3",
      imageNow: "https://media.istockphoto.com/id/1297295844/photo/old-car-in-bodie-ghost-town-historical-state-park-in-california-usa.webp?b=1&s=170667a&w=0&k=20&c=dPf5H7HzfqkL0AaSbu2ET5nPVI0rwlZ1Zn6i3froxLo=",
      history: "California gold rush town that became a ghost town when the gold ran out. Now preserved in a state of 'arrested decay'.",
      yearAbandoned: "1942",
      reason: "Gold mining decline",
      dos: ["Follow park rules", "Stay on designated paths", "Respect historical preservation", "Check weather conditions"],
      donts: ["Don't enter buildings", "Don't touch artifacts", "Don't remove anything", "Don't ignore altitude effects"]
    },
    {
      name: "Craco",
      country: "Italy",
      lat: 40.3789,
      lng: 16.4394,
      imageBefore: "https://www.ancient-origins.net/sites/default/files/field/image/Craco-Italy.jpg",
      imageNow: "https://tse4.mm.bing.net/th/id/OIP.c6RAqUtF-zsiy7q2bWOQDgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
      history: "Medieval hilltop town abandoned due to landslides, earthquakes, and war. Used as filming location for many movies.",
      yearAbandoned: "1963",
      reason: "Geological instability and landslides",
      dos: ["Use guided tours only", "Wear sturdy footwear", "Follow safety protocols", "Respect film location heritage"],
      donts: ["Don't enter unstable buildings", "Don't ignore safety barriers", "Don't climb on ruins", "Don't venture alone"]
    },
    {
      name: "Kayaköy",
      country: "Turkey",
      lat: 36.5667,
      lng: 29.0833,
      imageBefore: "https://image.milimaj.com/i/milliyet/75/869x477/63024b8e86b2453920d52cac.jpg",
      imageNow: "https://tse4.mm.bing.net/th/id/OIP.97pKVP-p5qX3InF58bg4-wHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
      history: "Greek Orthodox village abandoned during the 1923 population exchange between Greece and Turkey. Over 500 houses remain as ruins.",
      yearAbandoned: "1923",
      reason: "Greco-Turkish population exchange",
      dos: ["Respect cultural heritage", "Learn about population exchange history", "Support local conservation", "Visit with cultural sensitivity"],
      donts: ["Don't damage stone structures", "Don't ignore historical significance", "Don't remove artifacts", "Don't disrespect religious sites"]
    }
  ] as ForgottenPlace[]
};