const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error")

module.exports = {
  info: {
    name: "nowplaying",
    description: "Para mostrar a música que está sendo reproduzida neste servidor",
    usage: "",
    aliases: ["np"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Não ha nada tocando.", message.channel);
    let song = serverQueue.songs[0]
    let thing = new MessageEmbed()
      .setAuthor("Está tocando", "https://cdn.discordapp.com/attachments/754170388115619872/784270025577463849/7b7a49c20326e3cbfdccb534ca0366f1.gif")
      .setThumbnail(song.img)
      .setColor("BLUE")
      .addField("Nome", song.title, true)
      .addField("Duração", song.duration, true)
      .addField("Pedido por:", song.req.tag, true)
      .setFooter(`Visualizações: ${song.views} | ${song.ago}`)
    return message.channel.send(thing)
  },
};
