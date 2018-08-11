exports.run = function(client, message, args) {
  const request = require('request');
  let buyerRole = message.guild.roles.find("name", "Donator");
  let eliteRole = message.guild.roles.find("name", "Elite Donator");
  let arg = args[0]
  let code = args[1]
  let userid = args[2]
  message.delete();
  if(arg == "buyer"){
    if(message.member.roles.has(buyerRole.id)) return message.reply("You already have the buyer role");
    request(`http://community.imdexhd.tk/api/used.php?action=check&code=${code}&used=0`, { json: true }, (err, res, body) => {
      message.reply("Checking code " + code + "...");
    if(body === "denied		"){
      message.reply('Invalid Code');
      console.log(`User ${message.author.username} redeemed invalid buyer code ${code} for user: ${userid}`);
    }
    if(body === "accepted		"){
      message.guild.member(message.author).addRole(buyerRole).then(()=> {
      request(`http://community.imdexhd.tk/api/change.php?action=check&code=${code}&used=0`, { json: true }, (err, res, body) => {
        request(`http://community.imdexhd.tk/api/whitelistuser.php?action=check&userid=${userid}&discordid=${message.author.id}`, { json: true }, (err, res, body) => {
          console.log(`User ${message.author.username} redeemed buyer code ${code} for user: ${userid}`);
        message.reply("You have now been given the Buyer role.");
        });
      });
    });
  }
  });
  }else if(arg == "elite"){
    if(message.member.roles.has(eliteRole.id)) return message.reply("You already have the elite role");
  request(`http://community.imdexhd.tk/api/eliteused.php?action=check&code=${code}&used=0`, { json: true }, (err, res, body) => {
    message.reply("Checking code " + code + "...");
  if(body === "denied		"){
    message.reply('Invalid Code');
    console.log(`User ${message.author.username} redeemed invalid elite code ${code} for user: ${userid}`);
  }
  if(body === "accepted		"){
    message.guild.member(message.author).addRole(eliteRole).then(()=> {
    request(`http://community.imdexhd.tk/api/elitechange.php?action=check&code=${code}&used=0`, { json: true }, (err, res, body) => {
      request(`http://community.imdexhd.tk/api/whitelistuser.php?action=check&userid=${userid}&discordid=${message.author.id}`, { json: true }, (err, res, body) => {
        console.log(`User ${message.author.username} redeemed elite code ${code} for user: ${userid}`);
      message.reply("You have now been given the Elite role.");
      });
    });
  });
}
});
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
  name: "code",
  description: "Code",
  usage: "code <buyer/elite> <code>"
};
