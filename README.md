# MJ Properties and Constructions Website

A modern, responsive real estate website built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Dynamic Property Management** - Easy to add, edit, and manage properties
- **Responsive Design** - Works perfectly on all devices
- **Search & Filter** - Advanced property search and filtering
- **Featured Properties** - Highlight premium properties
- **Contact Integration** - WhatsApp and email contact forms
- **SEO Optimized** - Built for search engine optimization

## 📁 Project Structure

```
Website/
├── data/
│   └── properties.json          # Property data (EDIT THIS FILE)
├── lib/
│   └── properties.js            # Property management functions
├── src/
│   ├── app/                     # Next.js app router pages
│   └── components/              # React components
├── public/
│   └── images/                  # Property images
└── README.md                    # This file
```

## 🏠 Managing Properties

### Adding New Properties

To add a new property, edit the `data/properties.json` file:

1. **Open** `data/properties.json`
2. **Add** a new property object to the `properties` array
3. **Follow** this structure:

```json
{
  "id": 9,
  "title": "Your Property Title",
  "location": "Location, Bangalore",
  "price": "₹1,00,00,000",
  "type": "Apartment",
  "bedrooms": 2,
  "bathrooms": 2,
  "area": "1200 sq ft",
  "image": "/images/your-image.jpg",
  "featured": false,
  "description": "Property description here...",
  "features": ["Feature 1", "Feature 2", "Feature 3"],
  "amenities": ["Amenity 1", "Amenity 2", "Amenity 3"],
  "dimensions": "2 BHK",
  "status": "Available",
  "possession": "Ready to Move",
  "furnishing": "Semi-Furnished"
}
```

### Property Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `id` | Unique property ID (number) | `9` |
| `title` | Property title | `"2 BHK Apartment"` |
| `location` | Property location | `"Whitefield, Bangalore"` |
| `price` | Property price | `"₹85,00,000"` |
| `type` | Property type | `"Apartment"`, `"Villa"`, `"Commercial"` |
| `bedrooms` | Number of bedrooms | `2` (0 for commercial) |
| `bathrooms` | Number of bathrooms | `2` |
| `area` | Property area | `"1200 sq ft"` |
| `image` | Image path | `"/images/property1.jpg"` |
| `featured` | Featured property | `true` or `false` |
| `description` | Property description | `"Modern apartment..."` |
| `features` | Array of features | `["Swimming Pool", "Gym"]` |
| `amenities` | Array of amenities | `["Power Backup", "Lift"]` |
| `dimensions` | Property dimensions | `"2 BHK"` |
| `status` | Availability status | `"Available"`, `"Sold"`, `"Under Construction"` |
| `possession` | Possession status | `"Ready to Move"`, `"Under Construction"` |
| `furnishing` | Furnishing status | `"Fully Furnished"`, `"Semi-Furnished"`, `"Unfurnished"` |

### Adding Property Images

1. **Upload** your property images to `public/images/`
2. **Update** the `image` field in the JSON file
3. **Use** the correct path: `/images/your-image.jpg`

### Making Properties Featured

To feature a property on the home page:
1. **Set** `"featured": true` in the property object
2. **Only** 3 properties should be featured at a time
3. **Featured** properties appear on the home page

### Property Types

Available property types:
- `"Apartment"`
- `"Villa"`
- `"Commercial"`
- `"Penthouse"`
- `"Studio"`

### Locations

Add new locations to the `locations` array in the JSON file:
```json
"locations": [
  "Whitefield, Bangalore",
  "Sarjapur Road, Bangalore",
  "Your New Location, Bangalore"
]
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Contact Information

- **Phone:** +91 95388 90395
- **Email:** info@mjpropertiesandconstructions.com
- **Office:** 07 12th cross, near jayanna circle, Rajarajeshwari Nagara, Bengaluru, Karnataka 560098
- **Hours:** Mon-Sat: 9:00 AM - 7:00 PM, Sunday: 10:00 AM - 5:00 PM

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### Styling
- **Global styles:** `src/app/globals.css`
- **Component styles:** Use Tailwind CSS classes
- **Custom components:** `src/components/`

## 📈 SEO Optimization

The website is optimized for search engines with:
- Semantic HTML structure
- Meta tags and descriptions
- Optimized images
- Fast loading times
- Mobile-friendly design

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify:** Upload build folder
- **AWS S3:** Upload static files
- **Traditional hosting:** Upload build files

## 📞 Support

For technical support or questions about managing properties, contact:
- **Email:** support@mjpropertiesandconstructions.com
- **Phone:** +91 95388 90395

---

**Note:** Always backup your `data/properties.json` file before making changes! 