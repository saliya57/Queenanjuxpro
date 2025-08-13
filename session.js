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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1B3YUFOVVpBcHp5bnpWM013MVlsUTcyeDJiTGJlSFAwVnM2U3dCZkptRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1dJWGRaUWVNZ2xETWhDQ2NMc0hrU3JPejMxclQrRVFTVXp6Nys2dGpVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS1F6ZVFlWFNYT2xPVlFwM3JPZnhsN3VXS0tHQm1yMlA2NEUzVTVPZkdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJseG0zRVhvNFdkVzdwRVdWZEZSVlVmQ2FJb3NQVFY1VlFGR2R3S1FZNmpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BRHdkMmQ3K2xXK3FqRHVnbFNPK2loMkorbHlwM092dlRvSnRPR0I0R2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlozTlN1S09zMlZraW5paHk0OEE0V2NUT0dIWkdkU0RlWFlLWmRFb3pLWDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUt6S1BtcmRxa203dEIzV0N6ZHZoTU5KS0pBTGFTZDU2ZW92VFRWakJGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDRpcmxyQktiZXZtdWc1N3JkUURFZHpSMS9CaFBQSS8xZzU5Vm41c2VoST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJFWHNKYWdlZXN4TlpQNXZwWTduYXFiZnFNWFZnbHYwQ2cvNmVEN0sxelI1Y2JKY0RQODNCcG9pU0hMSitkVVBtYmNucEZYR29UQk1jQzRmckFnZUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJsV3JEMUdhVFlGZXZkdXk4QnlkazVMbWRCbyswYWJIMWxJbTlNbnA5L0JFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRUmJXX2w1b1FvLVl6MFZtZ3QxcmZBIiwicGhvbmVJZCI6IjRmM2FmN2Y2LWJhYWUtNDI4OC1iMWI5LWQ4OWJjODRkM2U2YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvdEh6dlQyVXBhenArOWxPcmxrTzBEY1lRSm89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGlzZkhGcDc3d0dRSlMzeDdlYm5Tb1V2OWFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI2WU1LQURKIiwibWUiOnsiaWQiOiI5NDcwMTM3MTU5Mjo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE4NzE3ODExODE0NDc0OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV2g0L3NDRUtDYThzUUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoMG1FNXRCWnZxeW43ME8zNkphU0tyL1ZwbkgzL1k0WTdrUmU5ZmtWQ2lzPSIsImFjY291bnRTaWduYXR1cmUiOiJnSnlUUDlaeC9LWFlEaWt6bkxmSXgwWU85aEs2Wkowc3dYemZ5d1dremhlRmlGV05LWmJLaU5IRFZvdVNZbk93Qm1WVFgzeE1EcTJ5ZEZQWDNXak9BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia0lPZzgrV2F0MkRHTzI4RXdxbmdZQVFEdVdjRytsdjl2VkdVT0xoMVZqZTFpdkN6d05tZ0VEZVMvakZyN29VT2FrcVJqajdtdkhVb0UwL0FqY3FIQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTM3MTU5Mjo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllkSmhPYlFXYjZzcCs5RHQraVdraXEvMWFaeDkvMk9HTzVFWHZYNUZRb3IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTA5MDIyMiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKWFYifQ==",
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
