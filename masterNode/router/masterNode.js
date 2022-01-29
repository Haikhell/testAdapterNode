const router = require('express').Router();

const planetController = require('../controller/planet')

router.get('/getPlanet', (req, res) => {
  res.send(planetController.getPlanet())
})

router.post('/setPlanet', (req, res) => {
  if (req.query.secret !== '1o401oadjgqw12jtcnsvsgioewe') {
    res.send('error')
    return
  }
  if (req.body) {
    planetController.setPlanet(req.body)
  }
})

module.exports = router