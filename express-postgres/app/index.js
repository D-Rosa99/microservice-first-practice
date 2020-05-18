// import server from './init/server_startUp';
import db from './init/db_startUp';
db.authenticate()
  .then((res) => console.log('Database Conected ', res))
  .catch((err) => console.log('Something went wrong ', err));
// server();
