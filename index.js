const express = require('express')
const app = express()
const { getAllAuthors, getAuthorBySearchWithNovelsGenres } = require('./controllers/authors')
const { getAllGenres, getGenreByIdWithNovelsAuthors } = require('./controllers/genres')
const { getAllNovelsWithAuthorGenres, getNovelBySearchWithAuthorGenres } = require('./controllers/novels')

app.get('/authors', getAllAuthors)
app.get('/authors/:searchTerm', getAuthorBySearchWithNovelsGenres)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreByIdWithNovelsAuthors)
app.get('/novels', getAllNovelsWithAuthorGenres)
app.get('/novels/:searchTerm', getNovelBySearchWithAuthorGenres)

app.get('*', (req, res) => {
  return res.status(404).send('Page not found. Try /authors or /novels or /genres to get started.')
})

app.listen(1337, () => {
  console.log('listening at http://localhost:1337...') // eslint-disable-line no-console
})
