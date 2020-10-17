'use strict';
const dotenv = require("dotenv");
const jwt = require('jsonwebtoken')
dotenv.config();
/* Récupération du header bearer */
const extractBearerToken = headerValue => {
  if (typeof headerValue !== 'string') {
    return false
  }

  const matches = headerValue.match(/(bearer)\s+(\S+)/i)
  return matches && matches[2]
}

/* Vérification du token */
const checkTokenMiddleware = async (req, res, next) => {
  // Récupération du token
  const token = req.headers.authorization && await extractBearerToken(req.headers.authorization)
  // Présence d'un token
  if (!token) {
    return res.status(401).json({ message: 'Error. Need a token' })
  }

  // Véracité du token
  await jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: 'Error. Bad token' })
    } else {
      return next()
    }
  })
}

exports.checkTokenMiddleware = checkTokenMiddleware
exports.extractBearerToken = extractBearerToken
