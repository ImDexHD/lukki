const Discord = require('discord.js');
exports.run = function(client, message, args) {
  var argsresult = args.join(' ');
  let user = ("377921715503759361")
  console.log("Feeback from " + message.author.username + "#" + message.author.discriminator + ". Message: " + argsresult);
  const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor('Feedback', message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Feedback')
  .addField('From:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Feedback:', `${argsresult}`);
  client.users.get("377921715503759361").send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "bug",
  description: "Send feedback to me!",
  usage: "bug <message>"
};
