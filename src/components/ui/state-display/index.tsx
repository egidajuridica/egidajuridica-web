import { SearchX } from 'lucide-react'
import React from 'react'

interface StateDisplayProps<T> {
  isLoading: boolean
  error: string | null
  data: T[] | undefined
  messages?: {
    loading?: string
    empty?: string
    error?: string
  }
}

const StatusWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-neutral flex flex-col items-center justify-center gap-4 text-center">
    {children}
  </div>
)

export const StateDisplay = <T,>({ isLoading, error, data, messages }: StateDisplayProps<T>) => {
  if (isLoading) {
    return <div className="bg-primary/10 h-[500px] w-full animate-pulse"></div>
  }

  if (error && (!data || data.length === 0)) {
    return (
      <StatusWrapper>
        <div className="flex w-full flex-col items-center justify-center gap-4 bg-rose-800/10 py-24">
          <div>
            <p className="font-heading text-lg font-bold text-rose-900">¡Oh, no! Algo salió mal</p>
            <p className="max-w-md text-base text-rose-900">{error}</p>
          </div>
        </div>
      </StatusWrapper>
    )
  }

  if (!data || data.length === 0) {
    return (
      <StatusWrapper>
        <SearchX className="text-neutral h-8 w-8" />
        <p className="text-lg">{messages?.empty || 'No se encontraron resultados.'}</p>
      </StatusWrapper>
    )
  }

  return null
}

export default StateDisplay
