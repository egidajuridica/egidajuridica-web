import { ContentCard } from '@/components'
import type { BlogPost } from '../../api'

interface BlogPostCardProps {
  post: BlogPost
}

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return <ContentCard item={post} basePath="/blog" />
}
