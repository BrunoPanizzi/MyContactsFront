import HttpClient from './httpClient/HttpClient'

class CategoryService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
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
