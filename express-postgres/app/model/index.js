import Sequelize from 'sequelize';
import db from '../init/db_startUp';

const Book = db.define('book', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: { type: Sequelize.STRING, allowNull: false },
  author: { type: Sequelize.STRING, allowNull: false },
  numPage: { type: Sequelize.INTEGER, allowNull: false },
});

export default Book;
