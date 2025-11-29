//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "7958558348:AAE9bDTZYgGnt3XBoxqYCj_PaJFy_Ky3YYw" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "MOTU PATLU BUG V3" //your bot name
global.OWNER_NAME = "@MOTU_PATALU_HINDU_HAI" //your name with sign @
global.OWNER = ['https://t.me/MOTU_PATALU_HINDU_HAI'] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7865363008"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://files.catbox.moe/f4dsta.jpg' //your bot pp


//approval
global.GROUP_ID = -1002228455339; // Replace with your group ID
global.CHANNEL_ID = -1002228455339; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/X5X5X5X5X6"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/X5X5X5X5X6"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://t.me/MRMOTUPATLUCHAT"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@MR_MOTU_PATLUBY"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://www.instagram.com/___lord__hanuman__ji___07?igsh=MWRoYWlsNzRzeGp6aw=="; // Replace with your ig link

global.owner = global.owner = ['46731299491'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
