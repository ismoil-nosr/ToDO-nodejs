const { connect, connection } = require('mongoose');
const { config } = require('dotenv'); 

module.exports = () => {
    config();
    const host = process.env.DB_HOST

    connect(host, {
        dbName: process.env.DB_NAME,
        // user: process.env.DB_NAME,
        // pass: process.env.DB_NAME,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
    .then(() => {
        console.log('DB connection established.');
    })
    .catch(error => console.error(error.message));
};