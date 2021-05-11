const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "volume",
    description: "Modificar o volume da fila.",
    usage: "",
    aliases: ["v", "vol"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel;
    if (!channel)return sendError("Sinto muito, mas você precisa estar em um canal de voz para tocar música!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError("Não ha nada tocando.", message.channel);
    if (!args[0])return message.channel.send(`O volume atual é: **${serverQueue.volume}**`);
     if(isNaN(args[0])) return message.channel.send(':notes: Apenas numeros!').catch(err => console.log(err));
    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError('Você não pode definir o volume para mais de 150. ou menor que 0',message.channel).catch(err => console.log(err));
    serverQueue.volume = args[0]; 
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    let spray = new MessageEmbed()
    .setDescription(`Eu ajustei o volume para: **${args[0]/1}/100**`)
    .setAuthor("Gerenciamento do volume", "https://cdn.discordapp.com/attachments/754170388115619872/784270025577463849/7b7a49c20326e3cbfdccb534ca0366f1.gif")
    .setColor("BLUE")
    return message.channel.send(spray);
  },
};
