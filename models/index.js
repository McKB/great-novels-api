const Sequelize = require('sequelize')
const config = require('../config/sequelize')
const authors = require('./authors')
const genres = require('./genres')
const novels = require('./novels')
const novelsGenres = require('./novelsGenres')

const environment = process.env.NODE_ENV || 'development'
const { username, password, database, host, dialect } = config[environment] //eslint-disable-line

const connection = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
})

const Authors = authors(connection, Sequelize)
const Genres = genres(connection, Sequelize)
const Novels = novels(connection, Sequelize, Authors)
const NovelsGenres = novelsGenres(connection, Sequelize, Novels, Genres)

// has many, belongs to
Authors.hasMany(Novels)
Novels.belongsTo(Authors)

Genres.belongsToMany(Novels, { through: NovelsGenres })
Novels.belongsToMany(Genres, { through: NovelsGenres })

module.exports = {
  Authors,
  Genres,
  Novels,
  NovelsGenres,
  Op: Sequelize.Op
}
