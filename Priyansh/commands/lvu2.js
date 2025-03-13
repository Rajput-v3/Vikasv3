const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "lvu2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝑽𝒊𝒌𝒂𝒔 𝑹𝒂𝒋𝒑𝒖𝒕",
  description: "lvu2",
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

  var tl = ["𝑰 𝒍𝒐𝒗𝒆 𝒚𝒐𝒖 𝒕𝒐 𝒃𝒂𝒃𝒚 😽","𝑺𝒂𝒃𝒌𝒆 𝒔𝒂𝒎𝒏𝒆 𝒎𝒂𝒕 𝒃𝒐𝒍𝒐 𝒎𝒖𝒋𝒉𝒆 𝒔𝒉𝒂𝒓𝒂𝒎 𝒂𝒂𝒕𝒊 𝒉𝒂𝒊 🙈","𝑨𝒘𝒘 𝒎𝒆𝒓𝒂 𝒃𝒂𝒄𝒉𝒂🥺 𝒍𝒐𝒗𝒆 𝒖 𝒕𝒐 😙","𝑯𝒂𝒚𝒆𝒆 𝒑𝒂𝒓 𝒎𝒆 𝒕𝒐 𝒃𝒐𝒕 𝒉𝒖 𝒏𝒂 😄","😄 𝑴𝒆𝒓𝒆 𝒂𝒏𝒅𝒂𝒓 𝒕𝒐 𝒌𝒐𝒊 𝒃𝒉𝒂𝒗𝒏𝒂 𝒏𝒂𝒉𝒊 𝒉𝒂𝒊 🙃","𝑳𝒂𝒅𝒌𝒊 𝒅𝒆𝒌𝒉𝒊 𝒏𝒂𝒉𝒊 𝒌𝒊 𝒄𝒉𝒂𝒍𝒖 𝒉𝒐 𝒈𝒂𝒚𝒂 𝒕𝒉𝒂𝒓𝒌𝒊 🙄"];
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"
  if (event.body.indexOf("i love you") == 0 || (event.body.indexOf("I love you") == 0)) {
    var msg = {
      body: `》》 ${rand} \n《《`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
