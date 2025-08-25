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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0V3YzBib2VacGxpRjVsRkFqRkRlODI0V2srZEdFVm9uTmt0VTUwb21XVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFmQ1k1ajZTZ2hZNVZMM1oxWHFaamtDc2MzaGJXWVNDcUo1TE84TDlTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSUhiOWpSOWFwcStGakxIV1F3OVpZQjV3ZjBEMWRhSVlmNWZBOEs3V1hBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCNlFodE8xUFJSMzNxbG0yWXZUNmYxYTdYVlI3bE8vOGdRR21NaDJvWTI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFOY3p3MFZNclhNS2xWNndSMGhNTm83R2ttWXd1a1pJRGZaazdpSHBSVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFycys5YnozSGNCMzN4cDF2M1Nmb1VabDUyRHRnRXhtUzFlUldtV2NQVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlXWEJMcjRpZFk1VkFyd2swaHhoYmNPVTBMRWdQd1pYcnU2MEpTV0pYbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmk5bG0zTklEa1JONU84djRuczJjNEpwcDdCYjZTVE5lMWc3SXJmaUJVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitkVk5WNUNqMVBKRSswZzJISnVMMzc1T050NHB1clJzc0hXdXhIQldGU1JMU2JsNFdRMmhOQXBCOFRvWUtsZlJyVnVDQ0JvOGFHVGxMQkoyQmQ3VkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ3LCJhZHZTZWNyZXRLZXkiOiJOZ3p1OFljUmRJUzhYZzJBd0paSXVkaUdzeisydVFIbU51Nng4bTNDNWw0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxUUFUazBHR1JsU1VlVzRwdGJQNV9RIiwicGhvbmVJZCI6IjA3Zjg0YjJiLTdjMDktNGRhZC1iZjk1LWFhZDQ2MGNjZTNjMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwaW1DcnZpTmFGZU9jaVdqemM5MGNHY09Rd0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibitDWnNtdE5BRVBtQ2ZBYm9FQ2tKNUMyWWZnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjkzVktRV0pKIiwibWUiOnsiaWQiOiI5NDc2Mjk4ODAzNToxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBa2FzaF9SYXNobWlrYS4iLCJsaWQiOiIxNjMzMDM2NDkyMDIyMzg6MThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKV2JoeVFRcGZ5d3hRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrK1ZGaEVZMG8vZ3YvQWZXT1RyaGxXNzdlTWJrdjEzY0FNRlhUYklRUkhNPSIsImFjY291bnRTaWduYXR1cmUiOiJpV2NTbnNTc3Y2Nk9jeTFoOFpSYnloeCsyRTIvNEtpOFJnU3BIOXo1SG1mN21KSnExZ1Nlempod0M1TDVXMjVyVFZ0Y1JLc2FFazhmYndqdjh5b3JEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZFl1WDZHTk5VMXJBL1RneXlreU14czBhaWFiZysrV0IzWlE3SW5NWmZhdzQ5TVdYVWNYWlRPcHcyek1OcHpxNkF5Q0lkb0xzN3drQ1Z5S1pvTEEzQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2Mjk4ODAzNToxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaUGxSWVJHTktQNEwvd0gxams2NFpWdSszakc1TDlkM0FEQlYwMnlFRVJ6In19XSwicGxhdGZvcm0iOiJzbWJpIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYxMTg1NzgsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMd2wifQ==",
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
