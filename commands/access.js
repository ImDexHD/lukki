exports.run = function(client, message, args) {
  //Roles
  let user = message.mentions.users.first();
  let comOwnerRole = message.guild.roles.find("name", "Community Owner");
  let managerRole = message.guild.roles.find("name", "Community Manager");
  let ownerRole = message.guild.roles.find("name", "Owner");
  let coOwnerRole = message.guild.roles.find("name", "Co Owner");
  let leadAdminRole = message.guild.roles.find("name", "Lead Administrator");
  let adminRole = message.guild.roles.find("name", "Administrator");
  let modRole = message.guild.roles.find("name", "Moderator");
  let supRole = message.guild.roles.find("name", "Support");
  // Roles
  if(message.mentions.users.size < 1){
    let permlvl = 0;
    
    if(message.member.roles.has(supRole.id)){
      permlvl = 1;
    }
    if(message.member.roles.has(modRole.id)){
      permlvl = 2;
    }
    if(message.member.roles.has(adminRole.id)){
      permlvl = 3;
    }
    if(message.member.roles.has(leadAdminRole.id)){
      permlvl = 4;
    }
    if(message.member.roles.has(comOwnerRole.id)){
      permlvl = 5;
    }
    if(message.member.roles.has(ownerRole.id)){
      permlvl = 6;
    }
    if(message.member.roles.has(managerRole.id)){
      permlvl = 7;
    }
    if(message.member.roles.has(comOwnerRole.id)){
      permlvl = 8;
    }
        if(permlvl === 8){
        return message.channel.send(`Your access level is ${permlvl} (**Community Owner**)`);
      } else if(permlvl === 7){
        return message.channel.send(`Your access level is ${permlvl} (**Community Manager**)`);
      } else if(permlvl === 6){
        return message.channel.send(`Your access level is ${permlvl} (**Owner**)`);
      } else if(permlvl === 5){
        return message.channel.send(`Your access level is ${permlvl} (**Co Owner**)`);
      } else if(permlvl === 4){
        return message.channel.send(`Your access level is ${permlvl} (**Lead Administrator**)`);
      } else if(permlvl === 3){
        return message.channel.send(`Your access level is ${permlvl} (**Administrator**)`);
      } else if(permlvl === 2){
        return message.channel.send(`Your access level is ${permlvl} (**Moderator**)`);
      } else if(permlvl === 1){
        return message.channel.send(`Your access level is ${permlvl} (**Support**)`);
      } else if(permlvl === 0){
        return message.channel.send(`Your access level is ${permlvl} (**User**)`);
      }
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
  name: "access",
  description: "Show the access level of you/someone",
  usage: "access [user]"
};
