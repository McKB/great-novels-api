const models = require('../models')

const getAllGenres = async (req, res) => {
  try {
    const allGenres = await models.Genres.findAll()

    return allGenres
      ? res.status(200).send(allGenres)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const getGenreByIdWithNovelsAuthors = async (req, res) => {
  try {
    const { id } = req.params
    const genre = await models.Genres.findOne({
      where: { id },
      include: [{
        model: models.Novels,
        include: [{
          model: models.Authors,
        }]
      }]
    })

    return genre
      ? res.status(200).send(genre)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllGenres, getGenreByIdWithNovelsAuthors }
