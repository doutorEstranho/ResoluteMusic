const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "stop",
    description: "Para PARAR a musica.",
    usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return sendError("Sinto muito, mas você precisa estar em um canal de voz para tocar música!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return sendError("Não há nada que eu possa pular para você.", message.channel);
   if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     try{
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return sendError(`:notes: O jogador parou e a fila foi liberada. ${error}`, message.channel);
      }
    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];
    message.react("✅")
  },
};