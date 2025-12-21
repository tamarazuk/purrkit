import { useState } from 'react'
import type { GeneratorFormData } from '@/types/generator'

export function useFormSubmission() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent,
    formData: GeneratorFormData
  ) => {
    e.preventDefault()
    setIsGenerating(true)
    console.log(formData)
    // Simulate generation - replace with actual API call later
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsGenerating(false)
    setIsSuccess(true)
  }

  const reset = () => {
    setIsGenerating(false)
    setIsSuccess(false)
  }

  return {
    isGenerating,
    isSuccess,
    handleSubmit,
    reset,
  }
}
