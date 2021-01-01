require("dotenv").config();//Carregando o .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//Carregando Client
client.commands = new Collection();
client.queue = new Map()

client.config = {
  prefix: process.env.PREFIX
}

//Carregando eventos
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("------------------------------")
    console.log("Carregando comando: "+eventName)
    console.log("------------------------------")
    console.log("Bot feito pelo Spray")
  });
});

//Carregando comandos
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("------------------------------")
    console.log("Carregando comando: "+commandName)
    console.log("------------------------------")
    console.log("Feito pelo Spray")
  });
});

//Logando com o discord
client.login(process.env.TOKEN)
