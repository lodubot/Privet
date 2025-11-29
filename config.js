//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +48459237792
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

//contact details
global.ownernomer = "46731299491" //owner number
global.ownername = "MOTU_PATALU_HINDU_HAI" //owner name
global.dev = ["46731299491"]
global.ownername = "46731299491"
global.ytname = "YT: MOTU_PATALU_HINDU_HAI Tech" //youtube channel name
global.hindu = "@MOTU_PATALU_HINDU_HAI" //github username
global.location = "MOTU_PATALU_HINDU_HAI" //location

global.ownernumber = '46731299491'  //creator number
global.ownername = 'MOTU_PATALU_HINDU_HAI' //owner name
global.botname = 'MOTU PATLU V3 Bug' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'MOTU_PATALU_HINDU_HAI\n\nContact: +46731299491'

//console view/theme
global.themeemoji = '🪀'
global.wm = "MOTU PATLU Inc."

//theme link
global.link = 'https://t.me/MRMOTUPATLUCHAT'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: "Infinity"
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @MR_MOTU_PATLUBY\nTelegram: @MOTU_PATALU_HINDU_HAI\nWhatsApp: +46731299491`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @MR_MOTU_PATLUBY\nTelegram: @MOTU_PATALU_HINDU_HAI\nWhatsApp: +46731299491`,
}

global.banner = ["46731299491"]

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
