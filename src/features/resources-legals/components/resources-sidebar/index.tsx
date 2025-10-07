import { useEffect, useState } from 'react'
import { useLegalResources } from '../../hooks/useLegalResources'
import { useDebounce } from '@/features'
import { ContentSidebar } from '@/components'

export const ResourcesSidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategoryId,
    setSelectedCategory,
    selectedTagId,
    setSelectedTag,
    categories,
    isLoadingCategories,
  } = useLegalResources()

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

export default ResourcesSidebar
