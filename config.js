const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263780394572";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_48_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDk2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICA4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDcxLFxuICAgICAgICA0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWY3IwajV6RSs1SXByeEw3TnFjWjZIUWlOOEl1ZkdwZFQ3ZlhIS0lTQ0F3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNdnl3UnRSNVF4U0pXbHVDVkEzTmJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzMjU4YzA4LWE0NDQtNGNlMC05YmY5LTViZGVmMzM2MTE0YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDIyNyxcbiAgICAgIDE3NixcbiAgICAgIDAsXG4gICAgICA2NCxcbiAgICAgIDQzLFxuICAgICAgMjQ2LFxuICAgICAgMTE1LFxuICAgICAgMjM0LFxuICAgICAgNjksXG4gICAgICAxNjAsXG4gICAgICAxMzQsXG4gICAgICAyMzYsXG4gICAgICA1OCxcbiAgICAgIDEwOSxcbiAgICAgIDE1NCxcbiAgICAgIDEwMSxcbiAgICAgIDEyNSxcbiAgICAgIDEzMixcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxNzYsXG4gICAgICAyMjUsXG4gICAgICAxMTYsXG4gICAgICAyOSxcbiAgICAgIDEyNSxcbiAgICAgIDE1MSxcbiAgICAgIDE5NCxcbiAgICAgIDE3MCxcbiAgICAgIDE5MixcbiAgICAgIDEwLFxuICAgICAgNjcsXG4gICAgICA3NyxcbiAgICAgIDMxLFxuICAgICAgMjMyLFxuICAgICAgMjA1LFxuICAgICAgMTI2LFxuICAgICAgMTExLFxuICAgICAgMjEsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSE1ZOEwxODlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4MDMwNDU3MjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTU1MjA3NzAyOTM3NzQyOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05mNXA3OENFT2JHNnJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSVpRNktQWWlEYityckEyT01xcTR2WXN0a1hSVUl2YnRra1hadW9NUzV3QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtM1U0RVNzL1Z2SnorS2IxdjJoZ3J1YTR0RERKaGNLakg1NWZsQktxV21hNzBzcXlYajZEb0dkZ1pNOVFQSXIrNjNsN25UNWlTb0hyNC9RL0R2Q0hEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3bEVyR2tJOFlHTUs3bjVxUGFXbldiK0ZaTkpsT2hBVHNYODJWa0kyMlV1NFNTanlNSjBkUjM5MWdJQ0kvQ2xhcWI0cEFJU3BlWVo2UWw5UERaekFqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODAzMDQ1NzI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzOTkzMzIyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FIGO-XMD",
  ownername:process.env.OWNER_NAME|| "MAFIGO-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
