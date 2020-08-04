const express = require('express')
let schedule = require('node-schedule');
// Create express instance
const app = express()

// Require API routes
const classement = require('./routes/classement')
const apiCall=require('./data/apiCall')
const PlayerStats= require('./routes/playerStats')

// Import API Routes

app.use(classement)
app.use(PlayerStats)
// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

let call = schedule.scheduleJob('0 0 * * * *', async function () { //every hour runs the task
  await apiCall.writeClassement()
  await apiCall.writePlayerStats()
});
