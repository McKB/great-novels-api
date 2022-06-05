const genres = (connection, Sequelize) => {
  return connection.define('genres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    genre: { type: Sequelize.STRING },
  }, {
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['deletedAt'] },
    }
  })
}

module.exports = genres
