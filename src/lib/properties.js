// Sample property data (this will be replaced by dynamic loading)
const sampleProperties = [
  {
    id: 1,
    title: "2 BHK Apartment",
    location: "Whitefield, Bangalore",
    price: "₹85,00,000",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq ft",
    image: "/images/property1.jpg",
    featured: true,
    description: "Modern 2 BHK apartment in prime Whitefield location with excellent connectivity to IT hubs.",
    features: ["Swimming Pool", "Gym", "24/7 Security", "Parking", "Garden", "Children's Play Area"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Lift", "Visitor Parking"],
    dimensions: "2 BHK",
    status: "Available",
    possession: "Ready to Move",
    furnishing: "Semi-Furnished"
  },
  {
    id: 2,
    title: "3 BHK Villa",
    location: "Sarjapur Road, Bangalore",
    price: "₹1,25,00,000",
    type: "Villa",
    bedrooms: 3,
    bathrooms: 3,
    area: "2200 sq ft",
    image: "/images/property2.jpg",
    featured: true,
    description: "Luxurious 3 BHK villa with modern amenities and gated community security.",
    features: ["Gated Community", "Garden", "Servant Quarters", "Car Parking", "Security", "Clubhouse"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Servant Quarters", "Garden"],
    dimensions: "3 BHK",
    status: "Available",
    possession: "Ready to Move",
    furnishing: "Fully Furnished"
  },
  {
    id: 3,
    title: "Commercial Office Space",
    location: "Electronic City, Bangalore",
    price: "₹2,50,00,000",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    area: "3000 sq ft",
    image: "/images/site.jpg",
    featured: true,
    description: "Premium office space in Electronic City with excellent connectivity and parking facilities.",
    features: ["Parking Space", "Security", "Lift", "Power Backup", "Internet Ready", "Conference Room"],
    amenities: ["24/7 Security", "Power Backup", "Internet Ready", "Parking", "Lift"],
    dimensions: "3000 sq ft",
    status: "Available",
    possession: "Ready to Move",
    furnishing: "Unfurnished"
  },
  {
    id: 4,
    title: "1 BHK Apartment",
    location: "HSR Layout, Bangalore",
    price: "₹55,00,000",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: "750 sq ft",
    image: "/images/plot.jpg",
    featured: false,
    description: "Compact 1 BHK apartment perfect for young professionals in HSR Layout.",
    features: ["Parking", "Security", "Lift", "Garden", "Children's Play Area"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Lift", "Parking"],
    dimensions: "1 BHK",
    status: "Available",
    possession: "Ready to Move",
    furnishing: "Semi-Furnished"
  },
  {
    id: 5,
    title: "Retail Shop Space",
    location: "Indiranagar, Bangalore",
    price: "₹1,80,00,000",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 1,
    area: "1200 sq ft",
    image: "/images/property1.jpg",
    featured: false,
    description: "High-footfall retail space in prime Indiranagar location with excellent business potential.",
    features: ["High Footfall", "Parking", "Security", "Power Backup", "Good Visibility"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Parking", "Security"],
    dimensions: "1200 sq ft",
    status: "Available",
    possession: "Ready to Move",
    furnishing: "Unfurnished"
  },
  {
    id: 6,
    title: "4 BHK Villa",
    location: "Yelahanka, Bangalore",
    price: "₹1,95,00,000",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 4,
    area: "3200 sq ft",
    image: "/images/property2.jpg",
    featured: false,
    description: "Spacious 4 BHK villa with garden and modern amenities in Yelahanka.",
    features: ["Garden", "Servant Quarters", "Car Parking", "Security", "Clubhouse", "Swimming Pool"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Servant Quarters", "Garden"],
    dimensions: "4 BHK",
    status: "Available",
    possession: "Ready to Move",
    furnishing: "Fully Furnished"
  },
  {
    id: 7,
    title: "Studio Apartment",
    location: "Koramangala, Bangalore",
    price: "₹45,00,000",
    type: "Apartment",
    bedrooms: 1,
    bathrooms: 1,
    area: "500 sq ft",
    image: "/images/site.jpg",
    featured: false,
    description: "Modern studio apartment in Koramangala, perfect for singles or couples.",
    features: ["Parking", "Security", "Lift", "Garden", "Gym"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Lift", "Parking"],
    dimensions: "Studio",
    status: "Available",
    possession: "Ready to Move",
    furnishing: "Semi-Furnished"
  },
  {
    id: 8,
    title: "Warehouse Space",
    location: "Peenya Industrial Area, Bangalore",
    price: "₹3,20,00,000",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    area: "5000 sq ft",
    image: "/images/plot.jpg",
    featured: false,
    description: "Large warehouse space in Peenya Industrial Area with loading facilities.",
    features: ["Loading Dock", "High Ceiling", "Security", "Power Backup", "Parking", "Office Space"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Loading Dock", "Security"],
    dimensions: "5000 sq ft",
    status: "Available",
    possession: "Ready to Move",
    furnishing: "Unfurnished"
  },
  {
    id: 9,
    title: "Residential Plot - 30x40",
    location: "Whitefield, Bangalore",
    price: "₹75,00,000",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: "1200 sq ft",
    image: "/images/property1.jpg",
    featured: false,
    description: "Prime residential plot in Whitefield with excellent connectivity and development potential.",
    features: ["Corner Plot", "Road Access", "Water Supply", "Power Connection", "Good Soil", "Clear Title"],
    amenities: ["Road Access", "Water Supply", "Power Connection", "Clear Title", "Approved Layout"],
    dimensions: "30x40 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 10,
    title: "Luxury Villa Plot - 50x80",
    location: "Sarjapur Road, Bangalore",
    price: "₹2,50,00,000",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: "4000 sq ft",
    image: "/images/property2.jpg",
    featured: false,
    description: "Premium villa plot in exclusive gated community with all amenities and security.",
    features: ["Gated Community", "Corner Plot", "Road Access", "Water Supply", "Power Connection", "Security", "Garden Area"],
    amenities: ["Road Access", "Water Supply", "Power Connection", "Security", "Garden Area", "Clear Title"],
    dimensions: "50x80 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 11,
    title: "Commercial Site - 60x40",
    location: "Electronic City, Bangalore",
    price: "₹4,50,00,000",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: "2400 sq ft",
    image: "/images/site.jpg",
    featured: false,
    description: "Prime commercial site in Electronic City with high business potential and excellent connectivity.",
    features: ["Main Road Frontage", "High Footfall", "Parking Space", "Power Connection", "Water Supply", "Clear Title"],
    amenities: ["Main Road Access", "Power Connection", "Water Supply", "Parking Space", "Clear Title", "Commercial Zoning"],
    dimensions: "60x40 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 12,
    title: "Residential Plot - 40x60",
    location: "HSR Layout, Bangalore",
    price: "₹1,20,00,000",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: "2400 sq ft",
    image: "/images/plot.jpg",
    featured: false,
    description: "Spacious residential plot in HSR Layout with good connectivity and development potential.",
    features: ["Corner Plot", "Road Access", "Water Supply", "Power Connection", "Good Soil", "Clear Title"],
    amenities: ["Road Access", "Water Supply", "Power Connection", "Clear Title", "Approved Layout"],
    dimensions: "40x60 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 13,
    title: "Luxury Villa Plot - 60x100",
    location: "Yelahanka, Bangalore",
    price: "₹3,75,00,000",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: "6000 sq ft",
    image: "/images/property1.jpg",
    featured: false,
    description: "Exclusive luxury villa plot in Yelahanka with premium amenities and security.",
    features: ["Gated Community", "Corner Plot", "Road Access", "Water Supply", "Power Connection", "Security", "Garden Area", "Swimming Pool Site"],
    amenities: ["Road Access", "Water Supply", "Power Connection", "Security", "Garden Area", "Clear Title", "Premium Location"],
    dimensions: "60x100 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 14,
    title: "Commercial Site - 80x50",
    location: "Indiranagar, Bangalore",
    price: "₹6,50,00,000",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: "4000 sq ft",
    image: "/images/property2.jpg",
    featured: false,
    description: "Premium commercial site in Indiranagar with excellent business potential and high footfall.",
    features: ["Main Road Frontage", "High Footfall", "Parking Space", "Power Connection", "Water Supply", "Clear Title", "Commercial Zoning"],
    amenities: ["Main Road Access", "Power Connection", "Water Supply", "Parking Space", "Clear Title", "Commercial Zoning", "High Visibility"],
    dimensions: "80x50 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 15,
    title: "Residential Plot - 50x50",
    location: "Koramangala, Bangalore",
    price: "₹1,85,00,000",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: "2500 sq ft",
    image: "/images/site.jpg",
    featured: false,
    description: "Prime residential plot in Koramangala with excellent connectivity and development potential.",
    features: ["Corner Plot", "Road Access", "Water Supply", "Power Connection", "Good Soil", "Clear Title"],
    amenities: ["Road Access", "Water Supply", "Power Connection", "Clear Title", "Approved Layout"],
    dimensions: "50x50 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 16,
    title: "Luxury Villa Plot - 70x120",
    location: "Bellandur, Bangalore",
    price: "₹5,25,00,000",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: "8400 sq ft",
    image: "/images/plot.jpg",
    featured: false,
    description: "Ultra-luxury villa plot in Bellandur with premium amenities and exclusive location.",
    features: ["Gated Community", "Corner Plot", "Road Access", "Water Supply", "Power Connection", "Security", "Garden Area", "Swimming Pool Site", "Tennis Court Site"],
    amenities: ["Road Access", "Water Supply", "Power Connection", "Security", "Garden Area", "Clear Title", "Premium Location", "Exclusive Community"],
    dimensions: "70x120 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 17,
    title: "Commercial Site - 100x60",
    location: "Manyata Tech Park, Bangalore",
    price: "₹8,75,00,000",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: "6000 sq ft",
    image: "/images/property1.jpg",
    featured: false,
    description: "Large commercial site in Manyata Tech Park with excellent business potential and IT hub connectivity.",
    features: ["Main Road Frontage", "High Footfall", "Parking Space", "Power Connection", "Water Supply", "Clear Title", "Commercial Zoning", "IT Hub Proximity"],
    amenities: ["Main Road Access", "Power Connection", "Water Supply", "Parking Space", "Clear Title", "Commercial Zoning", "High Visibility", "IT Hub Access"],
    dimensions: "100x60 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 18,
    title: "Residential Plot - 60x40",
    location: "Marathahalli, Bangalore",
    price: "₹95,00,000",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: "2400 sq ft",
    image: "/images/property2.jpg",
    featured: false,
    description: "Affordable residential plot in Marathahalli with good connectivity and development potential.",
    features: ["Corner Plot", "Road Access", "Water Supply", "Power Connection", "Good Soil", "Clear Title"],
    amenities: ["Road Access", "Water Supply", "Power Connection", "Clear Title", "Approved Layout"],
    dimensions: "60x40 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 19,
    title: "Luxury Villa Plot - 80x100",
    location: "Bannerghatta Road, Bangalore",
    price: "₹4,25,00,000",
    type: "Plot",
    bedrooms: 0,
    bathrooms: 0,
    area: "8000 sq ft",
    image: "/images/site.jpg",
    featured: false,
    description: "Premium luxury villa plot in Bannerghatta Road with exclusive amenities and security.",
    features: ["Gated Community", "Corner Plot", "Road Access", "Water Supply", "Power Connection", "Security", "Garden Area", "Swimming Pool Site"],
    amenities: ["Road Access", "Water Supply", "Power Connection", "Security", "Garden Area", "Clear Title", "Premium Location"],
    dimensions: "80x100 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  },
  {
    id: 20,
    title: "Commercial Site - 120x80",
    location: "Peenya Industrial Area, Bangalore",
    price: "₹12,50,00,000",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 0,
    area: "9600 sq ft",
    image: "/images/plot.jpg",
    featured: false,
    description: "Large commercial site in Peenya Industrial Area with excellent industrial connectivity and business potential.",
    features: ["Main Road Frontage", "High Footfall", "Parking Space", "Power Connection", "Water Supply", "Clear Title", "Commercial Zoning", "Industrial Proximity"],
    amenities: ["Main Road Access", "Power Connection", "Water Supply", "Parking Space", "Clear Title", "Commercial Zoning", "High Visibility", "Industrial Access"],
    dimensions: "120x80 ft",
    status: "Available",
    possession: "Ready for Construction",
    furnishing: "Unfurnished"
  }
]

const propertyTypes = [
  "Apartment",
  "Villa", 
  "Commercial",
  "Plot",
  "Penthouse",
  "Studio"
]

const locations = [
  "Whitefield, Bangalore",
  "Sarjapur Road, Bangalore",
  "Electronic City, Bangalore",
  "HSR Layout, Bangalore",
  "Indiranagar, Bangalore",
  "Yelahanka, Bangalore",
  "Koramangala, Bangalore",
  "Peenya Industrial Area, Bangalore",
  "Bellandur, Bangalore",
  "Manyata Tech Park, Bangalore",
  "Marathahalli, Bangalore",
  "Bannerghatta Road, Bangalore"
]

// Function to get all properties
export function getAllProperties() {
  return sampleProperties
}

// Function to get featured properties
export function getFeaturedProperties() {
  return sampleProperties.filter(property => property.featured)
}

// Function to get property by ID
export function getPropertyById(id) {
  return sampleProperties.find(property => property.id === parseInt(id))
}

// Function to get properties by type
export function getPropertiesByType(type) {
  return sampleProperties.filter(property => property.type === type)
}

// Function to get properties by location
export function getPropertiesByLocation(location) {
  return sampleProperties.filter(property => property.location === location)
}

// Function to search properties
export function searchProperties(query) {
  const lowercaseQuery = query.toLowerCase()
  
  return sampleProperties.filter(property => 
    property.title.toLowerCase().includes(lowercaseQuery) ||
    property.location.toLowerCase().includes(lowercaseQuery) ||
    property.description.toLowerCase().includes(lowercaseQuery) ||
    property.type.toLowerCase().includes(lowercaseQuery)
  )
}

// Function to get property types
export function getPropertyTypes() {
  return propertyTypes
}

// Function to get locations
export function getLocations() {
  return locations
} 