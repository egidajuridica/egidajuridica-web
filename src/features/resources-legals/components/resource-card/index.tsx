import { ContentCard } from '@/components/'
import type { LegalResource } from '../../api/types'

interface ResourceCardProps {
  resource: LegalResource
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
  return <ContentCard item={resource} basePath="/recursos" />
}
