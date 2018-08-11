const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let nick = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modLog = client.channels.find('name', 'lukki-log');
  if(!modLog) return message.reply("I can not find the 'lukki-log' channel!");

  if(message.mentions.users.size < 1) return message.reply('You must mention someone to nick!').catch(console.error);

  const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor('Moderator', message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action', 'Nickname')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Nickname:', `${nick}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);

  message.guild.member(user).setNickname(nick);  
  message.reply("Successfully set the nickname of " + user + "'s nickname to " + nick);
  return client.channels.get(modLog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nickname'],
  permLevel: 8,
  permName: "Community Owner"
};

exports.help = {
  name: "nick",
  description: "Change the nickname of the mentioned user.",
  usage: "nick [mention] [nickname]"
};
