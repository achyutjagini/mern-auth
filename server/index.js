const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.get('/hello', (req, res) => {
  res.send("hello world")
}
)

app.post("/api/register", (req, res) => {
  console.log(req.body)
  res.json({ status: ok })
})

const port = 1300

app.listen(port, () => {
  console.log(`server started on ${port}`)
})