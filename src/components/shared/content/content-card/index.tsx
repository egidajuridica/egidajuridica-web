import { Card, CardContent } from '@/components'
import { ArrowRight, Calendar, User, Download } from 'lucide-react'
import type { BlogPost } from '@/features'
import type { LegalResource } from '@/features'

type ContentItem = BlogPost | LegalResource

interface ContentCardProps {
  item: ContentItem
  basePath: string
}

interface DisplayTag {
  name: string
  isPrimary: boolean
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const ContentCard = ({ item, basePath }: ContentCardProps) => {
  const content = {
    title: 'titulo' in item ? item.titulo : item.title,
    excerpt: 'descripcion' in item ? item.descripcion : item.excerpt,
    image: 'imagenDestacada' in item ? item.imagenDestacada : item.image,
    publishedDate: 'fechaPublicacion' in item ? item.fechaPublicacion : item.publishedDate,
    author: 'author' in item ? item.author : undefined,
    slug: item.slug,
    category: item.category,
    tags: item.tags,
    type: 'tipo' in item ? item.tipo : 'articulo',
    downloadUrl: 'archivo' in item && item.archivo ? item.archivo.url : undefined,
  }

  const allTagsToRender: DisplayTag[] = []
  if (content.category) {
    allTagsToRender.push({ name: content.category.name, isPrimary: true })
  }
  if (content.tags && Array.isArray(content.tags)) {
    content.tags.forEach((tag) => {
      if (!allTagsToRender.some((t) => t.name === tag.name)) {
        allTagsToRender.push({ name: tag.name, isPrimary: false })
      }
    })
  }

  let linkHref: string | undefined
  let isDownload = false

  if (content.type === 'documento' && content.downloadUrl) {
    linkHref = content.downloadUrl
    isDownload = true
  } else if (content.slug) {
    linkHref = `${basePath}/${content.slug}`
  }

  const CardWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="group block h-full text-left no-underline">
      <Card hover className="flex h-full flex-col">
        {children}
      </Card>
    </div>
  )

  const cardInnerContent = (
    <>
      <div className="relative h-48 w-full overflow-hidden">
        {content.image?.url && (
          <img
            src={content.image.url}
            alt={content.image.alt}
            className="h-full w-full object-cover transition-transform duration-500"
            loading="lazy"
          />
        )}
        <div className="from-primary/20 absolute inset-0 bg-gradient-to-t to-transparent"></div>
      </div>

      {allTagsToRender.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 px-6 py-2">
          {allTagsToRender.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs font-medium ${
                tag.isPrimary ? 'bg-primary text-white' : 'bg-neutral/10 text-primary'
              }`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}

      <CardContent className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col space-y-3">
          <h3 className="font-heading text-primary group-hover:text-neutral mt-2 line-clamp-2 text-base font-bold leading-tight transition-colors">
            {content.title}
          </h3>

          <p className="text-neutral line-clamp-3 flex-grow text-sm leading-relaxed">
            {content.excerpt}
          </p>

          <div className="text-neutral/80 flex items-center gap-4 pt-2 text-xs">
            {content.author && (
              <div className="flex items-center gap-1.5">
                <User className="h-3 w-3" />
                <span>
                  {typeof content.author === 'object' && content.author !== null
                    ? content.author.nombre
                    : 'Autor Desconocido'}
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(content.publishedDate)}</span>
            </div>
          </div>
        </div>

        {linkHref && (
          <div className="pt-4">
            <div className="bg-primary group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90">
              {isDownload ? (
                <>
                  <span>Descargar</span>
                  <Download className="h-3 w-3" />
                </>
              ) : (
                <>
                  <span>Leer más</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </>
  )

  if (linkHref) {
    return (
      <a
        href={linkHref}
        target={isDownload ? '_blank' : '_self'}
        rel="noopener noreferrer"
        download={isDownload}
      >
        <CardWrapper>{cardInnerContent}</CardWrapper>
      </a>
    )
  }

  return <CardWrapper>{cardInnerContent}</CardWrapper>
}

export { ContentCard }
