/**
 * This file contains all project Routes.
 * There's not necessary to create him, but I super recommend you split the directory routes
 * 'cause in this case is more easily to know where each piece of the project are.
 */

const express = require('express')
const axios = require('axios')

const WeatherApi = require('../utils/weather')

app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', async function (req, res) {
  const today = new Date()

  const getWeather = async () => {
    const response = await axios.get(WeatherApi.url)
    return response.data
  }

  let weather = await getWeather()

  /**
   * This is necessary because api.hgbrasil returns 10 days with the weather inside results.forecast
   * However, just the first day is necessary for this example
   */
  weather = weather.results.forecast[0]

  res.send({
    'today': today,
    'celsiusDegrees': weather
  })
})


app.post('/', function (req, res) {
  // Look at me in the console. I can show you all request body
  console.log(req.body)

  const last_name = req.last_name

  res.send({
    'do': 'something',
    'last_name': last_name
  })
})

// Exporting all routes to catch up in the server.js
module.exports = app
