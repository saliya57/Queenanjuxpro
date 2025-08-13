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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU15OXlzaGpCdFZzbXhRZlFFdDRUcTBKY09ZYWtxaVJjczlZSHpMOXlsRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWjA1WndJN1VxcGhXN2tvb1cyZDBVTjYzbis4ZEpqZHFrZURGVmtBMXIxOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RjFSaG5hbHZ6bTYrSkhCRC9DblorZEp4bys3OHZJK25OVUZhUXd1bm5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUUJId1ZMenRyY2srU294dS9EUHc0YnVjZXZMOFJwM0hrTi83RWE3VHhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktCWmYybE1lL1lML0dTQ2FUY3cxYWxoZVdQYXhQR3pMaXVkNTJCWEdXblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5IOFNGbHFCV0haRlNSSUUyUVZiL245T0NaSE53OTJyWmo2RzlPTE5DRjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0cxUjVMVlAzUDdCVzZTc0xUcGJ4TmwwZUxLY2EyajF4V2ZLUnBNRFVGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2Z0WjhLMFRSWG9KMVJFSzNWZVRKWlJzZlBxVTlPejdHM2tVMjI2aGxuVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlVaTBmQjE3YWZ6UEJJa0R4UHBiTkpnZ1AwdkJEN0FZQWMvMUpqOFhYZHVFT0JNUzltajB6bGt6WHROQVhmbTlSYXRiUFkvSWlpTGd0UmpLWVo4akJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoibUgweTBxUWlTR1FDaHl2R3BwaWVBL1FyYURSeERDZ25yb2ZLTDNaZlNLdz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMTM3MTU5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwOEE2MkI4RDY3NzdGM0NFM0E4NjI3NjAxRTI0QjkwNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MDc4OTQ0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDcwMTM3MTU5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMjlDRTNFMEUxNzlBQjQ0ODkwMzA1RUQ0NTBDOUNBMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MDc4OTQ0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzblM1Y25mcFJCeTcwTmdRSjRYMzhRIiwicGhvbmVJZCI6IjNjMTg4NGIxLTE5MjktNDZkNS05MDg5LTYzMTc2ZmRjYWZlYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhU1VDVEFrREo3SmJNc1Q0dUtEMGNQcUNrSW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVzcG8yNVVSV3JpZWUzd2dDWVA1TWRHeWZBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkwxN0E2RDJMIiwibWUiOnsiaWQiOiI5NDcwMTM3MTU5Mjo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE4NzE3ODExODE0NDc0OjRAbGlkIiwibmFtZSI6IuKYre+8s+Kene+8oeKene+8rOKene+8qeKanyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFdoNC9zQ0VKSEM4Y1FHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaDBtRTV0Qlp2cXluNzBPMzZKYVNLci9WcG5IMy9ZNFk3a1JlOWZrVkNpcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaEdEZ0V0TkkwUElTVEFNOEhoRzF2bDZkWDBLWWpZa3pYWnY2RXlic2RuQVczNFNUVDY2TzNqQUxkaTd0bTZHUjRNeThxMms2MFkvR2N3eUtJY1BEQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlJwM3VZZXZWQXpSWnpCcEIzSWFEcVZDYlArSEIxNWpSVzhndUpkLzVubG5tcjhsMnNaa2pGVEZ2Vm1sdG8rR1kvZVhSTk8xK09LZncrMzFRNDBQZEJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDEzNzE1OTI6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZZEpoT2JRV2I2c3ArOUR0K2lXa2lxLzFhWng5LzJPR081RVh2WDVGUW9yIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUwNzg5NDIsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlhVIn0=",
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
