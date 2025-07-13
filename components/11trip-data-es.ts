/**
 * Visit Bolivia 11-Day Package - Spanish Content Data
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
 * Spanish language content data for the 11-day Bolivia travel package.
 * Includes extended travel information, pricing, activities, and descriptions.
 */

// @/components/trip-data.ts

// API Configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://backend-visitbolivia.onrender.com' // Production backend on Render
  : 'http://localhost:8000';  // Use local backend to avoid Kaspersky blocking

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
  title: "11 DÍAS UNBOLIVIABLE",
  meta: {
    days: 11,
    // rating and reviews count will be calculated dynamically from API
  },
  price: {
    from: 2226,
    currency: "USD",
  },
  tags: ["Naturaleza", "Cultural", "Aventura"],
  navLinks: [
    "Resumen",
    "Por qué te encantará este tour",
    "Itinerario",
    "Incluídos",
    "¿Es este tour para ti?",
    "Empieza tu aventura",
    "Notas importantes",
    "Reseñas",
  ],
  overview: {
    description: [
      "Podrás conocer sobre la historia de Bolivia y la minería entre las edificaciones y el cerro rico de Potosí, para luego visitar la ciudad Blanca que fue declarada como Patrimonio de la Humanidad por la Unesco. Un tour Bolivia Uyuni te ofrece la combinación perfecta de naturaleza e historia. Si te preguntas qué hacer en Potosí Bolivia, su riqueza histórica te sorprenderá. Sucre Bolivia te recibe con los brazos abiertos con una oferta cultural que marcará tu visita en una experiencia inolvidable",
      "Un tour Bolivia Uyuni te ofrece la combinación perfecta de naturaleza e historia",
    ],
    image: "/isla_sol_4.webp?height=400&width=600",
    facts: [
      { label: "Inicio", value: "Copacabana, La Paz" },
      { label: "Fin", value: "Salar de Uyuni, Potosí" },
      { label: "Destinos", value: "Copacabana, Isla del Sol, Isla de la Luna, Lago Titicaca, Salar deUyuni, Laguna Colorada"},
      { label: "Comidas", value: "3 Desayunos / 4 Almuerzos / 3 Cenas" },
      { label: "Transporte", value: "Bus Turístico, Bote comunitario, Jeep 4x4, Bus Local, Transfer Aereopuerto y Hotel, Avion" },
      { label: "Alojamiento", value: "Hotel (9 Noches), Hostal Comunitario (1 Noche)" },
      { label: "Días", value: "11" },
      { label: "Tamaño del grupo", value: "Min 1 – Max 16" },
      { label: "Edades", value: "Min 15" },
      { label: "Tema", value: "Naturaleza; Cultural; Aventura" },
      { label: "Estilo", value: "VIP" },
      { label: "Puntuación física", value: 3 },
    ],
  },
  whyYoullLoveThis: [
    "Explora y conecta con la energía ancestral de los Tesoros del Altiplano Andino: Recorre desde el místico Lago Titicaca y sus islas sagradas, como la Isla del Sol y la Isla de la Luna, hasta la impresionante Laguna Colorada, un santuario de flamencos y vida silvestre con tonalidades vibrantes que te dejarán sin aliento.",
    "Descubre la riqueza histórica de Potosí, un Patrimonio de la Humanidad que te transporta a la época de la plata. Potosí dónde queda plasmado el legado minero de Bolivia.",
    "Viaja en el tiempo a través de la historia de Bolivia. Déjate seducir por la elegancia de Sucre, la Ciudad Blanca, con su arquitectura colonial y vibrante cultura.",
    "Sumérgete en la cultura de Bolivia, una inmersión profunda en la auténtica Bolivia, desde la bulliciosa La Paz hasta los serenos paisajes del altiplano. Conecta con la diversidad natural y vive experiencias inolvidables que te dejarán con ganas de volver.",
  ],
  
  inclusions: {
    meals: 
      "Copacabana: 3 almuerzos, 2 cenas y 2 desayunos. Uyuni: 3 almuerzos, 2 cenas y 2 desayunos. Potosí: 3 almuerzos, 1 desayuno. Sucre: 2 almuerzos 1 cena y 2 desayunos.",
    transport: 
    "Bus turístico (La Paz - Copacabana - La Paz), Bote comunitario (Copacabana - Isla del Sol - Isla de la Luna - Copacabana), Transporte local (Yampupata - Copacabana).",
    accommodation: 
    "Transfer Aeropuerto Internacional El Alto Hotel (llegada y salida), Bus turístico (La Paz – Copacabana – La Paz; La Paz – Uyuni), Bote comunitario: Traslados a Isla del Sol e Isla de la Luna (Lago Titicaca), Jeep 4×4: Tour Salar de Uyuni y Reserva Eduardo Avaroa, Bus local (Uyuni – Potosí; Potosí – Sucre), Transfer Terminal de Potosí ↔ Hotel, Transfer Hotel ↔ Aeropuerto Alcantarí (Sucre), Vuelo doméstico: Boleto Sucre → La Paz",
    includedActivities: [
      "City tour guiado por la ciudad",
      "Visitas guiadas en Copacabana",
      "Navegación y visita guiada a Isla del Sol",
      "Navegación y visita guiada a Isla de la Luna",
      "Visitas guiadas en Uyuni y el Parque Nacional Eduardo Avaroa",
      "Tour de minas guiado",
      "City tour por la ciudad",
      "City tour completo por la 'Ciudad Blanca'",
    ],
    optionalActivities: [
      "Visita a un museo local",
    ]
  },
   
  isThisTripRightForYou: [
    "Los destinos visitados se encuentran en altitudes elevadas, el Lago Titicaca a 3.812 metros sobre el nivel del mar. Es importante considerar que, algunas personas pueden experimentar mal de altura, independientemente de la edad o condición física. Te recomendamos consultar a tu médico y prepararte adecuadamente antes de tu visita.",
    "Las condiciones climáticas en la región varían. El clima en Copacabana Bolivia, puede ser frío, especialmente por las noches, por lo que es esencial empacar ropa abrigadora en todas las estaciones.",
    "Se realizarán caminatas moderadas en las islas, con senderos irregulares y pendientes. Se recomienda utilizar un calzado adecuado para disfrutar plenamente de las exploraciones.",
    "Si planeas viajar a Bolivia desde Perú, asegúrate de tener la documentación necesaria. El itinerario ofrece una opción de retorno hacia Puno, dada la facilidad de desplazamiento entre regiones.",
  ],

  importantNotes: [
    "Como requisitos de viaje a Bolivia es crucial que tu pasaporte esté vigente. Asegúrate de verificar cualquier necesidad de visado según tu nacionalidad.",
    "La moneda de Bolivia es el Boliviano (BOB). Se recomienda llevar algo de efectivo (BOB o USD), ya que en zonas rurales y en las islas el acceso a cajeros automáticos es limitado.",
    "El idioma de Bolivia principal es el español, junto con lenguas indígenas como el aymara y el quechua. Aunque tu guía hablará español e inglés, aprender algunas frases básicas es recomendable para elevar tu experiencia."
  ],
  adventureSection: {
    title: "Aventura 11 Días en Bolivia",
    description: "Del Lago Titicaca al Salar de Uyuni",
    content: "Vive 11 días de pura magia boliviana. Desde las aguas sagradas del Lago Titicaca hasta el infinito blanco del Salar de Uyuni, este viaje te llevará por los tesoros más preciados del altiplano andino.",
    highlights: [
      { text: "Salar de Uyuni y atardeceres mágicos", color: "destructive" },
      { text: "Navegación por el Lago Titicaca", color: "secondary" },
      { text: "Patrimonio histórico de Potosí y Sucre", color: "accent" },
      { text: "Inmersión cultural en comunidades locales", color: "primary" }
    ],
    buttons: [
      { text: "Agendar Videollamada", type: "video", color: "accent" },
      { text: "Chatear por WhatsApp", type: "whatsapp", color: "primary" }
    ],
    whatsapp: {
      number: "+59163084332",
      message: "¡Hola! Me interesa el tour de 11 días por Bolivia. Quisiera conocer más sobre el itinerario completo desde Copacabana hasta el Salar de Uyuni. ¿Podrían enviarme información detallada? ¡Gracias!"
    }
  }
};

// API Functions
export async function fetchReviews(packageId: string = '11days'): Promise<ReviewsResponse | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/reviews/${packageId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch reviews:', response.statusText);
      return null;
    }

    const data: ReviewsResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return null;
  }
}

export async function fetchImages(packageId: string = '11days'): Promise<ImagesResponse | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/images/${packageId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch images:', response.statusText);
      return null;
    }

    const data: ImagesResponse = await response.json();
    
    // Convert URLs to use backend proxy to avoid CORS issues
    const imagesWithProxyUrls = data.images.map(img => ({
      ...img,
      url: `${API_BASE_URL}/api/images/${packageId}/proxy/${img.id}`
    }));
    
    return {
      ...data,
      images: imagesWithProxyUrls
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    return null;
  }
}

export async function fetchItinerary(packageId: string = '11days'): Promise<ItineraryResponse | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/itinerary/${packageId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch itinerary:', response.statusText);
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
    
    return {
      package_id: apiData.package_id,
      itinerary: itineraryWithConvertedFields,
      total_days: apiData.total_days
    };
  } catch (error) {
    console.error('Error fetching itinerary:', error);
    return null;
  }
}

// Fallback static reviews (used if API fails)
export const fallbackReviews = {
  reviews: [
    {
      id: 1,
      name: "Sarah Mitchell",
      date: "December 2024",
      rating: 5,
      body: "Absolutely incredible journey! The guides were knowledgeable and passionate. Machu Picchu at sunrise was breathtaking. Every moment was perfectly organized. Highly recommend!"
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      date: "November 2024", 
      rating: 4,
      body: "Great trip overall. The Inca Trail was challenging but rewarding. Food was good and accommodations were decent. Only wish we had more time in Cusco."
    },
    {
      id: 3,
      name: "Emma Thompson",
      date: "November 2024",
      rating: 5,
      body: "Life-changing experience! The local families we stayed with were so welcoming. The salt flats in Bolivia were otherworldly. Worth every penny!"
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
      body: "Perfect blend of adventure and culture. Our guide Maria was fantastic. The homestay experience was authentic and meaningful. Couldn't ask for more!"
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

// Fallback static itinerary (used if API fails) - matching current hardcoded data
export const fallbackItinerary = {
  package_id: "11days",
  itinerary: [
    {
      day: 1,
      title: "Copacabana, Puerta del Titicaca",
      description: "Tu aventura comienza con un pintoresco viaje desde La Paz hacia Copacabana, corazón andino del Lago Titicaca. Una vez que llegues, te acomodarás y pasarás la tarde explorando los encantos de este pueblo, desde su icónica iglesia hasta su vibrante mercado local, disfrutando de las vistas desde El Calvario. La jornada concluirá con cena y pernocte.",
      accommodation: "Hotel (1 noche)",
      includedActivities: "Viaje en bus turístico de La Paz a Copacabana, Visita a la Iglesia de la Virgen de Copacabana, Exploración del mercado local de Copacabana, Ascenso a El Calvario",
      meals: "Almuerzo, Cena",
      optionalActivities: [
        "Visita a un museo local"
      ],
      specialInfo: ""
    },
    {
      day: 2,
      title: "Isla del Sol, Cuna del Imperio Inca",
      description: "Embárcate en un inolvidable viaje en bote a la Isla del Sol, lugar sagrado donde la historia Inca cobra vida. Explora antiguos templos y ruinas, como Pilkokaina, caminarás por senderos ancestrales hasta Yumani. Déjate sorprender con las vistas espectaculares del lago. Visita la Escalinata del Inca, la Fuente de la Juventud y el Templo del Sol. La cena y pernocte serán en la isla.",
      accommodation: "Hotel en el Lago Titicaca (1 noche)",
      includedActivities: "Viaje en bote comunitario a la Isla del Sol, Visita a los restos arqueológicos de Pilkokaina 'Templo del Inca', Caminata a Yumani, Visita a la Escalinata del Inca, Visita a la Fuente de la Juventud, Visita al Templo del Sol",
      meals: "Desayuno, Almuerzo, Cena",
      optionalActivities: [],
      specialInfo: ""
    },
    {
      day: 3,
      title: "Isla de la Luna, Santuario de Paz",
      description: "Descubre los misterios de la Isla de la Luna. Tras un relajante viaje en bote, explorarás el templo ancestral de las Vírgenes, donde disfrutarás de un auténtico almuerzo tipo Apthapi. La tarde te invita a una caminata tranquila para llegar a tu albergue. Espacio donde el silencio y la brisa del lago marcarán el inicio de una noche reparadora, acompañada de una cena reconfortante y descanso.",
      accommodation: "Albergue (1 noche)",
      includedActivities: "Viaje en bote comunitario a la Isla de la Luna, Visita al Templo de las Vírgenes, Almuerzo tipo Apthapi, Caminata al albergue",
      meals: "Desayuno, Almuerzo (Tipo Apthapi), Cena",
      optionalActivities: [],
      specialInfo: ""
    },
    {
      day: 4,
      title: "Regreso y Despedida del Titicaca",
      description: "Tu último día en el Titicaca comienza con un viaje en bote de regreso, disfrutando una vez más de las vistas panorámicas del lago. Desde Yampupata, un transporte te llevará de vuelta a Copacabana para un almuerzo final antes de emprender tu viaje de regreso en un bus Copacabana-La Paz o, si lo prefieres, continuar tu aventura hacia Puno en Perú.",
      accommodation: "No incluido",
      includedActivities: "Viaje en bote comunitario de Isla de la Luna a Yampupata, Transporte de Yampupata a Copacabana, Viaje en bus de Copacabana a La Paz o Puno",
      meals: "Desayuno, Almuerzo",
      optionalActivities: [],
      specialInfo: ""
    }
  ],
  total_days: 4
};

export type TripData = typeof tripData
