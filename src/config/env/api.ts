const isBrowser = typeof window !== 'undefined'

export const API_CONFIG = {
  baseURL: import.meta.env.PUBLIC_API_URL,
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
  blogTags: '/blogTags',
  resourceTags: '/resourceTags',
  contact: '/contact',
} as const
