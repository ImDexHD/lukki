exports.run = function(client, message, args) {
  // If the message is "what is my avatar"
  let user = message.mentions.users.first();
  if(message.mentions.users.size < 1){
    message.reply(message.author.avatarURL);
  } else {
    message.reply(user.avatarURL);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "avatar",
  description: "Avatar",
  usage: "avatar"
};
