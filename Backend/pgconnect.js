let {Pool} = require("pg");

let pg_obj = new Pool({
    user : "postgres",
    host : "localhost",
    database : "student",
    password : "okudera2003",
    port : 3000
});

module.exports = pg_obj;