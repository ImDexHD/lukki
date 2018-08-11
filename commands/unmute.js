const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if(!muteRole) return message.reply("I can not find a 'Muted' role.");
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to unmute!');

if(!message.guild.member(client.user).hasPermissions('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have permission for MANAGE_ROLES_OR_PERMISSIONS');

  message.guild.member(user).removeRole(muteRole).then(()=> {
      client.channel.get(muteRole.id).sendEmbed(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
  permName: "Moderator"
};

exports.help = {
  name: "unmute",
  description: "Unmute a mentioned user.",
  usage: "unmute [mention]"
};
