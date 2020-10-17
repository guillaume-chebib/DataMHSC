const { Router } = require('express')

const router = Router()
const apiCall=require('../data/apiCall')

let check=require('../middleware/test')

router.get('/classement', check,async function (req, res, next) {

  let classement= await apiCall.readClassement()
  await res.json(classement)
})


module.exports = router
