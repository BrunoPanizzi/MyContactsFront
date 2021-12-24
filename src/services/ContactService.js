import HttpClient from './httpClient/HttpClient'

class ContactService {
	constructor() {
		this.httpClient = new HttpClient('http://192.168.1.7:3001')
	}
	
	async listContacts() {
		return this.httpClient.get('/contacts')
	}

}
export default new ContactService()