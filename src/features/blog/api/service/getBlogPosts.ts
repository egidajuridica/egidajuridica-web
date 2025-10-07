import apiClient from '@/services';
import { ENDPOINTS } from '@/config/env/api';
import type { BlogPostsApiResponse, Category } from '../types';

interface GetBlogPostsParams {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string | null;
  tagId?: string | null; 
}

// lista paginada - filtros
 
const getBlogPosts = async (params: GetBlogPostsParams = {}): Promise<BlogPostsApiResponse> => {
  try {
    const queryParams: Record<string, any> = {
      page: params.page || 1,
      limit: params.limit || 10,
      depth: 2,
    };

    const where: Record<string, any> = {};

    if (params.search && params.search.trim().length > 0) {
      where.title = { like: params.search.trim() };
    }

    if (params.categoryId) {
      where.category = { equals: params.categoryId };
    } else if (params.tagId) {
      where.tags = { in: [params.tagId] };
    }

    if (Object.keys(where).length > 0) {
      queryParams.where = where;
    }

    const response = await apiClient.get<BlogPostsApiResponse>(ENDPOINTS.blog, {
      params: queryParams,
    });
    return response.data;

  } catch (error) {
    throw new Error('No se pudieron obtener los datos del blog.');
  }
};

// Obtencion de categorías de 'blog' junto con sus tags anidados.
 
const getBlogCategories = async (): Promise<Category[]> => {
  try {
    const response = await apiClient.get<{ docs: Category[] }>(ENDPOINTS.categories, {
      params: {
        limit: 100,
        depth: 1, 
        where: {
          scope: {
            equals: 'blog',
          },
        },
      },
    });
    return response.data.docs;
  } catch (error) {
    throw new Error('No se pudieron obtener las categorías.');
  }
};

export { getBlogPosts, getBlogCategories };