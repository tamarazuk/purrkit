'use client'
import { type Header, type Footer } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

type NavItemCollection = {
  navItems?: Array<{
    link?: {
      label?: string | null
    } | null
  }> | null
}

export const createNavItemRowLabel = <T extends NavItemCollection>() => {
  const RowLabel: React.FC<RowLabelProps> = () => {
    const data = useRowLabel<NonNullable<T['navItems']>[number]>()

    const label = data?.data?.link?.label
      ? `Nav item ${data.rowNumber !== undefined ? data.rowNumber + 1 : ''}: ${data?.data?.link?.label}`
      : 'Row'

    return <div>{label}</div>
  }

  return RowLabel
}

// Specific exports for Header and Footer
export const HeaderRowLabel = createNavItemRowLabel<Header>()
export const FooterRowLabel = createNavItemRowLabel<Footer>()
