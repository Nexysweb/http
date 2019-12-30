export default class HTTPResponse {
  constructor(status, body, headers) {
    this.status = status;
    this.body = body;
    this.headers = headers;
  }
}