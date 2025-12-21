import { useState } from 'react'
import ColorThief from 'colorthief'

interface ExtractedColors {
  primary: string
  secondary: string
}

export function useColorExtraction() {
  const [isExtracting, setIsExtracting] = useState(false)

  const rgbToHex = (r: number, g: number, b: number): string => {
    return (
      '#' +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16)
          return hex.length === 1 ? '0' + hex : hex
        })
        .join('')
    )
  }

  const extractColors = async (
    imageSource: string
  ): Promise<ExtractedColors | null> => {
    setIsExtracting(true)

    try {
      const img = new Image()
      img.crossOrigin = 'Anonymous'

      return new Promise((resolve) => {
        img.onload = () => {
          try {
            const colorThief = new ColorThief()
            // Get a palette of 5 colors
            const palette = colorThief.getPalette(img, 5)

            if (palette && palette.length >= 2 && palette[0] && palette[1]) {
              // First color as primary (usually the most dominant)
              const primary = rgbToHex(palette[0][0], palette[0][1], palette[0][2])
              // Second color as secondary
              const secondary = rgbToHex(palette[1][0], palette[1][1], palette[1][2])

              setIsExtracting(false)
              resolve({ primary, secondary })
            } else {
              setIsExtracting(false)
              resolve({ primary: '#0F766E', secondary: '#F97316' })
            }
          } catch (error) {
            console.error('Error extracting colors:', error)
            setIsExtracting(false)
            resolve(null)
          }
        }

        img.onerror = () => {
          console.error('Error loading image')
          setIsExtracting(false)
          resolve(null)
        }

        img.src = imageSource
      })
    } catch (error) {
      console.error('Error extracting colors:', error)
      setIsExtracting(false)
      return null
    }
  }

  return {
    extractColors,
    isExtracting,
  }
}
