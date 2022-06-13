require('dotenv').config();

const mercury = require('@postlight/mercury-parser');
const Express = require('express');
const cors = require('cors');

const app = Express();

const port = process.env.PORT || 5555;
const corsOrigin = process.env.CORS_ORIGIN;

if (!corsOrigin) {
  console.error('CORS_ORIGIN environment variable is not set');
  process.exit(1);
}

const corsOptions = {
  origin: corsOrigin,
  optionsSuccessStatus: 200
}

app.get('/', cors(corsOptions), (req, res) => {
  const url = req.query.url;
  mercury.parse(url, { contentType: 'text'}).then(mercuryResult => {
    res.status(200).send({
      success: 'true',
      url: url,
      mercury: mercuryResult
    })
  })
});


app.listen(port, () => {
  console.log('running on port ' + port);
})
