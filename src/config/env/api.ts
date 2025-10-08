const isBrowser = typeof window !== 'undefined'

export const API_CONFIG = {
  baseURL: import.meta.env.DEV
    ? isBrowser
      ? '/api'
      : import.meta.env.PUBLIC_API_URL || 'https://app.egidajuridica.com/api'
    : import.meta.env.PUBLIC_API_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
} as const


export const ENDPOINTS = {
  blog: '/blog',
  search: '/search-items',
  recursos: '/legal-resources',
  tags: '/tags',
  categories: '/categories',
  authors: '/authors',
  blogTags: '/blogTags',
  resourceTags: '/resourceTags',
} as const