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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0E3aDd4aHgvdlZxYkdndXRVZHZ5Q0RvakZTenpTQnFyMUdocG5FRFIwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTJDam1zV2FPM3l0WThVK3d0c3Q2MFpmRGtReVh4Q1hrTUluMzlEWU13ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRzlLOEtpUUJ6cVNFQm0xM2Q2R20vcUl4SzRQS0RYVXFYRWpCTmxpRzBZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTnFDTjhQVlFjSWpSbGNJbkYxK21NTEt4OGVYaFF1RTJQNFNTUU8yaWo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtCNGladkJubnBLTXZIWkR1N1F1c2ExSGlIZjdMTVhPUk41Z3Q1ODV1RjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1vYkljYWQyNTBTVmpXNHh4eEVCMHNBWm5wM2JNU21adStzKzBRZllQaVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU95bkNZMkoxUzh6QlQrbi9SYnJQS1JBSWxwZTBSbysyWk5iZFNqeGxIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU44SE13cjhOelFzQlRnVDBmQSt5bXFNeWt3Snp6L3FXSGtjT2RONkJVWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im8yd3lzU2ZLOTJoWjJVOG15emQ0WWp3b05SbjBWeGRrMjhMenFXSlRtZ2JIU3BCK1JoZjJITmRiZHdKRW91U3Vwakx6bWFJK0xFaVdNUDVmdFVBb2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiIrSVJQWmNNZklCVHlaNWZsTmIrNTEySGpDbG5FNzAwV0hpU1hnUHpOMWJ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxX05JeXpIdVE0UzFDMFpuY3JlNnNBIiwicGhvbmVJZCI6IjE2N2EyZjgzLWEyN2EtNDlmYS1hNjQwLWUxNzA3OGE2ZjUwNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEK2xpZzEwbmtFaitKcDdsTi9ScUVyUU00WjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEQxRm16eUx0ZTF0TjVtZ0hMMnZZLzVkUThvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjgxTDEySkdLIiwibWUiOnsiaWQiOiI5NDcwMTM3MTU5Mjo3QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE4NzE3ODExODE0NDc0OjdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV2g0L3NDRUkrajhzUUdHQWdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoMG1FNXRCWnZxeW43ME8zNkphU0tyL1ZwbkgzL1k0WTdrUmU5ZmtWQ2lzPSIsImFjY291bnRTaWduYXR1cmUiOiIzY1d3WUsvZ2tsNG1HZjhCTzVBMVBiTS96NktsTXhCeHlSM09QTzV6WUdwQlNSOXIzQjZTR1NMSmpwWWNDR0VmMDVhUnVpSzJqc3JWaFRYYmw1amRCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSDdvSFRLU3NUSlU3WVJ6OTNBOTNuclRhTVpKLzNGSGxMLy9RaUtGY0pxang3d2pDcjVWVjlma2xxd0FOWUR1R1RxTTlwRkROTnJ1Q3ZwYU4vT1dRalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTM3MTU5Mjo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllkSmhPYlFXYjZzcCs5RHQraVdraXEvMWFaeDkvMk9HTzVFWHZYNUZRb3IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTA5MTM1NiwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKWFIifQ==",
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
