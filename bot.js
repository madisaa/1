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
client.on('message', message => {
    var prefix = "#"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
});

 client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
const ee =new Discord.RichEmbed()
 .setDescription('**:x: I can’t find the role.**')
 .setFooter('Requested By '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
                
                     const e = new Discord.RichEmbed()
                     
                 .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'-'+role1.name+'**')
                .setFooter('Requested By '+message.author.username,message.author.avatarURL)
                .setColor('BLACK')
                 message.channel.send(e)
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
const ee =new Discord.RichEmbed()
 .setDescription('**:x: I can’t find the role.**')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).addRole(role1);
                const e = new Discord.RichEmbed()
                
                .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
                .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
                .setColor('BLACK')
                 message.channel.send(e)
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
  if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return;
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`** <a:like:472979723358699520>  Done...\n**` +  role1.name+`** Has Given To __${message.guild.members.size}__ Members **`);
    });
}
} else if(args[0] == 'humans') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }

    if(role) {
        let role1 = message.guild.roles.find('name', role);

 const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** <a:like:472979723358699520>  Done...**`);
        });
    }
} else if(args[0] == 'bots') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...**`);
    });
  }
    if(role) {
        let role1 = message.guild.roles.find('name', role);
       const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Given To __${message.guild.members.size}__ Member**`);
});
}
}
}
});

client.login(process.env.BOT_TOKEN);
