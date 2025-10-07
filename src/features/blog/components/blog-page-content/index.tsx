import { useBlog } from '../../hooks'
import { BlogPostCard } from '../blog-post-card'
import { BlogSidebar } from '../blog-sidebar'
import { BlogMobileFilters } from '../blog-mobile-filters'
import { Pagination, StateDisplay } from '@/components'

const BlogPageContent = () => {
  const { posts, pagination, isLoading, error, goToPage } = useBlog()

  return (
    <>
      <BlogMobileFilters />
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <StateDisplay
                isLoading={isLoading}
                error={error}
                data={posts}
                messages={{
                  loading: 'Cargando artículos...',
                  empty: 'No se encontraron artículos que coincidan con tu búsqueda.',
                }}
              />
              {!isLoading && posts.length > 0 && (
                <>
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {posts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                  {pagination && pagination.totalPages > 1 && (
                    <div className="mt-12 flex justify-center">
                      <Pagination
                        currentPage={pagination.page}
                        totalPages={pagination.totalPages}
                        onPageChange={goToPage}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="hidden lg:col-span-4 lg:block">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPageContent
