const router = require('express').Router();

const pool = require('../modules/pool');

//POST GENRE ROUTE
router.post('/', (req, res) => {
    console.log('POST /genre', req.body);
    const genre = req.body;
    const queryText = `INSERT INTO "genre" ("genre") VALUES ($1)`;
    pool.query(queryText, [genre.genre])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('error making genre insert query', error);
            res.sendStatus(500);
        });
});

// GET GENRE ROUTE ((test. need to get selected genres/make filters on client side??))
router.get('/', (req, res) => {
    console.log('GET /genres');
    pool.query(`SELECT * FROM "genre";`)

                // pool.query(`SELECT "g".*, count("f") as "all_films" 
                // FROM "genre" as "g" LEFT JOIN "film" as "f" 
                // ON "g"."id" = "f"."genre_id"
                // GROUP BY "g"."id";`)
        .then(result => {
            // console.log(result);
            res.send(result.rows);
        })
        .catch(error => {
            console.log('ROUTER ERROR GET GENRES', error);
            res.sendStatus(500);
        });
});



module.exports = router;