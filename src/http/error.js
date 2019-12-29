const CLIENT_CODES = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  408: 'Request Timeout',
  414: 'Request Entity Too Large'
};

const SERVER_CODES = {
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout'
};

const ALL_CODES = {
  ...CLIENT_CODES,
  ...SERVER_CODES
};

// TODO: default message body depending on status
const createMessage = (status, message, body) => {
  const identifier = message ? `${status}, ${message}` : `${status}`;

  if (body) {
    const serializedBody = JSON.stringify(body, null, 2).replace(/\"/g, '');
    return identifier + ': ' + serializedBody;
  } else {
    return identifier;
  }
}

/**
 * HTTP error class
 **/
export default class HTTPError extends Error {
  constructor(body=null, status=400) {
    const message = ALL_CODES.hasOwnProperty(status) && ALL_CODES[status];
    super(createMessage(status, message, body));

    this.name = 'HTTPError';
    this.error = true;

    this.body = body;
    this.status = status;
    this.statusMessage = message;

    this.expose = status < 500;

    // DEPRECATED
    this.statusCode = this.status;
    this.isError = this.error;
  }

  codes() {
    return Object.keys(ALL_CODES).map(status => Number(status));
  }

  clientCodes() {
    return Object.keys(CLIENT_CODES).map(status => Number(status));
  }

  serverCodes() {
    return Object.keys(SERVER_CODES).map(status => Number(status));
  }

  toString() {
    return createMessage(this.status, this.statusMessage, this.body);
  }
};

// DEPRECATED
export const isError = e => e instanceof Error && e instanceof HTTPError;