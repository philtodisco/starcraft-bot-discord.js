require('dotenv').config()

const { Client, Intents } = require('discord.js');
const axios = require('axios')
const token = process.env.TOKEN
const clientId = process.env.CLIENT_ID
const guildId = process.env.GUILD_ID

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

client.login(token);



client.on('messageCreate', (message) => {
    let messageContent = message.content
    //GET all units
    axios.get('https://starcraft-api.herokuapp.com/units')
    .then(res => {
        console.log('Status Code: ', res.status)
        let jsonUnits = res.data
        //iterate over JSON array
        for (let i = 0; i < jsonUnits.length; i++) {
            let unit = jsonUnits[i]
            //return message including requested unit info
            if (messageContent === unit.name) {
                message.channel.send(`__**${unit.name}**__ \n**Strong against:** ${unit.goodAgainst} \n**Weak against:** ${unit.weakAgainst}`)
            }
        }
    })
})



