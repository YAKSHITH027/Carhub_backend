const jwt = require('jsonwebtoken')
const isAuthonticated = (req, res, next) => {
  try {
    let token = req.headers.authorization

    jwt.verify(token, `${process.env.secret_key}`, function (err, decoded) {
      if (decoded) {
        // adding userId to the body so that we can use it later in controller
        req.body.userId = decoded.userId
        next()
      } else {
        res.status(400).send({ msg: "you don't have authorization" })
      }
    })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

module.exports = { isAuthonticated }
