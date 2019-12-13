import Index from './';

test('test entry points', () => {
  const listModules = ['Success', 'Error'];

  listModules.map(e => {
    // uncomment if test fails
    //console.log(e)
    expect(typeof Index[e]).toEqual('function');
  });
});