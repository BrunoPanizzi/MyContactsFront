import HttpClient from './httpClient/HttpClient'

class ContactService {
	constructor() {
		this.httpClient = new HttpClient('http://localhost:3001')
	}
	
	async listContacts() {
		return this.httpClient.get('/contacts')
	}

}
export default new ContactService()