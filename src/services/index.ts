import { API_CONFIG } from '@/config/env/api'
import axios from 'axios'

if (!API_CONFIG.baseURL) {
  throw new Error('La variable de entorno PUBLIC_API_BASE_URL no está definida.')
}

const apiClient = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiClient
