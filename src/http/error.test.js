import HTTPError from './error';
import { isError } from './error';

const message = 'something went wrong';
const statusCode = 500;
const myHTTPError = new HTTPError(message, statusCode);

test('check if input is an error', () => {
  class ARandomClass {};
  const myRandomClass = new ARandomClass;

  // typof always returns `object`
  // console.log(typeof e)

  expect(myHTTPError instanceof HTTPError).toEqual(true);
  expect('mystring' instanceof HTTPError).toEqual(false);
  expect(myRandomClass instanceof HTTPError).toEqual(false);

  // deprecated
  expect(isError(myHTTPError)).toEqual(true);
  expect(isError(myRandomClass)).toEqual(false);
  expect(isError('myString')).toEqual(false);

  console.log(myHTTPError.message)
});

test('iserror attribute works', ()=> {
  expect(myHTTPError.isError).toEqual(true);
})

test('attributes are being saved', () => {
  expect(myHTTPError.message).toEqual(message);
  expect(myHTTPError.statusCode).toEqual(statusCode);
});

test('default atttributes', () => {
  const defaultHTTPError = new HTTPError();
  expect(defaultHTTPError.message).toEqual(null);
  expect(defaultHTTPError.statusCode).toEqual(400);
});


