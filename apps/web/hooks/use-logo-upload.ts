import { useState } from 'react'

export function useLogoUpload() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null)

  const handleUpload = (file: File | null, onFileChange: (file: File | null) => void) => {
    if (file) {
      onFileChange(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setLogoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const clearLogo = (onFileChange: (file: File | null) => void) => {
    setLogoPreview(null)
    onFileChange(null)
  }

  return {
    logoPreview,
    handleUpload,
    clearLogo,
  }
}
