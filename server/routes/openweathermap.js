var express = require('express');
const axios = require('axios');
var router = express.Router();
require('dotenv').config();

router.post('/', async(req, res, next) => {

  let long = req.body.longitude;
  let lat = req.body.latitude;
  let api_key = process.env.OPENWEATHERMAP_API_KEY;

  axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + api_key + "&units=metric")
    .then(data => {
      console.log("[OpenWeatherMap] request success")
      res.status(201).json(data.data)
    })
    .catch(err => {
      console.log("[OpenWeatherMap] request failed")
      res.status(err.response.data.cod).json({ error: err.response.data.message})
    });
})

module.exports = router;