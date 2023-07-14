const server = require('./src/server');


server.listen(7004, () => {
    console.log(`DATABASE run on port: 7004`);
})