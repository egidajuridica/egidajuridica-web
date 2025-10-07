import { useResourcesStore } from '../store/resources.store.ts';
import { useEffect } from 'react';

let isInitialLoad = true;

const useLegalResources = () => {
  const state = useResourcesStore();

  useEffect(() => {
    if (isInitialLoad) {
      state.fetchResources();
      state.fetchCategories();
      isInitialLoad = false;
    }
  }, []);

  return state;
};

export { useLegalResources };