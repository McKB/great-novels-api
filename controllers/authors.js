const models = require('../models')

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await models.Authors.findAll()

    return allAuthors
      ? res.status(200).send(allAuthors)
      : res.sendStatus(404)
  } catch (error) {
    console.log(error)
    return res.sendStatus(500)
  }
}

const getAuthorBySearchWithNovelsGenres = async (req, res) => {
  try {
    const { searchTerm } = req.params
    const author = await models.Authors.findAll({
      where: {
        [models.Op.or]: [
          { nameLast: { [models.Op.like]: `%${searchTerm}%` } },
          { id: { [models.Op.like]: `%${searchTerm}%` } }
        ]
      },
      include: [{
        model: models.Novels,
        include: [{
          model: models.Genres,
        }]
      }]
    })

    return author
      ? res.status(200).send(author)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllAuthors, getAuthorBySearchWithNovelsGenres }
