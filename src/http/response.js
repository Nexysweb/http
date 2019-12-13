export default class HTTPResponse {
  constructor(status, body, headers) {
    this.body = body;
    this.status = status;
    this.headers = headers;
  }
}