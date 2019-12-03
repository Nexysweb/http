import * as Index from './';

test('test entry points', () => {
  const listModules = ['HTTP'];

  listModules.map(e => {
    // uncomment if test fails
    //console.log(e)
    expect(typeof Index[e]).toEqual('object');
  });
});
