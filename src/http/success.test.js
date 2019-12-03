import HTTPSuccess from './success';

test('http success', () => {
  const s = new HTTPSuccess();

  expect(s.body).toEqual(null);
  expect(s.status).toEqual(200);
});

test('http success - with body', () => {
  const b = 'my body'
  const s = new HTTPSuccess(b);

  expect(s.body).toEqual(b);
  expect(s.status).toEqual(200);
});

test('http success - with status', () => {
  const b = 'my body'
  const s = new HTTPSuccess(b, 201);

  expect(s.body).toEqual(b);
  expect(s.status).toEqual(201);
});

test('http success - wrong status', () => {
  const b = 'my body'
  
  // test throw errors with jest
  // https://stackoverflow.com/questions/46042613/how-to-test-type-of-thrown-exception-in-jest
  try {
    const s = new HTTPSuccess(b, 400);
    // Fail test if above expression doesn't throw anything.
    expect(true).toEqual(false);
  } catch(e) {
    expect(e.message).toBe('HTTPSuccess requires a success code');
  }
});


