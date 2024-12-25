const fetch = require('node-fetch');
const axios = require('axios');


let handler = async (m, { conn, args, text, isPrems, isOwner, isNdikz, usedPrefix, command }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* .aibocchi Siapa presiden Indonesia?`, m)
  
  let name = m.sender
  await conn.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }});

  let res = await fetch(`${alyaNdikz}api/cai?msg=${text}&chara_id=QOVcg-lRnHM8RntgCY_YZyHcV9Q9b_1lMnxQXknVtKU&single_reply=false&apikey=${alyaapi}`)
  let vas = await res.json()
  let v = vas.data
  
  await conn.sendMessage(m.chat, { react: { text: `🌸`, key: m.key }});
  
  let hasil = `${v.content}`;
  await m.reply(hasil)
  
};

handler.help = ['alya (text)']
handler.command = /^(alya)$/i
handler.tags = ['Cai'];
handler.limit = 4
handler.premium = false
handler.ndikz = true
module.exports = handler;