//By Fares
//جميع الحقوق محفوضة
const Discord = require('discord.js');
const Rocket = new Discord.Client();
const jimp = require("jimp");// npm i jimp
const package = ('package.json');
const yt = require('ytdl-core');
const prefix = ("!")
const child_process = require("child_process");
const ownerid = ('490076609215201282')
const canvas = require("canvas");
const fs = require('fs')
const moment = require("moment");


console.log("By Fares");

Rocket.on('ready', () => {//source
    console.log('╔[════════════════════════════════════]╗');
    console.log('')
    console.log('            ╔[════════════]╗')
    console.log('              Bot Is Online')
    console.log('            ╚[════════════]╝')
    console.log('')
    console.log(`Logged in as ${Rocket.user.tag}!`);
    console.log('')
    console.log(`servers! [ " ${Rocket.guilds.size} " ]`);
    console.log('')
    console.log(`Users! [ " ${Rocket.users.size} " ]`);
    console.log('')
    console.log('╚[════════════════════════════════════]╝')
  });

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


Rocket.login(process.env.BOT_TOKEN);
