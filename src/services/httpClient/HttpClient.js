import ApiError from '../../errors/ApiError'

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  async get(path) {
    return this.makeRequest(path, { method: 'GET' })
  }

  async post(path, data) {
    return this.makeRequest(path, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
  }

  async delete(path) {
    return this.makeRequest(path, {
      method: 'DELETE',
    })
  }

  async makeRequest(path, options) {
    const response = await fetch(this.baseUrl + path, options)

    const contentType = response.headers.get('Content-Type')

    let body
    if (contentType?.includes('application/json')) {
      body = await response.json()
      console.log(body)
    }

    if (response.ok) return body

    throw new ApiError(
      body?.error || `${response.status} ${response.statusText}`
    )
  }
}

export default HttpClient
