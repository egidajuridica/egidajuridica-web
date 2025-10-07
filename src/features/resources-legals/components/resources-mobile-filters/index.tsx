import React, { useEffect, useState } from 'react'
import { useLegalResources } from '../../hooks/useLegalResources'
import { useDebounce } from '@/features'
import { Input } from '@/components'
import { Search, Type } from 'lucide-react'

export const ResourcesMobileFilters = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategoryId,
    setSelectedCategory,
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

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocalQuery('')
    setSelectedCategory(e.target.value || null)
  }

  return (
    <section className="bg-white py-8 lg:hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div>
            <Input
              type="search"
              placeholder="Buscar recursos..."
              icon={<Search />}
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
            />
            {localQuery.length > 0 && localQuery.trim().length < 3 && (
              <div className="text-neutral mt-2 flex items-center gap-2 text-sm">
                <Type className="h-4 w-4" />
                <span>Ingresa al menos 3 caracteres.</span>
              </div>
            )}
          </div>
          <select
            value={selectedCategoryId || ''}
            onChange={handleCategoryChange}
            className="border-neutral/20 text-primary focus:border-primary focus:ring-primary/20 w-full border bg-white px-4 py-2.5 text-base focus:outline-none focus:ring-2"
            disabled={isLoadingCategories}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )
}

export default ResourcesMobileFilters
