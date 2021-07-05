import { HttpGetClientSpy } from '../../test/mock-http-client'
import faker from 'faker'
import { RemoteSearchMovie } from './remote-search-movie'

type SutTypes = {
  sut: RemoteSearchMovie
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteSearchMovie(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteSearchMovie', function () {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const query = faker.random.alpha()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.search(query)
    expect(httpGetClientSpy.url).toBe(url)
  })
})
