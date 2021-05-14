module.exports = async (client) => {
  console.log(`Online em ${client.guilds.cache.size}`)
  await client.user.setActivity(`resolutebot.xyz`, {
    type: "LISTENING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};
