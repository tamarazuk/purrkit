import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface SuccessScreenProps {
  rescueName: string
  onReset: () => void
}

export function SuccessScreen({ rescueName, onReset }: SuccessScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="border-teal/20 dark:bg-slate-900/90 w-full max-w-2xl bg-white/90 p-12 text-center shadow-xl backdrop-blur-sm">
        <div className="mb-6 flex justify-center">
          <div className="bg-teal/10 rounded-full p-6">
            <CheckCircle2 className="text-teal h-16 w-16" />
          </div>
        </div>
        <h1 className="text-foreground mb-4 text-4xl font-bold text-balance">
          Your website is ready!
        </h1>
        <p className="text-muted-foreground mb-8 text-lg text-pretty">
          We've created a beautiful website for {rescueName}. It's ready to help
          cats find their forever homes.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-teal hover:bg-teal/90 text-white">
            View Website
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onReset}
            className="border-teal text-teal hover:bg-teal/5"
          >
            Create Another
          </Button>
        </div>
      </Card>
    </div>
  )
}
