let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
    let thumb = 'https://files.catbox.moe/zpueot.jpg'
  //  await conn.sendFile(m.chat, thumb, 'galau.jpg', `${pickRandom(global.galau)}`, m)
  
  let cap = `Sc Yuta-Md:
  https://www.mediafire.com/file/5d40tfzzijwk3qc/YutaBotzV20_NEW__.zip
  
Sc By FernazerCode-Ai:
  https://www.mediafire.com/file/ha6ocshjs4pnaue/Sc_By_Fernazer.zip/file

SC SHIZUKA-MD:
https://github.com/Tanmyname/Shizuka-V1.3
  
  Utamakan Subscribe Youtube Dulu☺`
   // conn.sendFile(m.chat, './mp3/galau.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
    await  conn.sendMessage(m.chat, {
text: cap,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: `s ᴄ ғ ʀ ᴇ ᴇ`,
body: '2024 © ᴀʟʏᴀ',
thumbnailUrl: thumb, 
sourceUrl: "https://whatsapp.com/channel/",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.command = /^scfree$/i;


module.exports = handler