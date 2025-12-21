'use client'

import { GeneratorLayout } from '@/components/generator/layout/generator-layout'
import { WebsiteGeneratorForm } from '@/components/generator/forms/website-generator-form'
import { SuccessScreen } from '@/components/generator/views/success-screen'
import { useGeneratorForm } from '@/hooks/use-generator-form'
import { useLogoUpload } from '@/hooks/use-logo-upload'
import { useFormSubmission } from '@/hooks/use-form-submission'
import { PawPrint } from 'lucide-react'

export default function Home() {
  const form = useGeneratorForm()
  const logo = useLogoUpload()
  const submission = useFormSubmission()

  if (submission.isSuccess) {
    return (
      <GeneratorLayout>
        <SuccessScreen
          rescueName={form.formData.rescueName}
          onReset={() => {
            submission.reset()
            form.resetForm()
            logo.clearLogo((file) => form.updateField('logo', file))
          }}
        />
      </GeneratorLayout>
    )
  }

  return (
    <GeneratorLayout>
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <PawPrint className="text-teal h-8 w-8" />
          <h1 className="text-foreground text-4xl font-bold text-balance md:text-5xl">
            PurrKit Generator
          </h1>
        </div>
        <p className="text-teal mb-2 text-xl font-medium md:text-2xl">
          Create your rescue`&apos;s website in minutes
        </p>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-pretty">
          Fill out a few details, and we&apos;ll generate your custom website
        </p>
      </header>

      <WebsiteGeneratorForm form={form} logo={logo} submission={submission} />

      <footer>
        <p className="text-muted-foreground/80 mt-8 text-center text-sm">
          No technical skills required. Your website will be ready in seconds!
          🐾
        </p>
      </footer>
    </GeneratorLayout>
  )
}
