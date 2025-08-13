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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0Eya2RTRm5yRFV6bittRzczbURsSGFjcW5XYmxseHhGckF3YWMrUDFGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXVtU0lSZ0dSdzlQaDNrQm9DRWEwVFhkUjBGbDNIbEpTNWwvWk85NjJpTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRGZNai9EQjFhZ0FEbnRpN2Jka1FNYlZOeW5WUUhqS2FVVGxBMlY4U204PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3bmovSTRnblpSem03QlVmQTlFWDdjMmhjK2dIN3JLQlpCT1V2S2dRU1Y0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRNZEJnTlJuUlJ2SUlIeW5ERWtDbHVLVDJhN1lCY1Q2RGtzMWlRaU94a289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQwdkhOTXRYSnRFL0xhVnBOajlDZjRGSG1ycVpUbkJ1ZUZueTV4cmlORGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlDaTZxUURGemlxU3ZFRXFkb2lubGpyMWR6STAwMDNrNVJDRnNUek5uMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTM5L0J5NjVDSEJpTGdzTjRaU1hFbVE1TDdIeXlWUmdnRjhsZ3FDUDIwVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklwOVFRMU5ia3BzcDhWRGRyRmxVUTdoSklnVXRvbVdkV08yUmplVlRpL2Y3d0JHSm1nSElKR0dWR3FxQ1ZUUlhHYjdoaDVVdGFJbDZQMXAzNFQ3T2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJMRkloU29LdmxHVVdaZGd0SmJkZ213M0llQTFkN0U0R2wxUUhGdGEwU0d3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1cUE4MllreFNMT2pGdkNKYXBtTGxBIiwicGhvbmVJZCI6IjUxNDNlNTNhLWMxYTgtNDA5Zi1iOTUxLTQ1Zjk3ODE5NjlhOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOS05BMHpLRDIzQi95aDRIY1JROVQreWlDSkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUV0VUkzZmpSLy8yNEQ5cGxaWWxLeWxCbXc0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkQ1REpTUTVCIiwibWUiOnsiaWQiOiI5NDcwMTM3MTU5Mjo2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE4NzE3ODExODE0NDc0OjZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV2g0L3NDRVA2ZDhzUUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoMG1FNXRCWnZxeW43ME8zNkphU0tyL1ZwbkgzL1k0WTdrUmU5ZmtWQ2lzPSIsImFjY291bnRTaWduYXR1cmUiOiJlWlpvZjczWHBpV1BkL1l0OEQyZ3RMS0Z2c3ZhK1M0N04zclYybVJYQVZ4OW0zWmpTRk84UENDbjV1RHptR3ZvQlo1Z2NoM3BqaXhIc2kzaUxDYTBEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZlV3Q2tuVXZxZWRCYjB5czF6N3B5Z29jWmZYMHJXWHdYOHpYWGpheUZBNGoxWCtVQVNyQ2F4QVpMcUFlckJOdUQzRmtRbnUxWWphTFV5ekJxb29WaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTM3MTU5Mjo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllkSmhPYlFXYjZzcCs5RHQraVdraXEvMWFaeDkvMk9HTzVFWHZYNUZRb3IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTA5MDcwMCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKWFYifQ==",
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
