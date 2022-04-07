
    const client = require("../index");
const { prefix } = require('../config.js')
client.on("messageCreate", async (message) => {

  if (
       message.author.bot ||
       !message.guild)return;

        var prefixx = prefix

       if(!message.content.toLowerCase().startsWith(prefix))return;

const arg = message.content
.slice(prefix.length)
.split(/ +/g); 
const commandName = arg.shift().toLowerCase();
if (commandName.length === 0) return;
let command = client.commands.get(commandName);
if (!command) return;

  


await command.run(client, message,arg, prefixx);
     

});