const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let role = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to role!');
  if (role.length < 1) return message.reply('You need a role!');
  let newRole = client.guilds.get(message.guild.id).roles.find('name', role);
  if(!newRole) return message.reply(`I can not find ${role} role.`);
if(!message.guild.member(client.user).hasPermissions('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('I do not have permission for MANAGE_ROLES_OR_PERMISSIONS');

  message.guild.member(user).removeRole(newRole).then(()=> {
      client.channel.get(newRole.id);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['removerole'],
  permLevel: 7,
  permName: "Community Manager"
};

exports.help = {
  name: "unrole",
  description: "Removes the role from the mention user to a role.",
  usage: "unrole [mention] [role]"
};
