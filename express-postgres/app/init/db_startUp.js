import Sequelize from 'sequelize';

export default new Sequelize('microservice', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});
