import HttpClient from './httpClient/HttpClient'
import ContactMapper from './mappers/ContactMapper'

const baseUrl = process.env['REACT_APP_API_URL'] || 'http://localhost:3001'

class ContactService {
  constructor() {
    this.httpClient = new HttpClient(baseUrl)
  }

  async listContacts() {
    const contacts = await this.httpClient.get('/contacts')
    return contacts.map(ContactMapper.toDomain)
  }

  async getContactById(id) {
    const contact = await this.httpClient.get(`/contacts/${id}`)
    return ContactMapper.toDomain(contact)
  }

  createContact(contact) {
    const data = ContactMapper.toPersistance(contact)
    return this.httpClient.post('/contacts', data)
  }

  editContact(id, contact) {
    const data = ContactMapper.toPersistance(contact)
    return this.httpClient.put(`/contacts/${id}`, data)
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`)
  }
}
export default new ContactService()
