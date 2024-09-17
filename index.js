require('dotenv').config()
console.log('my name is kaif');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('my name is kaif')
})

app.get('/login',(req, res) => {
    res.send('<h1>what is your name</h1>')
} )

app.get('/youtube', function(req, res) {
    res.send('<h2>teacher hitesh choudhary</h2>')
})

app.get(process.env.PORT, function(req, res) {
    res.send('<h2>teacher hitesh choudhary</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
