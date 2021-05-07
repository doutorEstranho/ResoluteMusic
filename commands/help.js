const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#e1ff00')
    .setDescription(`> ***Olá ${message.author}, aqui estão meus comandos de música!***
      \n » **Comandos:**\n
      > **<:spr4yxyz:837798446584168468> | s.**
      > **<:spr4yxyz:837798446584168468> | s.depositar**
      > **<:spr4yxyz:837798446584168468> | s.leaderboard**
      > **<:spr4yxyz:837798446584168468> | s.money**
      > **<:spr4yxyz:837798446584168468> | s.pay**
      > **<:spr4yxyz:837798446584168468> | s.roubar**
      > **<:spr4yxyz:837798446584168468> | s.saque**
      > **<:spr4yxyz:837798446584168468> | s.setmoney (Admin)**
      > **<:spr4yxyz:837798446584168468> | s.trabalhar**
      \n » **Links:**
      > http://spr4y.xyz/resolute
    `)
    .setImage("http://pa1.narvii.com/5763/85377e06886cbaa577b87952dd985919f3ad0e38_00.gif")
    .setThumbnail("https://media0.giphy.com/media/l2SpN0gAfO6yfw4A8/source.gif")  

    message.channel.send(embed)
}