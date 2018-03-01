const express = require('express')
const router = express.Router()
const request = require('superagent')

const baseUrl = "http://www.recipepuppy.com/api/"

router.get('/', (req, res) => {
  request
  .get(baseUrl)
  .query({
    i: req.query.i,
    q: req.query.q,
    onlyImages: 1
  })
    .then(extres => {
      console.log('ext', extres.text)
    res.json(JSON.parse(extres.text))
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
