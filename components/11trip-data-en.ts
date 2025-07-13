/**
 * Visit Bolivia 11-Day Package - English Content Data
 * ==================================================
 * 
 * Author: Sergio Agreda (sergioagreda21@outlook.com)
 * GitHub: @AgredaLem023
 * Project: Visit Bolivia - 11-Day Travel Package Frontend
 * 
 * Copyright © 2025 Sergio Agreda. All rights reserved.
 * This code is proprietary and confidential.
 * 
 * Originally developed by Sergio Agreda for Visit Bolivia business operations.
 * 
 * Description:
 * English language content data for the 11-day Bolivia travel package.
 * Includes extended travel information, pricing, activities, and descriptions.
 */

// @/components/trip-data-en.ts

// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://backend-visitbolivia.onrender.com' // Production backend on Render
  : 'http://localhost:8000';

// Types for API responses
export interface ReviewFromAPI {
  id: number;
  name: string;
  date: string;
  rating: number;
  body: string;
}

export interface ReviewsResponse {
  reviews: ReviewFromAPI[];
  total_reviews: number;
  average_rating: number;
  star_distribution: Record<string, number>;
}

export interface ImageFromAPI {
  id: number;
  url: string;
  category: string;
  alt_text: string;
  alt_text_en: string;
}

export interface ImagesResponse {
  package_id: string;
  images: ImageFromAPI[];
  total_images: number;
}

export interface ItineraryDayFromAPI {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  included_activities: string;
  meals: string;
  optional_activities: string[];
  special_info: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  includedActivities: string;
  meals: string;
  optionalActivities: string[];
  specialInfo: string;
}

export interface ItineraryResponse {
  package_id: string;
  itinerary: ItineraryDay[];
  total_days: number;
}

// Static trip data (non-dynamic content)
export const tripData = {
  title: "11 DAYS UNBOLIVIABLE",
  meta: {
    days: 11,
    // rating and reviews count will be calculated dynamically from API
  },
  price: {
    from: 2226,
    currency: "USD",
  },
  tags: ["Nature", "Cultural", "Adventure"],
  navLinks: [
    "Overview",
    "Why you'll love this tour",
    "Itinerary",
    "Included",
    "Is this tour for you?",
    "Start your adventure",
    "Important notes",
    "Reviews",
  ],
  overview: {
    description: [
      "From the mystical Lake Titicaca to the 'White City' of Sucre, we will journey through Bolivia on an exciting adventure where the most stunning landscapes will captivate you with their beauty. Copacabana will welcome you with open arms, offering you the chance to explore the Isla del Sol and Isla de la Luna—ancestral treasures where pre-Columbian Inca culture comes alive. Without a doubt, the sunset colors of the Uyuni Salt Flat will leave you mesmerized, alongside the Red Lagoon, where a backdrop of mountains provides a spectacular view. If you're looking for tourism in the Uyuni Salt Flat, this is your chance. Exploring Uyuni, Bolivia, and its wonders is an unforgettable experience.",
      "You will delve into Bolivia's history and the legacy of mining among the buildings and Cerro Rico of Potosí, before visiting the 'White City' of Sucre, which has been declared a UNESCO World Heritage site. A Bolivia Uyuni tour offers the perfect blend of nature and history. If you're wondering what to do in Potosí, Bolivia, its rich history will amaze you. Sucre, Bolivia, welcomes you with open arms, offering cultural experiences that will make your visit truly unforgettable.",
    ],
    image: "/isla_sol_4.webp?height=400&width=600",
    facts: [
      { label: "Start", value: "Copacabana, La Paz" },
      { label: "End", value: "Salar de Uyuni, Potosí" },
      { label: "Destinations", value: "Copacabana, Isla del Sol, Isla de la Luna, Lake Titicaca, Salar de Uyuni, Laguna Colorada" },
      { label: "Meals", value: "3 Breakfasts / 4 Lunches / 3 Dinners" },
      { label: "Transport", value: "Tourist Bus, Community boat, 4x4 Jeep, Local Bus, Airport and Hotel Transfer, Airplane" },
      { label: "Accommodation", value: "Hotel (9 Nights), Community Hostel (1 Night)" },
      { label: "Days", value: "11" },
      { label: "Group size", value: "Min 1 – Max 16" },
      { label: "Ages", value: "Min 15" },
      { label: "Theme", value: "Nature; Cultural; Adventure" },
      { label: "Style", value: "VIP" },
      { label: "Physical score", value: 3 },
    ],
  },
  whyYoullLoveThis: [
    "Marvel at the Uyuni Salt Flat in Bolivia, the world's largest salt desert, where the sky merges with the earth. Enjoy magical sunsets, with every moment waiting to be captured in a photograph. Tourism in the Uyuni Salt Flat offers landscapes that defy imagination.",
    "Explore and connect with the ancestral energy of the Treasures of the Andean Altiplano. Journey from the mystical Lake Titicaca and its sacred islands, such as Isla del Sol and Isla de la Luna, to the breathtaking Laguna Colorada—a sanctuary of flamingos and wildlife with vibrant hues that will leave you breathless.",
    "Discover the rich history of Potosí, a World Heritage site that transports you back to the silver era. Potosí vividly showcases Bolivia's mining legacy.",
    "Travel back in time through the history of Bolivia. Let yourself be captivated by the elegance of Sucre, the 'White City,' with its colonial architecture and vibrant culture.",
    "Immerse yourself in the culture of Bolivia, a deep dive into authentic Bolivia, from bustling La Paz to the serene landscapes of the altiplano. Connect with the natural diversity and live unforgettable experiences that will make you want to return.",
  ],
  
  inclusions: {
    meals:
      "Copacabana: 3 lunches, 2 dinners, and 2 breakfasts. Uyuni: 3 lunches, 2 dinners, and 2 breakfasts. Potosí: 3 lunches, 1 breakfast. Sucre: 2 lunches, 1 dinner, and 2 breakfasts.",
    transport:
      " El Alto International Airport ↔ Hotel Transfer: For your arrival and departure in La Paz, Tourist Bus (La Paz – Copacabana – La Paz;  La Paz – Uyuni), Community Boat: Transfers to Isla del Sol and Isla de la Luna (Lake Titicaca), 4x4 Jeep: For your Uyuni Salt Flat and Eduardo Avaroa Reserve tour, Local Bus (Uyuni – Potosí; Potosí – Sucre), Potosí Terminal ↔ Hotel Transfer,  Hotel ↔ Alcantarí Airport (Sucre) Transfer, Domestic Flight: Sucre → La Paz ticket.",
    accommodation:
      "La Paz: Hotel stay, Copacabana: Hotel stay, Isla del Sol: Local lodging, Uyuni: Hotel stay, Potosí: Hotel stay, Sucre: Hotel stay",
    includedActivities: [
      "Guided city tour",
      "Guided visits within Copacabana",
      "Boat navigation and guided visits to Isla del Sol",
      "Boat navigation and guided visits to Isla de la Luna",
      "Guided visits in Uyuni and Eduardo Avaroa National Park",
      "Guided mine tour",
      "Guided city tour",
      "Comprehensive city tour of the 'White City'",
    ],
    optionalActivities: [
      "Museum visit (subject to availability)",
    ]
  },
  
  isThisTripRightForYou: [
    "If you are planning to travel to Bolivia from Peru, please ensure you have all the necessary documentation. This itinerary offers a return option to Puno, given the ease of travel between the two regions.",
    ",The destinations you will visit are at high altitudes: Lake Titicaca sits at 3,812 meters (12,506 feet) above sea level, and the Uyuni Salt Flat is at 3,656 meters (11,995 feet) above sea level. It's important to be aware that some individuals may experience altitude sickness, regardless of age or physical condition. We strongly recommend consulting your doctor and preparing adequately before your visit.",
    "Be prepared for cold nights on the Salt Flat, where Uyuni's climate can see temperatures drop below 0°C (32°F), even during peak season. Thermal clothing and a warm coat are highly recommended to fully enjoy the starry night sky.",
    "Moderate walks will be undertaken on the islands, featuring uneven trails and inclines. We advise wearing appropriate footwear to fully enjoy these explorations.",
    "If you plan to travel to Bolivia from Peru, please ensure you have all necessary documentation. The itinerary offers a return option to Puno, given the ease of travel between these regions.",
  ],
 
  importantNotes: [
    "For travel to Bolivia, your passport must be valid. Please verify any visa requirements based on your nationality.",
    "The currency of Bolivia is the Boliviano (BOB). It's advisable to carry some cash (BOB or USD), as ATM access is limited in rural areas and on the islands.",
    "Spanish is Bolivia's main language, along with indigenous languages like Aymara and Quechua. While your guide will speak Spanish and English, learning a few basic phrases is recommended to enhance your experience.",
  ],
  adventureSection: {
    title: "11-Day Adventure in Bolivia",
    description: "From Lake Titicaca to Salar de Uyuni",
    content: "Live 11 days of pure Bolivian magic. From the sacred waters of Lake Titicaca to the infinite white of the Salar de Uyuni, this journey will take you through the most precious treasures of Bolivia.",
    highlights: [
      { text: "Salar de Uyuni and magical sunsets", color: "destructive" },
      { text: "Navigation through Lake Titicaca", color: "secondary" },
      { text: "Historical heritage of Potosí and Sucre", color: "accent" },
      { text: "Cultural immersion in local communities", color: "primary" }
    ],
    buttons: [
      { text: "Schedule Video Call", type: "video", color: "accent" },
      { text: "Chat on WhatsApp", type: "whatsapp", color: "primary" }
    ],
    whatsapp: {
      number: "+59163084332",
      message: "Hello! I'm interested in the 11-day tour to Bolivia. I would like to know more about the complete itinerary from Copacabana to Salar de Uyuni. Could you send me detailed information? Thank you!"
    }
  }
};

// Retry utility function
async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  maxRetries: number = 3,
  delay: number = 1000
): Promise<Response> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[fetchWithRetry] Attempt ${attempt}/${maxRetries} for ${url}`);
      const response = await fetch(url, options);
      
      if (response.ok) {
        return response;
      }
      
      // If it's a server error (5xx), retry
      if (response.status >= 500 && attempt < maxRetries) {
        console.log(`[fetchWithRetry] Server error ${response.status}, retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
        continue;
      }
      
      // If it's a client error (4xx), don't retry
      return response;
      
    } catch (error) {
      lastError = error as Error;
      console.error(`[fetchWithRetry] Attempt ${attempt} failed:`, error);
      
      if (attempt < maxRetries) {
        console.log(`[fetchWithRetry] Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      }
    }
  }
  
  throw lastError!;
}

// API Functions
export async function fetchReviews(packageId: string = '11days'): Promise<ReviewsResponse | null> {
  try {
    console.log(`[fetchReviews] Attempting to fetch reviews for ${packageId} from ${API_BASE_URL}`);
    
    const response = await fetchWithRetry(`${API_BASE_URL}/api/reviews/${packageId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(15000), // Increased timeout
      cache: 'no-store'
    });

    console.log(`[fetchReviews] Response status: ${response.status}`);
    
    if (!response.ok) {
      console.error(`[fetchReviews] Failed to fetch reviews: ${response.status} ${response.statusText}`);
      return null;
    }

    const data: ReviewsResponse = await response.json();
    console.log(`[fetchReviews] Successfully fetched ${data.reviews.length} reviews`);
    return data;
  } catch (error) {
    console.error(`[fetchReviews] Error fetching reviews:`, error);
    return null;
  }
}

export async function fetchImages(packageId: string = '11days'): Promise<ImagesResponse | null> {
  try {
    console.log(`[fetchImages] Attempting to fetch images for ${packageId} from ${API_BASE_URL}`);
    
    const response = await fetchWithRetry(`${API_BASE_URL}/api/images/${packageId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(15000), // Increased timeout
      cache: 'no-store'
    });

    console.log(`[fetchImages] Response status: ${response.status}`);

    if (!response.ok) {
      console.error(`[fetchImages] Failed to fetch images: ${response.status} ${response.statusText}`);
      return null;
    }

    const data: ImagesResponse = await response.json();
    
    // Convert URLs to use backend proxy to avoid CORS issues
    const imagesWithProxyUrls = data.images.map(img => ({
      ...img,
      url: `${API_BASE_URL}/api/images/${packageId}/proxy/${img.id}`
    }));
    
    console.log(`[fetchImages] Successfully fetched ${data.images.length} images`);
    return {
      ...data,
      images: imagesWithProxyUrls
    };
  } catch (error) {
    console.error(`[fetchImages] Error fetching images:`, error);
    return null;
  }
}

export async function fetchItinerary(packageId: string = '11days'): Promise<ItineraryResponse | null> {
  try {
    console.log(`[fetchItinerary] Attempting to fetch itinerary for ${packageId} from ${API_BASE_URL}`);
    
    const response = await fetchWithRetry(`${API_BASE_URL}/api/itinerary/${packageId}?lang=en`, {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(15000), // Increased timeout
      cache: 'no-store'
    });

    console.log(`[fetchItinerary] Response status: ${response.status}`);

    if (!response.ok) {
      console.error(`[fetchItinerary] Failed to fetch itinerary: ${response.status} ${response.statusText}`);
      return null;
    }

    // Get raw data from API with snake_case fields
    const apiData: { package_id: string; itinerary: ItineraryDayFromAPI[]; total_days: number } = await response.json();
    
    // Convert API field names to match frontend expectations
    const itineraryWithConvertedFields: ItineraryDay[] = apiData.itinerary.map(day => ({
      day: day.day,
      title: day.title,
      description: day.description,
      accommodation: day.accommodation,
      includedActivities: day.included_activities, // Convert snake_case to camelCase
      meals: day.meals,
      optionalActivities: day.optional_activities, // Convert snake_case to camelCase
      specialInfo: day.special_info // Convert snake_case to camelCase
    }));
    
    console.log(`[fetchItinerary] Successfully fetched ${apiData.itinerary.length} itinerary days`);
    return {
      package_id: apiData.package_id,
      itinerary: itineraryWithConvertedFields,
      total_days: apiData.total_days
    };
  } catch (error) {
    console.error(`[fetchItinerary] Error fetching itinerary:`, error);
    return null;
  }
}

export type TripData = typeof tripData

// Fallback static reviews (used if API fails)
export const fallbackReviews = {
  reviews: [
    {
      id: 1,
      name: "Sarah Mitchell",
      date: "December 2024",
      rating: 5,
      body: "Absolutely incredible journey! The guides were knowledgeable and passionate. Lake Titicaca at sunrise was breathtaking. Every moment was perfectly organized. Highly recommend!"
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      date: "November 2024", 
      rating: 4,
      body: "Great trip overall. The boat rides were amazing and the cultural experiences were rewarding. Food was good and accommodations were decent. Only wish we had more time in Copacabana."
    },
    {
      id: 3,
      name: "Emma Thompson",
      date: "November 2024",
      rating: 5,
      body: "Life-changing experience! The local families we met were so welcoming. The Island of the Sun was otherworldly. Worth every penny!"
    },
    {
      id: 4,
      name: "Michael Chen",
      date: "October 2024",
      rating: 3,
      body: "Good trip but had some issues with transportation delays. The sites were amazing but the organization could be better. Still glad I went."
    },
    {
      id: 5,
      name: "Isabella Garcia",
      date: "October 2024",
      rating: 5,
      body: "Perfect blend of adventure and culture. Our guide Maria was fantastic. The island experience was authentic and meaningful. Couldn't ask for more!"
    },
  ],
  total_reviews: 5,
  average_rating: 4.4,
  star_distribution: {
    "1": 0,
    "2": 0,
    "3": 1,
    "4": 1,
    "5": 3
  }
};

// Fallback static images (used if API fails) - using placeholder URLs for working fallbacks
export const fallbackImages = {
  package_id: "11days",
  images: [
    { id: 1, url: "/placeholder.svg?height=600&width=800&query=copacabana+bolivia", category: "hero", alt_text: "Vista del pueblo de Copacabana", alt_text_en: "Copacabana town view" },
    { id: 2, url: "/placeholder.svg?height=400&width=600&query=copacabana+lakeside", category: "itinerary", alt_text: "Orilla del lago en Copacabana", alt_text_en: "Copacabana lakeside" },
    { id: 3, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+panoramic", category: "overview", alt_text: "Vista panorámica de la Isla del Sol", alt_text_en: "Island of the Sun panoramic view" },
    { id: 4, url: "/placeholder.svg?height=400&width=600&query=isla+de+la+luna+temple", category: "itinerary", alt_text: "Templo de la Isla de la Luna", alt_text_en: "Island of the Moon temple" },
    { id: 5, url: "/placeholder.svg?height=400&width=600&query=copacabana+street", category: "hero", alt_text: "Vista de la calle en Copacabana", alt_text_en: "Copacabana street view" },
    { id: 6, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+landscape", category: "itinerary", alt_text: "Paisaje de la Isla del Sol", alt_text_en: "Island of the Sun landscape" },
    { id: 7, url: "/placeholder.svg?height=400&width=600&query=copacabana+market", category: "hero", alt_text: "Mercado de Copacabana", alt_text_en: "Copacabana market" },
    { id: 8, url: "/placeholder.svg?height=400&width=600&query=isla+de+la+luna+ruins", category: "itinerary", alt_text: "Ruinas de la Isla de la Luna", alt_text_en: "Island of the Moon ruins" },
    { id: 9, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+terraces", category: "hero", alt_text: "Terrazas de la Isla del Sol", alt_text_en: "Island of the Sun terraces" },
    { id: 10, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+sunset", category: "hero", alt_text: "Atardecer en la Isla del Sol", alt_text_en: "Island of the Sun sunset" },
    { id: 11, url: "/placeholder.svg?height=400&width=600&query=isla+del+sol+village", category: "hero", alt_text: "Pueblo de la Isla del Sol", alt_text_en: "Island of the Sun village" },
  ],
  total_images: 11
};

// Fallback static itinerary (used if API fails) - English version
export const fallbackItinerary = {
  package_id: "11days",
  itinerary: [
    {
      day: 1,
      title: "Copacabana, Gateway to Titicaca",
      description: "Your adventure begins with a scenic journey from La Paz to Copacabana, the Andean heart of Lake Titicaca. Once you arrive, you'll settle in and spend the afternoon exploring the charms of this town, from its iconic church to its vibrant local market, enjoying the views from El Calvario. The day will conclude with dinner and overnight stay.",
      accommodation: "Hotel (1 night)",
      includedActivities: "Tourist bus travel from La Paz to Copacabana, Visit to the Church of the Virgin of Copacabana, Exploration of Copacabana's local market, Ascent to El Calvario",
      meals: "Lunch, Dinner",
      optionalActivities: [
        "Visit to a local museum"
      ],
      specialInfo: ""
    },
    {
      day: 2,
      title: "Island of the Sun, Cradle of the Inca Empire",
      description: "Embark on an unforgettable boat trip to the Island of the Sun, sacred place where Inca history comes to life. Explore ancient temples and ruins, like Pilkokaina, walk through ancestral paths to Yumani. Be amazed by the spectacular views of the lake. Visit the Inca Stairway, the Fountain of Youth and the Temple of the Sun. Dinner and overnight stay will be on the island.",
      accommodation: "Hotel on Lake Titicaca (1 night)",
      includedActivities: "Community boat trip to the Island of the Sun, Visit to the archaeological remains of Pilkokaina 'Inca Temple', Hike to Yumani, Visit to the Inca Stairway, Visit to the Fountain of Youth, Visit to the Temple of the Sun",
      meals: "Breakfast, Lunch, Dinner",
      optionalActivities: [],
      specialInfo: ""
    },
    {
      day: 3,
      title: "Island of the Moon, Sanctuary of Peace",
      description: "Discover the mysteries of the Island of the Moon. After a relaxing boat trip, you'll explore the ancient temple of the Virgins, where you'll enjoy an authentic Apthapi-style lunch. The afternoon invites you to a peaceful walk to reach your hostel. A space where silence and the lake breeze will mark the beginning of a restorative night, accompanied by a comforting dinner and rest.",
      accommodation: "Hostel (1 night)",
      includedActivities: "Community boat trip to the Island of the Moon, Visit to the Temple of the Virgins, Apthapi-style lunch, Hike to the hostel",
      meals: "Breakfast, Lunch (Apthapi-style), Dinner",
      optionalActivities: [],
      specialInfo: ""
    },
    {
      day: 4,
      title: "Return and Farewell to Titicaca",
      description: "Your last day at Titicaca begins with a boat trip back, once again enjoying the panoramic views of the lake. From Yampupata, transport will take you back to Copacabana for a final lunch before embarking on your return journey on a Copacabana-La Paz bus or, if you prefer, continue your adventure to Puno in Peru.",
      accommodation: "Not included",
      includedActivities: "Community boat trip from Island of the Moon to Yampupata, Transport from Yampupata to Copacabana, Bus trip from Copacabana to La Paz or Puno",
      meals: "Breakfast, Lunch",
      optionalActivities: [],
      specialInfo: ""
    }
  ],
  total_days: 4
};
