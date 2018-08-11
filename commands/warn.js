const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modLog = client.channels.find('name', 'lukki-log');
  if(!modLog) return message.reply("I can not find the 'lukki-log' channel!");
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to warn!').catch(console.error);
  if (reason.length < 1) return message.reply('You need a reason!');
  const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor('Moderator', message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Reason:', `${reason}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
  user.send({embed});
  return client.channels.get(modLog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['warning'],
  permLevel: 2,
  permName: "Moderator" 
};

exports.help = {
  name: "warn",
  description: "Issues a warning to the mentioned user.",
  usage: "warn [mention] [reason]"
};
