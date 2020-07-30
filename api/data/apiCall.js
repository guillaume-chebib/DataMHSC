'use strict';
const dotenv = require("dotenv");
dotenv.config();
const fs = require('fs').promises; //write data into json or read data from json
let request = require("request");

async function writeClassement() {
  let options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/525',
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.KEY_API_FOOTBALL
    }
  };

    await request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      //let data = await JSON.stringify(body);
      try {
        await fs.writeFile('./api/data/classement.json', body); // need to be in an async function
        console.log("Classement updated at " + new Date())
      } catch (error) {
        console.log(error)
      }
    });
}

async function readClassement() {

  try {
    const data = await fs.readFile('./api/data/classement.json'); // need to be in an async function
    let student = await JSON.parse(data);
    return student;
  } catch (error) {
    console.log(error)
  }
}


exports.writeClassement = writeClassement
exports.readClassement = readClassement


