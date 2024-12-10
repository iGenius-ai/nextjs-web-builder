'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTemplateGeneration } from '@/hooks/useTemplateGeneration'
import dynamic from 'next/dynamic'
import type { ComponentType, JSX } from 'react'
import type { TemplateResponse, TemplatePrompt, TemplateComponent } from '@/hooks/useTemplateGeneration'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const componentMap: Record<TemplateComponent['type'], ComponentType<any>> = {
  Hero: dynamic(() => import('@/components/templates/Hero').then(mod => mod.Hero), { ssr: false }),
  Features: dynamic(() => import('@/components/templates/Features').then(mod => mod.Features), { ssr: false })
}

export default function Home(): JSX.Element {
  const [template, setTemplate] = useState<TemplateResponse | null>(null)
  const { generateTemplate, loading, error } = useTemplateGeneration()

  async function handleGenerate(): Promise<void> {
    const prompt: TemplatePrompt = {
      title: 'My Website',
      subtitle: 'Built with AI',
      cta: 'Get Started',
      features: [
        { title: 'AI-Powered', description: 'Smart templates' },
        { title: 'Responsive', description: 'Works everywhere' },
        { title: 'Fast', description: 'Lightning quick' }
      ]
    }

    const result = await generateTemplate(prompt)
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