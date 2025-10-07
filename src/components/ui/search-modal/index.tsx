import React, { useEffect, useRef, useState } from 'react'
import { useSearch } from '@/features'
import { StateDisplay } from '@/components'
import { SearchResultItemCard } from '@/features'
import { Search as SearchIcon, X } from 'lucide-react'
import Input from '../input'

export const SearchModal = () => {
  const { searchTerm, setSearchTerm, results, isLoading, error, clearSearch } = useSearch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true)
      setTimeout(() => {
        modalRef.current?.querySelector('input')?.focus()
      }, 300)
    }
    window.addEventListener('openSearchModal', handleOpenModal)
    return () => window.removeEventListener('openSearchModal', handleOpenModal)
  }, [])

  useEffect(() => {
    if (isModalOpen) setIsVisible(true)
    else setIsVisible(false)
  }, [isModalOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const handleClose = () => {
    setIsModalOpen(false)
    setTimeout(() => {
      clearSearch()
      setSearchTerm('')
    }, 300)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose()
  }

  const handleClearInput = () => {
    setSearchTerm('')
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center bg-black/50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className={`mt-20 w-full max-w-2xl transform transition-all duration-300 ${isModalOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-4 scale-95 opacity-0'}`}
      >
        <div className="mx-4 overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="border-neutral/10 flex items-center justify-between border-b p-6">
            <h2 className="font-heading text-primary text-xl font-semibold">Buscar en el sitio</h2>
            <button onClick={handleClose} aria-label="Cerrar búsqueda">
              <X className="text-neutral hover:text-primary h-6 w-6" />
            </button>
          </div>

          <div className="p-6">
            <Input
              type="search"
              placeholder="Buscar artículos, especialidades, recursos..."
              variant="filled"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<SearchIcon className="h-4 w-4" />}
              rightIcon={
                searchTerm ? (
                  <button
                    type="button"
                    onClick={handleClearInput}
                    className="pointer-events-auto cursor-pointer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                ) : null
              }
              className="[&::-webkit-search-cancel-button]:appearance-none"
            />
          </div>

          {searchTerm.length > 0 && (
            <div className="border-neutral/10 border-t">
              <div className="max-h-[50vh] overflow-y-auto p-6">
                <StateDisplay
                  isLoading={isLoading}
                  error={error}
                  data={results}
                  messages={{
                    loading: 'Buscando...',
                    empty: `No hay resultados para "${searchTerm}"`,
                    error: 'Hubo un error al buscar.',
                  }}
                />
                {!isLoading && !error && results.length > 0 && (
                  <div className="space-y-2">
                    {results.map((item) => (
                      <SearchResultItemCard key={item.id} item={item} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          {searchTerm.length === 0 && (
            <div className="border-neutral/10 border-t p-6">
              <p className="text-neutral text-sm">
                Busca por especialidades, artículos del blog, recursos y más.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
