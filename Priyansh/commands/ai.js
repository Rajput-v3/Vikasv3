const axios = require("axios");

const config = {
  name: "jaanu",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Arun ツ",
  description: "[ 𝗠𝗶𝘀𝗵𝗮 𝗔𝙞]",
  commandCategory: "no prefix",
  usages: "𝘼𝙨𝙠 𝘼 𝙌𝙪𝙚𝙨𝙩𝙞𝙤𝙣 𝙁𝙧𝙤𝙢 𝗠𝗶𝘀𝗵𝗮 𝘼𝙄",
  cooldowns: 0
};

const handleEvent = async function ({ api, event, client, __GLOBAL }) {

  if (event.body.indexOf("janam") === 0 || event.body.indexOf("shagun") === 0 || event.body.indexOf("Janam") === 0 || event.body.indexOf("cutie") === 0) {
    const { threadID, messageID } = event;
    const input = event.body;
    const message = input.split(" ");

    if (message.length < 2) {
      api.sendMessage("𝑯𝒆𝒍𝒍𝒐➤𝑻𝒚𝒑 𝒎𝒚 𝒏𝒂𝒎𝒆 𝒋𝒂𝒏𝒂𝒎/𝒔𝒉𝒂𝒈𝒖𝒏 𝒂𝒏𝒅 𝒂𝒔𝒌 𝒎𝒆 𝒚𝒐𝒖𝒓 𝒒𝒖𝒕𝒊𝒐𝒏𝒔《《", threadID);
    } else {
      try {
        api.sendMessage("🔎...", threadID);

        const text = message.slice(1).join(" "); // Join the remaining parts of the message
        const encodedText = encodeURIComponent(text);

        const ris = await axios.get(`https://api.dreaded.site/api/chatgpt?text=${encodedText}`);
        const resultai = ris.data.result.prompt;

        api.sendMessage(`${resultai}\n\n\n┎───────────┑
 ❘ 𝒞𝑟𝑒𝑑𝑖𝑡𝑠 »𝓥𝓲𝑘𝓪𝑠 𝓡𝓪𝑝𝓾𝓽 🤍
┗───────────┙
\n\n💜🤍💙▬▬▬▬▬▬💙🤍💜`, threadID);
      } catch (err) {
        console.error(err);
        api.sendMessage("❌ 𝙽𝚘 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎 𝚁𝚎𝚌𝚎𝚒𝚟𝚎𝚍 𝚏𝚛𝚘𝚖 𝚝𝚑𝚎 𝚜𝚎𝚛𝚟𝚎𝚛: " + err + " 😸", threadID);
      }
    }
  }
};

const run = function ({ api, event, client, __GLOBAL }) {
  // The run function is currently empty. You may add functionality here if needed.
};

module.exports = { config, handleEvent, run };
