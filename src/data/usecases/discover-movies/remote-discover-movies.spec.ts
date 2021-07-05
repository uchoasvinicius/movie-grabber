import { RemoteDiscoverMovies } from './remote-discover-movies'
import { HttpGetClientSpy } from '../../test/mock-http-client'

type SutTypes = {
  sut: RemoteDiscoverMovies
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteDiscoverMovies(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteDiscoverMovies', function () {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.list()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
