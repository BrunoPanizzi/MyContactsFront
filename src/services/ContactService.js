import HttpClient from './httpClient/HttpClient'
import ContactMapper from './mappers/ContactMapper'

import sleep from '../utils/sleep'

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

  async deleteContact(id) {
    const response = await Promise.allSettled([
      this.httpClient.delete(`/contacts/${id}`),
      sleep(800),
    ])
    return response[0]
  }
}
export default new ContactService()
