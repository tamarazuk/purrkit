export type AnimalType = 'cats' | 'dogs' | 'both'

export interface FormSections {
  adoptableCats: boolean
  aboutUs: boolean
  howToAdopt: boolean
  fosterProgram: boolean
  contact: boolean
}

export interface GeneratorFormData {
  rescueName: string
  logo: File | null
  primaryColor: string
  secondaryColor: string
  tagline: string
  rescueDescription: string
  animalType: AnimalType
  sections: FormSections
  enableDonations: boolean
  enableAdoptionApp: boolean
}

export interface SectionConfig {
  id: keyof FormSections
  label: string
  icon: React.ComponentType<{ className?: string }>
  defaultChecked: boolean
}
