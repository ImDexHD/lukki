const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let banReason = args.slice(1).join(' ');
  let mentionedMember = message.mentions.members.first();
  you = message.member;
  let modLog = client.channels.find('name', 'lukki-log');
  if(!modLog) return message.reply("I can not find the 'lukki-log' channel!");
  
  if(message.mentions.members.size < 1) return message.reply('You must mention someone to ban!').catch(console.error);
  if (banReason.length < 1) return message.reply('You need a reason!');

  if(you.highestRole.position >= mentionedMember.highestRole.position){
    //Do nothing.
  }else{
    return message.reply("You can not ban someone who is higher then you");
  }

  if(you.highestRole.position == mentionedMember.highestRole.position){
    return message.reply("You can not ban someone who is equal role to you");
  }else{
    //Do nothing
  }

  if(message.author.user === mentionedMember) return message.reply('Why did you try to ban your self noob?');
  if(message.guild.member(mentionedMember).id === '377921715503759361') return message.reply('Wow, I should honsetly ban you now e.e');

  if(!message.guild.member(mentionedMember).bannable) return message.reply('I can not ban that user');
  message.guild.ban(mentionedMember, { days: 7, reason: banReason }).then(()=> {
    const embed = new Discord.RichEmbed()
    .setTitle('')
    .setAuthor('Moderator', message.author.avatarURL)
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Ban')
    .addField('User:', `${mentionedMember.user.username}#${mentionedMember.user.discriminator}`)
    .addField('Reason:', `${banReason}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
    return client.channels.get(modLog.id).send({embed});
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  permName: "Lead Administrator"
};

exports.help = {
  name: "ban",
  description: "Ban the mentioned user from the server.",
  usage: "ban [mention] [reason]"
};
