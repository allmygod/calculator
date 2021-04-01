var express = require('express'),
  cors = require('cors'),
  morgan = require('morgan'),
  dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('combined'))
app.use(cors())

app.post('/sum', function(req, res, next) {
  let {number1, number2} = req.body
  if (!number1 || number2) {
    return res.sendStatus(400)
  }

  res.json({
    result: number1 + number2
  })
})

app.get('/', function(req, res, next) {
  res.send('Calculator REST API')
})

app.listen(process.env.PORT || 5000)
