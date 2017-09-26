const express = require('express')
const mongoose = require('mongoose')
const bodyParser = ('body-parser')
const hbs = require("express-handlebars")

const app = express()

mongoose.connect('mongodb://localhost/movies')

app.listen(4000, () => {
  console.log('\n\tMovies is up and running!\n\t')
})
