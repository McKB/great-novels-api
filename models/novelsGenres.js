const novelsGenres = (connection, Sequelize, Novels, Genres) => {
  return connection.define('novelsGenres', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    novelId: { type: Sequelize.INTEGER, references: { model: Novels, key: 'id' } },
    genreId: { type: Sequelize.INTEGER, references: { model: Genres, key: 'id' } },
  }, { paranoid: true })
}

module.exports = novelsGenres
