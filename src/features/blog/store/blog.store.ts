import { create } from 'zustand';
import { getBlogPosts, getBlogCategories } from '../api/service';
import type { BlogPost, BlogPostsApiResponse, Category } from '../api/types';

interface BlogState {
  posts: BlogPost[];
  pagination: Omit<BlogPostsApiResponse, 'docs'> | null;
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategoryId: string | null; 
  selectedTagId: string | null;     
  categories: Category[];
  isLoadingCategories: boolean;
  recentPosts: BlogPost[];
  isLoadingRecent: boolean;
  fetchBlogPosts: () => Promise<void>;
  fetchRecentPosts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  setSelectedTag: (tagId: string | null) => void;
  goToPage: (page: number) => void;
}

const useBlogStore = create<BlogState>((set, get) => ({
  posts: [],
  pagination: null,
  isLoading: true,
  error: null,
  searchQuery: '',
  selectedCategoryId: null,
  selectedTagId: null,
  categories: [],
  isLoadingCategories: true,
  recentPosts: [],
  isLoadingRecent: true,


  fetchBlogPosts: async () => {
    set({ isLoading: true, error: null });
    try {
      const { searchQuery, selectedCategoryId, selectedTagId, pagination } = get();
      const response = await getBlogPosts({
        page: pagination?.page || 1,
        search: searchQuery,
        categoryId: selectedCategoryId,
        tagId: selectedTagId,
      });
      const { docs, ...paginationInfo } = response;
      set({ posts: docs, pagination: paginationInfo, isLoading: false });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error desconocido';
      set({ error: msg, isLoading: false, posts: [] });
    }
  },
  
  fetchRecentPosts: async () => {
    set({ isLoadingRecent: true });
    try {
      const response = await getBlogPosts({ limit: 3 });
      set({ recentPosts: response.docs, isLoadingRecent: false });
    } catch (err) {
      set({ isLoadingRecent: false });
    }
  },
  
  fetchCategories: async () => {
    set({ isLoadingCategories: true });
    try {
      const categoriesData = await getBlogCategories();
      set({ categories: categoriesData, isLoadingCategories: false });
    } catch (err) {
      set({ isLoadingCategories: false });
    }
  },
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query, selectedCategoryId: null, selectedTagId: null, pagination: { ...get().pagination, page: 1 } as any });
    if (query.trim().length >= 3 || query.length === 0) {
      get().fetchBlogPosts();
    }
  },

  setSelectedCategory: (categoryId: string | null) => {
    set({ selectedCategoryId: categoryId, selectedTagId: null, searchQuery: '', pagination: { ...get().pagination, page: 1 } as any });
    get().fetchBlogPosts();
  },

  setSelectedTag: (tagId: string | null) => {
    set({ selectedTagId: tagId, selectedCategoryId: null, searchQuery: '', pagination: { ...get().pagination, page: 1 } as any });
    get().fetchBlogPosts();
  },

  goToPage: (page: number) => {
    set(state => ({ pagination: { ...state.pagination, page } as any }));
    get().fetchBlogPosts();
  },
}));

export { useBlogStore };