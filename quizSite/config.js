// config.js

module.exports = {
    host: 'localhost',
    user: 'root',
    password: 'Efe.845321',
    database: 'mydatabase'
  };

  // app.js

const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error('MySQL bağlantı hatası:', err);
    return;
  }
  console.log('MySQL sunucusuna başarıyla bağlanıldı!');
});

// Diğer kodlarınızı buraya ekleyin

module.exports = connection;

  