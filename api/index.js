const express = require('express')
let schedule = require('node-schedule');
// Create express instance
const app = express()

// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')
const classement = require('./routes/classement')
const apiCall=require('./data/apiCall')


// Import API Routes

app.use(users)
app.use(test)
app.use(classement)

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
});
