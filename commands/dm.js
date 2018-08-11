const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to dm!').catch(console.error);
  var argsresult = args.slice(1).join(' ');
  if (argsresult.length < 1) return message.reply('You need a message!');
  console.log("Dm from " + message.author.username + "#" + message.author.discriminator + " to " + user.username + "#" + user.discriminator + ". Message: " + argsresult);
  client.users.get(user.id).send(argsresult);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
  permName: "Moderator"
};

exports.help = {
  name: "dm",
  description: "Send dm to the user",
  usage: "dm <user> <message>"
};
