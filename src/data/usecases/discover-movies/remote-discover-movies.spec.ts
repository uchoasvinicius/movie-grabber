import { RemoteDiscoverMovies } from './remote-discover-movies'
import { HttpGetClientSpy } from '../../test/mock-http-client'

describe('RemoteDiscoverMovies', function () {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteDiscoverMovies(url, httpGetClientSpy)
    await sut.list()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
