const { Router } = require('express')
const router = Router()


// Test route
router.use('/test', async (req, res) => {
  res.end('Test API!')
})

module.exports = router
