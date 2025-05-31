const BASE_PORT = 5454;
const BASE_IP = '127.0.0.1';
const DATABASE_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/gameDb';
const DATABASE_ROUTE = require('./routes/database');
const mongoose = require('mongoose');
const init = require('express')();

// Based on: https://stackoverflow.com/questions/16226472/mongoose-autoreconnect-option
mongoose.connect(DATABASE_CONNECTION_STRING);
mongoose.connection.on('connected',    () =>  { console.log('server_info: db conn sucess!');});
mongoose.connection.on('disconnected', () =>  { console.log('server_info: db conn err, awaiting connection!');});

init.use('/database', DATABASE_ROUTE);
init.use(require('cors')());
init.listen(BASE_PORT, BASE_IP, () => { console.log(`server_info: server on http://${BASE_IP}:${BASE_PORT}`)});

// Todo: implement log.
setTimeout(() => 
    {
        console.clear();
        console.log(`server_info: server console cleanned!`);
        console.log(`server_info: press Ctrl+C to abort.`);
    }, 10000);

