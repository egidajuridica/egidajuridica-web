import { useEffect, useState } from 'react'
import { useBlog } from '../../hooks'
import { useDebounce } from '@/features'
import { ContentSidebar } from '@/components'

export const BlogSidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategoryId,
    setSelectedCategory,
    selectedTagId,
    setSelectedTag,
    categories,
    isLoadingCategories,
  } = useBlog()

  const [localQuery, setLocalQuery] = useState(searchQuery)
  const debouncedQuery = useDebounce(localQuery, 500)

  useEffect(() => {
    setLocalQuery(searchQuery)
  }, [searchQuery])
  useEffect(() => {
    setSearchQuery(debouncedQuery)
  }, [debouncedQuery, setSearchQuery])

  const handleClearFilters = () => {
    setLocalQuery('')
    setSelectedCategory(null)
  }

  return (
    <ContentSidebar
      searchQuery={localQuery}
      onSearchChange={setLocalQuery}
      categories={categories}
      isLoadingCategories={isLoadingCategories}
      selectedCategoryId={selectedCategoryId}
      selectedTagId={selectedTagId}
      onCategoryClick={setSelectedCategory}
      onTagClick={setSelectedTag}
      onClearFilters={handleClearFilters}
    />
  )
}

export default BlogSidebar
