import mysql from 'mysql2/promise';

const testConnection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',         // ✅ use localhost
      user: 'root',
      password: '',
      database: 'yoga_db',
      port: 3306,
    });

    const [rows] = await connection.query('SELECT NOW() AS time');
    console.log('✅ DB Connected. Current time:', rows[0].time);
    await connection.end();
  } catch (error) {
    console.error('❌ DB Connection Failed:', error.message);
  }
};

testConnection();
