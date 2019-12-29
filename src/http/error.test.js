import HTTPError from './error';


test('default atttributes', () => {
  const defaultError = new HTTPError();
  expect(defaultError.status).toEqual(400);
  expect(defaultError.body).toEqual(null);

  expect(defaultError.message).toEqual('400, Bad Request');
});

test('custom attributes', () => {
  const body = { message: 'this page could not be found'};
  const error = new HTTPError(body, 404);
  expect(error.status).toEqual(404);
  expect(error.body).toEqual(body);

  expect(error.message).toEqual(`404, Not Found: ${JSON.stringify(body, null, 2).replace(/\"/g, '')}`);
});

test('error class type check', () => {
  class ARandomClass {};
  const myRandomClass = new ARandomClass;
  const myError = new HTTPError();

  expect(myError instanceof Error).toEqual(true);
  expect(myError instanceof HTTPError).toEqual(true);
  expect('mystring' instanceof HTTPError).toEqual(false);
  expect(myRandomClass instanceof HTTPError).toEqual(false);
});

test('throw default error', () => {
  try {
    throw new HTTPError();
  } catch (err) {
    expect(err.status).toEqual(400);
    expect(err.message).toEqual('400, Bad Request');
  }
});

test('throw 500 error', () => {
  try {
    throw new HTTPError('some internal server error', 500);
  } catch (err) {
    expect(err.status).toEqual(500);
    expect(err.message).toEqual('500, Internal Server Error: some internal server error');
  }
});