import { useSearchStore } from '../store/search.store';
import { useDebounce } from './useDebounce'; 
import { useEffect, useState } from 'react';

const useSearch = () => {
  const { query, results, isLoading, error, setQuery, clearSearch } = useSearchStore();
  
  const [searchTerm, setSearchTerm] = useState(query);
  const debouncedSearchTerm = useDebounce(searchTerm, 400); 

  useEffect(() => {
    setQuery(debouncedSearchTerm);
  }, [debouncedSearchTerm, setQuery]);

  return {
    searchTerm,
    setSearchTerm,
    results,
    isLoading,
    error,
    clearSearch,
  };
};

export { useSearch };