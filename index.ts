const express = require('express')
const winston = require('winston')

//const {env, jwt} = require('./utils.ts')
const { env,jwt } = require('./utils.ts')
//const database = require('./database/')
//const users = require('./modules/users')(env, jwt, database)


// const authenticated = (req,res,next) => {
//   const token = req.query.jwt || req.body.jwt
//   jwt.verify(token)
//     .then(data => {
//       return database.findUserById(data.userId || data.user.id)
//         .then(user => {
//           if(!user) return Promise.reject(new Error('User not found'))
//           req.user = user
//           req.jwt = token
//           req.jwtData = data
//           next()
//         })
//     })
//     .catch(err => {
//       console.log(err.stack)
//       res.render('Error')
//     }
// }

exports.startServer = (config, callback) => {
  const app = express()
  const router = express.Router()
  const port = process.env.MICROSERVICE_PORT || 3000

  app.use('/auth', router)
  return app.listen(port, callback)
}

const server = exports.startServer({}, () => {
  const port = server.address().port
  winston.info(`Server listening on port ${port} => http://127.0.0.1:${port}/auth`)
})