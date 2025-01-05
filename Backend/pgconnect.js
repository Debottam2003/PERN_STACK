let {Pool} = require("pg");

let pg_obj = new Pool({
    user : "postgres",
    host : "localhost",
    database : "student",
    password : "okudera2003",
    port : 5432
});

module.exports = pg_obj;