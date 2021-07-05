import { HttpGetClient } from '../../protocols/http/http-get-client'
import { SearchMovieParams } from '../../../domain/usecases/search-movie'

export class RemoteSearchMovie {
  constructor (private readonly url: string, private readonly httpGetClient: HttpGetClient) {}
  async search (params: SearchMovieParams): Promise<void> {
    await this.httpGetClient.get({
      url: this.url,
      query: params
    })
  }
}
