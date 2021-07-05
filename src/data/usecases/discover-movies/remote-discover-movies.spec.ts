import { HttpGetClient } from '../../protocols/http/http-get-client'
import { RemoteDiscoverMovies } from './remote-discover-movies'

describe('RemoteDiscoverMovies', function () {
  test('Should call HttpGetClient with correct URL', async () => {
    class HttpGetClientSpy implements HttpGetClient {
      url?: string
      async get (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteDiscoverMovies(url, httpGetClientSpy)
    await sut.list()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
