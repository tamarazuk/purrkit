import { useState } from 'react'
import type { GeneratorFormData, FormSections } from '@/types/generator'
import { DEFAULT_FORM_DATA } from '@/lib/generator-config'

export function useGeneratorForm() {
  const [formData, setFormData] = useState<GeneratorFormData>(DEFAULT_FORM_DATA)

  const updateField = <K extends keyof GeneratorFormData>(
    field: K,
    value: GeneratorFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const updateSection = (section: keyof FormSections) => {
    setFormData((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [section]: !prev.sections[section],
      },
    }))
  }

  const resetForm = () => {
    setFormData(DEFAULT_FORM_DATA)
  }

  return {
    formData,
    updateField,
    updateSection,
    resetForm,
  }
}
