const router = require('express').Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newMovie = req.body;
    console.log(req.body);
    pool.query(`INSERT INTO "film" ("name", "genre_id", "release_date", "run_time", "image_path")
    VALUES ($1, $2, $3, $4, $5);`, [newMovie.name, newMovie.genre_id, newMovie.release_date, newMovie.run_time, newMovie.image_path])
    .then((results) =>  {
        res.sendStatus(200);
    })
    .catch((error)  =>  {
        console.log('errorrrr SQL movie POST', error);
        res.sendStatus(500);
    });
});


module.exports = router;