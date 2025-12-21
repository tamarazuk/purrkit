import { useState } from 'react'

interface UseFileDropOptions {
  onDrop: (file: File) => void
  accept?: string // e.g., 'image/*', 'application/pdf'
}

export function useFileDrop({ onDrop, accept = 'image/*' }: UseFileDropOptions) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      const file = files[0]

      // Validate file type if accept pattern is specified
      if (file && isFileTypeAccepted(file, accept)) {
        onDrop(file)
      }
    }
  }

  const isFileTypeAccepted = (file: File, acceptPattern: string): boolean => {
    // Handle patterns like 'image/*', 'application/pdf', etc.
    if (acceptPattern === '*') return true

    if (acceptPattern.endsWith('/*')) {
      const type = acceptPattern.split('/')[0]
      return file.type.startsWith(type + '/')
    }

    return file.type === acceptPattern
  }

  return {
    isDragging,
    dragHandlers: {
      onDragOver: handleDragOver,
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
    },
  }
}
