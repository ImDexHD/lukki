exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if(!command) {
    return message.channel.send(`I can not find the command: ${args[0]}`)
  } else {
    message.channel.send(`Reloading: ${command}`)
    .then(m => {
      client.reload(command)
      .then(() => {
        m.edit(`Successfully reloaded: ${command}`);
      })
      .catch(e => {
        m.edit(`Command reload failed: ${command}\n\`\`\`${e.stack}\`\``);
      });
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r"],
  permLevel: 8,
  permName: "Community Owner"
};

exports.help = {
  name: "reload",
  description: "Reloads the command file, if it has been updated or modified.",
  usage: "reload <commandname>"
};
