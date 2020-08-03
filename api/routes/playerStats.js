const { Router } = require('express')

const router = Router()
const apiCall=require('../data/apiCall')
let check=require('../middleware/test')

router.get('/playerStats', check,async function (req, res, next) {
  let stats= await apiCall.readPlayerStats()
  await res.json(stats)
})


module.exports = router
