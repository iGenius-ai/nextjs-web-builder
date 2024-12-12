// hooks/useTemplateGeneration.ts
import { useState } from 'react'

export interface TemplatePrompt {
  hero?: {
    title?: string
    subtitle?: string
    cta?: string
    backgroundImage?: string
  }
  features?: Array<{
    title: string
    description: string
    icon: string
  }>
  pricing?: Array<{
    title: string
    price: string
  }>
  testimonials?: Array<{
    author: string
    title: string
    content: string
  }>
  blog?: Array<{
    id: number  
    title: string
    excerpt: string
    image: string
  }>
  navigation?: {
    logo: string
    links: Array<{
      href: string
      text: string
    }>
    buttonText: string
  }
  contact?: {
    title: string
    fields: Array<{
      name: string
      label: string
      type: string
    }>
  }
  footer?: {
    columns: Array<{
      title: string
      links: Array<{
        text: string
        href: string
      }>
    }>
    social: Array<{
      platform: string
      href: string
      icon: string
    }>
    copyright: string
  }
}

export interface TemplateComponent {
  type: 'Hero' | 'Features' | 'Navigation' | 'Pricing' | 'Testimonials' | 'Blog'
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