const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let link = args.slice(0).join(' ');
  if (link.length < 1) return message.reply('You need a link!');
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('You need a name!');
  message.guild.createEmoji(`${link}`, `${name}`)
  .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
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
  name: "newemoji",
  description: "Create an emoji",
  usage: "newemoji [image link] [name]"
};
