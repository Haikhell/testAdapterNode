const { getPlanetWrapper } = require('../../api/getPlanet')

const cache = []
const maxCountCache = 10
const minRandom = 1;
const maxRandom = 60;

function takePlanetWithApi() {
  new Promise((res, rej) => {
    const planetId = Math.floor(
      minRandom + Math.random() * (maxRandom - minRandom),
    );
    getPlanetWrapper(planetId).then((value) => {
      if (cache.length < maxCountCache) cache.push(value.data);
    }).catch((value) => { });
  });
}

function callSendRequest() {
  if (cache.length < maxCountCache) {
    try {
      takePlanetWithApi();
    } catch (error) {
      console.log(error);
    }
    setTimeout(callSendRequest, cache.length + 1 * 1000);
  }
}

callSendRequest()

module.exports.getPlanetWithCache = () => {
  const startDelete = 0;
  const countDelete = 1;
  const planet = cache.splice(startDelete, countDelete)[0];
  callSendRequest()
  return planet
}