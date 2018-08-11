const Discord = require('discord.js');
exports.run = (client, message, args) => {
  return message.reply('Please visit http://lukkicommunity.tk/forum/pages/howtobuy/ for information on how to purchase.\n You made the right choice! ❤️ ✅ ');

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['purchase'],
  permLevel: 0,
  permName: "User" 
};

exports.help = {
  name: "buy",
  description: "Request to purchase",
  usage: "buy"
};
