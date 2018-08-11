const Discord = require('discord.js');
exports.run = function(client, message, args) {
  let supRole = message.guild.roles.find("name", "Donator");
  let suppRole = message.guild.roles.find("name", "Elite Donator");
  if(message.member.roles.has(supRole.id) || message.member.roles.has(suppRole.id)){
    client.users.get(message.author.id).send('**Loadstring**: ``loadstring(game:HttpGet("https://pastebin.com/raw/hNk0AVPD",true))()``');
  } else {
    message.reply("You do not have the Donator or Elite Donator role.");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  permName: "Buyer"
};

exports.help = {
  name: "script",
  description: "Send the script to the user",
  usage: "script"
};
