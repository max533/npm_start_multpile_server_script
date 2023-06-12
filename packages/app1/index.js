const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  res.end(fs.readFileSync(path.join(__dirname, 'index.html')))
})
server.listen(3901, () => {
  console.log('app2 is running at 3901');
})