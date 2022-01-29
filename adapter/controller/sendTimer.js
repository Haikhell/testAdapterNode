const { sendRequestToMaster } = require('./sendPlanetOnMaster')

module.exports.sender = () => {
  const minRandom = 10000
  const maxRandom = 12000
  const time = Math.floor(
    minRandom + Math.random() * (maxRandom - minRandom),
  );
  sendRequestToMaster()
  setTimeout(this.sender, time)
}

setTimeout(this.sender, 5000)