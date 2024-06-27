const express = require("express")

const app = express()

app.get("/", (req, res) => {
    return res.send("Hello World")
})

app.listen(3000, () => {
  console.log(`695 server listening on port ${3000}`)
})
