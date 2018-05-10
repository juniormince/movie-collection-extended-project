const pg = require('pg');
const Pool = pg.Pool;
const url = require('url');

let config = {};

if(process.env.DATABASE_URL)    {
    let params = url.parse(process.env.DATABASE_URL);
  let auth = params.auth.split(':');

  config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true, // heroku requires ssl to be true
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
  };
} else{
    //not on heroku
    config = {
        database: 'movie-collection', 
        host: 'localhost', 
        port: 5432, //default pg port
        max: 10,
        idleTimeoutMillis: 30000, 
    };
}

console.log(config);

const pool = new Pool(config);

/////// db connection czeck
pool.on('connect', () => {
    console.log('postgresql connected');

});

pool.on('error', (error) => {
    console.log('error with postgres pool', error);
});
///////


module.exports = pool;