import { HttpGetClient } from '../../protocols/http/http-get-client'

export class RemoteDiscoverMovies {
  constructor (private readonly url: string, private readonly httpGetClient: HttpGetClient) {}
  async list (): Promise<void> {
    await this.httpGetClient.get(this.url)
  }
}
