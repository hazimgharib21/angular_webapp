var express = require('express');
const axios = require('axios');
var router = express.Router();
require('dotenv').config();

router.get('/', async(req, res, next) => {

  let location = req.body.location;

  axios.get('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
    .then(data => {
      console.log("[programmingquotes] request success")
      res.status(201).json(data.data)
    })
    .catch(err => {
      console.log("[programmingquotes] request failed")
      res.status(err.response.data.cod).json({ error: err.response.data.message})
    });
})

module.exports = router;