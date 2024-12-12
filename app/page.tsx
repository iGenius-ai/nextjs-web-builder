'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTemplateGeneration } from '@/hooks/useTemplateGeneration'
import dynamic from 'next/dynamic'
import type { ComponentType, JSX } from 'react'
import type { TemplateComponent, TemplateResponse } from '@/hooks/useTemplateGeneration'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentMap: Record<TemplateComponent['type'], ComponentType<any>> = {
  Hero: dynamic(() => import('@/components/templates/Hero').then(mod => mod.Hero), { ssr: false }),
  Features: dynamic(() => import('@/components/templates/Features').then(mod => mod.Features), { ssr: false }),
  Navigation: dynamic(() => import('@/components/templates/Navigation').then(mod => mod.Navigation), { ssr: false }),
  Pricing: dynamic(() => import('@/components/templates/Pricing').then(mod => mod.Pricing), { ssr: false }),
  Testimonials: dynamic(() => import('@/components/templates/Testimonials').then(mod => mod.Testimonials), { ssr: false }),
  Blog: dynamic(() => import('@/components/templates/Blog').then(mod => mod.Blog), { ssr: false })
}

export default function Home(): JSX.Element {
  const [template, setTemplate] = useState<TemplateResponse | null>(null)
  const { generateTemplate, loading, error } = useTemplateGeneration()

  async function handleGenerate(): Promise<void> {
    const result = await generateTemplate({}) // Empty prompt will use defaults from template-api.ts
    if (result) setTemplate(result)
  }

  return (
    <main className="min-h-screen p-4">
      <div className="mb-8">
        <Button onClick={handleGenerate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Template'}
        </Button>
      </div>

      {error && <div className="text-red-500">{error}</div>}

      {template?.components.map((comp: TemplateComponent, index: number) => {
        const Component = componentMap[comp.type]
        return Component ? <Component key={index} {...comp.props} /> : null
      })}
    </main>
  )
}