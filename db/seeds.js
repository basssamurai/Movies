var mongoose = require('./connection.js')
var seedData = require('./seeds.json')

var Movie = mongoose.model('Movie')

Movie.remove({}).then(() => {
  Movie.collection.insert(seedData).then(() => {
    process.exit()
  })
})
