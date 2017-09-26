var mongoose = require('mongoose')

var MovieSchema = new mongoose.Schema( {
  title: String,
  year: Number,
  director: String,
  photo_url: String
})

mongoose.model('Movie', MovieSchema);
mongoose.connect('mongodb://localhost/movies');

module.exports = mongoose
