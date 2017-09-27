const express = require('express')
const mongoose = require('./db/connection')
const parser = require('body-parser')
const hbs = require("express-handlebars")

const app = express()

mongoose.connect('mongodb://localhost/movies')

app.set("view engine", "hbs")

app.use(express.static(__dirname + '/public'))
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))


let Movie = mongoose.model('Movie')

app.listen(4000, () => {
  console.log('\n\tMovies is up and running!\n\t')
})


app.get("/", function(req, res){
  Movie.find({}).then(movies => {
    res.render("index", {
        movies: movies
    });
  });
});

app.get("/movie/:title", function(req, res) {
  Movie.findOne({title: req.params.title}).then(function(movie) {
    res.render('show', {
      movie: movie
    });
  });
});
