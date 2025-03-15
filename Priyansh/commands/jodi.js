module.exports.config = {
        name: "jodi",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "𝐕𝐢𝐤𝐚𝐬 𝐑𝐚𝐣𝐩𝐮𝐭",
        description: "𝐅𝐢𝐱 𝐁𝐲 𝐕𝐢𝐤𝐚𝐬 𝐑𝐚𝐣𝐩𝐮𝐭",
        commandCategory: "Picture",
        cooldowns: 5,
        dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'pairing.png1');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://imgur.com/DIG3idi", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let pairing_img = await jimp.read(__root + "/pairing.png1");
    let pathImg = __root + `/pairing_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;

    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    pairing_img.composite(circleOne.resize(230,230),108,255).composite(circleTwo.resize(230,230), 434, 455);

    let raw = await pairing_img.getBufferAsync("image/png");

    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);

    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
module.exports. run = async function({ api, event, args, Users, Threads, Currencies }) {
  const axios = require("axios");
    const fs = require("fs-extra");
    const { threadID, messageID, senderID } = event;
    var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
        var tle = tl[Math.floor(Math.random() * tl.length)];
        let dataa = await api.getUserInfo(event.senderID);
        let namee = await dataa[event.senderID].name
        let loz = await api.getThreadInfo(event.threadID);
        var emoji = loz.participantIDs;
        var id = emoji[Math.floor(Math.random() * emoji.length)];
        let data = await api.getUserInfo(id);
        let name = await data[id].name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: name});
                arraytag.push({id: id, tag: name});

        var sex = await data[id].gender;
        var gender = sex == 2 ? "Male🧑" : sex == 1 ? "Female👩‍  " : "Tran Duc Bo";
var one = senderID, two = id;
    return makeImage({ one, two }).then(path => api.sendMessage({ body: `𝐎𝐰𝐧𝐞𝐫 ➻    𝙑𝙄𝙆𝘼𝙎 𝙍𝘼𝙅𝙋𝙐𝙏\n\n》》𝐌𝐮𝐣𝐡𝐞 𝐭𝐮𝐦𝐬𝐞 𝐰𝐚𝐡𝐚 𝐦𝐢𝐥𝐧𝐚 𝐡𝐚𝐮...𝐉𝐚𝐡𝐚 𝐭𝐮𝐦𝐬𝐞 𝐛𝐢𝐜𝐡𝐝𝐧𝐞 𝐤𝐚 𝐤𝐨𝐢 𝐫𝐚𝐬𝐭𝐚 𝐧𝐚 𝐡𝐨 🤍《《\n\n✿━━━━━━━💌━━━━━━━✿\n\n•••┼┼─𝐓𝐮 𝐦𝐢𝐥 𝐠𝐚𝐢 𝐡𝐚𝐢 𝐦𝐮𝐣𝐡𝐞 𝐭𝐨 𝐧𝐚𝐫𝐚𝐣 𝐡𝐚𝐢 𝐦𝐮𝐣𝐡𝐬𝐞 𝐦𝐚𝐡𝐚𝐤𝐚𝐥•••𝐊𝐞𝐡𝐭𝐞 𝐡𝐚𝐢 𝐚𝐛 𝐭𝐮 𝐦𝐮𝐣𝐡𝐬𝐞 𝐤𝐮𝐜𝐡 𝐦𝐚𝐧𝐠𝐭𝐚 𝐧𝐚𝐡𝐢 𝐡𝐚𝐢《《•••\n\n✿━━━━━━━💌━━━━━━━✿\n\n➻ 𝐍𝗮ɱɘ •• ${namee} \n\n➻ 𝐍𝗮ɱɘ ••  ${name} \n\n✿━━━━━━━💌━━━━━━━✿\n\n🤍𝑨𝒑𝒑 𝒅𝒐𝒏𝒐 𝒌𝒆 𝒈𝒖𝒏: 〘${tle}〙`, : arraytag, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
      }
