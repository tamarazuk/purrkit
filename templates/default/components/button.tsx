import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5',
    accent: 'bg-secondary text-white hover:bg-secondary/90 shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5 bg-transparent',
    ghost: 'hover:bg-muted hover:text-foreground'
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-6 py-2 text-sm',
    lg: 'h-14 px-10 text-base'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Link variant for anchor tags
export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href: string;
  children: React.ReactNode;
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  children,
  ...props
}: ButtonLinkProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 active:scale-95';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5',
    accent: 'bg-secondary text-white hover:bg-secondary/90 shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5 bg-transparent',
    ghost: 'hover:bg-muted hover:text-foreground'
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-11 px-6 py-2 text-sm',
    lg: 'h-14 px-10 text-base'
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
