const config = require('../config.json');
const main = require('../index.js');
exports.run = (client, message, params) => {
  if(!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Command List =\n\n[Use ${config.prefix}help <commandname> for details]\n\n${client.commands.map(c =>
    `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)}    `).join('')}`, {code: 'asciidoc'});
  }else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nUsage::${command.help.usage}\nAccess::${command.conf.permLevel} (${command.conf.permName}) `, {code: 'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'cmds'],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "help",
  description: "Displays all the commands.",
  usage: "help [command]"
};
