const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.author.id === 377921715503759361) return message.reply("Owner only command.");
  let name = args.slice(0).join(' ');
  if (name.length < 1) return message.reply('You need a name!');
  client.user.setUsername(name)
  .then(user => console.log(`My new username is ${user.username}`))
  .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 8,
  permName: "Community Owner"
};

exports.help = {
  name: "username",
  description: "Change name of the bot",
  usage: "username [name]"
};
