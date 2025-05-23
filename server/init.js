const BASE_PORT = 5454;
const BASE_IP = '0.0.0.0';
const STATUS_ROUTE = require('./routes/status');
const init = require('express')();


init.use('/status', STATUS_ROUTE);
init.use(require('cors')());
init.listen(BASE_PORT, BASE_IP, () => { console.log(`server_info: server on http://${BASE_IP}:${BASE_PORT}`)})