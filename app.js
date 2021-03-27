const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.PORT || 8000
const viewsPath = __dirname + '/views/'

router.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

router.get('/index', (req, res) => {
  res.sendFile(viewsPath+'index.html')
})

router.get('/sharks', (req, res) => {
  res.sendFile(viewsPath+'sharks.html')
})

app.use(express.static(viewsPath))
app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
