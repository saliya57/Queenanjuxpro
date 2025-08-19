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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBoZkw0MjFxcDBOUEh5ak9xdGFUU2UxREgyWGwyZ3pIUkhCVk1JMkxFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHJOaGFXaDBCVlZHZTRLSWxlMmJ1aUhwU0JyZ0tLY1kxeVpTMGZwL0JqWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRlIyTm1CMExYV2hUa0FESHV5ZWlwMzFlQml0OGdvbUlFcXJ6akpGMUg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTTU5QkFsUVJmTEdtb3ZFVi90dFQwTUxSYVF0L2xDUWxpYkZrY3VjRUFjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGZHhPUFBHbkswNXduVWpvRW91cWtBNnh0N2ZRYnhTSlpMdTZCdWROVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFtcVR1cTg4MFd3Rm0vWUtrRVg5T1ZDdVhrNFRsTzM5cW9zVFFvMzBQRVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0s1SURTM3B2VG9Uay83Ky8rMzlERnhPNWU2eXVIVU9BNlBEdHhBTTJIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXdvZmtpVlN1ZG1XSUhrSGVnZTU0UWw0dlQvWElmTG5aR2o1L2ZuTTFSOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDaExzQkg5TWpIbktrazE0MXhybTFLUG1JQnZTaFB0VlVQOE9GMmlqby9EQzhtcXVIVlVab3R5V3hqbkhIS1FpVTNiS3MycFFNR3M0aVgreERyTENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6ImFoaWRoU1pGNHh2NE9ObjFoR2pDWEVtYTgzR2pNOHNLYlJ2cVB1MkNRSHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndLMWtxUG5qVFNHcExSc3ZNTi0xLWciLCJwaG9uZUlkIjoiNDk1OWFhYmQtMDU4NS00MmM0LWFkODUtNmFlNjJjNzliZTIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHMTFjRUlMMFFBNkpaRnZOaUJVQXQ2RjdFOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5NEprUnBtRGNBSGVhQ3F0L2hNNVNkeHMxcWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlkxMzZRS0oiLCJtZSI6eyJpZCI6Ijk0NzYyOTg4MDM1OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkFrYXNoX1Jhc2htaWthLiIsImxpZCI6IjE2MzMwMzY0OTIwMjIzODoxM0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pDYmh5UVF1K3lReFFZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImsrVkZoRVkwby9ndi9BZldPVHJobFc3N2VNYmt2MTNjQU1GWFRiSVFSSE09IiwiYWNjb3VudFNpZ25hdHVyZSI6Im0xeDJuRDcxZk40aDJEUkFkNlZwekY0azFTZWJTYjJKWENjYnhUbUhVWGc5Q0doYjdtczd0amE1d2UzekdNV0VJV2x1V1pPSXV2ZTJ4dW52OW1yeURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmSGhpem5wZENLTnNRaDRmMUZvb0ZaZ1M0aWh4UExXTUFXQ2J1LzROYXhQeHliMTVybHU2REsrbk9oWXZiM0N5L3ZRd0pzL3RtMFM5RXBPTDMwb2hDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYyOTg4MDM1OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpQbFJZUkdOS1A0TC93SDFqazY0WlZ1KzNqRzVMOWQzQURCVjAyeUVFUnoifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTU5MjI2NSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURDYyJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0772561563",
  PASSWORD: 
    process.env.PASSWORD || "••••••••",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94701371592", "94762988035"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
