const express = require('express');
const routes = require('./routes');
const cors = require ('cors');
require ('dotenv').config();
require('./database');

const tmdb_ipi = require ('./tmdb/tmdb-api')
tmdb_ipi.getlista();
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(8080);