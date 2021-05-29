const client = require("./index")
const { reconDB } = require("reconlx")
const db = new reconDB(client, {
  uri:
    "srgpkhjm",
})

module.exports = db;
