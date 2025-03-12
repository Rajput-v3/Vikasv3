module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinvideo");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `🍒💙•••Ɓ❍ʈ Ƈøɳɳɛƈʈɛɗ•••💞🌿
        
🕊️🌸..Ɦɛɭɭ❍ Ɠɣus Ɱɣ Ɲɑɱɛ Is 🍒💙•••✦𝗦ⲏ𝐚𝗴นη🦋✦•••💞🌿

     ✨💞Ɱɣ Ꭾɽɛfɪᵡ ɪs / 

\n\nƬɣƥɛ${global.config.PREFIX}ꞪɛɭᎮ Ƭ❍ søø Ɱɣ Ƈøɱɱɑɳɗ ɭɪsʈ...🤍💫\n
\nƐxɑɱƥɭɛ :\n

${global.config.PREFIX}Sɧɑɣɽɪ..💜(Ƭɛxʈ)\n${global.config.PREFIX} (Ƥɧøʈø)🌬️🌳🌊

🦋🌸Ƭɣƥɛ${global.config.PREFIX}Ɦɛɭƥ2 (Ɑɭɭ Ƈøɱɱɑɳɗʂ)...☃️💌

${global.config.PREFIX} ɪɳfø (ɑɗɱɪɳ Iɳføɽɱɑʈɪøɳ)👀✍️

Ɱɣ ❍wɳɛɽ ɪs Ɱɽ 𝙑𝙄𝙆𝘼𝙎 𝙍𝘼𝙅𝙋𝙐𝙏

${global.config.PREFIX}📍Ƈɑɭɭɑɗ føɽ Ɑɳɣ ɪʂʂuɛ 

<<<------------------------------>>>

🤍𝐎𝐖𝐍𝐄𝐑▶𝙍𝙐𝘿𝙍𝘼 𝙍𝘼𝙅𝙋𝙐𝙏◀🤍
\n🖤 𝑌𝑜𝑢 𝑐𝑎𝑛 𝑐𝑎𝑙𝑙 ℎ𝑖𝑚➦𝙑𝙄𝙆𝙆𝙐
\n🤍 𝓒𝓻𝓮𝓭𝓲𝓽𝓼 ➺➤ 𝙑𝓲𝓴𝓪𝑠 𝓡𝓪𝓳𝒑𝒖𝑡 🖤\n
𝑓𝑜𝑟 𝑎𝑛𝑦 𝑘𝑖𝑛𝑑 𝑜𝑓 ℎ𝑒𝑙𝑝 𝑐𝑜𝑛𝑡𝑒𝑐𝑡 

 𝙑𝙄𝙆𝘼𝙎➤𝙍𝙐𝘿𝙍𝘼 𝙍𝘼𝙅𝙋𝙐𝙏 

`, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinvideo");
            const pathGif = join(path, `${threadID}.video`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "𝑯𝒆𝒍𝒍𝒐 𝒎𝒓/𝒎𝒊𝒔𝒔 {name},\n─────────────────\n 𝒚𝒐𝒖 𝒂𝒓𝒆 𝒕𝒉𝒆 {soThanhVien}𝒎𝒆𝒎𝒃𝒆𝒓 ─────────────────\n𝒐𝒇 {threadName} 𝑮𝒓𝒐𝒖𝒑\n─────────────────\n𝒑𝒍𝒆𝒂𝒔𝒆 𝒆𝒏𝒋𝒐𝒚 𝒂𝒏𝒅 𝒔𝒕𝒂𝒚\n─────────────────\n𝒎𝒂𝒌𝒆 𝒍𝒐𝒕𝒔 𝒐𝒇 𝒇𝒓𝒊𝒆𝒏𝒅𝒔 =)\n──────-°°__𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐 °__!!>☁️✨❤️ My Owner  ✦͙͙͙͙❥⃝∗⁎.ʚ 𝙑𝙄𝙆𝘼𝙎➤𝙍𝙐𝘿𝙍𝘼 𝙍𝘼𝙅𝙋𝙐𝙏 ɞ.⁎∗❥⃝**͙✦͙͙͙ 🤍" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
              }
