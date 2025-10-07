import { Search, Type } from 'lucide-react'
import type { Category } from '@/features'

interface ContentSidebarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  categories: Category[]
  isLoadingCategories: boolean
  selectedCategoryId: string | null
  selectedTagId: string | null
  onCategoryClick: (id: string | null) => void
  onTagClick: (id: string | null) => void
  onClearFilters: () => void
}

const ContentSidebar = ({
  searchQuery,
  onSearchChange,
  categories,
  isLoadingCategories,
  selectedCategoryId,
  selectedTagId,
  onCategoryClick,
  onTagClick,
  onClearFilters,
}: ContentSidebarProps) => {
  return (
    <aside className="w-full bg-neutral-50">
      <div className="space-y-8 p-6">
        {/* --- SECCIÓN DE BÚSQUEDA --- */}
        <div>
          <h3 className="font-heading text-primary mb-4 text-xl font-semibold">Buscar</h3>
          <div className="relative">
            <Search className="text-neutral absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="border-neutral/20 text-primary placeholder:text-neutral/60 focus:border-primary focus:ring-primary/20 w-full border bg-white py-2.5 pl-10 pr-4 text-base focus:outline-none focus:ring-2"
            />
          </div>
          {searchQuery.length > 0 && searchQuery.trim().length < 3 && (
            <div className="text-neutral mt-2 flex items-center gap-2 text-sm">
              <Type className="h-4 w-4" />
              <span>Ingresa al menos 3 caracteres.</span>
            </div>
          )}
        </div>

        {/* --- SECCIÓN DE CATEGORÍAS --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-primary text-xl font-semibold">Categorías</h3>
            <button
              onClick={onClearFilters}
              className={`text-sm font-medium transition-colors ${
                selectedCategoryId === null && selectedTagId === null
                  ? 'text-primary underline'
                  : 'text-neutral/70 hover:text-primary'
              }`}
            >
              Ver Todas
            </button>
          </div>

          {isLoadingCategories ? (
            <p className="text-neutral text-sm">Cargando...</p>
          ) : (
            categories.map((category) => (
              <div key={category.id}>
                <button
                  onClick={() => onCategoryClick(category.id)}
                  className={`font-heading text-neutral mb-3 w-full text-left text-lg font-semibold transition-colors ${
                    selectedCategoryId === category.id ? 'text-primary' : 'hover:text-primary'
                  }`}
                >
                  {category.name}
                </button>

                {category.tags && category.tags.length > 0 && (
                  <ul className="list-inside list-disc space-y-2 pl-4 marker:text-gray-500">
                    {category.tags.map((tag) => (
                      <li key={tag.id}>
                        <button
                          onClick={() => onTagClick(tag.id)}
                          className={`inline-flex items-center text-left text-base transition-colors ${
                            selectedTagId === tag.id
                              ? 'text-primary font-semibold'
                              : 'text-neutral/80 hover:text-primary'
                          }`}
                        >
                          {tag.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </aside>
  )
}

export { ContentSidebar }
