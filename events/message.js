const config = require('../config.json');
module.exports = message => {
if (!message.content.startsWith(config.prefix)) return;
if(message.channel.type === 'dm') return message.reply('Sorry, The bot has been deactivated in Direct Messages!');
let client = message.client;
if (message.author.bot) return;
let command = message.content.split(' ')[0].slice(config.prefix.length);
let params = message.content.split(' ').slice(1);
let perms = client.elevation(message);
let cmd;
let mod_role = message.guild.roles.find("name", "BOT_Blacklist");
if (mod_role && message.member.roles.has(mod_role.id)) return;
if (client.commands.has(command)) {
  cmd = client.commands.get(command);
} else if (client.aliases.has(command)) {
  cmd = client.commands.get(client.aliases.get(command));
}
if (cmd) {
  if (perms < cmd.conf.permLevel) return;
  cmd.run(client, message, params, perms);
}

};
