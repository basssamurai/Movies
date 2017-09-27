const express = require('express')
const mongoose = require('./db/connection')
const parser = require('body-parser')
const hbs = require("hbs")

const app = express()

mongoose.connect('mongodb://localhost/movies')

app.set("view engine", "hbs")

app.use(express.static(__dirname + '/public'))
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))
// app.use(parser.urlencoded({
//   extended: true
// }))


let Movie = mongoose.model('Movie')

app.listen(4000, () => {
  console.log('\n\tMovies is up and running!\n\t')
})



// homepage redirect
app.get('/', (req, res) => {
    res.redirect('/movies')
})

// index view
app.get("/movies", function(req, res){
  Movie.find({}).then(movies => {
    res.render("index", {
        movies: movies
    });
  });
});

// show view
app.get("/movies/:title", function(req, res) {
  Movie.findOne({title: req.params.title}).then(function(movie) {
    res.render('show', {
      movie: movie
    });
  });
});

//create
app.post('/movies', (req, res) => {
  Movie.create(req.body.movie).then(movie => {
    res.redirect('/movies/' + movie.title)
  });
});


//update
app.post('/movies/:title', (req, res) => {
  Movie.findOneAndUpdate({title: req.params.title}, req.body.movie, {new: true}).then(movie => {
    res.redirect('/movies/' + movie.title)
  })

})


//delete
app.post("/movies/:title/delete", (req, res) => {
  Movie.findOneAndRemove({title: req.params.title})
    .then(() => {
      res.redirect("/movies")
    })
})
