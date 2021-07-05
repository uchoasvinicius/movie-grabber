export type HttpGetParams = {
  url: string
  query?: any
}

export interface HttpGetClient {
  get: (params: HttpGetParams) => Promise<void>
}
