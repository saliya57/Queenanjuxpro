//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Rezi
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Rezi
//GitHub: @saliya57
//WhatsApp: +94772561563
//contact us discord rezi_02
//   * Created By GitHub: Rezi
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUQyQnJvYVE2Q0J6M2tUbnlVZzlnOGxEbTRLQWE2UjBSa243MHo4NEZGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFJPVDFqSUJ4SjlubFRTQkNzWkc1ZzV6YTdqT2YySGVJZU56MVBFREJSQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXR3NIOHJDQlZuTmZCUExxb1pFbVNjek90RjAzY2EweTgrNVkvSlFWOUdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0bnFpUEppV2xYMWkwL0FwUzlvS2lvRXhmSFR5TGNpaXhHWWhacjNTUmdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKdDVpWUJFZFVJcXJROW9YWEdYS2RteERta01Sa3M0MmFJRFRjcG9pVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndrUlM3TkJTV0RmZTR6STJPWDBaQ3ZqVFQ4amVJZVg1b0F6UVlnUm01alE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tER3lwTW9wU3Q3aVlLcGNzNjlNQWdhWDhPL0hlZnp4Nytkb3ZoaUhHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tDbE9oblhiT2txTms4Y2dxS2xqd05RUHhleUc2L2poTGx2b2FEOC9UST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJtQlAzbmZEMTVRT0M5MzF1YTNCbDJMbnJ1NCsvN3QzVzlrUkwyd0NhVFBndGlrVE1FaUhpS3N5WUtCNTAzeUlIa2xqcjArSGFtS3BYZ0dWYWxpZURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJ2YkJCVldwdTU3TGFZc05YS2RpeU1UTU5aS2E5WmlYVkx2MjQvcHBaNTZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDM0tPRXozN1NFTy0tZmxPNUxwelpBIiwicGhvbmVJZCI6IjdlNWQxMDE4LWZiOWQtNDZmZC04ODFjLTgzZGU2NjJmMDJlNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcmVTaHY4QlVYcHkrcnNLZ1BwclBPTngvSzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0FGQk1jY0wvWmhEV3lqSmJEbFgyQlFyRmlRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktXMU5UWVNHIiwibWUiOnsiaWQiOiI5NDcwMTM3MTU5MjoyNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExODcxNzgxMTgxNDQ3NDoyNEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01mUTdZSUNFSWk2aGNNR0dBa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBBM2ljbHpjZFlrUnRoeVFQTmZVeE1CS25qMWJUUFp5dFJYS01aTS9XU3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImgzRUhMaGF0SEZza3Uzc1VESzhoaktMVEV2Y0hJWmRMc2pORzZwbTE0MlRnTmZYUmJaMko2dXZURTNzOTVWMWFYR2hYa1QyWE5xdFEvRXIrMmJNY0RnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6d2lmcHZ2VDVYc2trTUMwSFVSS1djVDNaWDM0Y0d5bnRVRndpYU1RNHlmQUNNR0prcU5LREFweVdVQWtoNTZwU2hZT1FGWVluUTJ2WXBzZk4vOGNCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxMzcxNTkyOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRBTjRuSmMzSFdKRWJZY2tEelgxTVRBU3A0OVcwejJjclVWeWpHVFAxa3IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBc0lEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTIxMTI4NSwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLdWoifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0772561563",
  PASSWORD: 
    process.env.PASSWORD || "••••••••",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94701371592", "94772561563"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
