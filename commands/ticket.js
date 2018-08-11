exports.run = function(client, message, args) {

  var server = message.guild;
  var name = message.author;
  var nameid = message.author.id;
  let comOwnerRole = message.guild.roles.find("name", "Community Owner");
  let managerRole = message.guild.roles.find("name", "Community Manager");
  let ownerRole = message.guild.roles.find("name", "Owner");
  let coOwnerRole = message.guild.roles.find("name", "Co Owner");
  let leadAdminRole = message.guild.roles.find("name", "Lead Administrator");
  let adminRole = message.guild.roles.find("name", "Administrator");
  let modRole = message.guild.roles.find("name", "Moderator");
  let supRole = message.guild.roles.find("name", "Support");
  let ticRole = message.guild.roles.find("name", "ticket_Ban");

  let arg = args[0]
  //let arg = args.slice(0).join(' ');
  if (arg == "new"){
    if(message.member.roles.has(ticRole.id)) return message.reply("You have been blacklisted from creating a ticket.");
    if (client.channels.find("name", `ticket-${nameid}`)) return message.reply("You already have an open ticket");
    server.createChannel("ticket-" + name, "text").then(data => {
      data.deny = ['READ_MESSAGES'],
      data.setParent('460822251982290946');
      message.reply(`You have successfully create a support ticket, you can find it here <#${data.id}>`);
      data.send(name + " created a ticket\nPlease be patient and nice to the staff team they are here to help\nAdd someone to the ticket by doing >ticket add YourFriendsIdHere\nRemove someone to the ticket by doing >ticket remove YourFriendsIdHere\n<@&463364118787653642>\n**Note** If the Support Team can not resolve your issue a higher staff member will be contacted!");
      data.setTopic("Support Ticket created by " + message.author);
      data.overwritePermissions(message.guild.id, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      });
      data.overwritePermissions(supRole.id, {
        READ_MESSAGES: true,
        MANAGE_MESSAGES: true,
        SEND_MESSAGES: true
      });
      data.overwritePermissions(message.author, {
        READ_MESSAGES: true,
        SEND_MESSAGES: true
      });
  }).catch(error => {
    console.error(error);
  });
} else if(arg == "add"){
  if(message.channel.name === 'ticket-' + message.author.id || message.member.roles.has(supRole.id) || message.member.roles.has(modRole.id) || message.member.roles.has(adminRole.id) || message.member.roles.has(leadAdminRole.id) || message.member.roles.has(coOwnerRole.id) || message.member.roles.has(ownerRole.id) || message.member.roles.has(managerRole.id) || message.member.roles.has(comOwnerRole.id)){
    //let friend = args.slice(1).join(' ');
    let friend = args[1]
    message.channel.overwritePermissions(friend, {
      READ_MESSAGES: true,
      SEND_MESSAGES: true
    }).catch(error => {
      console.error(error);
    });
  } else{
    message.reply("Not your ticket!");
  }
  } else if(arg == "close"){
    if(message.channel.name === 'ticket-' + message.author.id || message.member.roles.has(supRole.id) || message.member.roles.has(modRole.id) || message.member.roles.has(adminRole.id) || message.member.roles.has(leadAdminRole.id) || message.member.roles.has(coOwnerRole.id) || message.member.roles.has(ownerRole.id) || message.member.roles.has(managerRole.id) || message.member.roles.has(comOwnerRole.id)){
      if(message.channel.parentID !== ("460822251982290946")) return message.reply("This is not a ticket.");
      message.channel.delete('Ticket was over');
    } else{
      message.reply("Not your ticket!");
    }
  } else if(arg == "remove"){
    if(message.channel.name === 'ticket-' + message.author.id || message.member.roles.has(supRole.id) || message.member.roles.has(modRole.id) || message.member.roles.has(adminRole.id) || message.member.roles.has(leadAdminRole.id) || message.member.roles.has(coOwnerRole.id) || message.member.roles.has(ownerRole.id) || message.member.roles.has(managerRole.id) || message.member.roles.has(comOwnerRole.id)){
      //let friend = args.slice(1).join(' ');
      let friend = args[1]
      console.log("(" + arg +")");
      console.log("(" + friend +")");
      message.channel.overwritePermissions(friend, {
        READ_MESSAGES: false,
        SEND_MESSAGES: false
      }).catch(error => {
        console.error(error);
      });
    } else{
      message.reply("Not your ticket!");
    }
    } else if(arg == "ban"){
  if(message.member.roles.has(supRole.id) || message.member.roles.has(modRole.id) || message.member.roles.has(adminRole.id) || message.member.roles.has(leadAdminRole.id) || message.member.roles.has(coOwnerRole.id) || message.member.roles.has(ownerRole.id) || message.member.roles.has(managerRole.id) || message.member.roles.has(comOwnerRole.id)){
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply('You need to mention the user');
      let newRole = client.guilds.get(message.guild.id).roles.find('name', 'ticket_Ban');
    if(!newRole) return message.reply(`I can not find the ${role} role.`);
    message.guild.member(user).addRole(newRole).then(()=> {
      client.channel.get(newRole.id);
  });
  } else {
    message.reply("You do not have permission to do so.");
  }
} else if(arg == "unban"){
  if(message.member.roles.has(supRole.id) || message.member.roles.has(modRole.id) || message.member.roles.has(adminRole.id) || message.member.roles.has(leadAdminRole.id) || message.member.roles.has(coOwnerRole.id) || message.member.roles.has(ownerRole.id) || message.member.roles.has(managerRole.id) || message.member.roles.has(comOwnerRole.id)){
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply('You need to mention the user');
      let newRole = client.guilds.get(message.guild.id).roles.find('name', 'ticket_Ban');
    if(!newRole) return message.reply(`I can not find the ${role} role.`);
    message.guild.member(user).removeRole(newRole).then(()=> {

      client.channel.get(newRole.id);
  });
  } else {
    message.reply("You do not have permission to do so.");
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
  name: "ticket",
  description: "ticket",
  usage: "ticket"
};
