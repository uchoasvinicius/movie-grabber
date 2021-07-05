import { HttpGetClient } from '../../protocols/http/http-get-client'

export class RemoteSearchMovie {
  constructor (private readonly url: string, private readonly httpGetClient: HttpGetClient) {}
  async search (query: string): Promise<void> {
    await this.httpGetClient.get({
      url: this.url,
      query
    })
  }
}
