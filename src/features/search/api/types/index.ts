export interface SearchItemType {
  id: string;
  name: string; 
}

export interface SearchTag {
  id: string;
  name: string;
  slug: string;
  type: 'search';
}

export interface SearchItem {
  id: string;
  type: SearchItemType;
  title: string;
  excerpt: string;
  url: string;
  tags: SearchTag[];
  priority: number;
  isActive: boolean;
}

export interface SearchResultsApiResponse {
  docs: SearchItem[];
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