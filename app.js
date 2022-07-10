const express = require('express')
const app = express()
const port = 3000
app.get('/trang-chu', function (req, res) {
    var a=1,b=2;
    var c=a+b;
  res.send('Hello World')
})

app.listen(port,()=> console.log('listening on port ' + port))