# Google Sheets Setup Guide for BMK Builders Website

This guide will help you set up Google Sheets to manage your property listings without any coding.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "BMK Properties" or something similar

## Step 2: Set Up the Sheet Structure

Create the following columns in your sheet (in this exact order):

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Title | Location | Price | Type | Bedrooms | Bathrooms | Area | Description | Image URL | Featured | Features | Amenities | Dimensions | Status | Possession | Furnishing |

### Column Details:
- **Title**: Property title (e.g., "2 BHK Apartment")
- **Location**: Property location (e.g., "Whitefield, Bangalore")
- **Price**: Property price (e.g., "₹85,00,000")
- **Type**: Property type (e.g., "Apartment", "Villa", "Commercial", "Plot")
- **Bedrooms**: Number of bedrooms (0 for commercial/plots)
- **Bathrooms**: Number of bathrooms
- **Area**: Property area (e.g., "1200 sq ft")
- **Description**: Property description
- **Image URL**: Link to property image (see Step 3)
- **Featured**: TRUE or FALSE (for featured properties)
- **Features**: Comma-separated features (e.g., "Swimming Pool, Gym, Security")
- **Amenities**: Comma-separated amenities (e.g., "Power Backup, Water Supply")
- **Dimensions**: Property dimensions (e.g., "2 BHK" or "30x40 ft")
- **Status**: Available, Sold, Under Construction, Reserved
- **Possession**: Ready to Move, Ready for Construction, etc.
- **Furnishing**: Unfurnished, Semi-Furnished, Fully Furnished

## Step 3: Upload Images

### Option A: Google Drive (Recommended)
1. Upload property images to Google Drive
2. Right-click on each image → "Get link"
3. Make sure the link is set to "Anyone with the link can view"
4. Copy the link and paste it in the Image URL column

### Option B: Use Existing Images
For now, you can use these existing images:
- `/images/property1.jpg`
- `/images/property2.jpg`
- `/images/site.jpg`
- `/images/plot.jpg`

## Step 4: Add Sample Data

Add a few sample properties to test. Here's an example row:

```
2 BHK Apartment | Whitefield, Bangalore | ₹85,00,000 | Apartment | 2 | 2 | 1200 sq ft | Modern 2 BHK apartment in prime Whitefield location | /images/property1.jpg | TRUE | Swimming Pool, Gym, Security | Power Backup, Water Supply | 2 BHK | Available | Ready to Move | Semi-Furnished
```

## Step 5: Make the Sheet Public

1. Click "Share" in the top right
2. Click "Change to anyone with the link"
3. Set to "Viewer"
4. Copy the Sheet ID from the URL

The URL will look like: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`

Copy the `YOUR_SHEET_ID_HERE` part.

## Step 6: Update the Website

1. Open `src/lib/sheets.js`
2. Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
3. Save the file

## Step 7: Test

1. Add a new property to your Google Sheet
2. Refresh your website
3. The new property should appear automatically

## How to Add New Properties

1. **Open your Google Sheet** (on phone or computer)
2. **Add a new row** at the bottom
3. **Fill in all the details**:
   - Title, Location, Price, Type, etc.
   - Upload image to Google Drive and paste the link
   - Add features and amenities (comma-separated)
4. **Save** - the property appears on your website instantly!

## Tips

- **Images**: Use Google Drive for easy image management
- **Features/Amenities**: Separate multiple items with commas
- **Featured**: Use TRUE for properties you want to highlight
- **Price**: Include the currency symbol (₹)
- **Area**: Include units (sq ft, acres, etc.)

## Troubleshooting

- **Properties not showing**: Check that your Sheet ID is correct
- **Images not loading**: Make sure Google Drive links are set to "Anyone can view"
- **Website not updating**: Wait a few minutes for the cache to refresh

## Need Help?

If you have any issues:
1. Check that all required columns are filled
2. Make sure the Sheet is public
3. Verify the Sheet ID is correct
4. Try refreshing the website after a few minutes

That's it! You can now manage all your properties through a simple Google Sheet without any coding. 