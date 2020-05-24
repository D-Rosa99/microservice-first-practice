import dbConnection from './init/db_startUp';
import { initServerConection } from './init/server_startUp';

dbConnection();
initServerConection();
