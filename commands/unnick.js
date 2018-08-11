const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let nick = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to nick!').catch(console.error);
  if(message.guild.member(user).nickname) {
    message.guild.member(user).setNickname('');
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['removenick'],
  permLevel: 8,
  permName: "Community Owner"
};

exports.help = {
  name: "unnick",
  description: "Removes the nickname of the mentioned user.",
  usage: "unnick [mention]"
};
