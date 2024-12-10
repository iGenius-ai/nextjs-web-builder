// hooks/useTemplateGeneration.ts
import { useState } from 'react'

export interface TemplatePrompt {
  title?: string
  subtitle?: string
  cta?: string
  features?: Array<{
    title: string
    description: string
  }>
}

export interface TemplateComponent {
  type: 'Hero' | 'Features'
  props: Record<string, unknown>
}

export interface TemplateResponse {
  components: TemplateComponent[]
}

export function useTemplateGeneration() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function generateTemplate(prompt: TemplatePrompt): Promise<TemplateResponse | null> {
    setLoading(true)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(prompt)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      return data as TemplateResponse
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred'
      setError(errorMessage)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { generateTemplate, loading, error }
}