const client = require("./index")
const { reconDB } = require("reconlx")
const db = new reconDB(client, {
  uri:
    "mongodb+srv://mydb:LoLo97234@cluster0.n19fg.mongodb.net/LunaBot",
})

module.exports = db;