exports.run = function(client, message, args) {
/*
  Send a message using a webhook
*/

// Import the discord.js module

const Discord = require('discord.js');
let msg = args.slice(0).join(' ');
if (msg.length < 1) return message.reply('You need a message!');

// Create a new webhook
const hook = new Discord.WebhookClient('457983462251692072', 'GKfN1n8amgepT6I4tnc4QvfjazcZNvaWBnRxF-wzg7UD6XSGDRNbM-1nhC31Qgl0rY7G');

// Send a message using the webhook
hook.send(msg);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 8,
  permName: "Community Owner"
};

exports.help = {
  name: "webhook",
  description: "webhook",
  usage: "webhook"
};
