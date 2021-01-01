const { MessageEmbed } = require('discord.js')

module.exports = {
    info: {
        name: "help",
        description: "Informações de comandos",
        usage: "",
        aliases: "",
    },

    run: async function(client, message, args){
        var allcmds = "";

        client.commands.forEach(cmd => {
            let cmdinfo = cmd.info
            allcmds+="``"+client.config.prefix+cmdinfo.name+" "+cmdinfo.usage+"`` ~ "+cmdinfo.description+"\n"
        })

        let embed = new MessageEmbed()
        .setAuthor("Comandos "+client.user.username, "https://cdn.discordapp.com/attachments/754170388115619872/784270025577463849/7b7a49c20326e3cbfdccb534ca0366f1.gif")
        .setColor("BLUE")
        .setDescription(allcmds)
        .setFooter(`Para obter informações Complexas de cada comando ultilize | s.help <nome do comando>`)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
 
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Comando invalido")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Descrição: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Apelido: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
