var express = require('express');
const axios = require('axios');
var router = express.Router();
require('dotenv').config();

router.get('/', async(req, res, next) => {

  let location = req.body.location;

  axios.get('https://favqs.com/api/qotd')
    .then(data => {
      console.log("[favqs] request success")
      res.status(201).json(data.data)
    })
    .catch(err => {
      console.log("[favqs] request failed")
      res.status(err.response.data.cod).json({ error: err.response.data.message})
    });
})

module.exports = router;