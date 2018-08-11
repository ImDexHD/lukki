exports.run = function(client, message, args) {
  const request = require('request');
  
  //let code = args.slice(0).join(' ');
  let usr = args[0]
  request(`http://community.imdexhd.tk/api/whitelisted.php?action=check&userid=${usr}&whitelisted=1`, { json: true }, (err, res, body) => {
  console.log(`(${usr}) ${body}`);
  if(body === "denied		"){
    message.reply('User is not whitelisted');
  }
  if(body === "accepted		"){
    message.reply(`User is whitelisted and ready to use VehicleHax`);
  }
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "checkwl",
  description: "Checkwl",
  usage: "checkwl <userid>"
};
