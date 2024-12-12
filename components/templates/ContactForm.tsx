import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { JSX } from 'react'

interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea' | 'tel'
}

interface ContactFormProps {
  title: string
  fields: FormField[]
}

export const ContactForm = ({ title, fields }: ContactFormProps): JSX.Element => {
  const [status] = useState<string>('')
  
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <Card className="max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
            {title}
          </h2>
          <form className="space-y-6">
            {fields.map((field) => (
              <div key={field.name} className="group">
                <label className="block text-sm font-medium mb-2 text-gray-700 group-focus-within:text-purple-600 transition-colors">
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                    rows={4}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  />
                )}
              </div>
            ))}
            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity text-white py-3">
              Send Message
            </Button>
          </form>
          {status && (
            <div className="mt-6 text-center p-4 rounded-lg bg-purple-50 text-purple-600">
              {status}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}