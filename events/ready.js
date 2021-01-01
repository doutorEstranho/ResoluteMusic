module.exports = async (client) => {
  console.log("Estou Online.")
  await client.user.setActivity(`prefixo: s.help`, {
    type: "LISTENING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};
