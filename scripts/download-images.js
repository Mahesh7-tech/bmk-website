const fs = require('fs');
const path = require('path');
const https = require('https');

// Image specifications for each property
const imageSpecs = [
  {
    filename: 'apartment-modern-2bhk.jpg',
    searchTerm: 'modern apartment interior',
    description: 'Modern 2 BHK apartment interior'
  },
  {
    filename: 'villa-luxury-3bhk.jpg',
    searchTerm: 'luxury villa exterior',
    description: 'Luxury 3 BHK villa exterior'
  },
  {
    filename: 'commercial-office-modern.jpg',
    searchTerm: 'modern office space',
    description: 'Modern office space interior'
  },
  {
    filename: 'apartment-compact-1bhk.jpg',
    searchTerm: 'compact apartment interior',
    description: 'Compact 1 BHK apartment'
  },
  {
    filename: 'commercial-retail-shop.jpg',
    searchTerm: 'retail shop space',
    description: 'Retail shop space'
  },
  {
    filename: 'villa-spacious-4bhk.jpg',
    searchTerm: 'spacious villa garden',
    description: 'Spacious 4 BHK villa with garden'
  },
  {
    filename: 'apartment-studio-modern.jpg',
    searchTerm: 'studio apartment modern',
    description: 'Modern studio apartment'
  },
  {
    filename: 'commercial-warehouse-large.jpg',
    searchTerm: 'warehouse space large',
    description: 'Large warehouse space'
  },
  {
    filename: 'plot-residential-corner.jpg',
    searchTerm: 'residential plot corner',
    description: 'Corner residential plot'
  },
  {
    filename: 'plot-villa-luxury-gated.jpg',
    searchTerm: 'luxury villa plot gated',
    description: 'Luxury villa plot in gated community'
  },
  {
    filename: 'plot-commercial-main-road.jpg',
    searchTerm: 'commercial plot main road',
    description: 'Commercial plot with main road access'
  },
  {
    filename: 'plot-residential-spacious.jpg',
    searchTerm: 'spacious residential plot',
    description: 'Spacious residential plot'
  },
  {
    filename: 'plot-villa-exclusive-premium.jpg',
    searchTerm: 'exclusive villa plot premium',
    description: 'Exclusive premium villa plot'
  },
  {
    filename: 'plot-commercial-high-footfall.jpg',
    searchTerm: 'commercial plot high footfall',
    description: 'Commercial plot with high footfall'
  },
  {
    filename: 'plot-residential-prime-location.jpg',
    searchTerm: 'prime location residential plot',
    description: 'Prime location residential plot'
  },
  {
    filename: 'plot-villa-ultra-luxury.jpg',
    searchTerm: 'ultra luxury villa plot',
    description: 'Ultra luxury villa plot'
  },
  {
    filename: 'plot-commercial-it-hub.jpg',
    searchTerm: 'commercial plot IT hub',
    description: 'Commercial plot near IT hub'
  },
  {
    filename: 'plot-residential-affordable.jpg',
    searchTerm: 'affordable residential plot',
    description: 'Affordable residential plot'
  },
  {
    filename: 'plot-villa-premium-exclusive.jpg',
    searchTerm: 'premium exclusive villa plot',
    description: 'Premium exclusive villa plot'
  },
  {
    filename: 'plot-commercial-industrial-large.jpg',
    searchTerm: 'industrial commercial plot large',
    description: 'Large industrial commercial plot'
  }
];

// Function to download image from Unsplash
function downloadImage(filename, searchTerm) {
  return new Promise((resolve, reject) => {
    const imageUrl = `https://source.unsplash.com/1200x800/?${encodeURIComponent(searchTerm)}`;
    const filePath = path.join(__dirname, '..', 'public', 'images', filename);
    
    console.log(`Downloading ${filename}...`);
    
    https.get(imageUrl, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filePath, () => {}); // Delete the file if there's an error
          reject(err);
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Main function to download all images
async function downloadAllImages() {
  console.log('🚀 Starting image download process...');
  console.log('📁 Images will be saved to: public/images/');
  console.log('');
  
  // Create images directory if it doesn't exist
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log('📂 Created images directory');
  }
  
  // Download images with delay to avoid rate limiting
  for (let i = 0; i < imageSpecs.length; i++) {
    const spec = imageSpecs[i];
    try {
      await downloadImage(spec.filename, spec.searchTerm);
      
      // Add delay between downloads to avoid rate limiting
      if (i < imageSpecs.length - 1) {
        console.log('⏳ Waiting 2 seconds before next download...');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error(`❌ Error downloading ${spec.filename}:`, error.message);
    }
  }
  
  console.log('');
  console.log('🎉 Image download process completed!');
  console.log(`📊 Downloaded ${imageSpecs.length} images`);
  console.log('');
  console.log('📋 Image Summary:');
  imageSpecs.forEach(spec => {
    console.log(`   - ${spec.filename}: ${spec.description}`);
  });
}

// Run the script
if (require.main === module) {
  downloadAllImages().catch(console.error);
}

module.exports = { downloadAllImages, imageSpecs }; 