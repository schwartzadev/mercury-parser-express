const Mercury = require('@postlight/mercury-parser');
const Express = require('express');

const app = Express();

app.get('/card/', (req, res) => {
  url = req.query.url;
  Mercury.parse(url).then(function (mercuryResult) {
    res.status(200).send({
      success: 'true',
      url: url,
      mercury: mercuryResult
    })
  })
});


app.listen(3000, () => {
  console.log('server running on port 3000');
})
