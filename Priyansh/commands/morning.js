const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "morning",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Vikas Rajput",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["—  जय श्री ༢།म >❤🦋🚩🪽   𝗚❍❍𝗗𝗠❍𝗥𝗡𝗜𝗡𝗚 🤍","🦚 ཞ།ધે ཞ།ધે 🦚   𝐆❍❍𝐃 𝐌❍𝐑𝐍𝐈𝐍𝐆","🦋⃟ 𐍂ᴀᴅʜᴇ Kʀɪsʜɴᴀ❤️    𝐆❍❍𝐃 𝐌❍𝐑𝐍𝐈𝐍𝐆","𝔍𝔞𝔦⁣𓆩 ꢺ𝖍𝖗𝖊𝖊 ᭄🆁 ą🅼   𝐆❍❍𝐃 𝐌❍𝐑𝐍𝐈𝐍𝐆","➤𝑱𝒂𝒊 𝑴𝒂𝒉𝒂𝒌𝒂𝒍 🤍🦋    🖤𝑺𝒖𝒃𝒉𝑷𝒓𝒂𝒃𝒉𝒂𝒕🖤","🤍𝑹𝒂𝒎 𝑺𝒊𝒚𝒂 𝒌𝒊 𝒋𝒂𝒊 🤍    ▶𝑺𝒖𝒃𝒉 𝑷𝒓𝒂𝒃𝒉𝒂𝒕◀"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("morning") == 0 || (event.body.indexOf("Good morning") == 0)) {
    var msg = {
      body: `🤍  ${name}  🤍, \n\n 🚩 𝑨𝒑𝒌𝒂 𝑫𝒊𝒏 𝑴𝒂𝒏𝒈𝒂𝒍𝒎𝒂𝒚 𝒉𝒐 🚩`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
