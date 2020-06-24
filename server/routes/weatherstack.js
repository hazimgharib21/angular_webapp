var express = require('express');
const axios = require('axios');
var router = express.Router();
require('dotenv').config();

router.post('/', async(req, res, next) => {

  let location = req.body.location;
  let api_key = process.env.WEATHERSTACK_API_KEY;

  axios.get('http://api.weatherstack.com/current?access_key=' + api_key + '&query=' + location)
    .then(data => {
      console.log("[WeatherStack] request success")
      res.status(201).json(data.data)
    })
    .catch(err => {
      console.log("[WeatherStack] request failed")
      res.status(err.response.data.cod).json({ error: err.response.data.message})
    });
})

module.exports = router;