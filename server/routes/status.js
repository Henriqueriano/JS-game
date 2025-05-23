const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');

routes.get('/', (req,res,next) => { res.status(200); res.end();});
routes.get('/db_status', (req,res,next) => 
{
    mongoose.connect('mongodb://127.0.0.1:27017/gameDb')
    .then( ()=>  { console.log('server_info: db conn sucess!'); res.status(200); } )
    .catch( ()=> { console.log('server_info: db conn err!');    res.status(500); } );

    mongoose.connection.close();
    res.end();
});

module.exports = routes;