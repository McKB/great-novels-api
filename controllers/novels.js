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

const getNovelBySearchWithAuthorGenres = async (req, res) => {
  try {
    const { searchTerm } = req.params
    const novel = await models.Novels.findAll({
      where: {
        [models.Op.or]: [
          { title: { [models.Op.like]: `%${searchTerm}%` } },
          { id: searchTerm }
        ]
      },
      include: [{ model: models.Authors }, { model: models.Genres }]
    })

    return novel.length
      ? res.status(200).send(novel)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllNovelsWithAuthorGenres, getNovelBySearchWithAuthorGenres }
