import { TemplatePrompt, TemplateResponse } from '@/hooks/useTemplateGeneration'

export class TemplateAPI {
  static async generateTemplate(prompt: TemplatePrompt): Promise<TemplateResponse> {
    return {
      components: [
        {
          type: 'Navigation',
          props: prompt.navigation || {
            logo: 'AISite Builder',
            links: [
              { href: '#features', text: 'Features' },
              { href: '#pricing', text: 'Pricing' },
              { href: '#testimonials', text: 'Testimonials' }
            ],
            buttonText: 'Get Started'
          }
        },
        {
          type: 'Hero',
          props: prompt.hero || {
            title: 'Welcome',
            subtitle: 'Generated subtitle',
            buttonText: 'Learn More'
          }
        },
        {
          type: 'Features',
          props: {
            title: prompt.features?.[0]?.title || 'Features',
            subtitle: 'What we offer',
            items: prompt.features || [
              { title: 'Feature 1', description: 'Description 1', icon: '✨' },
              { title: 'Feature 2', description: 'Description 2', icon: '🚀' },
              { title: 'Feature 3', description: 'Description 3', icon: '💡' }
            ]
          }
        },
        {
          type: 'Pricing',
          props: {
            plans: prompt.pricing?.map(plan => ({
              name: plan.title,
              price: parseInt(plan.price),
              features: ['Feature 1', 'Feature 2'],
              buttonText: 'Get Started'
            })) || [
              { name: 'Basic', price: 10, features: ['Feature 1'], buttonText: 'Start' },
              { name: 'Pro', price: 20, features: ['Feature 1', 'Feature 2'], buttonText: 'Go Pro' }
            ]
          }
        },
        {
          type: 'Testimonials',
          props: {
            testimonials: prompt.testimonials || [
              {
                author: 'John Doe',
                title: 'CEO',
                content: 'This is an amazing product!'
              },
              {
                author: 'Jane Smith',
                title: 'Designer',
                content: 'The best tool I\'ve ever used.'
              }
            ]
          }
        },
        {
          type: 'Blog',
          props: {
            posts: prompt.blog || [
              {
                id: 1,
                title: 'Sample Blog Post',
                excerpt: 'This is a sample blog post excerpt.',
                image: '/blog/sample.jpg'
              },
              {
                id: 2,
                title: 'Another Blog Post',
                excerpt: 'This is another sample blog post excerpt.',
                image: '/blog/another.jpg'
              }
            ]
          }
        }
      ]
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static validateTemplate(template: TemplateResponse): boolean {
    // Implement validation logic
    return true
  }
}
