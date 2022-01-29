const axios = require('axios');

test('route test ', async () => {
  const value = await axios.get('http://127.0.0.1:4040/master/getPlanet');
  console.log(value);
  expect(value.data.name).toBeTruthy();
});
