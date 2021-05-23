const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const mongoose = require("mongoose")
const client = new Client({
    disableEveryone: true
})


const config = require('./config.json')



mongoose.connect("mongodb+srv://mydb:LoLo97234@cluster0.n19fg.mongodb.net/LunaBot", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log("connected to mongoDB"))



module.exports = client;
const { reconDB } = require("reconlx");
const db = require("./reconDB")


const prefix = config.prefix
const token = config.token


client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 







client.login(token)
