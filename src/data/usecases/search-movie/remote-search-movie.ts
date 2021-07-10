import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { SearchMovieParams } from '@/domain/usecases/search-movie'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidTokenError } from '@/domain/errors/invalid-credentials-error'

export class RemoteSearchMovie {
  constructor (private readonly url: string, private readonly httpGetClient: HttpGetClient) {}
  async search (params: SearchMovieParams): Promise<void> {
    const httpResponse = await this.httpGetClient.get({
      url: this.url,
      query: params
    })

    switch (httpResponse.status_code) {
      case HttpStatusCode.unauthorized: throw new InvalidTokenError()
      default: return Promise.resolve()
    }
  }
}
