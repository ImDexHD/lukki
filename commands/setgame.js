exports.run = function(client, message, args) {
  let argsresult = args.slice(1).join(' ');
  let gametype = args[0];
  //let gametype = args.slice(0).join(' ');
    client.user.setActivity(`${argsresult}`, { type: `${gametype}` })
  .then(presence => console.log(`Activity set to type: (${gametype}) game: (${argsresult})`))
  .catch(console.error);

  //PLAYING
  //STREAMING
  //LISTENING
  //WATCHING
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 7,
  permName: "Community Manager"
};

exports.help = {
  name: "setgame",
  description: "Changes the game of the bot",
  usage: "setgame <TYPE> <MESSAGE>"
};
