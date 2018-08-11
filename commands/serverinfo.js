const Discord = require('discord.js');
exports.run = function(client, message, args) {

  let invite = "tCznSjW"

  let contlevel = message.guild.explicitContentFilter
  if(contlevel == "0") contlevelmsg = "Don't scan any messages\nAin't no party like my grandma's tea party."
  if(contlevel == "1") contlevelmsg = "Scan messages from members without a role.\nReccomended option for server that use roles for trusted membership."
  if(contlevel == "2") contlevelmsg = "Scan messages sent by all members.\nRecommended option for when you want that squeaky clean shine."

  let level = message.guild.verificationLevel
  if(level == "0") levelmsg = "None\nUnrestricted"
  if(level == "1") levelmsg = "Low\nMust have a verified email on their Discord account."
  if(level == "2") levelmsg = "Medium\nMust also be registered on Discord for longer then 5 minutes."
  if(level == "3") levelmsg = "(╯°□°）╯︵ ┻━┻\nMust also be a member of this server for longer then 10 minutes."
  if(level == "4") levelmsg = "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻\nMust have a verified phone on their Discord account."

  let test = ":white_check_mark:"
  if(message.guild.large){
    test = ":white_check_mark:"
  }else{
    test = ":negative_squared_cross_mark:"
  }


  const embed = new Discord.RichEmbed()
  .setTitle('')
  .setAuthor('Server Information', message.author.avatarURL)
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Server Name:', message.guild.name)
  .addField('Server Icon:', `${message.guild.iconURL}`)
  .addField('Server ID:', message.guild.id)
  .addField('Server Region:', message.guild.region)
  .addField('Owner:', `${message.guild.owner} (${message.guild.ownerID})`)
  .addField('Verification Level:', `${level}: ${levelmsg}`)
  .addField('Content Filter:', `${contlevel}: ${contlevelmsg}`)
  .addField('Members:', message.guild.memberCount)
  .addField('Invite Code:', invite)
  .addField('Large:', test)
  .addField('Server Created Timestamp:', message.guild.createdAt);
  return message.reply({embed});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['info','server','members'],
  permLevel: 0,
  permName: "User"
};

exports.help = {
  name: "serverinfo",
  description: "Display serverinfo",
  usage: "serverinfo"
};
