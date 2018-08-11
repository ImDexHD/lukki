const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = args[0];
  if(!user) return message.reply('You must enter a userid to unban.').catch(console.error);

  message.guild.unban(user);
  message.channel.send(user + ' has been unbanned!')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
  permName: "Moderator"
};

exports.help = {
  name: "unban",
  description: "Unban the mentioned user from the server.",
  usage: "unban [id]"
};
