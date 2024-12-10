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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<string>('')
  
  return (
    <Card className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <form className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                className="w-full p-2 border rounded"
                rows={4}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                className="w-full p-2 border rounded"
              />
            )}
          </div>
        ))}
        <Button className="w-full">Submit</Button>
      </form>
      {status && <div className="mt-4 text-center">{status}</div>}
    </Card>
  )
}