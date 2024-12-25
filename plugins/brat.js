
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) return conn.reply(m.chat, `text? Contoh.  .brat Jancok`, m)
let hasil = await fetch(`https://api.siputzx.my.id/api/m/brat?text=${text}`)
    
await m.reply(await hasil.toMessage());
//conn.sendFile(m.chat, hasil, '', wm, m)
	
}
handler.help = ['brat']
handler.tags = ['maker']
handler.command = /^(brat)$/i
handler.limit = true

module.exports = handler