const models = require('../models')

const getAllAuthors = async (req, res) => {
  try {
    const allAuthors = await models.Authors.findAll()

    return allAuthors
      ? res.status(200).send(allAuthors)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const getAuthorByIdWithNovelsGenres = async (req, res) => {
  try {
    const { id } = req.params
    const author = await models.Authors.findOne({
      where: { id },
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

module.exports = { getAllAuthors, getAuthorByIdWithNovelsGenres }
