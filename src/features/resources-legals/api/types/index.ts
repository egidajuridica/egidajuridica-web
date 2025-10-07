import type { RichTextContent } from '@/types/content.types';
import type { Category, Image, Tag } from '@/features';

export interface Archivo {
  id: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
}

export interface LegalResource {
  id: string;
  tipo: 'articulo' | 'documento';
  titulo: string;
  slug: string; 
  descripcion: string;
  category: Category;
  tags: Tag[];
  imagenDestacada: Image;
  contenido?: RichTextContent; 
  archivo?: Archivo;          
  fechaPublicacion: string;
}

export interface LegalResourcesApiResponse {
  docs: LegalResource[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}