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
// client.on('messageCreate', (message) => {
//     let messageContent = message.content.toLowerCase()
//     if (messageContent === 'test') {
//         message.channel.send('this works');
//         console.log('works')
//     }
// });



// client.on('messageCreate', (message) => {
//     let messageContent = message.content.toLowerCase()
//     if(messageContent === 'test') {
//         axios.get('https://starcraft-api.herokuapp.com/units')
//   .then(res => {
//     console.log('Status Code:', res.status);
//     console.log(res.data)

//     const units = res.data;

//     for(unit of units) {
//         message.channel.send(`Got user with id: ${unit._id}, name: ${unit.name}`);
//     } 
//   })
//   .catch(err => {
//     console.log('Error: ', err.message);
//   }); 
//     }
// });

client.login(token);

// for (i = 0; i < heyInput.length; i++) {
//     if (messageContent === heyInput[i]) {
//     randomHeyResponse = heyResponse[Math.floor(Math.random() * heyResponse.length)]
//     message.channel.send(randomHeyResponse);
//     console.log('works')
// }
// }


// GET all units
// client.on('messageCreate', (message) => {
//     let messageContent = message.content.toLowerCase()
//     axios.get('https://starcraft-api.herokuapp.com/units')
//     .then(res => {
//         console.log('Status Code: ', res.status)
//         let i = 0
//         let jsonUnits = res.data
//         let unitName = jsonUnits[i].name
//         for (i = 0; i < jsonUnits.length; i++) {
//             if (messageContent === unitName.toLowerCase()) {
//                 console.log(unitName[i])
//                 console.log('this mf works') 
//             }
//         }
//     })
// })

client.on('messageCreate', (message) => {
    let messageContent = message.content
    axios.get('https://starcraft-api.herokuapp.com/units')
    .then(res => {
        console.log('Status Code: ', res.status)
        jsonUnits = res.data
        for (let i = 0; i < jsonUnits.length; i++) {
            if (messageContent === jsonUnits[i].name) {
                message.channel.send(`This works - ${jsonUnits[i].name}`)
            }
        }
    })
})

// const axios = require('axios')
// require('dotenv').config()

// testFunc = () => {
//     axios.get('https://starcraft-api.herokuapp.com/units')
//         .then(res => {
//             console.log('Status Code: ', res.status)
//             jsonUnits = res.data
//             for (let i = 0; i < jsonUnits.length; i++){
                
//             }
//         })
// }


