import { PawPrint, Users, FileText, Home, Contact } from 'lucide-react'
import type { GeneratorFormData, SectionConfig } from '@/types/generator'

export const DEFAULT_FORM_DATA: GeneratorFormData = {
  rescueName: '',
  logo: null,
  primaryColor: '#0F766E',
  secondaryColor: '#F97316',
  tagline: '',
  rescueDescription: '',
  animalType: 'cats',
  sections: {
    adoptableCats: true,
    aboutUs: true,
    howToAdopt: true,
    fosterProgram: false,
    contact: true,
  },
  enableDonations: true,
  enableAdoptionApp: true,
}

export const SECTION_CONFIGS: SectionConfig[] = [
  {
    id: 'adoptableCats',
    label: 'Adoptable Cats',
    icon: PawPrint,
    defaultChecked: true,
  },
  {
    id: 'aboutUs',
    label: 'About Us',
    icon: Users,
    defaultChecked: true,
  },
  {
    id: 'howToAdopt',
    label: 'How to Adopt',
    icon: FileText,
    defaultChecked: true,
  },
  {
    id: 'fosterProgram',
    label: 'Foster Program',
    icon: Home,
    defaultChecked: false,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: Contact,
    defaultChecked: true,
  },
]
