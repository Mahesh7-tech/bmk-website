// Sample property data
const sampleProperties = [
  {
    id: 1,
    title: "ALORA PREMIUM PLOTS",
    location: "Mysuru Rd, Near Rajarajeshwari Engineering College, Bangalore",
    price: "₹4,999 Per Sq Ft",
    type: "Residential Plots",
    area: "1200 sq ft",
    image: "/images/Mysur_rd.jpg",
    gallery: ["/images/M1P1.jpg", "/images/M1P2.jpg", "/images/M1P3.jpg", "/images/M1P4.jpg", "/images/M1P5.jpg", "/images/M1P6.jpg"],
    featured: true,
    description: "ALORA is an Gated community offers Ready for Registration & Construction with a well planned infrastructure and modern amenities.",
    features: ["Gated Layout", "24/7 Security", "30 & 40 ft Roads", "Underground Cabling & Power", "Storm Water Drains", "Overhead Water Tank", "Jogging Tracks", "Children's Park", "Basketball Court", "CA Space"],
    amenities: ["CCTV Surveillance", "Water Connection", "Power Provision", "Rainwater Harvesting", "Children's Park"],
    dimensions: "30*40",
    approvals: "BMICP",
    khata: "Individual A khata",
    status: "Available",
    possession: "Ready for Registration & Construction",
  },
  {
    id: 2,
    title: "PILLAPPA ENCLAVE",
    location: "Nelamangala Rd, Near BGS Medical College, Bangalore",
    price: "₹4,199 Per Sq Ft",
    type: "Residential Plots",
    area: "1200 sq ft",
    image: "/images/Nelamangala.jpg",
    gallery: ["/images/NP1.jpg", "/images/NP2.jpg", "/images/NP3.jpg", "/images/NP4.jpg"],
    featured: true,
    description: "PILLAPPA ENCLAVE is a premium residential and commercial plots with Open community, all essential utilities and security.",
    features: ["Gated Community", "Garden", "Servant Quarters", "Car Parking", "Security", "Clubhouse"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Servant Quarters", "Garden"],
    dimensions: "30*40",
    approvals: "BMRDA, NPA",
    khata: "Individual A khata",
    status: "Available",
    possession: "Ready for Registration & Construction",
  },
  {
    id: 3,
    title: "LALITH RESIDENCY",
    location: "Mysur Rd, Near Dodda Aladamara, Bangalore",
    price: "₹3,499 Per Sq Ft",
    type: "Residential Plots",
    area: "1200 sq ft",
    image: "/images/Dodda.jpg",
    gallery: ["/images/DP1.jpg", "/images/DP2.jpg", "/images/DP3.jpg", "/images/DP4.jpg"],
    featured: true,
    description: "LALITH RESIDENCY is a Premium Plots in Dodda Aladamara with excellent connectivity and parking facilities.",
    features: ["Parking Space", "Security", "Lift", "Power Backup", "Internet Ready", "Conference Room"],
    amenities: ["24/7 Security", "Power Backup", "Internet Ready", "Parking", "Lift"],
    dimensions: "40*60",
    approvals: "BMRDA, NPA",
    khata: "Individual A khata",
    status: "Available",
    possession: "Ready for Registration & Construction",
  },
  {
    id: 4,
    title: "PREMIUM PLOTTS",
    location: "Mysur Rd, Near Dodda Aladamara, Bangalore",
    price: "₹4,499 Per Sq Ft",
    type: "Residential Plots",
    area: "1200 sq ft",
    image: "/images/Big.jpg",
    gallery: ["/images/BP1.jpg", "/images/BP2.jpg", "/images/BP3.jpg", "/images/BP4.jpg"],
    featured: false,
    description: "Compact 1 BHK apartment perfect for young professionals in HSR Layout.",
    features: ["Parking", "Security", "Lift", "Garden", "Children's Play Area"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Lift", "Parking"],
    dimensions: "1 BHK",
    status: "Available",
    possession: "Ready to Move",
  },
  {
    id: 5,
    title: "ORAIYAN SINDOOR CITY",
    location: "Kanakapura Main Road",
    price: "₹1,899 Per Sq Ft",
    type: "Residential Plots",
    area: "1200 sq ft",
    image: "/images/Oraiyan.jpg",
    gallery: ["/images/OP1.jpg", "/images/OP2.jpg", "/images/OP3.jpg", "/images/OP4.jpg", "/images/OP5.jpg"],
    featured: false,
    description: "High-footfall retail space in prime Indiranagar location with excellent business potential.",
    features: ["High Footfall", "Parking", "Security", "Power Backup", "Good Visibility"],
    amenities: ["Power Backup", "Water Supply", "Internet Ready", "Parking", "Security"],
    dimensions: "1200 sq ft",
    status: "Available",
    possession: "Ready to Move",
  },
]

const propertyTypes = ["Apartment", "Villa", "Commercial", "Plot", "Penthouse", "Studio", "Residential Plots"]
const locations = ["Mysuru, Karnataka", "Whitefield, Bangalore", "Sarjapur Road, Bangalore", "Electronic City, Bangalore", "HSR Layout, Bangalore", "Indiranagar, Bangalore", "Yelahanka, Bangalore", "Koramangala, Bangalore", "Peenya Industrial Area, Bangalore", "Bellandur, Bangalore", "Manyata Tech Park, Bangalore", "Marathahalli, Bangalore", "Bannerghatta Road, Bangalore", "Nelamangala Rd, Near BGS Medical College, Bangalore", "Mysur Rd, Near Dodda Aladamara, Bangalore", "Kanakapura Main Road"]

export function getAllProperties() {
  return sampleProperties
}

export function getFeaturedProperties() {
  return sampleProperties.filter((p) => p.featured)
}

export function getPropertyById(id) {
  return sampleProperties.find((p) => p.id === parseInt(id))
}

export function getPropertiesByType(type) {
  return sampleProperties.filter((p) => p.type === type)
}

export function getPropertiesByLocation(location) {
  return sampleProperties.filter((p) => p.location === location)
}

export function searchProperties(query) {
  const q = query.toLowerCase()
  return sampleProperties.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q)
  )
}

export function getPropertyTypes() {
  return propertyTypes
}

export function getLocations() {
  return locations
}
