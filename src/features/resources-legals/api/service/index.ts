import apiClient from '@/services';
import { ENDPOINTS } from '@/config/env/api';
import type { LegalResource, LegalResourcesApiResponse } from '../types';
import type { Category } from '@/features';

interface GetLegalResourcesParams {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string | null;
  tagId?: string | null; 
}

const getLegalResources = async (params: GetLegalResourcesParams = {}): Promise<LegalResourcesApiResponse> => {
  try {
    const queryParams: Record<string, any> = {
      page: params.page || 1,
      limit: params.limit || 10,
      depth: 2, 
    };
    const where: Record<string, any> = {};
    if (params.search) {
      where.titulo = { like: params.search }; 
    }
    if (params.categoryId) {
      where.category = { equals: params.categoryId };
    } else if (params.tagId) {
      where.tags = { in: [params.tagId] };
    }
    if (Object.keys(where).length > 0) {
      queryParams.where = where;
    }
    const response = await apiClient.get<LegalResourcesApiResponse>(ENDPOINTS.recursos, { params: queryParams });
    return response.data;
  } catch (error) {
    throw new Error('No se pudieron obtener los recursos legales.');
  }
};


const getLegalCategories = async (): Promise<Category[]> => {
  try {
    const response = await apiClient.get<{ docs: Category[] }>(ENDPOINTS.categories, {
      params: {
        limit: 100,
        depth: 1,
        where: { scope: { equals: 'legal' } },
      },
    });
    return response.data.docs;
  } catch (error) {
    throw new Error('No se pudieron obtener las categorías legales.');
  }
};

const getLegalResourceBySlug = async (slug: string): Promise<LegalResource | null> => {
  try {
    const response = await apiClient.get<LegalResourcesApiResponse>(ENDPOINTS.recursos, {
      params: {
        where: { slug: { equals: slug } },
        limit: 1,
        depth: 2, 
      },
    });

    const resource = response.data.docs[0];

    if (!resource || resource.tipo !== 'articulo') {
      return null;
    }

    return resource;
  } catch (error: any) {
    throw new Error('No se pudo obtener el dato del recurso legal.');
  }
};

export { getLegalResources, getLegalCategories, getLegalResourceBySlug };