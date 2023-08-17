import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'bgkq7axlalh52arwgnvv-mysql.services.clever-cloud.com',
  user: 'u9j898sc5oghrbny',
  password: 'kRlXj9ltbbDgL5JVT21O',
  database: 'bgkq7axlalh52arwgnvv'
});

export default db;