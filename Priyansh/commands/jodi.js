const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");

module.exports.config = {
  name: "jodi",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐕𝐢𝐤𝐚𝐬 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Fix By Vikas Rajput",
  commandCategory: "Picture",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": ""
  }
};

module.exports.onLoad = async () => {
  const { existsSync, mkdirSync } = fs;
  const { downloadFile } = global.utils;
  const dirMaterial = path.resolve(__dirname, 'cache', 'canvas');
  const pairingImagePath = path.resolve(dirMaterial, 'pairing.png');

  if (!existsSync(dirMaterial)) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(pairingImagePath)) {
    await downloadFile("https://i.postimg.cc/YS8H0rFK/DIG3idi.jpg", pairingImagePath);
  }
};

async function circle(imagePath) {
  const jimp = require("jimp");
  let image = await jimp.read(imagePath);
  image.circle();
  return await image.getBufferAsync("image/png");
}

async function makeImage({ one, two }) {
  const jimp = require("jimp");
  const __root = path.resolve(__dirname, "cache", "canvas");

  let pairing_img = await jimp.read(path.resolve(__root, "pairing.png"));
  let pathImg = path.resolve(__root, `pairing_${one}_${two}.png`);
  let avatarOne = path.resolve(__root, `avt_${one}.png`);
  let avatarTwo = path.resolve(__root, `avt_${two}.png`);

  const getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  const getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));

  pairing_img
    .composite(circleOne.resize(230, 230), 108, 255)
    .composite(circleTwo.resize(230, 230), 434, 255);

  let raw = await pairing_img.getBufferAsync("image/png");
  fs.writeFileSync(pathImg, raw);

  fs.unlinkSync(avatarOne);
  fs.unlinkSync(avatarTwo);

  return pathImg;
}

module.exports.run = async function ({ api, event, args, Users, Threads, Currencies }) {
  const { threadID, messageID, senderID } = event;
  const tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
  const tle = tl[Math.floor(Math.random() * tl.length)];

  let userInfo = await api.getUserInfo(senderID);
  let namee = userInfo[senderID].name;

  let threadInfo = await api.getThreadInfo(threadID);
  let members = threadInfo.participantIDs.filter(id => id !== senderID);
  let randomID = members[Math.floor(Math.random() * members.length)];

  let partnerInfo = await api.getUserInfo(randomID);
  let name = partnerInfo[randomID].name;

  let arraytag = [
    { id: senderID, tag: namee },
    { id: randomID, tag: name }
  ];

  let gender = partnerInfo[randomID].gender == 2 ? "Male" : partnerInfo[randomID].gender == 1 ? "Female" : "Other";

  let one = senderID, two = randomID;
  return makeImage({ one, two }).then(path => {
    api.sendMessage({
      body:
        `𝐎𝐰𝐧𝐞𝐫 ➻    𝙑𝙄𝙆𝘼𝙎 𝙍𝘼𝙅𝙋𝙐𝙏\n\n` +
        `》》𝐌𝐮𝐣𝐡𝐞 𝐭𝐮𝐦𝐬𝐞 𝐰𝐚𝐡𝐚 𝐦𝐢𝐥𝐧𝐚 𝐡𝐚𝐮...𝐉𝐚𝐡𝐚 𝐭𝐮𝐦𝐬𝐞 𝐛𝐢𝐜𝐡𝐝𝐧𝐞 𝐤𝐚 𝐤𝐨𝐢 𝐫𝐚𝐬𝐭𝐚 𝐧𝐚 𝐡𝐨 🤍《《\n\n` +
        `✿━━━━━━━💌━━━━━━━✿\n\n` +
        `•••┼┼─𝐓𝐮 𝐦𝐢𝐥 𝐠𝐚𝐢 𝐡𝐚𝐢 𝐦𝐮𝐣𝐡𝐞 𝐭𝐨 𝐧𝐚𝐫𝐚𝐣 𝐡𝐚𝐢 𝐦𝐮𝐣𝐡𝐬𝐞 𝐦𝐚𝐡𝐚𝐤𝐚𝐥•••𝐊𝐞𝐡𝐭𝐞 𝐡𝐚𝐢 𝐚𝐛 𝐭𝐮 𝐦𝐮𝐣𝐡𝐬𝐞 𝐤𝐮𝐜𝐡 𝐦𝐚𝐧𝐠𝐭𝐚 𝐧𝐚𝐡𝐢 𝐡𝐚𝐢《《•••\n\n` +
        `✿━━━━━━━💌━━━━━━━✿\n\n` +
        `➻ 𝐍𝗮ɱɘ •• ${namee}\n➻ 𝐍𝗮ɱɘ •• ${name}\n\n` +
        `✿━━━━━━━💌━━━━━━━✿\n\n` +
        `🤍𝑨𝒑𝒑 𝒅𝒐𝒏𝒐 𝒌𝒆 𝒈𝒖𝒏: 〘${tle}〙`,
      mentions: arraytag,
      attachment: fs.createReadStream(path)
    }, threadID, () => fs.unlinkSync(path), messageID);
  });
};
