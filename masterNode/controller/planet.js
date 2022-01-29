let planet = null

module.exports.getPlanet = () => {
  if (!planet) {
    return { message: 'planet in search try later' }
  }
  return planet
}

module.exports.setPlanet = (newPlanet) => {
  planet = newPlanet
}