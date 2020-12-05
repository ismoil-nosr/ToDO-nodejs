const { connect, connection } = require('mongoose');
const { config } = require('dotenv'); 

module.exports = () => {
    config();
    const host = process.env.DB_HOST

    connect(host, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })
    .then(() => {
        console.log('DB connection established.');
    })
    .catch(error => console.error(error.message));
};