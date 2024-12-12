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
  <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Card key={post.id} className="group overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={500} 
                height={300} 
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              <Button 
                variant="outline"
                className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300"
              >
                Read More
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
)

export default Blog