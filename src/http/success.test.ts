import HTTPSuccess from './success';


const b = 'body';

test('http success', () => {
  const s = new HTTPSuccess();

  expect(s.body).toEqual(null);
  expect(s.status).toEqual(200);
});

test('http success - with body', () => {
  const s = new HTTPSuccess(b);
  expect(s.body).toEqual(b);
  expect(s.status).toEqual(200);
});

test('http success - with status', () => {
  const s = new HTTPSuccess(b, null, 201);
  expect(s.body).toEqual(b);
  expect(s.status).toEqual(201);
});

test('http success - wrong status', () => {
  expect(() => { new HTTPSuccess('body', {}, 400) }).toThrow(Error);
});