module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/2n53Q8K.jpeg","https://i.imgur.com/AEBVH5D.jpeg"];
var callback = () => api.sendMessage({body:`🤍 𝘼𝘿𝙈𝙄𝙉 𝘼𝙉𝘿 𝘽❍𝙏 𝙄𝙉𝙁❍ 🤍

𝙅𝘼𝙔 𝙎𝙃𝙍𝙀𝙀 𝙍𝘼𝙈 ➤

जय महाकाल 💛😊

☄️𝘽𝙊𝙏 𝙉𝘼𝙈𝙀☄️➤ ${global.config.BOTNAME}
✧══════•❁❀❁•══════

Bᴏᴛ Pʀᴇғɪx➤ ${global.config.PREFIX}

❍ᴡɴᴇʀ➤𝙑𝙄𝙆𝘼𝙎▶ 𝙍𝘼𝙅𝙋𝙐𝙏

Uᴘᴛɪᴍᴇ 🤍

Tᴏᴅᴀʏ ɪs ➤ ${juswa} 

⚡Bᴏᴛ ɪs ʀᴜɴɴɪɴɢ⚡ ${hours}:${minutes}:${seconds}.

Tʜᴀɴᴋs Fᴏʀ Usɪɴɢ Mʏ ${global.config.BOTNAME} Bᴏᴛ🖤


🖤•ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•🖤
▶𝙑𝙄𝙆𝘼𝙎➤𝙍𝙐𝘿𝙍𝘼 𝙍𝘼𝙅𝙋𝙐𝙏◀


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
