export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
}

export const BUSINESS_CONFIG = {
  brandName: "Tiwari Motors Smart Garage",
  brandHindi: "तिवारी मोटर्स",
  shortName: "Tiwari Motors",
  tagline: "Aapki Car Ki Har Zarurat Ka Ek Hi Naam.",
  altTagline: "Aapki Gadi, Hamari Zimmedari.",
  description:
    "Complete multi-brand car service, repair and care — from routine servicing and engine work to electrical, AC, computer scanning, washing, body work, wheel care and car accessories.",
  
  // Contact details
  phonePrimary: "8218766134",
  phoneSecondary: "9554182727",
  whatsappNumber: "+918218766134",
  whatsappCleanNumber: "918218766134",
  email: "tiwarimotors25@gmail.com",
  
  // Address (CRITICAL: Never mention Ramnagar anywhere)
  addressLine: "Hussenpur Khurd Chowk",
  city: "Ambedkar Nagar",
  state: "Uttar Pradesh",
  pincode: "224181",
  fullAddress: "Hussenpur Khurd Chowk, Ambedkar Nagar, Uttar Pradesh – 224181",
  
  // Timings
  hours: "Monday – Sunday: 10:00 AM – 6:30 PM",
  
  // Links
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Tiwari+Motors+Smart+Garage+Hussenpur+Khurd+Chowk+Ambedkar+Nagar+Uttar+Pradesh+224181",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Hussenpur+Khurd+Chowk,+Ambedkar+Nagar,+Uttar+Pradesh+224181&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=TiwariMotorsSmartGarageAmbedkarNagar",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "car-service-repair",
    number: "01",
    title: "Car Service & Repair",
    description: "Regular servicing, preventative maintenance, fluid replacements, filter checks, and overall vehicle inspection.",
    iconName: "Wrench",
    highlights: ["Engine oil & filter change", "Brake & suspension check", "Periodic comprehensive maintenance"],
  },
  {
    id: "engine-work",
    number: "02",
    title: "Engine Work",
    description: "In-depth engine diagnosis, tuning, mechanical repairs, timing belt inspection, and component overhaul.",
    iconName: "Cpu",
    highlights: ["Engine noise & vibration troubleshooting", "Cylinder head & gasket repairs", "Fuel system & cooling overhaul"],
  },
  {
    id: "car-electrical",
    number: "03",
    title: "Car Electrical",
    description: "Battery testing, wiring inspection, starter motor, alternator diagnosis, lights, fuse box, and electrical troubleshooting.",
    iconName: "Zap",
    highlights: ["Battery health & charging system", "Wiring harness & relay repairs", "Headlamps, indicators & horn"],
  },
  {
    id: "car-ac-repair",
    number: "04",
    title: "Car AC Repair",
    description: "AC diagnosis, cooling issues, gas charging (R134a/R1234yf), compressor repair, condenser cleaning, and cabin filter replacement.",
    iconName: "Wind",
    highlights: ["AC gas leak test & recharge", "Compressor & clutch servicing", "Cooling coil & vent disinfection"],
  },
  {
    id: "computer-scanning",
    number: "05",
    title: "Computer Scanning",
    description: "Computerized vehicle diagnosis, OBD2 trouble code scanning, clearing check engine lights, and sensor calibration for supported vehicles.",
    iconName: "Laptop",
    highlights: ["OBD-II error code readout", "Live engine sensor data", "Reset check engine & ABS lights"],
  },
  {
    id: "foam-wash",
    number: "06",
    title: "Foam Wash",
    description: "High-pressure snow foam wash, underbody rinse, glass cleaning, tire dressing, and thorough interior vacuuming.",
    iconName: "Sparkles",
    highlights: ["High-pressure snow foam bath", "Underbody & wheel well cleaning", "Interior dust removal & polish"],
  },
  {
    id: "denting-painting",
    number: "07",
    title: "Denting & Painting",
    description: "Accident and scratch repair, panel beating, precision color matching, clear coat refinishing, and dent removal.",
    iconName: "Paintbrush",
    highlights: ["Precision paint match", "Scratch & scrape correction", "Panel alignment & body repair"],
  },
  {
    id: "wheel-alignment-balancing",
    number: "08",
    title: "Wheel Alignment & Balancing",
    description: "Laser-calibrated wheel alignment, computerized dynamic wheel balancing, tire rotation, and tread health check.",
    iconName: "Disc",
    highlights: ["Even tire wear protection", "High-speed steering stability", "Computerized weight balancing"],
  },
  {
    id: "car-accessories",
    number: "09",
    title: "Car Accessories",
    description: "Wheel caps, mats, wheel covers, premium steering covers, key rings, fragrances, and useful daily car accessories.",
    iconName: "Shield",
    highlights: ["All-weather custom mats", "Stylish wheel covers & caps", "Comfort & interior accessories"],
  },
];

export const SERVICE_STRIP_ITEMS = [
  "Car Service",
  "Engine",
  "Electrical",
  "AC",
  "Scanning",
  "Foam Wash",
  "Denting & Painting",
  "Wheel Care",
  "Accessories",
];

export const WHY_US_POINTS = [
  {
    title: "Multi-Brand Support",
    description: "Reliable service solutions for Maruti Suzuki, Hyundai, Tata, Mahindra, Toyota, Honda, and other popular car brands.",
    icon: "Car",
  },
  {
    title: "Experienced Team",
    description: "Skilled automotive technicians capable of handling mechanical, electrical, AC, body, and diagnostic work with precision.",
    icon: "Users",
  },
  {
    title: "Modern Diagnosis",
    description: "Computerized OBD scanning for supported vehicles to pinpoint sensor and electronic errors accurately before repair.",
    icon: "Laptop",
  },
  {
    title: "Complete Car Care",
    description: "Routine servicing, mechanical overhaul, washing, denting-painting, wheel alignment, and accessories all under one single roof.",
    icon: "Layers",
  },
  {
    title: "Convenient Booking",
    description: "Call or WhatsApp directly with your vehicle details to get quick response and flexible appointment scheduling.",
    icon: "MessageSquare",
  },
  {
    title: "Local & Accessible",
    description: "Conveniently located at Hussenpur Khurd Chowk, Ambedkar Nagar with spacious bays and easy road access.",
    icon: "MapPin",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tell Us Your Problem",
    description: "Connect via Call or WhatsApp. Share your vehicle details, symptom, or service requirement with our team.",
  },
  {
    step: "02",
    title: "Vehicle Inspection",
    description: "Our technicians inspect the vehicle, perform diagnostics if needed, and communicate clear repair scope.",
  },
  {
    step: "03",
    title: "Service / Repair",
    description: "Required service or replacement is carried out methodically using proper tools and quality automotive fluids.",
  },
  {
    step: "04",
    title: "Final Check",
    description: "A thorough post-service inspection and test is performed before handing your vehicle back in top condition.",
  },
];

export const ACCESSORIES_CATEGORIES = [
  {
    name: "Wheel Caps & Covers",
    desc: "Stylish, durable wheel caps and covers in multiple sizes and designs for hatchbacks, sedans, and SUVs.",
    tag: "Exterior Style",
  },
  {
    name: "Custom Fit Floor Mats",
    desc: "7D, 3D, and heavy-duty all-weather rubber floor mats designed to keep vehicle floorboards clean and protected.",
    tag: "Interior Protection",
  },
  {
    name: "Steering & Seat Comfort",
    desc: "Ergonomic leatherette steering wheel covers, neck rests, and cushions for long comfortable drives.",
    tag: "Driving Comfort",
  },
  {
    name: "Key Rings & Daily Utility",
    desc: "Branded silicone key jackets, premium metallic key rings, microfiber cleaning cloths, and air perfumes.",
    tag: "Daily Utilities",
  },
];
