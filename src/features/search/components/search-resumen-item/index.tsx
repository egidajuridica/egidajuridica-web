import { Card } from '@/components'
import type { SearchItem } from '../../api/types'

interface SearchResultItemProps {
  item: SearchItem
}

const typeToLabelMap: Record<string, string> = {
  area: 'Área de Práctica',
  blog: 'Artículo de Blog',
  recurso: 'Recurso Legal',
}

const SearchResultItemCard = ({ item }: SearchResultItemProps) => {
  const label = typeToLabelMap[item.type.name] || 'Contenido'

  return (
    <a href={item.url} className="block text-left no-underline">
      <Card
        variant="ghost"
        padding="md"
        hover={true}
        className="hover:border-primary/20 hover:bg-neutral/10 border-transparent transition-colors"
      >
        <div className="flex flex-col">
          <span className="bg-primary/80 mb-2 inline-block self-start rounded-sm px-3 py-1 text-xs font-semibold text-white">
            {label}
          </span>
          <h4 className="font-heading text-primary text-base font-semibold">{item.title}</h4>
          <p className="text-neutral mt-1 line-clamp-2 text-sm">{item.excerpt}</p>

          {item.tags && item.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-neutral-200 px-2 py-1 text-xs font-medium text-neutral-600"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </a>
  )
}

export { SearchResultItemCard }
