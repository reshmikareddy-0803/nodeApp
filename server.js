const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))
// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})
// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))
// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80
if (process.argv[2] === 'local') {
  port = 8080
}
server.listen(port, () => console.log(`Ready on localhost! at port ${port}`))

server.post('/submit', (req, res) => {
    const body = req.body;
   
    const madLib = `My form is filled with this details ${body.adjective}>>${body.noun}>>${body.verb}>>${body.adverb}>>${body.pluralNoun}`;
    res.send(`
      <h1>Submission Successful</h1>
      <p>${madLib}</p>
      <a href="/itc505/lab7">Go Back to Form</a>
    `);
});