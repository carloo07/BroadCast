const { Discord, Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
    
});
console.log(process.version)
module.exports = client;
//Backend Construction
const fetch = require('node-fetch')
const express = require('express')
const app = express();

const ejs = require('ejs')






// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();


// Initializing the project
require("./handler")(client);

//Express
app.use(express.json());
app.use(express.urlencoded({extended: false}))


const path = require('path');




app.listen(3000, () => console.log(`listening on port 3000`));
client.login(process.env.token)