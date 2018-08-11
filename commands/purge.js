const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let modLog = client.channels.find('name', 'lukki-log');
  let sentchannel = message.channel.name
  if(!modLog) return message.reply("I can not find the 'lukki-log' channel!");
  if(!message.author.id == 377921715503759361) return reply("Sorry you can not do that!"); 
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor('Moderator', message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Purge')
  .addField('Channel:', `#${sentchannel}`)
  .addField('Messages Deleted:', `${parseInt(args.join(' '))}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
  message.reply("Successfully purged " + messagecount + " messages.");
  return client.channels.get(modLog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['delete'],
  permLevel: 3,
  permName: "Administrator"
};

exports.help = {
  name: "purge",
  description: "Purges X amount of messages for a given channel.",
  usage: "purge <number>"
};
