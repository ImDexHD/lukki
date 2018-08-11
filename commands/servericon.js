exports.run = function(client, message, args) {
  // If the message is "what is my avatar"
  let guild = message.guild;
  message.reply(guild.iconURL);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "servericon",
  description: "servericon",
  usage: "servericon"
};
