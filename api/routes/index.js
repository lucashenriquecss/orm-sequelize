const bodyParser = require('body-Parser');
const pessoas = require('./pessoasRoutes')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
    app.use(
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
      pessoas,
      niveis,
      turmas
    )
}