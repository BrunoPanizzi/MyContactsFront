import HttpClient from './httpClient/HttpClient'

class ContactService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }

  listContacts() {
    return this.httpClient.get('/contacts')
  }

  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`)
  }

  createContact(data) {
    return this.httpClient.post('/contacts', data)
  }

  deleteContact(id) {
    return this.httpClient.delete('/contacts/' + id)
  }
}
export default new ContactService()
