import { Label } from '@/components/ui/label'
import { Upload } from 'lucide-react'
import { useFileDrop } from '@/hooks/use-file-drop'

interface LogoUploadFieldProps {
  logoPreview: string | null
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function LogoUploadField({
  logoPreview,
  onUpload,
}: LogoUploadFieldProps) {
  const { isDragging, dragHandlers } = useFileDrop({
    onDrop: (file) => {
      // Create a synthetic event to match the expected type
      const dataTransfer = new DataTransfer()
      dataTransfer.items.add(file)

      const syntheticEvent = {
        target: {
          files: dataTransfer.files,
        },
      } as unknown as React.ChangeEvent<HTMLInputElement>
      onUpload(syntheticEvent)
    },
    accept: 'image/*',
  })

  return (
    <div className="space-y-2">
      <Label className="text-foreground text-base font-semibold">
        Logo Upload
      </Label>
      <div className="relative">
        <input
          type="file"
          id="logo"
          accept="image/*"
          onChange={onUpload}
          className="sr-only"
        />
        <div
          {...dragHandlers}
          className={`border-teal/40 hover:bg-teal/5 flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors ${
            isDragging ? 'bg-teal/10 border-teal' : ''
          }`}
        >
          <label
            htmlFor="logo"
            className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
          >
          {logoPreview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoPreview}
              alt="Logo preview"
              className="max-h-40 object-contain"
            />
          ) : (
            <div className="text-teal flex flex-col items-center gap-2">
              <Upload className="h-12 w-12" />
              <span className="text-sm font-medium">
                Click to upload or drag and drop
              </span>
              <span className="text-muted-foreground/70 text-xs">
                PNG, JPG or SVG (max. 2MB)
              </span>
            </div>
          )}
          </label>
        </div>
      </div>
    </div>
  )
}
