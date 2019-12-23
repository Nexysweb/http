// TODO: default message body depending on status
const createErrorMessage = (status, body) => {
  let message = null;
  switch (status) {
    case 400:
      message = 'Bad Request';
      break;
    case 401:
      message = 'Unauthorized';
      break;
    case 403:
      message = 'Forbidden';
      break;
    case 404:
      message = 'Not found';
      break;
    case 500:
      message = 'Internal Server Error';
  }
  
  const identifier = message ? `${status}, ${message}` : `${status}`;

  if (body) {
    const serializedBody = JSON.stringify(body, null, 2).replace(/\"/g, '');
    return identifier + ': ' + serializedBody;
  } else {
    return identifier;
  }
}

/*
  const ERROR_CODES = ..

  - 400 Bad Request: The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).[32]
  - 401 Unauthorized (RFC 7235): Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.[33] 401 semantically means "unauthorised",[34] the user does not have valid authentication credentials for the target resource.
    Note: Some sites incorrectly issue HTTP 401 when an IP address is banned from the website (usually the website domain) and that specific address is refused permission to access a website.[citation needed]
  - 403 Forbidden: The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed). This code is also typically used if the request provided authentication via the WWW-Authenticate header field, but the server did not accept that authentication. The request should not be repeated.
  - 404 Not Found: The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
*/

/**
 * HTTP error class
 */
export default class HTTPError extends Error {
  constructor(body=null, status=400) {
    super(createErrorMessage(status, body));

    this.name = 'HTTPError';
    this.error = true;

    this.body = body
    this.status = status;

    // DEPRECATED
    this.statusCode = this.status;
    this.isError = this.error;
  }

  toString() {
    return createErrorMessage(this.status, this.body);
  }
};

// DEPRECATED
export const isError = e => e instanceof Error && e instanceof HTTPError;