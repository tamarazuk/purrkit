import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { LogoUploadField } from '@/components/generator/forms/logo-upload-field'
import { SectionCheckboxes } from '@/components/generator/forms/section-checkboxes'
import { Heart, FileText, Loader2, Sparkles } from 'lucide-react'
import { useColorExtraction } from '@/hooks/use-color-extraction'
import type { useGeneratorForm } from '@/hooks/use-generator-form'
import type { useLogoUpload } from '@/hooks/use-logo-upload'
import type { useFormSubmission } from '@/hooks/use-form-submission'

interface WebsiteGeneratorFormProps {
  form: ReturnType<typeof useGeneratorForm>
  logo: ReturnType<typeof useLogoUpload>
  submission: ReturnType<typeof useFormSubmission>
}

export function WebsiteGeneratorForm({
  form,
  logo,
  submission,
}: WebsiteGeneratorFormProps) {
  const { extractColors, isExtracting } = useColorExtraction()

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      logo.handleUpload(file, (file) => form.updateField('logo', file))
    }
  }

  const handleExtractColors = async () => {
    if (!logo.logoPreview) return

    const colors = await extractColors(logo.logoPreview)
    if (colors) {
      form.updateField('primaryColor', colors.primary)
      form.updateField('secondaryColor', colors.secondary)
    }
  }

  return (
    <form onSubmit={(e) => submission.handleSubmit(e, form.formData)}>
      <Card className="border-teal/20 bg-white/90 p-6 shadow-xl backdrop-blur-sm md:p-8 dark:bg-slate-900/90">
        <div className="space-y-8">
          {/* Rescue Name */}
          <div className="space-y-2">
            <Label
              htmlFor="rescueName"
              className="text-foreground text-base font-semibold"
            >
              Rescue Name
            </Label>
            <Input
              id="rescueName"
              value={form.formData.rescueName}
              onChange={(e) => form.updateField('rescueName', e.target.value)}
              placeholder="e.g., Whisker Haven Rescue"
              required
              className="border-teal/30 focus-visible:ring-teal h-12"
            />
          </div>

          {/* Logo Upload */}
          <LogoUploadField
            logoPreview={logo.logoPreview}
            onUpload={handleLogoUpload}
          />

          {/* Color Extraction Button */}
          <div className="flex justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleExtractColors}
              disabled={!logo.logoPreview || isExtracting}
              className="border-teal text-teal hover:bg-teal/5 bg-transparent"
            >
              {isExtracting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Extracting Colors...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Extract Colors from Logo
                </>
              )}
            </Button>
          </div>

          {/* Primary Color */}
          <div className="space-y-2">
            <Label
              htmlFor="primaryColor"
              className="text-foreground text-base font-semibold"
            >
              Primary Color
            </Label>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="color"
                  id="primaryColor"
                  value={form.formData.primaryColor}
                  onChange={(e) =>
                    form.updateField('primaryColor', e.target.value)
                  }
                  className="border-teal/30 h-12 w-20 cursor-pointer rounded-lg border-2"
                />
              </div>
              <Input
                value={form.formData.primaryColor}
                onChange={(e) =>
                  form.updateField('primaryColor', e.target.value)
                }
                className="border-teal/30 focus-visible:ring-teal h-12 flex-1"
              />
            </div>
          </div>

          {/* Secondary Color */}
          <div className="space-y-2">
            <Label
              htmlFor="secondaryColor"
              className="text-foreground text-base font-semibold"
            >
              Secondary Color
            </Label>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="color"
                  id="secondaryColor"
                  value={form.formData.secondaryColor}
                  onChange={(e) =>
                    form.updateField('secondaryColor', e.target.value)
                  }
                  className="border-teal/30 h-12 w-20 cursor-pointer rounded-lg border-2"
                />
              </div>
              <Input
                value={form.formData.secondaryColor}
                onChange={(e) =>
                  form.updateField('secondaryColor', e.target.value)
                }
                className="border-teal/30 focus-visible:ring-teal h-12 flex-1"
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-2">
            <Label
              htmlFor="tagline"
              className="text-foreground text-base font-semibold"
            >
              Website Tagline
            </Label>
            <Input
              id="tagline"
              value={form.formData.tagline}
              onChange={(e) => form.updateField('tagline', e.target.value)}
              placeholder="e.g., Giving cats a second chance"
              className="border-teal/30 focus-visible:ring-teal h-12"
            />
          </div>

          {/* Rescue Description */}
          <div className="space-y-2">
            <Label
              htmlFor="rescueDescription"
              className="text-foreground text-base font-semibold"
            >
              About Your Rescue
            </Label>
            <Textarea
              id="rescueDescription"
              value={form.formData.rescueDescription}
              onChange={(e) =>
                form.updateField('rescueDescription', e.target.value)
              }
              placeholder="Tell us about your rescue organization... Share your mission, how you got started, what makes your rescue special, and the impact you've made in the community. This will help us create personalized content for your website."
              className="border-teal/30 focus-visible:ring-teal min-h-40 resize-y"
              rows={6}
            />
            <p className="text-muted-foreground text-sm">
              Write 2-5 paragraphs about your rescue. This information will be
              used to generate compelling, personalized content for your
              website.
            </p>
          </div>

          {/* Sections */}
          <SectionCheckboxes
            sections={form.formData.sections}
            onToggle={form.updateSection}
          />

          {/* Feature Toggles */}
          <div className="space-y-4">
            <div className="border-teal/20 hover:bg-teal/5 flex items-center justify-between rounded-lg border p-4 transition-colors">
              <div className="flex items-center gap-3">
                <Heart className="text-apricot h-5 w-5" />
                <Label
                  htmlFor="donations"
                  className="text-foreground cursor-pointer font-medium"
                >
                  Enable donation form
                </Label>
              </div>
              <Switch
                id="donations"
                checked={form.formData.enableDonations}
                onCheckedChange={(checked) =>
                  form.updateField('enableDonations', checked)
                }
                className="data-[state=checked]:bg-teal"
              />
            </div>

            <div className="border-teal/20 hover:bg-teal/5 flex items-center justify-between rounded-lg border p-4 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="text-apricot h-5 w-5" />
                <Label
                  htmlFor="adoptionApp"
                  className="text-foreground cursor-pointer font-medium"
                >
                  Enable adoption application
                </Label>
              </div>
              <Switch
                id="adoptionApp"
                checked={form.formData.enableAdoptionApp}
                onCheckedChange={(checked) =>
                  form.updateField('enableAdoptionApp', checked)
                }
                className="data-[state=checked]:bg-teal"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="border-teal/20 mt-8 border-t pt-6">
          <Button
            type="submit"
            size="lg"
            disabled={submission.isGenerating}
            className="bg-teal hover:bg-teal/90 shadow-teal/20 h-14 w-full text-lg text-white shadow-lg transition-all"
          >
            {submission.isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Creating your website...
              </>
            ) : (
              'Generate My Website'
            )}
          </Button>
        </div>
      </Card>
    </form>
  )
}
