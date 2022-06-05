const express = require('express')
const app = express()
const { getAllAuthors, getAuthorByIdWithNovelsGenres } = require('./controllers/authors')
const { getAllGenres, getGenreByIdWithNovelsAuthors } = require('./controllers/genres')
const { getAllNovelsWithAuthorGenres, getNovelByIdWithAuthorGenres } = require('./controllers/novels')

app.get('/authors', getAllAuthors)
app.get('/authors/id', getAuthorByIdWithNovelsGenres)
app.get('/genres', getAllGenres)
app.get('/genres/id', getGenreByIdWithNovelsAuthors)
app.get('/novels', getAllNovelsWithAuthorGenres)
app.get('/novels/id', getNovelByIdWithAuthorGenres)

app.listen(1337, () => {
  console.log('listening at http://localhost:1337...') // eslint-disable-line no-console
})
