const express = require('express')
const app = express()
const port = 108

app.get('/google', (req, res) => {
  res.send('Hello World!')
})
app.get('/abc', (req, res) => {
  res.send('Hello abc!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('hello world ,suraj')
})  
