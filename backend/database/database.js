const database = require('better-sqlite3');
const db = new database('./feedback.db')
module.exports = db;