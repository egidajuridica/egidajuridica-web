import apiClient from '@/services';
import { ENDPOINTS } from '@/config/env/api';
import type { SearchResultsApiResponse } from '../types';

const getSearchResults = async (query: string): Promise<SearchResultsApiResponse> => {
  try {
    const response = await apiClient.get<SearchResultsApiResponse>(ENDPOINTS.search, {
      params: {
        limit: 10, 
        depth: 2,  
        where: {
          or: [
            {
              title: { like: query },
            },
            {
              excerpt: { like: query },
            },
          ]
        },
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('No se pudieron obtener los resultados de la búsqueda.');
  }
};

export { getSearchResults };