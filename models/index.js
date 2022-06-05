const Sequelize = require('sequelize')
const authors = require('./authors')
const genres = require('./genres')
const novels = require('./novels')
const novelsGenres = require('./novelsGenres')

const connection = new Sequelize('great_novels', 'great_novels_user', 'bookworm', {
  host: 'localhost',
  dialect: 'mysql'
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

module.exports = { Authors, Genres, Novels, NovelsGenres }
