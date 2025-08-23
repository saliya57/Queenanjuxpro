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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhpU3UzL2ZDQ0E4ZlJoUjNBWkc3bFR5TDZFSHRhTGxsTmhDVzJGSUNFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFZlTHlDTTVDK0JIVzhqNXRWVFdweG8wZEthMnJDKzVpdkhNdHMwejJIUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBT3JRVDk3R2tYSjB0Vm5uRzVleURuUXFlbGlXb2lhZzFBWFIzbElXdUhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrWlZqM3ZsM0RtbVBySlU4aW5ZaEhSZXNCUTR4VjF4bExRVGR4LzRlOGxjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEd3dzZFIxakpsMWZMR2ZmQmdsanZGazBjUlcvVXcwVDhUeG1QRVB0VnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFGY0owN2x5TUpuT1NOYlp3by9EZHZ3LzZUQVRTMk5LQUcybWIvVjRseUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU90Y0xoVVl5MnVvTjNzK0VVb0l0blZrTmNaSmRLREdNMzh6RVZCTndIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakMxZ0lCWDRHY0FnL0w5Zng0K0NmZnFUcFpMYWpnMmVoRXVXL3AzK3FXUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJIc1oxa3N4R3FxSklHRlRqN1VQSWJhNUNMWXBXMSs1OTR5MWMwUm5MMWpibmRrSm1zMXBJWGVUdmIrSVlKUWZQS1NxQTBRZWlCS1JleEQ3MnNXUmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiI1MElhNnJaa1dMNG1FVlFNbWRCbTZEZjRxVG5XdjlSdTBXYUUvZG5ScGlJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzAxMzcxNTkyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjcxMTgwRjIyODIxQTVBNTQxREUzQThGMEJENkQ1NTUwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU5Mzg3Nzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlDVUtJbXE4VHJPNm44VHB4blE1QUEiLCJwaG9uZUlkIjoiNDMwNzcyZWQtY2U0Yy00MjkxLTkxN2ItZjM3MmI4NGE2YzM0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpqMFBIdGRUdWtZMGZEYjRrb1k5alkrcW9pcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIycXlUK3FWS3VBakRhOG9mTGxIcGdmZng1MW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMThLRUJZVEMiLCJtZSI6eyJpZCI6Ijk0NzAxMzcxNTkyOjE0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE4NzE3ODExODE0NDc0OjE0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUFdoNC9zQ0VNai9wY1VHR0E4Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaDBtRTV0Qlp2cXluNzBPMzZKYVNLci9WcG5IMy9ZNFk3a1JlOWZrVkNpcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoieUY4elhtQm1rNWFjcGhVTmpmVVJITndZcVJJdE9jVGhoRGdaaGgzaEpaem41UTBXb3NEbWd4b205Q0M0YjNqWTVwTVZsRkRzdnQxNFNSd3hHYy9BQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Ikkwcm85ZEt5VVJlcDhEbDlwMUVNdm55bGVmSEJ2RUdhZm1TVCsvYVQ2dzBxNVdpeUN5N29rTHhBLysvMVBmcFpJekZTZ3Y1NDNUTW8zYTlSM0hweGpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDEzNzE1OTI6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWRKaE9iUVdiNnNwKzlEdCtpV2tpcS8xYVp4OS8yT0dPNUVYdlg1RlFvciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1OTM4NzczLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpYUiJ9",
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
