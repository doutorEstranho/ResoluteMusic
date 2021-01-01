module.exports = async (client) => {
  console.log("Estou Online.")
  await client.user.setActivity(`prefixo: s.help | Meu dono é o Spray :)`, {
    type: "LISTENING",//LISTENING, WATCHING, PLAYING, STREAMING
  });
};
