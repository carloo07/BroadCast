const Discord = require("discord.js");
const { glob } = require('glob');
const { promisify } = require('util');
const PG = promisify(glob);

module.exports = async (client) => {

    commandsArry = [];

    (await PG(`${process.cwd()}/SlashCommands/*/*.js`)).map(async(file) => {
        const command = require(file);

        if(!command.name) return;

        commandsArry.push(command);
        client.commands.set(command.name, command);

        console.log(`🔶 Command Loaded ` + command.name);
    });
    client.on("ready", async ()  => {
  
  await client.application?.commands.set(commandsArry);
  
    })
}
