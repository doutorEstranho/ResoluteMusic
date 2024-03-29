module.exports = async (client, message) => {
  if (message.author.bot) return;
  const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  const aliases = client.commands.find(x => x.info.aliases.includes(command))
  
process.on("unhandledRejection", (reason, promise) => {
    try {
        console.error("[+] - Rejeição não tratada em: ", promise, "[+] - Razão: ", reason.stack || reason);
    } catch {
        console.error(reason);
    }
});
require('events').EventEmitter.defaultMaxListeners = 25

if(cmd){
    cmd.run(client, message, args);
  }else if(aliases){
    aliases.run(client, message, args);
  }else return
};
