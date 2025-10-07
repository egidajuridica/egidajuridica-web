/*import { useEffect } from 'react'
import { ArrowRight, AlertCircle } from 'lucide-react'
import { useBlog } from '@/features/blog/hooks'
import { RecentPostCard } from '../recent-post-card'
import { ROUTES } from '@/config/routes'
import type { BlogPost } from '@/features/blog/api'

const PostSkeleton = () => (
  <div className="flex h-full animate-pulse flex-col">
    <div className="mb-6 h-80 w-full bg-gray-700"></div>
    <div className="flex-1 space-y-4">
      <div className="h-4 w-1/4 bg-gray-700"></div>
      <div className="space-y-2">
        <div className="h-6 w-full bg-gray-700"></div>
        <div className="h-6 w-5/6 bg-gray-700"></div>
      </div>
      <div className="h-px w-full bg-gray-700"></div>
      <div className="h-4 w-1/3 bg-gray-700"></div>
    </div>
  </div>
)

export const RecentPost = () => {
  const { recentPosts, isLoadingRecent, fetchRecentPosts, error } = useBlog()

  useEffect(() => {
    if (recentPosts.length === 0) {
      fetchRecentPosts()
    }
  }, [fetchRecentPosts, recentPosts.length])

  const hasError = !isLoadingRecent && recentPosts.length === 0 && error
  if (!isLoadingRecent && recentPosts.length === 0 && !hasError) return null

  return (
    <section className="bg-primary relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section }
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="mb-6 inline-flex items-center bg-black px-4 py-2">
              <span className="text-sm font-medium uppercase tracking-wide text-white">BLOG</span>
            </div>
            <h2 className="font-heading mb-4 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              Últimos artículos
            </h2>
          </div>
          <div className="flex items-end justify-end">
            <a
              href={ROUTES.blog}
              className="group flex items-center gap-2 bg-white px-4 py-2 font-medium text-black transition-colors hover:opacity-80"
            >
              <span>Ver más</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Articles Grid }
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoadingRecent ? (
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          ) : hasError ? (
            <div className="md:col-span-2 lg:col-span-3">
              <div className="flex flex-col items-center gap-2 text-center text-white">
                <AlertCircle className="h-8 w-8 text-yellow-400" />
                <p>No se pudieron cargar los artículos recientes.</p>
              </div>
            </div>
          ) : (
            recentPosts.map((post: BlogPost) => <RecentPostCard key={post.id} post={post} />)
          )}
        </div>
      </div>
    </section>
  )
}

export default RecentPost
*/
