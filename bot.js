const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(``,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message' , message => {
  var prefix = "#";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//حقوق دايموند كودز
 })
  }  
 });
client.on("message", message => {
  if (message.content === 'برب') {
      message.channel.send('تيت');
  }
});

client.on("message", message => {
  if (message.content === 'باك') {
      message.channel.send('ولكمء');
  }
});

client.on("message", message => {
  if (message.content === 'السلام عليكم') {
      message.channel.send('وعليكم السلام ورحمة الله وبركاته');
  }
});
client.on('message', message => {

    if (message.content.startsWith("رابط")) {

 

  message.channel.createInvite({

        thing: true,

        maxUses: 100,

        maxAge: 86400

    }).then(invite =>

      message.author.sendMessage(invite.url)

    )

    const embed = new Discord.RichEmbed()

        .setColor("RANDOM")

        .setDescription("| ✅  | ❤  تم ارسال الرابط على الخاص  ")

      message.channel.sendEmbed(embed).then(message =>{message.delete(10000)})

              const Embed11 = new Discord.RichEmbed()

        .setColor("RANDOM")

                .setAuthor(message.guild.name,message.guild.iconURL)

        .setDescription(`

**

---------------------

-[${message.guild.name}]  هذا هو رابط سيرفر

---------------------

-هذا الرابط صالح ل 100 مستخدم فقط

---------------------

-هذا الرابط صالح لمده 24 ساعه فقط

---------------------

**`)

      message.author.sendEmbed(Embed11)

    }

});
client.login(process.env.BOT_TOKEN);
