
const express = require('express')
const app = express()
const router = require('./routes/main')


app.use(express.json())
app.use(router)

app.get("/", (req, res) => {
  res.send("welcome to this page")
})

const port = process.env.PORT || 3000

const start = async () => {
  try {
    app.listen(port, () => console.log(`listening on port ${port}`))
  }
  catch(error) {
    console.log(error)
  }
} 

start()

