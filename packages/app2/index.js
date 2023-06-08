const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  res.end(fs.readFileSync(path.join(__dirname, 'index.html')))
})
server.listen(3902, () => {
  console.log('app1 is running at 3902');
})