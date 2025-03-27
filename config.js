//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://f.uguu.se/DmPSJmcb.jpg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "2349071978357";
global.owner = process.env.OWNER_NUMBER || "2348084644182";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://f.uguu.se/DmPSJmcb.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01kZGVnWjU2K0xRd21vbFhKelF2NkZTTmNQZzkxcXZCMnVwbXZsbEZGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGY3aWxDQVhTUWxRaUxVVjJ2YVkwcHN2Z0VhWE00MnkwT293aEF5QXowbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSWlmT1h1UXlRdjlDUk9yN2NpRmZhOTNVNVhwRGFlN1BIZldRWGd0cUhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaSlUyV2IySG1JdGNZUnl3QXFwVVdiUlJTN2hCOVlCRFFydkZSRHhPWEJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFKczRpd2l5emhNTlJ4Q1hDRzVTSUw1OXdXMVFRM0t0WmEzRjNwTEtTV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEUVRqem9VMnRFV2FaNDBxMFp6SVV5aEEra2d3MlhEZkplR2YwT0xHQW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1BZUDJVbE94SXo0NDU5am8wdEUxMzBkR3ZWeTVDYXBBMml0Z2hnd2kzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaSt6YjM4R0Z1cHlvZzYwWVY0MTRzcVVaaCs5QWZCMGZjY0NrK2ltUjRBWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp1WDRYYVNNM1ZUaXhSa0NwdE4wVDB6RzI4dm9nVnNnVmJWcTVWVWJKQlNscWNnODhTU2h4OUJJR0d2SWRRNVFjVlI5RC90OEo5ejNWV1VLTDF4ZWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc2LCJhZHZTZWNyZXRLZXkiOiJPOEZTK3VCNzZZOUtncUtBZ0loSTdxTVNKYUJVTk9yelVDTFgxZmRDeHZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc2ODU1MDQwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QkNEMTA4RTAxNzcyM0M0MUIzMTczNTE1NDQxNUI4RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQzMDc3NjgxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxVUJFYXBCeVJPMmlmek5xLUh6aF9nIiwicGhvbmVJZCI6IjJmMzIyM2U0LTI1MTctNGViMC04NTdjLThlNzRjNDg2YjFjZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSHl1dzR3d2lhNjNPTHMyOXJuWXVuU1lMa2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHE2bW9FRVBZVkpFT1lDRnBSb1k4czZjOGRnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlEzMzFCQVNTIiwibWUiOnsiaWQiOiIyNTY3Njg1NTA0MDM6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIo4peN4oCi4bSX4oCi4peNKSDjg5/inaPvuI/CoOG0t+KBseKBv+G1jSDhtY/KsOG1g8uh4oGx4bWIIOKdo++4j+W9oSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXJicWdvUW40S1Z2d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRWFjQ1d0TkI1OFAyMGV2ekJqTzM5VXZ1UkpCT1k2azJSeFk1amxVNEtVND0iLCJhY2NvdW50U2lnbmF0dXJlIjoielhKY0xSYmtYN0FWN2xXem9GVUxVNFdWWjVGMk9EejlaUmpibFF4RTh1NTQ1QXN3aE4vMDFjbnhzUkV4ckxhOWw4L2dGVXlnMERLdEJPWUprM0VTRFE9PSIsImRldmljZVNpZ25hdHVyZSI6InlSeDRpREVBQ1dXOFpPUUU3T2haTWROMFZiVXNzeFU2a01LNnVUb1ZmZ3l6VU0xMFlhQXdpbEZmNXBIUFZsWDNKVTQrdkE3WW1ObDlvSFA0dTZsbGhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzY4NTUwNDAzOjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkduQWxyVFFlZkQ5dEhyOHdZenQvVkw3a1NRVG1PcE5rY1dPWTVWT0NsTyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MzA3NzY3OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGTXUifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "?",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "Jᴜᴘɪᴛᴇʀʙᴏʟᴅ99 ☠️👑🌍",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
