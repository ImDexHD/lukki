exports.run = function(client, message, args) {
  const request = require('request');
  
  let code = args.slice(0).join(' ');
  if (code.length < 1) return message.reply('You need a enter a **VALID** code!');
  request(`http://lukkicommunity.tk/api/eliteused.php?action=check&code=${code}&used=0`, { json: true }, (err, res, body) => {
  //if (err) { return console.log(err); }
  console.log(body);
  if(body === "denied		"){
    message.reply('Invalid Code');
  }
  if(body === "accepted		"){
    message.reply(`Code is still available and ready to be used`);
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
  name: "elitecheck",
  description: "Check if a code has been used",
  usage: "elitecheck <code>"
};
