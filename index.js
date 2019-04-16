const Mercury = require('@postlight/mercury-parser');
const Express = require('express');
const cheerio = require('cheerio')
const cors = require('cors');

const port = 5555;
const app = Express();

var corsOptions = {
  origin: 'http://51.15.99.218',
  optionsSuccessStatus: 200
}

app.get('/card/', cors(corsOptions), function (req, res) {
  url = req.query.url;
  Mercury.parse(url, { contentType: 'text'}).then(function (mercuryResult) {
    res.status(200).send({
      success: 'true',
      url: url,
      mercury: mercuryResult
    })
  })
});


app.listen(port, () => {
  console.log('server running on port ' + port);
})
