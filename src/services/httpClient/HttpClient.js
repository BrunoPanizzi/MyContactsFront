import ApiError from '../../errors/ApiError'

class HttpClient {
	constructor(baseUrl) {
		this.baseUrl = baseUrl
	}
	
	async get(path) {
		const response = await fetch(this.baseUrl + path)

		const contentType = response.headers.get('Content-Type')
		let body
		if (contentType.includes('application/json')) { 
			body = await response.json()
		}
		
		if (response.ok) return body
		
		throw new ApiError(body?.error || `${response.status} ${response.statusText}`)
	}
	
}

export default HttpClient