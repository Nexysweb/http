import * as Index from './';

test('test entry points', () => {
  expect(typeof Index['HTTP']).toEqual('object');
});
