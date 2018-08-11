const music = require('discord.js-music-v11');
const Discord = require('discord.js');
const roblox = require('roblox-js');
const client = new Discord.Client();
const config = new require("./config.json");
const moment = new require('moment');
const ms = new require('ms');
const fs = require('fs');
require('./util/eventLoader')(client);

const log = (msg) => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${msg}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if(err) console.log(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Loading Command: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
music(client);
client.reload = function(command) {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if(cmd === command) client.aliases.delete(alias)
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = function(message) {
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
    return permlvl;
  }
};

function clean(text) {
  if (typeof(text) === "string")
  return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
  return text;
}


// Warnings and ERRORS
//client.on('debug', e => {
//    console.log(e);
//});
client.on('warn', e => {
    console.log(e);
});
client.on('error', e => {
    console.log(e);
});

client.login(process.env.BOT_TOKEN)
