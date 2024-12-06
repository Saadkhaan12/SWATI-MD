const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mvhETSzK#o80sWI9TN5Zgq8r_ymrsCnsn7D9N4hiLfZEU6cBB96o",
// add your Session Id 
PREFIX: process.env.PREFIX || ",",
// add your prifix for bot
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/hzagwo.jpg",
// add img for alive msg
ALIVE_MSG: process.env.ALIVE_MSG || "> Zinda Hun Yar *SWATI-AI*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
SUDO_NB: process.env.SUDO_NB || "",
// add your sudo number like 92314xxxxxx
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
// add your mongodb
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "null,sax").split(','),
// add custom antu bad words 
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
// make true or false status auto seen
MODE: process.env.MODE || "public",
// make bot public or private 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
  // make it true or fasle for only react on owner msg only 
AUTO_VOICE: process.env.AUTO_VOICE || "false"
  // make auto voice false or true
};
