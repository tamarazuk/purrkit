import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { SECTION_CONFIGS } from '@/lib/generator-config'
import type { FormSections } from '@/types/generator'

interface SectionCheckboxesProps {
  sections: FormSections
  onToggle: (section: keyof FormSections) => void
}

export function SectionCheckboxes({
  sections,
  onToggle,
}: SectionCheckboxesProps) {
  return (
    <div className="space-y-4">
      <Label className="text-foreground text-base font-semibold">
        Which sections do you want?
      </Label>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SECTION_CONFIGS.map((config) => {
          const Icon = config.icon
          return (
            <div
              key={config.id}
              className="border-teal/20 hover:bg-teal/5 flex items-center space-x-3 rounded-lg border p-4 transition-colors"
            >
              <Checkbox
                id={config.id}
                checked={sections[config.id]}
                onCheckedChange={() => onToggle(config.id)}
                className="border-teal data-[state=checked]:bg-teal"
              />
              <Label
                htmlFor={config.id}
                className="flex cursor-pointer items-center gap-2 font-normal"
              >
                <Icon className="text-apricot h-4 w-4" />
                <span>{config.label}</span>
              </Label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
