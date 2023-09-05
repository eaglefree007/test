const express = require('express')

const app = express()

app.get('/api/user', (req, res) => {
  console.log('Ok');
  res.send("ok")
})

app.listen(3000, () =>
{
  console.log("running on 3000");
})