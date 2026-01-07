"use client"

import { useState } from 'react'

type SeedState = 'idle' | 'loading' | 'success' | 'error'

export const TemplateSeedClient = () => {
  const [state, setState] = useState<SeedState>('idle')
  const [message, setMessage] = useState<string>('')

  const seedDatabase = async () => {
    if (state === 'loading') {
      return
    }

    setState('loading')
    setMessage('')

    try {
      const res = await fetch('/api/seed', { method: 'POST' })
      const body = (await res.json()) as { message?: string }

      if (!res.ok) {
        setState('error')
        setMessage(body.message || 'Seed failed. Please check the server logs.')
        return
      }

      setState('success')
      setMessage('Seed completed. Reloading the admin...')
      window.location.href = '/admin'
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Seed failed.'
      setState('error')
      setMessage(errorMessage)
    }
  }

  return (
    <div className="login-fields">
      <button
        type="button"
        className="btn btn--style-primary btn--size-medium btn--no-margin"
        onClick={seedDatabase}
        disabled={state === 'loading'}
      >
        {state === 'loading' ? 'Seeding…' : 'Seed demo database'}
      </button>
      {message ? (
        <div
          className={`banner ${
            state === 'error'
              ? 'banner--type-error'
              : state === 'success'
                ? 'banner--type-success'
                : 'banner--type-default'
          }`}
        >
          {message}
        </div>
      ) : null}
    </div>
  )
}
