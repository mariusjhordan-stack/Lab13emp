// Servicio central para consultar la API Django REST Framework.
// fetch se centraliza aquí para manejar HTTP y errores de forma uniforme.
const API = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8001/api'
async function request(path) {
  const response = await fetch(`${API}${path}`)
  if (!response.ok) throw new Error(`La solicitud falló (${response.status})`)
  return response.json()
}
export const getCategorias = () => request('/categorias/')
export const getProductos = (categoria = '') => request(`/productos/${categoria ? `?categoria=${categoria}` : ''}`)
