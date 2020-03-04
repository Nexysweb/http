export default class HTTPResponse {
  status:number;
  body:any;
  headers:any;

  constructor(status:number, body:any, headers:any) {
    this.status = status;
    this.body = body;
    this.headers = headers;
  }
}