// app/api/generate/route.js
import { TemplateAPI } from '@/lib/template-api'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const prompt = await request.json()
  
  try {
    const template = await TemplateAPI.generateTemplate(prompt)
    return NextResponse.json(template)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
