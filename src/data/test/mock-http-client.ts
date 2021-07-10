import { HttpGetClient, HttpGetParams } from '@/data/protocols/http/http-get-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  query?: any
  response: HttpResponse = {
    status_code: HttpStatusCode.no_content
  }

  async get (params: HttpGetParams): Promise<HttpResponse> {
    this.url = params.url
    this.query = params.query
    return this.response
  }
}
