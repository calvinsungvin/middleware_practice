const express = require('express')
const app = express()
const port = 3000
const responseTime = require('response-time')
const start = new Date()

app.use(responseTime())

const serverLog = ( req, res, next) => {
  console.log(`${new Date()} | ${req.method} from ${req.originalUrl} | total time: ${new Date() - start} ms`)
  next()
  }

app.get('/', serverLog, (req, res) => {
    res.send('列出全部 Todo')
  })
  
  app.get('/new', serverLog, (req, res) => {
    res.send('新增 Todo 頁面')
  })
   
  app.get('/:id', serverLog, (req, res) => {
    res.send('顯示一筆 Todo')
  })
  
  app.post('/', serverLog, (req, res) => {
    res.send('新增一筆  Todo')
  })


app.listen(port, () => {
    console.log(`Express is listening on localhost:${port}`)
  })
  