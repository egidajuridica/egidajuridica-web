import type { RichTextContent } from '@/types/content.types';
export interface Tag {
  id: string;
  name: string;
  slug: string;
  type: 'blog' | 'resource';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  scope: 'blog' | 'legal';
  tags?: Tag[];
  createdAt: string;
  updatedAt: string;
}

export interface Author {
  id: string;
  nombre: string;
  createdAt: string;
  updatedAt: string;
}

export interface ImageSize {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

export interface Image {
  id: string;
  alt: string;
  url: string;
  thumbnailURL?: string;
  sizes: {
    thumbnail: ImageSize;
    card: ImageSize;
    tablet: ImageSize;
  };
  createdAt: string;
  updatedAt: string;
}
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: Author; 
  category: Category;
  tags: Tag[];
  image: Image;
  content: RichTextContent;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPostsApiResponse {
  docs: BlogPost[];
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