const http = require('http');
const app = require('./config');

http.createServer(app).listen(3000, () => {
    console.log('Starting...')
});