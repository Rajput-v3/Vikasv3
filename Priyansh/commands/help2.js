 module.exports.config = {
	name: "help2",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "PetterSever",
	description: "Beginner's Guide",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 1,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 300
	}
};

module.exports.languages = {
	//"vi": {
	//	"moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
	//	"helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
	//	"user": "Người dùng",
  //      "adminGroup": "Quản trị viên nhóm",
  //      "adminBot": "Quản trị viên bot"
//	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 9999;
    //*số thứ tự 1 2 3.....cú pháp ${++i}*//
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `✰『 ${++i} 』 ➬${item} \n`;
    
    
    const siu = `
╭────────╮
👉🏻 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧 👈🏻
╰────────╯

                 𝐌𝐀𝐃𝐄 𝐁𝐘
                        💙
         😈𝐕𝐈𝐊𝐀𝐒 𝐑𝐀ᒍ𝐏𝐔𝐓😈
🐧▬▬▬▬▬▬▬▬▬▬▬▬🐧`;
    
 const text = `\n╭──────╮
✅ 𝐏𝐀𝐆𝐄  
╰──────╯ (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})

𝗧𝘆𝗽𝗲: {•}𝗛𝗲𝗹𝗽2
𝗧𝗼𝘁𝗮𝗹 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀: 384
💙▬▬▬▬▬▬▬▬▬▬▬▬💛
╭────────╮
💬 𝗡𝗔𝗠𝗘 𝗢𝗪𝗡𝗘𝗥 💬
╰────────╯  
╭──────╮
👑𝐕𝐈𝐊𝐀𝐒 𝐑𝐀ᒍ𝐏𝐔𝐓👑
╰──────╯
💛▬▬▬▬▬▬▬▬▬▬▬▬💙
 ᴜꜱᴇ ᴛʜᴇ ᴄᴍᴍᴅꜱ ᴛᴏ ᴜꜱᴇ ᴛʜᴇ  ʙᴏᴛ

  ꜰᴏʀ ᴍᴀɴʏ ᴄᴏᴍᴍᴀɴᴅꜱ ᴜꜱᴇ »»»
                    {.ʜᴇʟᴘ2}

ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ᴍᴇ ʙᴏᴛ ʏᴀᴍʀᴀᴊ
💙▬▬▬▬▬▬▬▬▬▬▬▬💛
𝐀𝐍𝐘 𝐊𝐈𝐍𝐃 ❍𝐅 𝐇𝐄𝐋𝐏  𝐔𝐒𝐄 𝐋𝐈𝐍𝐊
╭───────╮
🖇️ :https://www.facebook.com/profile.php?id=100081181726230&mibextid=ZbWKwL
╰───────╯ 
𝐂❍𝐍𝐓𝐀𝐂𝐓 𝐌𝐄 ❍𝐍 𝐅𝐀𝐂𝐄𝐁❍❍𝐊      
💛▬▬▬▬▬▬▬▬▬▬▬▬💙
┎───────────┑
 ❘ 𝐁❍𝐓 𝐍𝐀𝐌𝐄 »𝗦ⲏ𝐚𝗴นη🦋
┗───────────┙
💙▬▬▬▬▬▬▬▬▬▬▬▬💛`;
 
    return api.sendMessage(siu + "\n\n" + msg  + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		}, event.messageID);
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};
