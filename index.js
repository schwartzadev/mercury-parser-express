const Mercury = require('@postlight/mercury-parser');
const Express = require('express');
const cheerio = require('cheerio')


const port = 5555;
const app = Express();

app.get('/card/', (req, res) => {
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
