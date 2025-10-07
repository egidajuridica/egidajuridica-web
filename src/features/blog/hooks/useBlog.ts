import { useBlogStore } from '../store/blog.store';
import { useEffect } from 'react';

let isInitialLoad = true;

const useBlog = () => {
  const state = useBlogStore();

  useEffect(() => {
    if (isInitialLoad) {
      state.fetchBlogPosts();
      state.fetchCategories();
      isInitialLoad = false;
    }
  }, []);

  return state;
};

export { useBlog };