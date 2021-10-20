const express = require('express');
const routes = require('./routes');
require('./database');

const tmdb_ipi = require ('./tmdb/tmdb-api')
tmdb_ipi.getlista();
const app = express();

app.use(express.json());
app.use(routes);

app.listen(8080);