// Local storage system for property management
// This allows the owner to manage properties through the admin panel

import { getPropertyTypes as localGetPropertyTypes, getLocations as localGetLocations, getAllProperties } from './properties'

// Function to get properties from local storage
export async function fetchPropertiesFromStorage() {
  try {
    console.log('Fetching properties from storage...')
    // Check if we're in the browser environment
    if (typeof window === 'undefined') {
      console.log('Not in browser environment, returning local properties')
      return getLocalProperties()
    }

    // Get properties from localStorage
    const storedProperties = localStorage.getItem('bmk-properties')
    console.log('Stored properties from localStorage:', storedProperties ? 'found' : 'not found')
    
    if (storedProperties) {
      const storedProps = JSON.parse(storedProperties)
      console.log('Parsed stored properties:', storedProps.length)
      
      // Get default properties
      const defaultProperties = getLocalProperties()
      console.log('Default properties:', defaultProperties.length)
      
      // Filter out default properties that have been updated
      const updatedDefaultIds = storedProps
        .filter(prop => prop.isUpdated)
        .map(prop => prop.originalId || prop.id)
      console.log('Updated default IDs:', updatedDefaultIds)
      
      const filteredDefaultProperties = defaultProperties.filter(prop => 
        !updatedDefaultIds.includes(prop.id)
      )
      console.log('Filtered default properties:', filteredDefaultProperties.length)
      
      // Ensure stored properties have unique IDs that don't conflict with defaults
      const maxDefaultId = Math.max(...filteredDefaultProperties.map(p => p.id), 0)
      const updatedStoredProps = storedProps.map((prop, index) => ({
        ...prop,
        id: prop.id > maxDefaultId ? prop.id : maxDefaultId + index + 1
      }))
      console.log('Updated stored properties:', updatedStoredProps.length)
      
      // Merge with filtered default properties
      const mergedProperties = [...filteredDefaultProperties, ...updatedStoredProps]
      console.log('Final merged properties:', mergedProperties.length)
      return mergedProperties
    }
    
    console.log('No stored properties, returning default properties')
    // Return default properties if no stored data
    return getLocalProperties()
  } catch (error) {
    console.error('Error fetching from local storage:', error)
    return getLocalProperties()
  }
}

// Function to save properties to local storage
export function savePropertiesToStorage(properties) {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bmk-properties', JSON.stringify(properties))
    }
  } catch (error) {
    console.error('Error saving to local storage:', error)
  }
}

// Function to add a new property
export function addPropertyToStorage(newProperty) {
  try {
    if (typeof window === 'undefined') {
      return false
    }

    const storedProperties = localStorage.getItem('bmk-properties')
    const existingProperties = storedProperties ? JSON.parse(storedProperties) : []
    
    // Get default properties to find the maximum ID
    const defaultProperties = getLocalProperties()
    const maxDefaultId = Math.max(...defaultProperties.map(p => p.id), 0)
    
    // Generate a unique ID that's higher than any default property ID
    const maxStoredId = existingProperties.length > 0 ? Math.max(...existingProperties.map(p => p.id), 0) : 0
    const newId = Math.max(maxDefaultId, maxStoredId) + 1
    
    newProperty.id = newId
    
    // Add timestamp
    newProperty.createdAt = new Date().toISOString()
    
    const updatedProperties = [...existingProperties, newProperty]
    savePropertiesToStorage(updatedProperties)
    
    // Clear cache to ensure fresh data
    clearPropertiesCache()
    
    return true
  } catch (error) {
    console.error('Error adding property:', error)
    return false
  }
}

// Function to update a property
export function updatePropertyInStorage(propertyId, updatedProperty) {
  try {
    console.log('Updating property with ID:', propertyId)
    console.log('Updated property data:', updatedProperty)
    
    if (typeof window === 'undefined') {
      console.log('Not in browser environment, returning false')
      return false
    }

    const storedProperties = localStorage.getItem('bmk-properties')
    const existingProperties = storedProperties ? JSON.parse(storedProperties) : []
    console.log('Existing stored properties:', existingProperties.length)
    
    // Get default properties to find the maximum ID
    const defaultProperties = getLocalProperties()
    const maxDefaultId = Math.max(...defaultProperties.map(p => p.id), 0)
    console.log('Max default ID:', maxDefaultId)
    
    // Check if this is a default property (ID <= maxDefaultId)
    if (propertyId <= maxDefaultId) {
      console.log('This is a default property, creating updated version')
      // This is a default property, we can't update it in localStorage
      // Instead, we'll add it as a new property with the updated data
      const originalProperty = defaultProperties.find(p => p.id === propertyId)
      if (originalProperty) {
        const newProperty = {
          ...originalProperty,
          ...updatedProperty,
          id: Math.max(maxDefaultId, ...existingProperties.map(p => p.id), 0) + 1,
          createdAt: new Date().toISOString(),
          isUpdated: true, // Mark as updated version
          originalId: propertyId // Track the original ID
        }
        
        console.log('Created new updated property with ID:', newProperty.id)
        const updatedProperties = [...existingProperties, newProperty]
        savePropertiesToStorage(updatedProperties)
        
        // Clear cache to ensure fresh data
        clearPropertiesCache()
        
        return true
      }
    } else {
      console.log('This is a stored property, updating directly')
      // This is a stored property, update it directly
      const updatedProperties = existingProperties.map(property => 
        property.id === propertyId ? { ...property, ...updatedProperty } : property
      )
      
      console.log('Updated properties in storage:', updatedProperties.length)
      savePropertiesToStorage(updatedProperties)
      
      // Clear cache to ensure fresh data
      clearPropertiesCache()
      
      return true
    }
    
    console.log('Update failed - property not found')
    return false
  } catch (error) {
    console.error('Error updating property:', error)
    return false
  }
}

// Function to delete a property
export function deletePropertyFromStorage(propertyId) {
  try {
    if (typeof window === 'undefined') {
      return false
    }

    const storedProperties = localStorage.getItem('bmk-properties')
    const existingProperties = storedProperties ? JSON.parse(storedProperties) : []
    
    const updatedProperties = existingProperties.filter(property => property.id !== propertyId)
    savePropertiesToStorage(updatedProperties)
    
    // Clear cache to ensure fresh data
    clearPropertiesCache()
    
    return true
  } catch (error) {
    console.error('Error deleting property:', error)
    return false
  }
}

// Fallback to local properties if storage is not available
function getLocalProperties() {
  return getAllProperties()
}

// Function to get all properties (with caching)
let cachedProperties = null
let cacheTimestamp = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

// Function to clear cache
export function clearPropertiesCache() {
  console.log('Clearing properties cache...')
  cachedProperties = null
  cacheTimestamp = null
  console.log('Cache cleared successfully')
}

export async function getAllPropertiesFromSheet() {
  const now = Date.now()
  
  // Return cached data if it's still valid
  if (cachedProperties && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION) {
    console.log('Returning cached properties:', cachedProperties.length)
    return cachedProperties
  }
  
  console.log('Fetching fresh properties from storage...')
  // Fetch fresh data
  const properties = await fetchPropertiesFromStorage()
  
  // Update cache
  cachedProperties = properties
  cacheTimestamp = now
  
  console.log('Fresh properties loaded:', properties.length)
  return properties
}

// Function to get featured properties
export async function getFeaturedPropertiesFromSheet() {
  const properties = await getAllPropertiesFromSheet()
  return properties.filter(property => property.featured)
}

// Function to get property by ID
export async function getPropertyByIdFromSheet(id) {
  const properties = await getAllPropertiesFromSheet()
  return properties.find(property => property.id === parseInt(id))
}

// Function to get properties by type
export async function getPropertiesByTypeFromSheet(type) {
  const properties = await getAllPropertiesFromSheet()
  return properties.filter(property => property.type === type)
}

// Function to search properties
export async function searchPropertiesFromSheet(query) {
  const properties = await getAllPropertiesFromSheet()
  const searchTerm = query.toLowerCase()
  
  return properties.filter(property => 
    property.title.toLowerCase().includes(searchTerm) ||
    property.location.toLowerCase().includes(searchTerm) ||
    property.description.toLowerCase().includes(searchTerm) ||
    property.type.toLowerCase().includes(searchTerm)
  )
}

// Function to get property types (from local data for now)
export function getPropertyTypes() {
  return localGetPropertyTypes()
}

// Function to get locations (from local data for now)
export function getLocations() {
  return localGetLocations()
} 