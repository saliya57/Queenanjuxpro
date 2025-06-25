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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05pL0cvMjVlVWdHaVZmQWF6WG94elB2cnF1NFFML3ZGaFlSM24yalJFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkxBWU9pQWRYdnYwVmpqbldzTUlCZUc3SE5TdjR6a2JmNGhkOHJycFUwUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTHVSY1ZWVDNhQXlUMHVyeG1qWUlZaUp1TisxY3lYc3lqd0NEUE5FUWw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRcFF3NmFINndaS0xqV0tHdkI2THVORWFDNUd2U2lkNWZhVVdHTzZhZ3pzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9FZ3ozTGlEeXA3ODJlRUtRWGp2V0VybUN1THN0WXdHUDcrTVpsZlZuR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhJaFE4KzJkbm80cTJ2amtzQUVwVGxmanhETExOVFRyU0YwSHAySC95eTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0M3Vkk5WUZmc3J4TzJpVERJMUIzZGlCdUVmQ1FQK1FLNVVCV2UyQ0hVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGI5M1h0NE9XcDYrZlM1ajc3M3dMVUVCL0ZRbGZ1a0NMNmswR3FhTElBMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhkZWo3TTNwbG8yQWhJYWIrZlltMHFHclI0cWVsNmRlZkhkckMzR3drNStoOW1ROFMzMHlhOHd1U29pVytWZEhSQndwRHo1ZlN2Ulkra1JuSStQdURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJVaE12MHl4ZW5tWVRYTFYzM2ZxU2JLdUJHYnJZNmprSGx1ZkRaOVVRQVlVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIT0phLTBwN1M0bTQ0VWpNYnNzVlpRIiwicGhvbmVJZCI6Ijc1MjkyNGNhLWNjZTktNGJhNC1hODQwLThmOWEwZjg2MWEwMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3a1pSOEdQTW9MeGxRUHlsZzNaYjh5MURxM1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVE5DUUVNeXorR1NQaUs4ZEFhOHoxRlBCSEZ3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZaWE0xTUpRIiwibWUiOnsiaWQiOiI5NDcwMTM3MTU5MjoyMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExODcxNzgxMTgxNDQ3NDoyMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01mUTdZSUNFSmE5N2NJR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBBM2ljbHpjZFlrUnRoeVFQTmZVeE1CS25qMWJUUFp5dFJYS01aTS9XU3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFCNHVXbE55ZnRDd1pxbFBMMnZHQTNCMUZ3R3V5OGJ4TWdvSVdHRGQvYXRuTm1za3lXSDhadEpqOGNKZ3ZjeVEzQVNlcUM5NWJGZlBqZlZHRnRKNEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUc0lZdlpMamJiSTlubGFXdGYxSFFGMjl3QXhjQWdSOWhFSXFXQ1ZyZmN3R2RWK3g0dFRnV09nV1JMdi9ncW5pbkhhR3U4Q1AveStKUWZMV0dBYURCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxMzcxNTkyOjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRBTjRuSmMzSFdKRWJZY2tEelgxTVRBU3A0OVcwejJjclVWeWpHVFAxa3IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDgxODQ2NywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLdWoifQ==",
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
