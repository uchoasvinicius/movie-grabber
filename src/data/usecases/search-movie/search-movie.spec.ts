import { HttpGetClientSpy } from '../../test/mock-http-client'
import faker from 'faker'
import { RemoteSearchMovie } from './remote-search-movie'
import { mockSearchMovie } from '@/domain/test/mock-search-movie'
import { InvalidTokenError } from '@/domain/errors/invalid-credentials-error'
import { HttpStatusCode } from '@/data/protocols/http/http-response'

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
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.search(mockSearchMovie())
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should call HttpGetClient with correct query', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const searchParams = mockSearchMovie()
    await sut.search(searchParams)
    expect(httpGetClientSpy.query).toEqual(searchParams)
  })

  test('Should throw InvalidTokenError if HttpPostClient returns 401', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      status_code: HttpStatusCode.unauthorized
    }
    const response = sut.search(mockSearchMovie())
    await expect(response).rejects.toThrow(new InvalidTokenError())
  })
})
