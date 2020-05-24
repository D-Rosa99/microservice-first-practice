import Sequelize from 'sequelize';

export default new Sequelize('playground', 'postgres', 'postgres', {
  host: 'db',
  dialect: 'postgres',
});
