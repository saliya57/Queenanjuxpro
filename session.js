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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pCK2l6RkdBMjJzVFY3Wk4zNW5uRTRac1JIYy9YR2xJM1JObWkwVmhGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmhzZnBqSXNFcUVmK1d3N2R4VTUzR0lYOFpxaXV2RXVjVFlIZVV3RHlIZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSkF4OGFyUHg3dkVkcjFOSEtwSkFLa01MVTQyejJzYVBMQ293c29vbjNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSS9pc2FHMnpwUlVja1BwSE9kNnVraVpQUGtkTng4M25EWDV0U3hVSkFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGN1ZxcHh3L0JmbEtNcHRycTZmR3JrNkFyK2diUmEzaERST25SK1Bna0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijc3Wmh6dGZTeG9Ld0pvV1JwOFlqNWtCdHVuVEU2MmFGd0pTS2gzbThYVlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFnVEVhdTB0ZE84Q09oUGdxYWxMVjh5RjZ1dmsvUWFIRkJRQXlWMEhGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHZ4WWoxWGRDVXpnU2lDU2E5ekRZblJ5VzlhNWFlcjc0TDh1cjZwR2gxcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh0NTM3dHo5Rko5ZzF6MWtSOGhSa254WmdHbXZLR05UWjczWVJxZVNRRDZmbDlOcDJXNnIyRE5lWW96ZXd5WEVoQldmaDRHQW1KZDVkQnVxTGNaYmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiJ4ZlZXb0N6bUlkL0lJSWVTVmFKR2IwT0pvbGE4d3dFZGZEaHNhWkhSTWlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyLV9wUXMzaFJ4S0dWcG9fVWNHSFJnIiwicGhvbmVJZCI6ImNhNjBmYmUwLTk0NjYtNDVmOC1hZTcxLWNjNmI3NWUxMGFlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3UzFuSXNUUjBtOWlSb2JyUVI0RWVyTGpsL3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMVJDL0ZsL2RTbjJHMUVqVjFHZmNDZkJJVmhJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhGQjVUOVdQIiwibWUiOnsiaWQiOiI5NDcwMTM3MTU5MjoxMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExODcxNzgxMTgxNDQ3NDoxMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BXaDQvc0NFTmVXbHNVR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImgwbUU1dEJadnF5bjcwTzM2SmFTS3IvVnBuSDMvWTRZN2tSZTlma1ZDaXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZITkxvM2VVWXo4YlgzZUhYdUliNURqcVVXUlRkNGsrOXVhS1pGRzJsTWJJcFJiMUk2ZkVLTVliNlkydU9CMDhCVllCU2V4ZW5aRVM0enVIRFlreURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTRGxaVlBhcC93Nis0NllCak1WNjM5cno1bE5MRHhJS0lhejlJQVVIYlJ6bCtzZVg5Zk9wK3diYlJpMVJKQkloSEpZbjRwcy9ocWtaSERiVVBYUjNqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzAxMzcxNTkyOjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllkSmhPYlFXYjZzcCs5RHQraVdraXEvMWFaeDkvMk9HTzVFWHZYNUZRb3IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTY3OTU4OCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKWFIifQ==",
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
