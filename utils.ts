const prefix = 'AUTH_'
const defaults = {
  JWT_ALGORITHM: 'HS256'
}

module.exports.env = (env = {}) => (key, defaultValue) => {
  return [
    env[prefix + key],
    env[key],
    process.env[prefix + key],
    process.env[key],
    defaultValue,
    defaults[key]
  ].find(value => value !== null)
}

const jsonwebtoken = require('jsonwebtoken')

module.exports.jwt = env => {
  const algorithm = env('JWT_ALGORITHM')
  const isHMAC = algorithm.substring(0, 1) === 'H'
  const secretOrPrivateKey = isHMAC ? env('JWT_SECRET') : env('JWT_PRIVATE_KEY')
  const secretOrPublicKey = isHMAC ? env('JWT_SECRET') : env('JWT_PUBLIC_KEY')
  const expiresIn = env('JWT_EXPIRES_IN')
  const notBefore = env('JWT_NOT_BEFORE')

  return {
    sign (payload, options) {
      const opts = Object.assign({ algorithm, expiresIn, notBefore }, options)
      return new Promise((resolve, reject) => {
        jsonwebtoken.sign(payload, secretOrPrivateKey, opts, (err, token) => {
          err ? reject(err) : resolve(token)
        })
      })
    },

    verify (token, options) {
      const opts = Object.assign({ algorithm }, options)
      return new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, secretOrPublicKey, opts, (err, decoded) => {
          err ? reject(err) : resolve(decoded)
        })
      })
    }
  }
}