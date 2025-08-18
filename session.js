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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVzUGNvVlgyd01QZ2dJU2lQSXJwaEJPZGxBMCsrdUdMTVdvdDIzOC9XTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajBnWDhjNWU0MFRmVTRseUR5SlRCL2ROd2RpSm1iVDBZYWc4SEdaS1FtVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQngrbGdhSEpla3hnZjUwVEtNQmhyYlNaa1R4TFR2dXlCbzFLZDhXVFh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1cCtlR0JFRnMrRGlJY29UNTdGUW5YOGE4SWZHNXR0TUZabzZPS01hc2tFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVELzFyWTBNMUNPVDJpc0Z0RGxRTHhVUkY4WWZGS09MNSttZlNCMkNCMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkloWFY4NDgvdmxDeXIyM3FnWW1SdmRGZnUrTE1JaXZZSjBybWlaS0FYanM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pUc1htOHZaR1dscklDNkhnYWxZWS9zRUhNMm5SRDhkMzdGRUZzVHdrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1o0S1hheVlndlRNYmxoY3pJbWRhVjV2SjB0VEpnUjdTSDJzYUphNDNTTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5WMUQxSERPV2FUZkxOWnFXSjZySnA2elJObkwxSEw0S2NDdXVab2doM2I4WisyODFDbFVtajdRcGtKazJKNTJYMDlNY2NYdGVPR3E0Tkk1bTFyckRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJmaWV0ektCamxRSHgwVS9BS0JZNG1xYzBqODRXOUQvSXk5aXFoeExsUHFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzcxNDE1ODE0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZGNUM4QjdDNDA0OTRDNTBCRjFDOTk4Q0ZGNUM0MzYyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU1MzE2NjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IldTaFBkSjFGUl91UVlTN2dVNTZUWmciLCJwaG9uZUlkIjoiNGE5NTNlZWItZWExYS00MzQ5LWExNmItZWRkODcyMzFlNGZjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNDUlVKYjhIVTJiMUtYUGxDSVFjUTJqd2NLZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJldjY1NEtMV2dTeHZRc2NMM2hoMTNnVjBQSUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTDRTVkE4TlkiLCJtZSI6eyJpZCI6Ijk0NzcxNDE1ODE0OjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMTAyODc0NzEwODM4NjoxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEhlNk5NQ0VQdVNqY1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWWZRLzdiaEJHbkRyRUNNUUpwYUhtWXByK21FdDJsekh0ejJhZWtmaFpVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUlUxTFk5RFpyOE5EZytYUkdUaDIxZHh2Znl3L0hkV1dIUFpGcE53aVQ3aGhoYUozTUx4SVovanhlalJUVnBQTitYQ05vOGNNZkF5QUNXNnhFV2V3Qmc9PSIsImRldmljZVNpZ25hdHVyZSI6IkVYaDEzQmZodXBsWUFKUEZ2eXNNSGI1OFJHQVA4OGFWVTBScnJ2QjdNWmdIb3hOYUZ6a1E4OElpUmlZQytlbmFNZG1UT0VTRFh3SDJrZ2c3YmxzTkFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzE0MTU4MTQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXSDBQKzI0UVJwdzZ4QWpFQ2FXaDVtS2EvcGhMZHBjeDdjOW1ucEg0V1ZBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU1MzE2NTYsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2ZpIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0772561563",
  PASSWORD: 
    process.env.PASSWORD || "••••••••",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94701371592", "94771415814"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
