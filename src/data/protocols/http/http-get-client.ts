import { HttpResponse } from '@/data/protocols/http/http-response'

export type HttpGetParams = {
  url: string
  query?: any

}

export interface HttpGetClient {
  get: (params: HttpGetParams) => Promise<HttpResponse>
}
