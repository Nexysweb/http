import HTTPResponse from './response';

// TODO: export success_codes [{code, description}]
const SUCCESS_CODES = [200, 201, 202, 203, 204];

/*
  Success codes

  - OK 200: the request was fulfilled.
  - CREATED 201: Following a POST command, this indicates success, but the textual part of the response line indicates the URI by which the newly created document should be known.
  - Accepted 202: The request has been accepted for processing, but the processing has not been completed. The request may or may not eventually be acted upon, as it may be disallowed when processing actually takes place. there is no facility for status returns from asynchronous operations such as this.
  - Partial Information 203: When received in the response to a GET command, this indicates that the returned metainformation is not a definitive set of the object from a server with a copy of the object, but is from a private overlaid web. This may include annotation information about the object, for example.
  - No Response 204
*/

export default class HTTPSuccess extends HTTPResponse {
  constructor(body=null, headers={}, status=200) {
    super(status, body, headers);

    if (!SUCCESS_CODES.includes(status)) {
      throw new Error('HTTPSuccess requires a success code');
    }
  }

  // TODO: add helper methods for setting specific headers?
  // attachment = (ctx, filename, ending) => ctx.response.attachment(filename + ending)
};