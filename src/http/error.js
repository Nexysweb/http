// TODO: default message body depending on status
const createErrorMessage = (status, body) => `${status}, ${JSON.stringify(body).replace(/\"/g, '')}`;

/*
  const ERROR_CODES = ..

  - 400 Bad Request: The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).[32]
  - 401 Unauthorized (RFC 7235): Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource. See Basic access authentication and Digest access authentication.[33] 401 semantically means "unauthorised",[34] the user does not have valid authentication credentials for the target resource.
    Note: Some sites incorrectly issue HTTP 401 when an IP address is banned from the website (usually the website domain) and that specific address is refused permission to access a website.[citation needed]
  - 402 Payment Required: Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed, for example, by GNU Taler,[35] but that has not yet happened, and this code is not usually used. Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.[36] Sipgate uses this code if an account does not have sufficient funds to start a call.[37] Shopify uses this code when the store has not paid their fees and is temporarily disabled.[38] Stripe uses this code for failed payments where parameters were correct, for example blocked fraudulent payments.[39]
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

// NOTE: deprecated
export const isError = e => e instanceof Error && e instanceof HTTPError;