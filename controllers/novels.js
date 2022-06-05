const models = require('../models')

const getAllNovelsWithAuthorGenres = async (req, res) => {
  try {
    const allNovels = await models.Novels.findAll({
      include: [{ model: models.Authors }, { model: models.Genres }]
    })

    return allNovels
      ? res.status(200).send(allNovels)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const getNovelByIdWithAuthorGenres = async (req, res) => {
  try {
    const { id } = req.params
    const novel = await models.Novels.findOne({
      where: { id },
      include: [{ model: models.Authors }, { model: models.Genres }]
    })

    return novel
      ? res.status(200).send(novel)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllNovelsWithAuthorGenres, getNovelByIdWithAuthorGenres }
