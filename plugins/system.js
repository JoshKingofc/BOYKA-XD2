const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "🧬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =`
┌───────────────────◉▷
┝ ✨ *Runtime :-  ${runtime(process.uptime())}*    
┝ 🎁 *Ram usage :- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}GB / ${Math.round(require('os').totalmem / 1024 / 1024)}TB*
┝ 🦕 *Platform :- ${os.hostname()}*
┝ 🥀 *Owner* :- 𝔑3𝔱𝔎𝔦𝔫𝔤* 
┝ 👾 *Version :- 1.0.0*
└───────────────────◉▷`

return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})
