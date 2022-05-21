import HttpClient from './httpClient/HttpClient'

class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }

  async listContacts() {
    return this.httpClient.get('/contacts')
  }

  async createContact(data) {
    return this.httpClient.post('/contacts', data)
  }
}
export default new ContactService()
