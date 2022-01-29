const axios = require('axios')
const secretKey = '1o401oadjgqw12jtcnsvsgioewe'
const { getPlanetWithCache } = require('./adapter')

module.exports.sendRequestToMaster = () => {
  const planet = getPlanetWithCache()
  axios.post(`http://127.0.0.1:4040/master/setPlanet?secret=${secretKey}`, planet)
}
