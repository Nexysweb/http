import HTTPResponse from './response';


const CODES = {
  200: 'OK', // the request was fulfilled.
  201: 'Created', // following a POST command, this indicates success, but the textual part of the response line indicates the URI by which the newly created document should be known.
  202: 'Accepted', // the request has been accepted for processing, but the processing has not been completed. The request may or may not eventually be acted upon, as it may be disallowed when processing actually takes place. there is no facility for status returns from asynchronous operations such as this.
  204: 'No Content' // no response
};

export default class HTTPSuccess extends HTTPResponse {
  constructor(body=null, headers={}, status=200) {
    super(status, body, headers);

    if (!this.codes().includes(status)) {
      throw new Error('HTTPSuccess requires a success code');
    }
  }

  codes() {
    return Object.keys(CODES).map(status => Number(status));
  }

  // TODO: add helper methods for setting specific headers?
  // attachment = (ctx, filename, ending) => ctx.response.attachment(filename + ending)
};