const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor('#e1ff00')
    .setDescription(`> ***Olá ${message.author}, aqui estão meus comandos de música!***
      \n » **Comandos:**\n
      > <:spr4yxyz:837798446584168468> | \`s.afk\` 
      > <:spr4yxyz:837798446584168468> | \`s.help\` 
      > <:spr4yxyz:837798446584168468> | \`s.invite\`
      > <:spr4yxyz:837798446584168468> | \`s.loop\` 
      > <:spr4yxyz:837798446584168468> | \`s.lyrics\` <nome-musica>
      > <:spr4yxyz:837798446584168468> | \`s.nowplaying\` 
      > <:spr4yxyz:837798446584168468> | \`s.pause\`
      > <:spr4yxyz:837798446584168468> | \`s.play\` <link> ou o nome da música
      > <:spr4yxyz:837798446584168468> | \`s.playlist\` <link>
      > <:spr4yxyz:837798446584168468> | \`s.remove\`
      > <:spr4yxyz:837798446584168468> | \`s.resume\`
      > <:spr4yxyz:837798446584168468> | \`s.search\` 
      > <:spr4yxyz:837798446584168468> | \`s.shuffle\` 
      > <:spr4yxyz:837798446584168468> | \`s.skip\` 
      > <:spr4yxyz:837798446584168468> | \`s.skip\` 
      > <:spr4yxyz:837798446584168468> | \`s.stop\` 
      > <:spr4yxyz:837798446584168468> | \`s.volume\` <0/200>
      \n » **Links:**
      > resolutebot.xyz/music
    `)
    .setImage("http://pa1.narvii.com/5763/85377e06886cbaa577b87952dd985919f3ad0e38_00.gif")
    .setThumbnail("https://media0.giphy.com/media/l2SpN0gAfO6yfw4A8/source.gif")  

    message.channel.send(embed)
}