import apiClient from '@/services';
import { ENDPOINTS } from '@/config/env/api';
import type { BlogPost, BlogPostsApiResponse, Author } from '../types';

const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const listResponse = await apiClient.get<BlogPostsApiResponse>(ENDPOINTS.blog, {
      params: { where: { slug: { equals: slug } }, limit: 1, depth: 0 },
    });

    const postFromList = listResponse.data.docs[0];
    if (!postFromList) return null;
    const { id } = postFromList;
    const detailResponse = await apiClient.get<BlogPost>(`${ENDPOINTS.blog}/${id}`);
    const post = detailResponse.data;

    if (post && typeof post.author === 'string') {
      const authorId = post.author;
      const authorResponse = await apiClient.get<Author>(`${ENDPOINTS.authors}/${authorId}`);
      post.author = authorResponse.data;
    }

    return post;

  } catch (error: any) {
    throw new Error('No se pudo obtener el dato del post.');
  }
}
export { getBlogPostBySlug };