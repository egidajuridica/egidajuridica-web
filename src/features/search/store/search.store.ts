import { create } from 'zustand';
import { getSearchResults } from '../api/service';
import type { SearchItem } from '../api/types';

interface SearchState {
  query: string;
  results: SearchItem[];
  isLoading: boolean;
  error: string | null;
  
 setQuery: (query: string) => Promise<void>;
  clearSearch: () => void;
}

const useSearchStore = create<SearchState>((set) => ({
  query: '',
  results: [],
  isLoading: false,
  error: null,

  setQuery: async (query: string) => {
    set({ query, isLoading: true, error: null });

    if (query.trim().length < 3) {
      set({ results: [], isLoading: false });
      return;
    }

    try {
      const response = await getSearchResults(query);
      set({ results: response.docs, isLoading: false });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error desconocido';
      set({ error: msg, isLoading: false, results: [] });
    }
  },

  clearSearch: () => {
    set({ query: '', results: [], isLoading: false, error: null });
  },
}));

export { useSearchStore };