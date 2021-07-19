import axios, { AxiosResponse } from 'axios'

export enum HttpStatusCode {
  ok = 200,
  unauthorized = 401,
  notFound = 404
}

export type HttpResponse<T = any> = {
  status_code?: HttpStatusCode
  body?: T
}

export class AxiosHttpClient {
  async get (url: string, query: string): Promise<HttpResponse> {
    const API: string = `${process.env.MOVIE_API_URL as string}`
    const API_KEY: string = `${process.env.API_KEY as string}`
    const link = `${API + url}?api_key=${API_KEY}&${query}`

    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.get(link)
    } catch (error) {
      axiosResponse = error.response
    }

    return {
      status_code: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
