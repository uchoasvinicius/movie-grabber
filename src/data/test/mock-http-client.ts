import { HttpGetClient, HttpGetParams } from '../protocols/http/http-get-client'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  query?: any
  async get (params: HttpGetParams): Promise<void> {
    this.url = params.url
    this.query = params.query
    return Promise.resolve()
  }
}
