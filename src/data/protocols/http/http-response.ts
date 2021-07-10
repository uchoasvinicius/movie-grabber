export enum HttpStatusCode {
  unauthorized = 7,
  no_content = 204,
  success = 200,
  internal_error = 500
}

export type HttpResponse = {
  status_code: HttpStatusCode
  body?: any
}
