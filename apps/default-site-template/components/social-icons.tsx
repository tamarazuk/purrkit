'use client'

import { siteConfig } from '@/config/site'
import { FacebookIcon, InstagramIcon, XIcon } from '@/components/icons'
import { cva, type VariantProps } from 'class-variance-authority'

const iconContainerVariants = cva(
  'flex items-center justify-center rounded-full transition-colors',
  {
    variants: {
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const iconSizeVariants = cva('fill-current', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

interface SocialIconsProps extends VariantProps<typeof iconContainerVariants> {
  backgroundColorClass?: string
  iconColorClass?: string
  hoverBackgroundColorClass?: string
  hoverIconColorClass?: string
  layoutClass?: string
}

const SocialIcons = ({
  backgroundColorClass = 'bg-primary/10',
  iconColorClass = 'text-primary',
  hoverBackgroundColorClass = 'hover:bg-primary',
  hoverIconColorClass = 'hover:text-primary-foreground',
  size = 'lg',
  layoutClass = 'flex gap-4',
}: SocialIconsProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.remove(backgroundColorClass, iconColorClass)
    e.currentTarget.classList.add(
      hoverBackgroundColorClass,
      hoverIconColorClass
    )
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.classList.remove(
      hoverBackgroundColorClass,
      hoverIconColorClass
    )
    e.currentTarget.classList.add(backgroundColorClass, iconColorClass)
  }

  return (
    <div className={layoutClass}>
      {siteConfig.social.facebook && (
        <a
          href={siteConfig.social.facebook}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${iconContainerVariants({ size })} ${backgroundColorClass} ${iconColorClass}`}
          aria-label="Facebook"
        >
          <FacebookIcon className={iconSizeVariants({ size })} />
        </a>
      )}
      {siteConfig.social.instagram && (
        <a
          href={siteConfig.social.instagram}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${iconContainerVariants({ size })} ${backgroundColorClass} ${iconColorClass}`}
          aria-label="Instagram"
        >
          <InstagramIcon className={iconSizeVariants({ size })} />
        </a>
      )}
      {siteConfig.social.x && (
        <a
          href={siteConfig.social.x}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`${iconContainerVariants({ size })} ${backgroundColorClass} ${iconColorClass}`}
          aria-label="X"
        >
          <XIcon className={iconSizeVariants({ size })} />
        </a>
      )}
    </div>
  )
}

export default SocialIcons
