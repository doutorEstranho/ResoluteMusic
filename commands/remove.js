const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "remove",
    description: "Remover a musica da fila",
    usage: "",
    aliases: ["rm", "remover"],
  },

  run: async function (client, message, args) {
   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError("Não ha fila.",message.channel).catch(console.error);
    if (!args.length) return sendError(`Use: ${client.config.prefix}\`remove <Numero da fila>\``);
    if (isNaN(args[0])) return sendError(`Use: ${client.config.prefix}\`remove <Numero da fila>\``);
    if (queue.songs.length == 1) return sendError("Não ha fila",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return sendError(`Só tem: ${queue.songs.length} Musicas na fila!`,message.channel).catch(console.error);
try{
    const song = queue.songs.splice(args[0] - 1, 1); 
    sendError(`❌ **|** Removida: **\`${song[0].title}\`** Da fila.`,queue.textChannel).catch(console.error);
                   message.react("✅")
} catch (error) {
        return sendError(`:notes: Um erro inesperado ocorreu\nPossivel erro: ${error}`, message.channel);
      }
  },
};
