const express = require('express')
<<<<<<< HEAD
const mongoose = require('./db/connection')
// const bodyParser = ('body-parser')
=======
const mongoose = require('mongoose')
const bodyParser = ('body-parser')
>>>>>>> a554d31af6ba5d674fa71aac8228f8a55cc22f65
const hbs = require("express-handlebars")

const app = express()

mongoose.connect('mongodb://localhost/movies')

app.set("view engine", "hbs")

app.use(express.static(__dirname + '/public'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))


let Movie = mongoose.model('Movie')

app.listen(4000, () => {
  console.log('\n\tMovies is up and running!\n\t')
})


app.get("/", function(req, res){

    Movie.find({}).then(movies => {
      res.render("index", {
        movies: movies
      });
    })
});
