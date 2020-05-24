import server from './init/server_startUp';
import db from './init/db_startUp';
db.authenticate()
  .then((res) =>
    db.sync({ force: true }).then(() => console.log('Database Connected'))
  )
  .catch((err) => console.log('Something went wrong ', err));
server();
