module.exports = (client, guild, role) => {
  let Log = client.guild.channels.find('name', 'lukki-log');
  Log.send(`${role} was just created!`);
};
