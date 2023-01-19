import HttpClient from './httpClient/HttpClient'

const baseUrl = process.env['REACT_APP_API_URL'] || 'http://localhost:3001'

class CategoryService {
  constructor() {
    this.httpClient = new HttpClient(baseUrl)
  }

  listCategories() {
    return this.httpClient.get('/categories')
  }

  getCategoryById(id) {
    return this.httpClient.get(`/categories/${id}`)
  }

  createCategory(data) {
    return this.httpClient.post('/categories', data)
  }

  editCategory(id, data) {
    return this.httpClient.put(`/categories/${id}`, data)
  }

  deleteCategory(id) {
    return this.httpClient.delete(`/categories/${id}`)
  }
}
export default new CategoryService()
