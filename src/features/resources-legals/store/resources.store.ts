import { create } from 'zustand';
import { getLegalResources, getLegalCategories } from '../api/service';
import type { LegalResource, LegalResourcesApiResponse } from '../api/types';
import type { Category } from '@/features';

interface ResourcesState {
  resources: LegalResource[];
  pagination: Omit<LegalResourcesApiResponse, 'docs'> | null;
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  selectedCategoryId: string | null;
  selectedTagId: string | null;
  categories: Category[];
  isLoadingCategories: boolean;
  
  fetchResources: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (categoryId: string | null) => void;
  setSelectedTag: (tagId: string | null) => void;
  goToPage: (page: number) => void;
}

const useResourcesStore = create<ResourcesState>((set, get) => ({
  resources: [],
  pagination: null,
  isLoading: true,
  error: null,
  searchQuery: '',
  selectedCategoryId: null,
  selectedTagId: null,
  categories: [],
  isLoadingCategories: true,

  fetchResources: async () => {
    set({ isLoading: true, error: null });
    try {
      const { searchQuery, selectedCategoryId, selectedTagId, pagination } = get();
      const response = await getLegalResources({
        page: pagination?.page || 1,
        search: searchQuery,
        categoryId: selectedCategoryId,
        tagId: selectedTagId,
      });
      const { docs, ...paginationInfo } = response;
      set({ resources: docs, pagination: paginationInfo, isLoading: false });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error desconocido';
      set({ error: msg, isLoading: false, resources: [] });
    }
  },
  
  fetchCategories: async () => {
    set({ isLoadingCategories: true });
    try {
      const categoriesData = await getLegalCategories();
      set({ categories: categoriesData, isLoadingCategories: false });
    } catch (err) {
      set({ isLoadingCategories: false });
    }
  },
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query, selectedCategoryId: null, selectedTagId: null, pagination: { ...get().pagination, page: 1 } as any });
    if (query.trim().length >= 3 || query.length === 0) {
      get().fetchResources();
    }
  },

  setSelectedCategory: (categoryId: string | null) => {
    set({ selectedCategoryId: categoryId, selectedTagId: null, searchQuery: '', pagination: { ...get().pagination, page: 1 } as any });
    get().fetchResources();
  },

  setSelectedTag: (tagId: string | null) => {
    set({ selectedTagId: tagId, selectedCategoryId: null, searchQuery: '', pagination: { ...get().pagination, page: 1 } as any });
    get().fetchResources();
  },

  goToPage: (page: number) => {
    set(state => ({ pagination: { ...state.pagination, page } as any }));
    get().fetchResources();
  },
}));

export { useResourcesStore };