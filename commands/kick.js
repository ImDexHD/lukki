const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let mentionedMember = message.mentions.members.first();
  you = message.member;
  let modLog = client.channels.find('name', 'lukki-log');
  if(!modLog) return message.reply("I can not find the 'lukki-log' channel!");
  if(message.mentions.members.size < 1) return message.reply('You must mention someone to kick!').catch(console.error);
  if (reason.length < 1) return message.reply('You need a reason!');

  if(you.highestRole.position >= mentionedMember.highestRole.position){
    //Do nothing.
  }else{
    return message.reply("You can not kick someone who is higher then you");
  }

  if(you.highestRole.position == mentionedMember.highestRole.position){
    return message.reply("You can not kick someone who is equal role to you");
  }else{
    //Do nothing
  }

  if(message.author.user === mentionedMember) return message.reply('Why did you try to kick your self noob?');
  if(message.guild.member(mentionedMember).id === '205055345423417344') return message.reply('Wow, I should honsetly ban you now e.e');

  if(!message.guild.member(mentionedMember).kickable) return message.reply('I can not kick that user');
  message.guild.member(mentionedMember).kick().then(()=> {
    const embed = new Discord.RichEmbed()
    .setTitle('')
    .setAuthor('Moderator', message.author.avatarURL)
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Kick')
    .addField('User:', `${mentionedMember.user.username}#${mentionedMember.user.discriminator}`)
    .addField('Reason:', `${reason}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
    return client.channels.get(modLog.id).send({embed});
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
  permName: "Administrator"
};

exports.help = {
  name: "kick",
  description: "Kick the mentioned user from the server.",
  usage: "kick [mention] [reason]"
};
