const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let name = args.slice(0).join(' ');
  if (name.length < 1) return message.reply('You need a name!');
  message.guild.setName(name);
  message.reply("Successfully set guild name to " + name);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 8,
  permName: "Community Owner"
};

exports.help = {
  name: "name",
  description: "Change name of the guild",
  usage: "name"
};
