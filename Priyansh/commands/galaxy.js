const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "pic",
  version: "1.0",
  hasPermssion: 0,
  credits: ` 𝖵𝗂𝗄ꫝ𝗌 𝖱ꫝ𝗃𝗉𝗎𝗍`,
  description: "Generate logos",
  commandCategory: "logo",
  usages: "logo",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "list") {
    const logoTypes = [ 
      "\n : 🩵 𝐁𝐘 𝐕𝐈𝐊𝐀𝐒 𝐑𝐀ᒍ𝐏𝐔𝐓 🩵", "\n1 :  ➠ Bʟᴀᴄᴋ Pɪɴᴋ", "\n2 :  ➠ Bʟᴀᴄᴋ Pɪɴᴋ ", "\n3 : ➠ Sɪʟᴠᴇʀ ", "\n4 : ➠ Nᴀʀᴜᴛᴏ","\n5 : Dɪɢɪᴛᴀʟ Gʟɪᴛᴄʜ","\n6 : ➠ Pɪxᴇʟ Gʟɪᴛᴄʜ",
      "\n7 : ➠ Cᴏᴍɪᴄ Sᴛʏʟᴇ", "\n8 : ➠ Nᴇᴏɴ Lɪɢʜᴛ", "\n9 : ➠ Fʀᴇᴇ Bᴇᴀʀ", "\n10 : ➠ Dᴇᴠɪʟ Wɪɴɢꜱ", "\n11 : ➠ Sᴀᴅ Gɪʀʟ", "\n12 : ➠ Lᴇᴀᴠᴇꜱ",
      "\n13 : ➠ Dʀᴀɢᴏɴ Bᴀʟʟ", "\n14 : ➠ Hᴀɴᴅ Wʀɪᴛᴛᴇɴ", "\n15 : ➠ Nᴇᴏɴ Lɪɢʜᴛ", "\n16 :➠ 3ᴅ Cᴀꜱᴛʟᴇ Pᴏᴘ","\n\nmore logo for : logov2"
    ];
    return api.sendMessage(`All types of logos:\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Use: logo number <name>\n to see all logo types: logo list`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl =`https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-3d-colorful-paint-text-effect-online-801.html&name=${name}`;
      message = "『𝙂𝙇𝙊𝙒𝙄𝙉𝙂』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤🩵🪽 ➫ ";
      break;
    case "2":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/2?text=${name}`;
      message = "『𝘾𝙝𝙧𝙤𝙢𝙚 𝙇𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽 ➫ ";
      break;
    case "3":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/3?text=${name}`;
      message = "『𝘽𝙡𝙖𝙘𝙠 𝙈𝙚𝙩𝙖𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤🩵🪽 ➫";
      break;
    case "4":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html&name=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙏𝙚𝙭𝙩』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽 ➫ ";
      break;
    case "5":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&name=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙈𝙚𝙩𝙖𝙡』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽 ➫ ";
      break;
    case "6":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html&name=${name}`;
      message = "『𝙃𝙤𝙩 𝙇𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤🩵🪽 ➫ ";
      break;
    case "7":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html&name=${name}`;
      message = "『𝘾𝙖𝙧𝙗𝙤𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽: ➫ ";
      break;
    case "8":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html&name=${name}`;
      message = "『𝙔𝙚𝙡𝙡𝙤𝙬』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤🩵🪽 ➫ ";
      break;
    case "9":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html&name=${name}`;
      message = "『𝙂𝙤𝙡𝙙𝙚𝙣』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽 ➫ ";
      break;
    case "10":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=${name}`;
      message = "『𝘽𝙡𝙪𝙚 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽 ➫ ";
      break;
    case "11":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html&name=${name}`;
      message = "『𝘾𝙮𝙖𝙣 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤🩵🪽 ➫ ";
      break;
    case "12":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&name=${name}`;
      message = "『𝙂𝙧𝙚𝙚𝙣 𝙇𝙤𝙜𝙤』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽 ➫ ";
      break;
    case "13":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&name=${name}`;
      message = "『𝙊𝙧𝙖𝙣𝙜𝙚 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤🩵🪽 ➫ ";
      break;
    case "14":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&name=${name}`;
      message = "『𝙋𝙪𝙧𝙥𝙡𝙚 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽 ➫ ";
      break;
    case "15":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&name=${name}`;
      message = "『𝙍𝙚𝙙 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤💙🪽 ➫ ";
      break;
      case "16":
      apiUrl = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&name=${name}`;
      message = "『𝙍𝙚𝙙 𝙅𝙚𝙬𝙚𝙡𝙧𝙮』 ➫ 𝘽𝙖𝙗𝙮 𝙔𝙖𝙡𝙤 𝘼𝙥𝙣𝙖 𝙇𝙤𝙜𝙤🩵🪽 ➫ ";
      break;
    default:
      return api.sendMessage(`𝙄𝙣𝙫𝙖𝙡𝙞𝙙 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚! 𝙐𝙨𝙚: +𝙡𝙤𝙜o 𝙡𝙞𝙨𝙩 𝙩𝙤 𝙨𝙝𝙤𝙬 𝙖𝙡𝙡 𝙡𝙤𝙜𝙤 𝙩𝙮𝙥𝙚𝙨`, threadID, messageID);
  }


  api.sendMessage("𝘽𝙖𝙗𝙮 𝙏𝙝𝙤𝙧𝙖 𝙒𝙖𝙞𝙩 𝙆𝙖𝙧𝙤 𝑳𝒐𝒈𝒐 𝘽𝙖𝙣 𝙍𝙖𝙝𝙖 𝙃𝙖 𝘼𝙥𝙠𝙖🩵🪽 ➫ ", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};};
