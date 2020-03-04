import Index from './';

test('test entry points', () => {
  expect(typeof Index['Success']).toEqual('function');
  expect(typeof Index['Error']).toEqual('function');
});