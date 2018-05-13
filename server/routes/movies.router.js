const router = require('express').Router();

const pool = require('../modules/pool');

//POST MOVIEEEEEE
router.post('/', (req, res) => {
    const newMovie = req.body;
    console.log(req.body);
    pool.query(`INSERT INTO "film" ("name", "genre_id", "release_date", "run_time", "image_path")
    VALUES ($1, $2, $3, $4, $5);`, [newMovie.name, newMovie.genre_id, newMovie.release_date, newMovie.run_time, newMovie.image_path])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('errorrrr SQL movie POST', error);
            res.sendStatus(500);
        });
});

//GET MOVIESSSS
router.get('/', (req, res) => {
    console.log('GET /movies');
    const queryText = `SELECT "f"."name", 
                              "f"."id" as "movie_id", 
                              "f"."release_date",
                              "f"."run_time",
                              "f"."image_path",
                              "g"."genre" AS "genre"
                       FROM "film" AS "f" JOIN "genre" as "g" 
                       ON "f"."genre_id" = "g"."id";`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch(error => {
        console.log('ROUTER ERROR GET MOVIES', error);
        res.sendStatus(500);
    });
});

//DELETE MOVIESSSS
router.delete('/:id', (req, res) => {
    console.log('DELETE /movies');
    const movieId = req.params.id;
    pool.query('DELETE FROM "film" WHERE "id"=$1;', [movieId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('ROUTER ERROR DELETE MOVIES', error);
            res.sendStatus(500);
        });
});

module.exports = router;