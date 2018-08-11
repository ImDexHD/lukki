const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let mentionedMember = message.mentions.members.first();
  you = message.member;
  let modLog = client.channels.find('name', 'lukki-log');
  if(!modLog) return message.reply("I can not find the 'lukki-log' channel!");
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if(!muteRole) return message.reply("I can not find a 'Muted' role.");
  if(message.mentions.members.size < 1) return message.reply('You must mention someone to mute!');
  if (reason.length < 1) return message.reply('You need a reason!');

  if(you.highestRole.position >= mentionedMember.highestRole.position){
    //Do nothing.
  }else{
    return message.reply("You can not mute someone who is higher then you");
  }

  if(you.highestRole.position == mentionedMember.highestRole.position){
    return message.reply("You can not mute someone who is equal role to you");
  }else{
    //Do nothing
  }

  message.guild.member(mentionedMember).addRole(muteRole).then(()=> {
    const embed = new Discord.RichEmbed()
    .setTitle('')
    .setAuthor('Moderator', message.author.avatarURL)
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Action:', 'Mute')
    .addField('User:', `${mentionedMember.user.username}#${mentionedMember.user.discriminator}`)
    .addField('Reason:', `${reason}`)
    .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
    mentionedMember.send({embed});
    return client.channels.get(modLog.id).send({embed});
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
  permName: "Moderator"
};

exports.help = {
  name: "mute",
  description: "Mute a mentioned user.",
  usage: "mute [mention] [reason]"
};
