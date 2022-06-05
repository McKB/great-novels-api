const novels = (connection, Sequelize, Authors) => {
  return connection.define('novels', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING },
    authorId: { type: Sequelize.STRING, references: { model: Authors, key: 'id' } },
  }, { paranoid: true })
}

module.exports = novels
