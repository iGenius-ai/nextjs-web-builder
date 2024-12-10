// components/templates/Blog.jsx
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { JSX } from 'react'

interface Post {
  id: string | number
  title: string
  excerpt: string
  image: string
}

interface BlogProps {
  posts: Post[]
}

export const Blog = ({ posts }: BlogProps): JSX.Element => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
    {posts.map(post => (
      <Card key={post.id} className="overflow-hidden">
        <Image src={post.image} alt={post.title} width={500} height={500} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <Button variant="outline">Read More</Button>
        </div>
      </Card>
    ))}
  </div>
)

export default Blog