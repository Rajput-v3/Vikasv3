const fs = require("fs");
module.exports.config = {
	name: "rajput",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Vikas")==0 || event.body.indexOf("vikas")==0 || event.body.indexOf("RAJPUT")==0 || event.body.indexOf("Vikku")==0) {
		var msg = {
				body: "❖ ❍𝐖𝐍𝐄𝐑 ❖  💛\n 😈𝐕𝐈𝐊𝐀𝐒 𝐑𝐀ᒍ𝐏𝐔𝐓 😈\n▬▬▬▬▬▬▬▬▬▬▬▬💙\n💬 ┠𝐁❍𝐓 𝐖𝐀𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆┨ 💬\n💬 ┠𝐄𝐍ᒍ❍𝐘  𝐁𝐄 𝐇𝐀𝐏𝐏𝐘┨ 💬\n▬▬▬▬▬▬▬▬▬▬▬▬💛\n𝐀𝐍𝐘 𝐊𝐈𝐍𝐃 ❍𝐅 𝐇𝐄𝐋𝐏\n𝐂❍𝐍𝐓𝐂𝐓 𝐌𝐄 ❍𝐍 𝐅𝐂𝐁❍❍𝐊\n▬▬▬▬▬▬▬▬▬▬▬▬💙     ┎───────────┑                      𝐁❍𝐓 𝐍𝐀𝐌𝐄 »𝗦ⲏ𝐚𝗴นη🦋    ┗───────────┙                    ▬▬▬▬▬▬▬▬▬▬▬▬💛",
				attachment: fs.createReadStream(__dirname + `/noprefix/owner.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📸", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
