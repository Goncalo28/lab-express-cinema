const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {
        const MoviesFromDB = await Movie.find()
        res.render('movies-list', { movies: MoviesFromDB })
    } catch (error) {
        console.log(error)
    }
})

router.get('/movies/:id', async (req, res) => {
    try {
        let movieId = req.params.id
        const movieToFind = await Movie.findById(movieId)
        res.render('movie-details', { movie: movieToFind })
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;
