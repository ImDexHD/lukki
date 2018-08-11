const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let role = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1) return message.reply('You must mention someone to role!');
  if (role.length < 1) return message.reply('You need a role!');
  let newRole = client.guilds.get(message.guild.id).roles.find('name', role);
  if(!newRole) return message.reply(`I can not find the ${role} role.`);
  message.guild.member(user).addRole(newRole).then(()=> {
      client.channel.get(newRole.id);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['giverole'],
  permLevel: 6,
  permName: "Owner"
};

exports.help = {
  name: "role",
  description: "Role the mention user to a role.",
  usage: "role [mention] [role]"
};
