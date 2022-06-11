'use strict'

const authors = require('../data/authors')
const genres = require('../data/genres')
const novels = require('../data/novels')
const novelsGenres = require('../data/novelsGenres')

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('authors', authors)
    await queryInterface.bulkInsert('genres', genres)
    await queryInterface.bulkInsert('novels', novels)

    return queryInterface.bulkInsert('novelsGenres', novelsGenres)
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('novelsGenres')
    await queryInterface.bulkDelete('novels')
    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('authors')
  }
}
