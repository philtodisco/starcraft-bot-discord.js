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

// test command
client.on('messageCreate', (message) => {
    let messageContent = message.content.toLowerCase()
    if (messageContent === 'test') {
        message.channel.send('this works');
        console.log('works')
        console.log(message)
    }
});

// GET data from StarCraft API
client.on('messageCreate', (message) => {
    let messageContent = message.content.toLowerCase()
    if(messageContent === 'sc test') {
        axios.get('https://starcraft-api.herokuapp.com/units')
  .then(res => {
    console.log('Status Code:', res.status);
    console.log(res.data)

    const units = res.data;

    for(unit of units) {
        message.channel.send(`Got user with id: ${unit._id}, name: ${unit.name}`);
    } 
  })
  .catch(err => {
    console.log('Error: ', err.message);
  }); 
    }
});

// Login to Discord with your client's token
client.login(token);